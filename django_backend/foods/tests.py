import json

from graphene_django.utils.testing import GraphQLTestCase
from graphql_jwt.testcases import JSONWebTokenTestCase
from django.contrib.auth import get_user_model

from foods.schema import Query, Mutation
from foods.models import Food

class FoodTestCase(GraphQLTestCase, JSONWebTokenTestCase):
    GRAPHQL_SCHEMA = Query

    def setUp(self):
        self.user = get_user_model().objects.create(username='TestUser')
        self.client.authenticate(self.user)
        Food.objects.create(id=1,
                            name="Eau",
                            nutriscore="a",
                            url="http://eau.com/",
                            image="http://eau.com/eau",
                            category="drinks")

    def test_foods(self):

        response = self.query(
            '''
            {
              foods {
                id
                name
                nutriscore
                category
              }
            }
            '''
        )

        content = json.loads(response.content)

        self.assertResponseNoErrors(response)
        self.assertDictEqual(
            {'foods': [
                {'id': '1',
                 'name': 'Eau',
                 'nutriscore': 'a',
                 'category': 'drinks'}]},
            content['data']
        )

    def test_saved_foods(self):
        response = self.query(
            '''
            {
              savedFoods {
                id
                user {
                    id
                    username
                    email
                    password
                }
                food {
                    id
                    name
                    nutriscore
                    url
                    image
                    category
                }
              }
            }
            '''
        )

        self.assertResponseNoErrors(response)

    GRAPHQL_SCHEMA = Mutation

    def test_create_user(self):
        response = self.query(
            '''
            mutation {
                createUser(username: "Test", email: "test@mail.com", password: "test") {
                    user {
                        id
                        username
                        email
                    }
                }
            }
            '''
        )

        content = json.loads(response.content)

        self.assertResponseNoErrors(response)
        self.assertDictEqual(
            {'createUser': {
                'user': {
                    'id': '2',
                    'username': 'Test',
                    'email': 'test@mail.com'}}},
            content['data']
        )

    def test_me(self):
        query = '''
        {
            me {
                username
                email
            }
        }'''

        response = self.client.execute(query)

        self.assertIsNone(response.errors)

        self.assertDictEqual(
            {'me': {'username': 'TestUser', 'email': ''}},
            response.data
        )
