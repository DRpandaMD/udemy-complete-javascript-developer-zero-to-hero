# Docker file to work in a dev enviornment
FROM node:carbon

# Create app directory
WORKDIR /app

COPY source /app

EXPOSE 8080
CMD [ "node", "app.js" ]