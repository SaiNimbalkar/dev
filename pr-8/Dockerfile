# Base image
FROM python:3.9

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies
RUN pip install flask

# Run app
CMD ["python", "app.py"]