from rest_framework import serializers

from assets.models import Background

class BackgroundSerializer(serializers.ModelSerializer):
  class Meta:
    model = Background
    fields = '__all__'