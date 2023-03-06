from django.urls import path
from .views import admin_page,render_login, login, signout

urlpatterns = [
    path('', render_login, name='render_login'),
    path('login', login, name='login'),
    path('setup', admin_page, name='admin_page'),
    path('logout', signout, name='logout'),
]
