# Base image
FROM node:12.2.0-alpine

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install and Cache App Dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm install react-router-dom -g --silent
# Start app
CMD ["npm", "start"]

#Run Container w/ docker run -it -v ${PWD}:/app -v /app/node_modules -p 3000:3000 mtglibrary-react:test
#Mounts container to localhost volumes (assumes running in $PWD of Dockerfile)
