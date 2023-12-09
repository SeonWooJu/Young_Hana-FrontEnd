FROM node:12-alpine as build
FROM nginx:1.19.2-alpine

COPY ./build/* /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY /drive/Young_Hana-Security/FrontEnd/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
