# Stage 0, "build-stage", based on Node.js, to build and compile Angular
FROM node as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
