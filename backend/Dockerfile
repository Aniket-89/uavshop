# Use official Python image
FROM python:3.13-slim

RUN mkdir /app

# Set working directory
WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Install system dependencies
RUN apt-get update && apt-get install -y gcc libpq-dev

# Copy dependencies files
COPY requirements.txt .

# Install dependencies
RUN pip install --upgrade pip
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Use official Python image as base

# Copy project files
COPY . .

COPY .env .env

# Expose port
EXPOSE 8000

# Start Django
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "conf.wsgi:application"]

