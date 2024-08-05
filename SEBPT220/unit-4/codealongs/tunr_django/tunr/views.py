# import libraries and files here.
from django.shortcuts import render, redirect
from django.http import JsonResponse
from rest_framework import generics
from .models import Artist, Song
from .forms import ArtistForm
from .forms import SongForm
from .serializers import ArtistSerializer
from .serializers import SongSerializer



# Create your views for the artist model.
def artist_list(request):
    artists = Artist.objects.all()
    return render(request, 'tunr/artist_list.html', {'artists' : artists})

# Create your views for the song model.
def song_list(request):
    songs = Song.objects.all()
    return render(request, 'tunr/song_list.html', {'songs' : songs})

# GET: show one artist
def artist_detail(request, pk):
    artist = Artist.objects.get(id=pk)
    return render(request, 'tunr/artist_detail.html', {'artist': artist})

# GET: show one song
def song_detail(request, pk):
    song = Song.objects.get(id=pk)
    return render(request, 'tunr/song_detail.html', {'song': song})

# POST: create an artist 
def artist_create(request):
    if request.method == 'POST':
        form = ArtistForm(request.POST)
        if form.is_valid():
            artist = form.save()
            return redirect('artist_detail', pk=artist.pk)
    else:
        form = ArtistForm()
    return render(request, 'tunr/artist_form.html', {'form': form})


# POST: create a song
def song_create(request):
    if request.method == 'POST':
        form = SongForm(request.POST)
        if form.is_valid():
            song = form.save()
            return redirect('song_detail', pk=song.pk)
    else:
        form = SongForm()
    return render(request, 'tunr/song_form.html', {'form': form})

# POST: edit an artist
def artist_edit(request, pk):
    artist = Artist.objects.get(pk=pk)
    if request.method == "POST":
        form = ArtistForm(request.POST, instance=artist)
        if form.is_valid():
            artist = form.save()
            return redirect('artist_detail', pk=artist.pk)
    else:
        form = ArtistForm(instance=artist)
    return render(request, 'tunr/artist_form.html', {'form': form})

# POST: edit a song
def song_edit(request, pk):
    song = Song.objects.get(pk=pk)
    if request.method == "POST":
        form = SongForm(request.POST, instance=song)
        if form.is_valid():
            artist = form.save()
            return redirect('song_detail', pk=song.pk)
    else:
        form = SongForm(instance=song)
    return render(request, 'tunr/song_form.html', {'form': form})

# DELETE: delete an artist
def artist_delete(request, pk):
    Artist.objects.get(id=pk).delete()
    return redirect('artist_list')


# DELETE: delete a song
def song_delete(request, pk):
    Song.objects.get(id=pk).delete()
    return redirect('song_list')

# API: artist
def artist_list(request):
    data = {
        'name': 'Funkadelic',
        'photo_url': 'https://media1.fdncms.com/orlando/imager/u/original/10862750/screen_shot_2018-02-16_at_1.16.25_pm.png',
        'nationality': 'USA'
    }
    return JsonResponse(data)


class ArtistList(generics.ListCreateAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class ArtistDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

# API: song
class SongList(generics.ListCreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class SongDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer