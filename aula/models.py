from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
# Create your models here.

LISTA_CATEGORIAS = (
    ("A1", "Iniciante"),
    ("A2", "Básico"),
    ("B1", "Intermediário"),
    ("B2", "Intermediário avançado"),
    ("C1", "Avançado"),
    ("C2", "Proficiente")
)

# criar  aula
class Aula(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField(max_length=1000)
    link_do_video = models.CharField(max_length=300)
    link_do_material = models.CharField(max_length=300)
    categoria = models.CharField(max_length=15, choices=LISTA_CATEGORIAS)
    data_criacao = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.titulo

# criar os videos
class Video(models.Model):
    aula = models.ForeignKey("Aula", related_name="videos", on_delete=models.CASCADE)
    titulo = models.CharField(max_length=100)
    video = models.URLField()

    def __str__(self):
        return self.aula.titulo + " - " + self.titulo


class Usuario(AbstractUser):
    aulas_vistos = models.ManyToManyField("Aula")
    categoria = models.CharField(max_length=15, choices=LISTA_CATEGORIAS, default="A1")