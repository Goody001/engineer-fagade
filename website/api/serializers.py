from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Newsletter

class NewsletterSerializer(ModelSerializer):
    image = serializers.ImageField(required=True)
    class Meta:
        model = Newsletter
        fields = '__all__'
