# views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from requests import request
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework.authtoken.models import Token

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Username or password is incorrect'}, status=status.HTTP_401_UNAUTHORIZED)
    
    def get(self, request):
        if request.user.is_authenticated:
            return Response({'username': request.user.username}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Not logged in'}, status=status.HTTP_401_UNAUTHORIZED)



class RegisterView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        if not (username and password and email):
            return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.create_user(username=username, password=password, email=email)
            user.save()
            return Response({'message': 'Registration successful'}, status=status.HTTP_201_CREATED)
        except:
            return Response({'error': 'Username or email already exists'}, status=status.HTTP_409_CONFLICT) 
        
    def get(self, request):
        users = User.objects.all()
        user_data = [{'id': user.id, 'username': user.username, 'email': user.email} for user in users]
        return Response(user_data, status=status.HTTP_200_OK)