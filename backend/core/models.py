from django.db import models
from froala_editor.fields import FroalaField
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = FroalaField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    categories = models.ManyToManyField(Category, related_name="products")  # Many-to-Many
    summary = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        # Compress image before saving
        if self.image:
            img = Image.open(self.image)
            
            # Convert to RGB if necessary
            if img.mode != "RGB":
                img = img.convert("RGB")

            # Resize if larger than 1080p
            max_size = (1920, 1080)
            img.thumbnail(max_size, Image.ANTIALIAS)

            # Save compressed image
            output = BytesIO()
            img.save(output, format='JPEG', quality=75)  # Adjust quality (0-100)
            output.seek(0)

            # Replace the image with the compressed version
            self.image = InMemoryUploadedFile(
                output, 'ImageField', f"{self.image.name.split('.')[0]}.jpg",
                'image/jpeg', sys.getsizeof(output), None
            )

        super().save(*args, **kwargs)

    @property
    def is_available(self):
        return self.quantity >= 1

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(Product, related_name="images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="product_images/")

    def __str__(self):
        return f"Image for {self.product.name}"