# Dockerfile

FROM node:carbon

WORKDIR /app

COPY source /app

EXPOSE 8080

# I want to bounce a file off the container to make sure its working

CMD [ "node", "computational-non-blocking.js" ]