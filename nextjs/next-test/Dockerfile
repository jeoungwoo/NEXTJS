FROM node:16.13.2 as builder

# 작업 폴더를 생성, npm 설치

RUN npm install -g serve

RUN mkdir /app
WORKDIR /app

RUN mkdir ./build
COPY ./build ./build

ENTRYPOINT ['serve', '-s', 'build']