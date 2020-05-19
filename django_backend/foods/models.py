from django.db import models

class Food(models.Model):
    name = models.CharField(max_length=250)
    nutriscore = models.CharField(max_length=1)
    url = models.TextField()
    image = models.TextField()
    category = models.CharField(max_length=250)
