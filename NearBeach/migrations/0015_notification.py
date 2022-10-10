# Generated by Django 4.0.3 on 2022-08-22 09:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("NearBeach", "0014_object_assignment_meta_object_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="notification",
            fields=[
                (
                    "notification_id",
                    models.AutoField(primary_key=True, serialize=False),
                ),
                ("notification_header", models.CharField(max_length=255)),
                ("notification_message", models.TextField(blank=True, null=True)),
                ("notification_start_date", models.DateTimeField()),
                ("notification_end_date", models.DateTimeField()),
                (
                    "notification_location",
                    models.CharField(
                        choices=[
                            ("All", "All"),
                            ("Login", "Login"),
                            ("Dashboard", "Dashboard"),
                        ],
                        default="All",
                        max_length=20,
                    ),
                ),
                ("date_created", models.DateTimeField(auto_now_add=True)),
                ("date_modified", models.DateTimeField(auto_now=True)),
                (
                    "change_user",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="%(class)s_change_user",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "db_table": "notification",
            },
        ),
    ]
