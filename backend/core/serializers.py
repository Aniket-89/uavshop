from rest_framework import serializers
from django.conf import settings
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    is_available = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            'id', 
            'name', 
            'description', 
            'price', 
            'quantity', 
            'image', 
            'is_available', 
            'created_at', 
            'updated_at'
        ]
    
    def get_is_available(self, obj):
        return obj.is_available
    
    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            return request.build_absolute_uri(obj.image.url) if request else f"{settings.MEDIA_URL}{obj.image}"
        return None
