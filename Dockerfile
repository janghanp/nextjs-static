# Stage 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Create the production image with Nginx
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=build /app/out /usr/share/nginx/html

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
