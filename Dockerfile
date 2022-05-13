FROM node:latest

WORKDIR /

COPY ["package.json", "yarn-lock*", "./"]

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add 
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get install -y yarn

RUN yarn install

RUN npm install -g npm@8.9.0

COPY . .

#RUN npx sequelize-cli db:migrate

CMD [ "yarn", "start" ]

EXPOSE 3334