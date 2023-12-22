from django.db import models


# Group
class Group(models.Model):
  name = models.CharField(max_length=20)
  
  def __str__(self):
    return self.name

# Photocard
class Photocard(models.Model):
  group = models.ForeignKey(Group, on_delete=models.SET_NULL, null=True)
  image = models.ImageField(upload_to='backend/database/images/photocards/')
  name = models.CharField(max_length=20)
  theme = models.CharField(max_length=30)
  price = models.IntegerField(default=0)
  is_liked = models.BooleanField(default=False)
  posted_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.name + ' ' + self.theme