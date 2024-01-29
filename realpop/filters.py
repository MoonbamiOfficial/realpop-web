import django_filters
from django_filters import CharFilter

from .models import *

class PhotocardFilter(django_filters.FilterSet):
  name = CharFilter(field_name='name', lookup_expr='icontains')
  group = CharFilter(field_name='group', lookup_expr='icontains')
  theme = CharFilter(field_name='theme', lookup_expr='icontains')
  
  class Meta:
    model = Photocard
    fields = ['name', 'group', 'theme']