from django.contrib.auth.forms import UserCreationForm
from .models import Usuario, LISTA_CATEGORIAS
from django import forms


class FormHomepage(forms.Form):
    email = forms.EmailField(label=False)


class CriarContaForm(UserCreationForm):
    first_name = forms.CharField(label='Nome', max_length=30)
    last_name = forms.CharField(label='Sobrenome', max_length=30)
    email = forms.EmailField(label='Email')
    categoria = forms.ChoiceField(label='Categoria', choices=LISTA_CATEGORIAS)

    class Meta:
        model = Usuario
        fields = ['username', 'first_name' , 'last_name' ,  'email', 'categoria' ,  'password1', 'password2']