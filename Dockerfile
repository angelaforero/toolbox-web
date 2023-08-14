# Use the official Node.js image as the base
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app will run on
EXPOSE 3001

# Command to run the app
CMD ["npx", "serve", "-s", "build", "-l", "3001"]