# Use official Node.js image
FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 5000

# Load environment variables
#CMD ["sh", "-c", "source .env && npm start"]
#CMD ["sh", "-c", "source .env && node server.js"]
CMD ["npm", "start"]

