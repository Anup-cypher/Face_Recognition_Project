"""FaceRecognition_BCP URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from pages.views import admin_View,dashboard, dashboard_View, userregister_View, userlist_View,report_View, attendancesheet_View, home_View, camera_recog
from student.views import register, camera

urlpatterns = [
    path('admin/', admin_View, name='admin'),
    path('dashboard/', dashboard, name='dashboard'),
    path('dashboard/', dashboard_View, name='dashboard_View'),
    path('userregister/', userregister_View, name='userregister_View'),
    path('userlist/', userlist_View, name='userlist_View'),
    path('userregister/register', register, name="register"),
    path('userregister/camera', camera, name="camera"),
    path('report/', report_View, name="report_View"),
    path('report/attendancesheet/', attendancesheet_View, name="attendancesheet"),
    path('', home_View, name="homeView"),
    path('/camera', camera_recog, name="recog")


]
