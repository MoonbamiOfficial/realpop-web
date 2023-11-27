from django.shortcuts import render

def index(request):
  return render(request, 'index.html')

def about(request):
  return render(request, 'index.html')

def shop(request):
  return render(request, 'index.html')

def contact(request):
  return render(request, 'index.html')

def help(request):
  return render(request, 'index.html')

def cart(request):
  return render(request, 'index.html')

def profile(request):
  return render(request, 'index.html')
