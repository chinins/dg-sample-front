FROM node:10-alpine AS builder

WORKDIR /usr/src/app

COPY . .
RUN ["yarn", "install"]
RUN ["yarn", "webpack:build"]

FROM node:10-alpine

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .

ENV NODE_ENV=production

RUN ["yarn", "install"]
RUN ["yarn", "cache", "clean"]

COPY --from=builder /usr/src/app/dist ./dist

CMD ["echo", "implement a static nginx server"]
EXPOSE 3000
