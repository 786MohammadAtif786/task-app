
FROM node:20


#RUN npm install -g nodemon
WORKDIR /app
COPY package*.json ./


COPY . .
RUN npm install
EXPOSE 3000


ENTRYPOINT ["node", "server.js"]
#CMD [ "npm", "run", "dev" ]
