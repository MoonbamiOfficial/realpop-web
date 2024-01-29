from django.urls import path
from . import views

urlpatterns = [
  path('update_item', views.updateItem, name="update_item"),
  path('process_order', views.processOrder, name="process_order"),
  
  path('', views.home, name="home"),
  path('about', views.about, name="about"),
  path('shop', views.shop, name="shop"),
  path('contact', views.contact, name="contact"),
  path('help', views.help, name="help"),

  path('cart', views.cart, name="cart"),
  path('cart/checkout', views.checkout, name="checkout"),

  path('login', views.loginPage, name="login"),
  path('logout', views.logoutUser, name="logout"),
  path('signup', views.signup, name="signup"),
]