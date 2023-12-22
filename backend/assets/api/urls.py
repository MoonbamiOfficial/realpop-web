from django.urls import path

from .views import BackgroundView

urlpatterns = [
  path('', BackgroundView.as_view()),
]
