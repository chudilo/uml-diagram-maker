from django.urls import path
from django.conf.urls import url
from django.views.generic import TemplateView

from . import views


urlpatterns = [
    #path('', views.index, name='index'),
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='index'),
]
