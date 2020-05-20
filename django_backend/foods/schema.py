import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError
from django.db.models import Q

import requests

from .models import Food, SavedFood
from users.schema import UserType


class FoodType(DjangoObjectType):
    class Meta:
        model = Food

class SavedFoodType(DjangoObjectType):
    class Meta:
        model = SavedFood

class Query(graphene.ObjectType):
    foods = graphene.List(
        FoodType,
        search_title=graphene.String(),
        search_category=graphene.String()
    )
    savedFoods = graphene.List(SavedFoodType)

    def resolve_foods(self, info, search_title=None, search_category=None):
        if search_title:
            return Food.objects.filter(name__icontains=search_title)
        elif search_category:
            search = (
                Q(category__icontains=search_category) &
                (Q(nutriscore__icontains="a") | Q(nutriscore__icontains="b"))
            )
            return Food.objects.filter(search)

        return Food.objects.all()

    def resolve_saved_food(self, info):
        return SavedFood.objects.all()


class CreateSavedFood(graphene.Mutation):
    user = graphene.Field(UserType)
    food = graphene.Field(FoodType)

    class Arguments:
        food_id = graphene.Int(required=True)

    def mutate(self, info, food_id):
        user = info.context.user
        if user.is_anonymous:
            raise GraphQLError('Connectez vous pour enregistrer des produits')

        food = Food.objects.get(id=food_id)
        if not food:
            raise GraphQLError('Produit introuvable')

        if SavedFood.objects.filter(user=user, food=food).exists():
            raise GraphQLError('Produit déja enregistré')

        SavedFood.objects.create(
            user=user,
            food=food
        )

        return CreateSavedFood(user=user, food=food)


class Mutation(graphene.ObjectType):
    create_saved_food = CreateSavedFood.Field()
