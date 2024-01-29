import json
from .models import *

def cookieCart(request):
  try:
    cart = json.loads(request.COOKIES['cart'])
  except:
    cart: {}
  items = []
  order = { 'get_cart_total':0, 'get_items_total':0, 'shipping':False  }
  cartitems = order['get_items_total']

  for i in cart:
    try:
      cartitems += cart[i]["quantity"]

      photocard = Photocard.objects.get(id=i)
      total = (photocard.price * cart[i]["quantity"])

      order['get_cart_total'] += total
      order['get_items_total'] += cart[i]["quantity"]

      item = {
        'photocard': {
          'id': photocard.id,
          'name': photocard.name,
          'price': photocard.price,
          'imageURL': photocard.imageURL,
        },
        'quantity': cart[i]["quantity"],
        'get_total': total
      }
      items.append(item)
    except:
      pass
  return {'cartitems': cartitems, 'order': order, 'items': items}

def cartData(request):
  if request.user.is_authenticated:
    customer = request.user.customer
    order, created = Order.objects.get_or_create(customer=customer, is_complete=False)
    items = order.orderitem_set.all()
    cartitems = order.get_items_total
  else:
    cookiedata = cookieCart(request)
    cartitems = cookiedata['cartitems']
    order = cookiedata['order']
    items = cookiedata['items']
  return {'cartitems': cartitems, 'order': order, 'items': items}