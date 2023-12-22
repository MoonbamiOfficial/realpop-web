from django.contrib import admin

from .models import Group, Photocard

# Admin views here
class PhotocardAdmin(admin.ModelAdmin):
  list_display = ('group', 'name', 'theme', 'image', 'price', 'is_liked', 'posted_at')

# Register models here
admin.site.register(Group),
admin.site.register(Photocard, PhotocardAdmin),
