from django.db import models
from django.contrib.auth.models import User

from django.db.models.signals import post_save

from PIL import Image
from django.conf import settings
import os

import os
from django.conf import settings


# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=255)
    phone_number = models.CharField(max_length=20)

    def __str__(self):
        return