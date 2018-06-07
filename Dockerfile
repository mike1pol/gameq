FROM mhart/alpine-node:8

WORKDIR /app
COPY . .

CMD ["node", "index.js"]
