from django.contrib import admin
from .models import Product, Category, ProductImage


# Inline model for adding multiple images inside the Product form
class ProductImageInline(admin.TabularInline):  
    model = ProductImage
    extra = 1  # Shows one empty image upload field by default
    min_num = 0  # Allows saving without requiring extra images


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "quantity", "created_at")
    list_filter = ("categories", "created_at")
    search_fields = ("name", "description")
    inlines = [ProductImageInline]  # ✅ This only adds extra images, doesn't affect existing products


# Register Category normally
admin.site.register(Category)

# Register ProductImage (optional, but useful for viewing all images)
admin.site.register(ProductImage)
