from rest_framework.generics import ListAPIView, RetrieveAPIView

from photocards.models import Photocard

from .serializers import PhotocardSerializer

# List views here
class PhotocardListView(ListAPIView):
  queryset = Photocard.objects.all()
  serializer_class = PhotocardSerializer

# Detail views here
class PhotocardDetailView(RetrieveAPIView):
  queryset = Photocard.objects.all()
  serializer_class = PhotocardSerializer
