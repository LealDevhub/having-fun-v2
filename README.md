# 📚 Escola de Inglês Having Fun

O sistema de acesso a cursos por assinatura para o ensino de inglês para crianças, desde o nível iniciante até o nível avançado.

![Having Fun](media/thumb_filmes/having-fun.png)

---

## 🚀 Tecnologias Utilizadas

- **Python** & **pip**: Usado para a configuração do ambiente e gerenciamento das dependências.
- **Django**: Framework principal para o desenvolvimento web.
- **Node.js**: Utilizado para gerenciar as dependências do Frontend.
- **TailwindCSS**: Framework CSS para estilização.
- **Bootstrap**: Framework CSS adicional para layout e responsividade.

### Bibliotecas Python Utilizadas

- **Django Crispy Forms** & **Crispy Bootstrap5**: Para a personalização de formulários.
- **Pillow**: Para manipulação de imagens.
- **dj-database-url**: Facilita a configuração do banco de dados.
- **WhiteNoise**: Para servir arquivos estáticos de maneira eficiente.

---

# 🛠 Como Rodar o Projeto Localmente

Siga as etapas abaixo para rodar este projeto na sua máquina local e fazer alterações. Para desabilitar o modo de depuração, altere o valor de `DEBUG` no arquivo `settings.py` de `True` para `False` na linha 26.

## 1. Instalar o Python e o pip

Certifique-se de que o Python e o pip estão instalados corretamente. Para verificar, execute os seguintes comandos no terminal:

```bash
python --version
pip --version
```

Se o Python ou o pip não estiverem instalados, faça o download do [Python aqui](https://www.python.org/downloads/).
Após a instalação, atualize o pip para a versão mais recente:

```bash
python -m pip install --upgrade pip
```

## Configurar o VSCode
No Visual Studio Code (VSCode), siga os passos abaixo:

### 1. Instalar a extensão Python:

   - Abra o VSCode e vá para a seção de Extensões (ícone de quadrados empilhados no lado esquerdo).
   - Pesquise por "Python" e clique em <strong>Install</strong>.

### 2. Configurar o interpretador Python:

   - Após instalar a extensão, configure o interpretador Python para usar o ambiente virtual que você criará nas próximas etapas.

---

## 3. Criar e Ativar o Ambiente Virtual
1. Navegue até a pasta do projeto e crie o ambiente virtual com o seguinte comando:
```bash
python -m venv venv
```
2. Para ativar o ambiente virtual
    * No Windows:
    ```bash
    .\venv\Scripts\activate
    ```
    Quando o ambiente virtual estiver ativo, você verá <code>(venv)</code> no início da linha de comando no terminal.

---

## 4. Criar Superusuário (para acessar o admin)
Dentro do ambiente virtual, crie um superusuário para acessar o painel de administração do Django:
```bash
python manage.py createsuperuser
```
Depois, acesse o painel de administração do Django em [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

---

## 5. Instalar as Dependências
### 5.1 Instalar o Node.js
Baixe e instale o [Node.js aqui](https://nodejs.org/pt).
### 5.2 Instalar o TailwindCSS
Após instalar o Node.js, instale o TailwindCSS com o seguinte comando:
```bash
npm install tailwindcss
```
### 5.3 Instalar Dependências Python
Se o projeto já tiver um arquivo <code>requirements.txt</code>, instale todas as dependências listadas com:
```bash
pip install -r requirements.txt
```
Caso o arquivo <code>requirements.txt</code> não exista, instale as dependências manualmente:

   1. Instale o Django:
   ```bash
   pip install django
   ``` 
   3. Instale o Pillow (para manipulação de imagens):
   ```bash
   pip install Pillow
   ```
   4. Instale o <code>dj_database_url</code> para configurar o banco de dados:
   ```bash
   pip install dj-database-url
   ```
   5. Instale o <code>django-crispy-forms</code> e <code>crispy-bootstrap5</code> para melhorar os formulários:
   ```bash
   pip install django-crispy-forms
   pip install crispy-bootstrap5
   ```
   6. Instale o WhiteNoise para servir arquivos estáticos:
   ```bash
   pip install whitenoise
   ```
Após instalar as dependências, gere o arquivo requirements.txt com o comando:
```bash
pip freeze > requirements.txt
```

### 5.4 Instalar Bootstrap
Instale o Bootstrap com o npm:
```bash
npm install bootstrap
```

## 6. Configurações do Django
### 6.1 Coletar Arquivos Estáticos
Execute o comando para coletar os arquivos estáticos:
```bash
python manage.py collectstatic
```
### 6.2 Fazer Migrações
Realize as migrações para configurar o banco de dados:
```bash
python manage.py makemigrations
python manage.py migrate
```

## 7. Rodar o servidor
Por fim, execute o servidor do Django:
```bash
python manage.py runserver
```
Agora, o projeto estará rodando localmente em [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

#💡 Contribuição
Fique à vontade para contribuir com melhorias! Basta abrir uma issue ou fazer um pull request.

#📜 Licença
Este projeto foi desenvolvido pelos alunos da UNIVESP - DRP14-PJI110-SALA-006GRUPO-004 ❤️ e está disponível para fins acadêmicos e educacionais.
