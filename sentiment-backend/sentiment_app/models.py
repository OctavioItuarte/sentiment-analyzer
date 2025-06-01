from django.db import models

# Create your models here.

class Comment(models.Model):
    text = models.TextField()
    figure = models.CharField(max_length=255)
    predicted_sentiment = models.CharField(max_length=20)
    source = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)