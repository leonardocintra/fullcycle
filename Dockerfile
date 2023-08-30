FROM node:18-slim

RUN apt update && apt install -y --no-install-recommends \
    git \
    ca-certificates \
    default-jre


RUN sudo npm i -g npm

USER node

WORKDIR /home/node/app

CMD [ "sh", "-c", "npm i && tail -f /dev/null" ]
