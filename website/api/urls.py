from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import (
    getRoutes, getNewsletters,
    getNewsletter, updateNewsletter,
    )

urlpatterns = [
    path('', getRoutes, name='routes'),
    path('newsletters/', getNewsletters, name='newsletters'),
    path('newsletters/<str:pk>', getNewsletter, name='newsletter'),
    path('newsletters/<str:pk>/update', updateNewsletter, name='update-newsletter'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
