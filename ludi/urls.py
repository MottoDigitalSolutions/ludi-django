"""ludi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from .views import home_page, promociones_page, empresas_page, nosotros_page, contacto_page, prevencion_page, \
    que_es_page, empresarial_page, integral_page, plus_page, genetest_page, especialidad_page

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', home_page, name='home'),
    url(r'^promociones/$', promociones_page, name='promociones'),
    # url(r'^check-ups/$', checkups_page, name='checkups'),
    url(r'^empresas/$', empresas_page, name='empresas'),
    url(r'^nosotros/$', nosotros_page, name='nosotros'),
    url(r'^contacto/$', contacto_page, name='contacto'),
    # url(r'^prevencion/$', prevencion_page, name='prevencion'),
    url(r'^check-ups/prevencion/$', prevencion_page, name='prevencion'),
    url(r'^check-ups/que-es-un-check-up/$', que_es_page, name='que_es'),
    url(r'^check-ups/check-up-empresarial/$', empresarial_page, name='empresarial'),
    url(r'^check-ups/check-up-integral/$', integral_page, name='integral'),
    url(r'^check-ups/check-up-plus/$', plus_page, name='plus'),
    url(r'^check-ups/check-up-genetest/$', genetest_page, name='genetest'),
    url(r'^check-ups/check-up-especialidad/$', especialidad_page, name='especialidad'),

]

if settings.DEBUG:
    urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
