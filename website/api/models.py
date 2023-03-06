from django.db import models

# Create your models here.

class Newsletter(models.Model):
    title = models.CharField(max_length=80)
    image = models.ImageField(upload_to="images")
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    text_body = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.title

