from django.contrib import admin
from .models import *

admin.site.register(Customer)
admin.site.register(Photocard)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAdd)