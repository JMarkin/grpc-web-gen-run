FROM node:alpine

WORKDIR /root/
RUN npm install grpc-web google-protobuf xmlhttprequest

VOLUME /root/app

