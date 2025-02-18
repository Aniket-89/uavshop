FROM python:3.12-slim

WORKDIR /app
COPY . /app/

RUN python3 -m venv /opt/venv
RUN /opt/venv/bin/pip install --upgrade pip && \
    /opt/venv/bin/pip install --no-cache-dir -r requirements.txt && \
    chmod +x entrypoint.sh
    
CMD ["/app/entrypoint.sh"]

# RUN python manage.py collectstatic --noinput

EXPOSE 8000

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

    # CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]