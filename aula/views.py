from django.shortcuts import render, redirect, reverse

from django.views.generic import TemplateView, ListView, DetailView, FormView, UpdateView
from django.views.generic.edit import CreateView
from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

from django.urls import reverse_lazy
from .models import Aula, Usuario
from .forms import CriarContaForm, FormHomepage



# Create your views here.
class Homepage(FormView):
    template_name = "homepage.html"
    form_class = FormHomepage

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated: #usuario esta autenticado:
            # redireciona para a homeaulas
            return redirect('aula:dashboard')
        else:
            return super().get(request, *args, **kwargs) # redireciona para a homepage

    def get_success_url(self):
        email = self.request.POST.get("email")
        usuarios = Usuario.objects.filter(email=email)
        if usuarios:
            return reverse('aula:login')
        else:
            return reverse('aula:criarconta')


class Homeaulas(LoginRequiredMixin, ListView):
    template_name = "dashboard.html"
    model = Aula
    context_object_name = "aulas"  # nome acessível no template com {% for aula in aulas %}

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)


        usuario = self.request.user
        categoria = usuario.categoria

        aulas_categoria = Aula.objects.filter(categoria=categoria)

        aulas_concluidas = usuario.aulas_vistos.filter(categoria=categoria)

        total_aulas = aulas_categoria.count()
        concluidas = aulas_concluidas.count()

        progresso = 0
        if total_aulas > 0:
            progresso = round((concluidas / total_aulas) * 100)
        
        context["aulas_relacionados"] = aulas_categoria  # todas as aulas
        context["progresso"] = progresso

        return context


class Detalhesaula(LoginRequiredMixin, DetailView):
    template_name = "detalhesaula.html"
    model = Aula
    # object -> 1 item do nosso modelo

    def get(self, request, *args, **kwargs):
        # contabilizar uma visualização
        aula = self.get_object()
        aula.save()
        usuario = request.user
        usuario.aulas_vistos.add(aula)
        return super().get(request, *args, **kwargs) # redireciona o usuario para a url final

    def get_context_data(self, **kwargs):
        context = super(Detalhesaula, self).get_context_data(**kwargs)
        usuario = self.request.user
        aulas_relacionados = Aula.objects.filter(categoria=usuario.categoria)
        context["aulas_relacionados"] = aulas_relacionados
        return context


class Pesquisaaula(LoginRequiredMixin, ListView):
    template_name = "pesquisa.html"
    model = Aula

    #object_list
    def get_queryset(self):
        termo_pesquisa = self.request.GET.get('query')
        if termo_pesquisa:
            object_list = self.model.objects.filter(titulo__icontains=termo_pesquisa)
            return object_list
        else:
            return None


class Paginaperfil(LoginRequiredMixin, UpdateView):
    template_name = "editarperfil.html"
    model = Usuario
    fields = ['first_name', 'last_name', 'email']

    def get_success_url(self):
        return reverse('aula:dashboard')


class Criarconta(TemplateView):
    template_name = "criarconta.html"

    #def homepage(request):
     #   return render(request, "homepage.html")

class FormCriarContaProfessor(FormView):
    template_name = 'form-criar-conta-professor.html'
    form_class = CriarContaForm
    success_url = reverse_lazy('aula:login')

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

class Adcaula(CreateView):
    model = Aula
    fields = ['titulo', 'descricao', 'link_do_video', 'link_do_material', 'categoria', 'data_criacao']
    template_name = 'adicionar-aula.html'
    success_url = reverse_lazy('aula:dashboard')


@csrf_exempt  # Apenas para testes locais, para produção use CSRF corretamente
@login_required
def marcar_aula_concluida(request):
    if request.method == 'POST':
        aula_id = request.POST.get('aula_id')
        acao = request.POST.get('acao')  # 'marcar' ou 'desmarcar'
        if aula_id and acao:
            try:
                aula = Aula.objects.get(id=aula_id)
                if acao == 'marcar':
                    request.user.aulas_vistos.add(aula)
                elif acao == 'desmarcar':
                    request.user.aulas_vistos.remove(aula)
                return JsonResponse({'status': 'ok'})
            except Aula.DoesNotExist:
                return JsonResponse({'status': 'erro', 'mensagem': 'Aula não encontrada'})
    return JsonResponse({'status': 'erro', 'mensagem': 'Requisição inválida'})



# url - view - html
    #def homeaulas(request):
    #   context = {}
    #   lista_aulas = aula.objects.all()
    #   context['lista_aulas'] = lista_aulas
    #   return render(request, "homeaulas.html", context)