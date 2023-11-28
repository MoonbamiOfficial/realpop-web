from django.urls import path
from . import views

urlpatterns = [
  path('', views.index, name="Home page"),
  path('about', views.about, name="About page"),
  path('shop', views.shop, name="Shop page"),
  path('contact', views.contact, name="Contact page"),
  path('help', views.help, name="Help page"),
  path('cart', views.cart, name="User cart"),
  path('profile', views.profile, name="User profile"),
]