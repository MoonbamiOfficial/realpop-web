from django.urls import path

from .views import PhotocardListView, PhotocardDetailView

urlpatterns = [
  # List views
  path('', PhotocardListView.as_view()),

  # Detail views
  path('<pk>', PhotocardDetailView.as_view()),
]