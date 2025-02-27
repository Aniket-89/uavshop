from django import forms
from django.contrib import admin
from django_json_widget.widgets import JSONEditorWidget
from .models import Product, Category, ProductImage


# Custom form to use JSONEditorWidget for 'features'
class ProductAdminForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = "__all__"
        widgets = {
            "features": JSONEditorWidget,  # ✅ Adds an interactive JSON editor
        }


# Inline model for adding multiple images inside the Product form
class ProductImageInline(admin.TabularInline):  
    model = ProductImage
    extra = 1
    min_num = 0


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    form = ProductAdminForm  # ✅ Use the custom form with JSONEditorWidget
    list_display = ("name", "price", "quantity", "created_at")
    list_filter = ("categories", "created_at")
    search_fields = ("name", "description")
    inlines = [ProductImageInline]


# Register Category and ProductImage
admin.site.register(Category)
admin.site.register(ProductImage)
