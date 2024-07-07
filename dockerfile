# Use the official Nginx image from the Docker Hub
FROM nginx:latest

# Maintainer information
LABEL maintainer="surywanshikomal328@gmail.com"

# Copy the static files to the Nginx web root
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
