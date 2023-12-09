FROM nginx:1.19.2-alpine

COPY ./build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
RUN ls -la /usr/share/nginx/html
RUN cat /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
