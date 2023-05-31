# # Use an official Node.js runtime as the base image

# # FROM node:14 
# # FROM node:14-slim

FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose a port (if your Node.js application listens on a specific port)
EXPOSE 8000

# Define the command to run your Node.js application
CMD [ "node", "app.js" ]


# # Stage 1: Build stage
# FROM node:14 AS build

# # Set the working directory inside the container
# WORKDIR /src/app

# # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# # Install project dependencies
# RUN npm install

# # Copy the rest of the application code to the container
# COPY . .

# # Stage 2: Runtime stage
# FROM node:14-alpine

# # Set the working directory inside the container
# WORKDIR /src/app

# # Copy the necessary files from the build stage
# COPY --from=build /src/app .

# # Expose a port (if your Node.js application listens on a specific port)
# EXPOSE 8008

# # Define the command to run your Node.js application
# CMD [ "node", "app.js" ]

# # Stage 1: Build stage
# FROM node:14 AS build

# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install project dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .



# # Stage 2: Runtime stage
# FROM node:14-alpine

# WORKDIR /app

# # Copy only the necessary files from the build stage
# COPY --from=build /app .

# # Install only production dependencies
# RUN npm install --production

# # Expose a port (if required)
# EXPOSE 3000

# # Define the command to run the application
# CMD [ "node", "app.js" ]
