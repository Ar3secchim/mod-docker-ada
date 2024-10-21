# Etapa 1: Construção do Frontend
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Etapa 2: Servir com Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta que o Nginx usará
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]