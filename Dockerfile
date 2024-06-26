FROM node:20.10.0-alpine3.19 AS build

WORKDIR /app

COPY . .
RUN yarn install

RUN yarn build

FROM nginx:1.25.5-alpine3.19-slim

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx/ etc/nginx/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]