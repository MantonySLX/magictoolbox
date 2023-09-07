
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, this is the Django back-end for SLX Magic Tool Box.")
