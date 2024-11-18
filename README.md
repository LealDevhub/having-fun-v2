Linux Ubuntu 24_04-lts
Atualizar os repositórios:
apt update && upgrade -y


Instalação do MySQL 

Instalação banco de dados MySQL
Comando: apt install mysql-server -y
comando para habilitar e iniciar: systemctl enable mysql && systemctl start mysql
comando para verificar o status: systemctl status mysql

Criação de usuário no banco de dados:
acesso de root:

Comandos no mysql:
# mysql -uroot -p
# password: sua senha root
mysql> CREATE USER 'sqluser'@'%' IDENTIFIED BY 'Univesp.2024';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;

Comandos no mysql:
# mysql -uroot -p
# password: univesp
mysql> CREATE USER 'sqluser'@'%' IDENTIFIED BY 'Univesp.2024';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;
mysql> CREATE USER 'sqluser'@'localhost' IDENTIFIED BY 'Univesp.2024';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'sqluser'@'localhost' WITH GRANT OPTION;
mysql> FLUSH PRIVILEGES;
mysql> quit;
# mysql -u sqluser -p
# password: Univesp.2024

mysql> CREATE DATABASE django_prd;
mysql> USE django_prd;

Instalação do APACHE?
Comando: apt install apache2 -y
comando para habilitar e iniciar: systemctl enable apache2 && systemctl start apache2
comando para verificar o status: systemctl status apache2





BAIXAR O PROJETO, PARA RODAR NA MÁQUINA LOCAL E FAZER MUDANÇAS NO PROJETO 
DEVERÁ IR EM SETTINGS.PY NA LINHA 26 MUDAR DEBUG = TRUE PARA DEBUG = FALSE

1. Instalar Python e pip

Certifique-se de que o Python e o pip estão instalados:

bash

python --version
pip --version

Caso não estejam instalados, faça o download do Python aqui.

Atualize o pip:

bash

python.exe -m pip install --upgrade pip

2. Configurar o VSCode

    No VSCode, instale a extensão Python. Vá até a seção de extensões (ícone de quadrados empilhados no lado esquerdo) e procure por "Python". Clique em "Install".
    Depois, configure o interpretador Python para usar o ambiente virtual que você criará.

3. Criar e Ativar o Ambiente Virtual

Navegue até a pasta do projeto e crie o ambiente virtual:

bash

python -m venv venv

Para ativar o ambiente virtual:

    No Windows:

    bash

    .\venv\Scripts\activate

Quando o ambiente virtual estiver ativo, o terminal deverá exibir algo como (venv) no início da linha de comando.
4. Criar Superusuário (para acessar o admin)

Dentro do ambiente virtual, crie o superusuário:

bash

python manage.py createsuperuser

Depois, acesse o painel de administração do Django em http://127.0.0.1:8000/admin/.
5. Instalar as Dependências
5.1. Instalar Node.js

Baixe e instale o Node.js aqui.
5.2. Instalar TailwindCSS

Com o Node.js instalado, instale o TailwindCSS:

bash

npm install tailwindcss

5.3. Instalar Dependências Python

Se o projeto já tiver um arquivo requirements.txt, instale todas as dependências listadas com:

bash

pip install -r requirements.txt

Se o arquivo não existir, instale as bibliotecas manualmente:

    Instale o Django:

    bash

pip install django

Instale o Pillow (biblioteca para manipulação de imagens):

bash

pip install Pillow

Instale o dj_database_url para configurar o banco de dados:

bash

pip install dj-database-url

Instale o django-crispy-forms e crispy-bootstrap5 para melhorar os formulários:

bash

pip install django-crispy-forms
pip install crispy-bootstrap5

Instale o WhiteNoise para servir arquivos estáticos:

bash

    pip install whitenoise

Atualize o arquivo requirements.txt:

bash

pip freeze > requirements.txt

5.4. Instalar Bootstrap

Instale o Bootstrap com o npm:

bash

npm install bootstrap

6. Configurações do Django
6.1. Coletar arquivos estáticos

Execute o comando para coletar os arquivos estáticos:

bash

python manage.py collectstatic

6.2. Fazer migrações

Realize as migrações para configurar o banco de dados:

bash

python manage.py makemigrations
python manage.py migrate

7. Rodar o servidor

Por fim, execute o servidor do Django:

bash

python manage.py runserver
