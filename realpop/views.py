from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib import messages

from django.contrib.auth.decorators import login_required

import json
import datetime

from .forms import CreateUser

from .models import *
from .utils import cookieCart, cartData
from .filters import PhotocardFilter

# LAYOUT
def index(request):
  context = {}
  return render(request, 'index.html', context)

# PAGES START 
def loginPage(request):
  if request.user.is_authenticated:
    return redirect('/')
  else:
    if request.method == 'POST':
      username = request.POST.get('username')
      password = request.POST.get('password')

      user = authenticate(request, username = username, password = password)

      if user is not None:
        login(request, user)
        return redirect('/')
      else:
        messages.info(request, 'Username or Password is incorrect!')

    data = cartData(request)
    cartitems = data['cartitems']

    context = {'cartitems':cartitems}
    return render(request, 'login/login.html', context)

def logoutUser(request):
  logout(request)
  return redirect('/')

def signup(request):
  if request.user.is_authenticated:
    return redirect('/')
  else:
    form = CreateUser()
    if request.method == 'POST':
      form = CreateUser(request.POST)
      if form.is_valid():
        form.save()
        user = form.cleaned_data.get('username')
        messages.success(request, 'Account Created! Welcome, ' + user + '!')
        return redirect('login')


    data = cartData(request)
    cartitems = data['cartitems']

    context = {'form': form, 'cartitems':cartitems}
    return render(request, 'signup/signup.html', context)

def home(request):
  data = cartData(request)
  cartitems = data['cartitems']

  context = {'cartitems':cartitems}
  return render(request, 'home/home.html', context)

def about(request):
  data = cartData(request)
  cartitems = data['cartitems']

  context = {'cartitems':cartitems}
  return render(request, 'about/about.html', context)

def shop(request):
  data = cartData(request)
  cartitems = data['cartitems']

  photocards = Photocard.objects.all()
  searchFilter = PhotocardFilter(request.GET, queryset=photocards)
  photocards = searchFilter.qs

  context = {'photocards':photocards, 'cartitems':cartitems, 'searchFilter': searchFilter}
  return render(request, 'shop/shop.html', context)

def contact(request):
  data = cartData(request)
  cartitems = data['cartitems']

  context = {'cartitems':cartitems}
  return render(request, 'contact/contact.html', context)

def help(request):
  data = cartData(request)
  cartitems = data['cartitems']

  context = {'cartitems':cartitems}
  return render(request, 'help/help.html', context)

@login_required(login_url='login')
def cart(request):
  data = cartData(request)
  cartitems = data['cartitems']
  order = data['order']
  items = data['items']

  context = {'items':items, 'order':order, 'cartitems':cartitems}
  return render(request, 'cart/cart.html', context)

@login_required(login_url='login')
def checkout(request):
  data = cartData(request)
  cartitems = data['cartitems']
  order = data['order']
  items = data['items']

  context = {'items':items, 'order':order, 'cartitems':cartitems}
  return render(request, 'checkout/checkout.html', context)
# PAGES END

# FUNCTIONS START

@login_required(login_url='login')
def updateItem(request):
  data = json.loads(request.body)
  photocardId = data['id']
  action = data['action']

  customer = request.user.customer
  photocard = Photocard.objects.get(id=photocardId)
  order, created = Order.objects.get_or_create(customer=customer, is_complete=False)

  orderitem, created = OrderItem.objects.get_or_create(order=order, photocard=photocard)

  if action == 'add':
    orderitem.quantity = (orderitem.quantity + 1)
  elif action == 'minus':
    orderitem.quantity = (orderitem.quantity - 1)
  elif action == 'remove':
    orderitem.quantity = (orderitem.quantity - orderitem.quantity)

  orderitem.save()

  if orderitem.quantity <= 0:
    orderitem.delete()

  return JsonResponse('Item was added', safe=False)

@login_required(login_url='login')
def processOrder(request):
  transaction_id = datetime.datetime.now().timestamp()
  data = json.loads(request.body)

  if request.user.is_authenticated:
    customer = request.user.customer
    order, created = Order.objects.get_or_create(customer=customer, is_complete=False)
    total = float(data['user']['total'])
    order.transaction_id = transaction_id

    if total == float(order.get_cart_total):
      order.is_complete = True
    order.save()

    if order.shipping == True:
      ShippingAdd.objects.create(
        customer = customer,
        order = order,
        address = data['shipping']['address'],
        city = data['shipping']['city'],
        zip_code = data['shipping']['zip-code'],
      )
  
  return JsonResponse('Payment successful!', safe=False)

