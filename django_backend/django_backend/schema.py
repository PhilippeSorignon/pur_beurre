import graphene
import foods.schema

class Query(foods.schema.Query):
    pass

schema = graphene.Schema(query=Query)
