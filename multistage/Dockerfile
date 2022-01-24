FROM node:alpine as build
WORKDIR /src
COPY package*.json .
RUN npm install
COPY . .

FROM node:alpine
WORKDIR /src 
COPY --from=build /src .
EXPOSE 8000
CMD ["node", "index.js"]