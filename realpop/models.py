from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# DEFAULT USER MODEL
class Customer(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)

  @receiver(post_save, sender=User)
  def create_customer(sender, instance, created, **kwargs):
    if created:
      Customer.objects.create(user=instance)

  @receiver(post_save, sender=User)
  def save_customer(sender, instance, **kwargs):
    instance.customer.save()

  def __str__(self):
    return self.user.username

# PHOTOCARD MODEL
class Photocard(models.Model):
  group = models.CharField(max_length=20)
  image = models.ImageField(null=True, blank=True)
  name = models.CharField(max_length=20)
  theme = models.CharField(max_length=30)
  price = models.IntegerField(default=100)
  posted_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.name + ' ' + self.theme
  
  @property
  def imageURL(self):
    try:
      url = self.image.url
    except: 
      url = ''
    return url

# ORDER MODEL
class Order(models.Model):
  customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
  date_ordered = models.DateTimeField(auto_now_add=True)
  is_complete = models.BooleanField(default=False, null=True, blank=True)
  transaction_id = models.CharField(max_length=255, null=True)

  def __str__(self):
    return str(self.id)
  
  @property
  def shipping(self):
    shipping = False
    orderitems = self.orderitem_set.all()
    return shipping
  
  @property
  def get_cart_total(self):
    orderitems = self.orderitem_set.all()
    total = sum([item.get_total for item in orderitems])
    return total

  @property
  def get_items_total(self):
    orderitems = self.orderitem_set.all()
    total = sum([item.quantity for item in orderitems])
    return total

# PHOTOCARDS IN ORDER MODEL
class OrderItem(models.Model):
  photocard = models.ForeignKey(Photocard, on_delete=models.SET_NULL, blank=True, null=True)
  order = models.ForeignKey(Order, on_delete=models.SET_NULL, blank=True, null=True)
  quantity = models.IntegerField(default=0, null=True, blank=True)
  date_added = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.photocard.name + ' ' + self.photocard.theme + ' ' + str(self.quantity) + 'x'
  
  @property
  def get_total(self):
    total = self.photocard.price * self.quantity
    return total

# SHIPPING MODEL
class ShippingAdd(models.Model):
  customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
  order = models.ForeignKey(Order, on_delete=models.SET_NULL, blank=True, null=True)
  address = models.CharField(max_length=255, null=True)
  city = models.CharField(max_length=255, null=True)
  zip_code = models.CharField(max_length=255, null=True)
  date_added = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.address

  