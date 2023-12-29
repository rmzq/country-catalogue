FROM node:20.10.0 AS build

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./

RUN yarn install
COPY . .

RUN yarn build

FROM nginx:1.25.3

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]