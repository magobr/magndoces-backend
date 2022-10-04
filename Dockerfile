FROM node:16.17.1

WORKDIR /usr/src/app

COPY package*.json ./

ENV PORT=3333

RUN npm install

COPY . .

EXPOSE $PORT

CMD ["npm", "run", "dev_docker"]