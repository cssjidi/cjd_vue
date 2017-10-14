FROM node:alpine

MAINTAINER cjd cjd2015@qq.com

# Create app directories
RUN mkdir -p /usr/src/app
RUN mkdir /usr/src/app/node_modules
WORKDIR /usr/src/app

# Copy app
COPY . /usr/src/app

EXPOSE 80

VOLUME /usr/src/app/node_modules



CMD [ "npm", "run", "dev" ]