# Use official Node.js image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build production files
RUN npm run build

# Use nginx to serve React frontend
#FROM nginx:alpine
#COPY --from=0 /app/build /usr/share/nginx/html

# Expose port for React app
# EXPOSE 80

#CMD ["nginx", "-g", "daemon off;"]
#CMD ["sh", "-c", "npm start"]
CMD ["npm", "start"]

