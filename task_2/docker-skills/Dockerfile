FROM node:latest

WORKDIR /home/app

COPY app/package.json .

RUN npm install --quiet

EXPOSE 8080

COPY app/ .

