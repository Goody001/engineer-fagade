from django.contrib import admin
from .models import Newsletter

# Register your models here.
reg = admin.site.register

reg(Newsletter)
