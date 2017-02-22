FROM node:6.9.4
MAINTAINER Matt Levy "<ducksoupdev@gmail.com>"
ENV REFRESHED_AT 2017_02_22

RUN useradd --user-group --create-home --shell /bin/false app && npm install -g @angular/cli

ENV HOME=/home/app
WORKDIR $HOME

ENV APP_NAME=client

COPY . $HOME/$APP_NAME/
RUN chown -R app:app $HOME/*

USER app

WORKDIR $HOME/$APP_NAME
RUN npm install

EXPOSE 4200
EXPOSE 49152

CMD ["npm", "start"]
