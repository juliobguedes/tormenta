FROM node:10

WORKDIR /usr/src/tormenta-pwa

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .
EXPOSE 8081

CMD ["yarn", "build-start"]
