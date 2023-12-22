from django.db import models

# Background
class Background(models.Model):
  video = models.FileField(upload_to='backend/database/videos/')