from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer

from .models import Newsletter
from .serializers import NewsletterSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]

    return Response(routes)

@api_view(['GET', 'POST'])
def getNewsletters(request):
    """
    List all newsletters, or create a new one.
    """

    if request.method == "GET":
        newsletters = Newsletter.objects.all().order_by('-created')
        serializer = NewsletterSerializer(newsletters, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = NewsletterSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return  Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'DELETE'])
def getNewsletter(request, pk):
    newsletter = Newsletter.objects.get(id=pk)
    if request.method == 'GET':
        serializer = NewsletterSerializer(newsletter, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        newsletter.delete()
        return Response("Newsletter was deleted")
    else:
        return Response("Method not allowed")

@api_view(['PUT', 'PATCH'])
def updateNewsletter(request, pk):
    data = request.data
    newsletter = Newsletter.objects.get(id=pk)
    serializer = NewsletterSerializer(instance=newsletter, data=data)

    if serializer.is_valid():
        serializer.save()

    return  Response(serializer.data)

# @api_view(['POST'])
# def postNewsletter(request):
#     data = request.data
#     serializer = NewsletterSerializer(data=data)

#     if serializer.is_valid():
#         serializer.save()

#     return  Response(serializer.data)

