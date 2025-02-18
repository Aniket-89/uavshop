#!/bin/bash

SUPERUSER_EMAIL=${DJANGO_SUPERUSER_EMAIL:-"aniket@uav.com"}
cd /app/

/opt/venv/bin/python manage.py collectstatic --no-input
/opt/venv/bin/python manage.py migrate --no-input
/opt/venv/bin/python manage.py createsuperuser --email $SUPERUSER_EMAIL --no-input || true