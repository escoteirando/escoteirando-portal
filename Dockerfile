FROM node:18-alpine as develop-stage

WORKDIR /app

COPY portal/package*.json ./
COPY portal/yarn.lock ./

RUN npm install
RUN npm install -g @vue/cli
RUN npm install -g @quasar/cli 

COPY portal/ .

FROM develop-stage as build-stage

RUN quasar build

# production stage
FROM nginx:1.24-alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]    