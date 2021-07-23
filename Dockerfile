FROM node:14.15.1 as build

WORKDIR /usr/local/app

COPY . /usr/local/app/

RUN yarn install

RUN yarn ng build

FROM nginx:latest

COPY --from=build /usr/local/app/dist/ /usr/share/nginx/html

EXPOSE 80
