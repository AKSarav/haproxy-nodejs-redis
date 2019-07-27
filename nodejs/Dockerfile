# Base Image
FROM node:alpine

# Working Directory
WORKDIR "/app"


# COPY the package.json file
COPY package.json .

# RUN command to install programs
RUN npm install
COPY . .

# Start the program
CMD ["npm", "start"]
