# Generated by Django 2.1.1 on 2018-11-21 09:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('NearBeach', '0002_initialise_data'),
    ]

    operations = [
        migrations.RenameField(
            model_name='object_assignment',
            old_name='object_permission_id',
            new_name='object_assignment_id',
        ),
    ]
