from django.db import models


class Student(models.Model):
    Id = models.IntegerField(primary_key=True)
    Firstname= models.CharField(max_length=10)
    Lastname=models.CharField(max_length=10)
    Gender=models.CharField(max_length=10)
    Phone_No=models.IntegerField()
    Age=models.IntegerField()
    Semester=models.CharField(max_length=20)
