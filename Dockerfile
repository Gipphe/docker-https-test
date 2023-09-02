FROM node:lts
WORKDIR /src/srv
RUN apt update && apt install -y --no-install-recommends curl
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
