FROM node:8-alpine
MAINTAINER Levi Voorintholt <l.Voorintholt@viaict.nl>

EXPOSE 3000

ENV NODE_ENV=development

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN apk add --no-cache --virtual .build-deps \
        binutils-gold \
        curl \
        g++ \
        gcc \
        libgcc \
        make \
        python \
        && yarn \
        && yarn build \
        && apk del .build-deps

CMD [ "yarn", "start" ]
