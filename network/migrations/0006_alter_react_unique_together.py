# Generated by Django 3.2.4 on 2021-08-28 07:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('network', '0005_alter_react_react_type'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='react',
            unique_together=set(),
        ),
    ]