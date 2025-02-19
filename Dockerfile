# Stage 1: Build
FROM node:slim AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# ------------------------------ #

# Stage 2: Production
FROM node:slim AS production

# Set working directory
WORKDIR /app

# Install serve globally for serving static files
RUN npm install -g serve

# Copy built application from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the necessary port
EXPOSE 3000

# Command to run the server
CMD ["serve", "-s", "dist"]