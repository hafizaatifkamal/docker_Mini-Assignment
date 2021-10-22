FROM node:16-alpine3.12



WORKDIR /Entertainment-App__Assignment-5

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN npm install

RUN npm run build
