import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError
import requests

from .models import Food

class FoodType(DjangoObjectType):
    class Meta:
        model = Food

class Query(graphene.ObjectType):
    foods = graphene.List(FoodType)

    def resolve_foods(self, info):
        return Food.objects.all()
