# Generated by Django 5.1.3 on 2024-11-16 21:09

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aula', '0002_gravacao_delete_episodio'),
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=100)),
                ('video', models.URLField()),
                ('aula', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='videos', to='aula.aula')),
            ],
        ),
        migrations.DeleteModel(
            name='Gravacao',
        ),
    ]
