# Stage 1: Builder Stage
FROM python:3.12-slim as builder

# Environment variables for proper Python behavior
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

# Install build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    build-essential \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /install

# Copy requirements and install Python dependencies into a separate location
COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install --prefix=/install -r requirements.txt

# Stage 2: Final Stage
FROM python:3.12-slim

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

# Create a non-root user for security
RUN adduser --disabled-password --gecos '' django

WORKDIR /app

# Copy installed dependencies from the builder stage
COPY --from=builder /install /usr/local

# Copy your Django project code into the container
COPY . /app

# (Optional) Collect static files if needed
# RUN python manage.py collectstatic --noinput

# Expose Gunicorn port
EXPOSE 8000

# Switch to non-root user
USER django

# Run Gunicorn to serve your Django application
CMD ["gunicorn", "conf.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3"]
