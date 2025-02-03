FROM node:20

# Set working directory in container
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application files
COPY . .

# Expose port for your app (default 3000)
EXPOSE 3000

# Run the app when the container starts
CMD ["npm", "run", "start"]