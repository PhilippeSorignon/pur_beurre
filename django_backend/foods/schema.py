import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError
from django.db.models import Q

import requests

from .models import Food


class FoodType(DjangoObjectType):
    class Meta:
        model = Food

class Query(graphene.ObjectType):
    foods = graphene.List(
        FoodType,
        search_title=graphene.String(),
        search_category=graphene.String()
    )

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
