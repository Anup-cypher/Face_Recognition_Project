# Generated by Django 3.0.4 on 2020-03-17 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('Id', models.IntegerField(primary_key=True, serialize=False)),
                ('Firstname', models.CharField(max_length=10)),
                ('Lastname', models.CharField(max_length=10)),
                ('Gender', models.CharField(max_length=10)),
                ('Phone_No', models.IntegerField()),
                ('Age', models.IntegerField()),
                ('Semester', models.CharField(max_length=20)),
            ],
        ),
    ]
