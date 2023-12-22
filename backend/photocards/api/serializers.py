from rest_framework import serializers

from photocards.models import Group
from photocards.models import Photocard

class GroupSerializer(serializers.ModelSerializer):
  class Meta:
    model = Group
    fields = ('id', 'name')

class PhotocardSerializer(serializers.ModelSerializer):
  group = GroupSerializer()
  class Meta:
    model = Photocard
    fields = ('id', 'group', 'image', 'name', 'theme', 'price', 'is_liked', 'posted_at')