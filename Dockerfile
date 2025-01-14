# Base image
FROM node:16-alpine

# Set build-time argument for environment
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies based on environment
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi

# Copy application code
COPY . .

# Build Next.js app in production
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm run build; \
    fi

# Expose port
EXPOSE 3000

# Start the app based on environment
CMD [ "sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm start; else npm run dev; fi" ]