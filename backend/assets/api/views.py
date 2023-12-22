from rest_framework.generics import ListAPIView

from assets.models import Background

from .serializers import BackgroundSerializer

class BackgroundView(ListAPIView):
  queryset = Background.objects.all()
  serializer_class = BackgroundSerializer