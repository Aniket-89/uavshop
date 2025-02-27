from rest_framework import serializers
from .models import Product, Category, ProductImage


class ProductListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'name', 'image', 'summary', 'price']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ["id", "image"]


class ProductSerializer(serializers.ModelSerializer):
    is_available = serializers.SerializerMethodField()
    images = ProductImageSerializer(many=True, read_only=True)  # Nested serializer

    class Meta:
        model = Product
        fields = [
            'id', 
            'name', 
            'description', 
            'summary',
            'price', 
            'quantity', 
            'image', 
            'features',
            'is_available', 
            'created_at', 
            'updated_at',
            'images'
        ]
    
    def get_is_available(self, obj):
        return obj.is_available

