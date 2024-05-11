# Use an official Node.js runtime as a parent image
FROM node:21.7.3

# RUN apt-get update && apt-get install -y mysql

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy the rest of your application
COPY . .

RUN npx prisma generate
# Build TypeScript
RUN npm run build



# Expose the port your app runs on
EXPOSE 8886

# Command to run your app
CMD ["node", "dist/index.js"]


