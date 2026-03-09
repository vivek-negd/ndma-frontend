# Development Dockerfile for React + Vite
FROM node:20-alpine

# Install git for better dev experience
RUN apk add --no-cache git

WORKDIR /app

# Install dependencies (will be cached if package.json doesn't change)
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start development server with hot reload
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
