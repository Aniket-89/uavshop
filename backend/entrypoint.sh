#!/usr/bin/env bash

python manage.py collectstatic --no-input
python manage.py migrate --no-input
python -m gunicorn --bind 0.0.0.0:8000 --workers 3 conf.wsgi:application