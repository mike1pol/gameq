FROM mhart/alpine-node:8

WORKDIR /app
COPY . .

RUN npm i

CMD ["node", "index.js"]
