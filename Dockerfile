FROM node:18.15.0 as build-stage
WORKDIR /nuxtapp
COPY . .
RUN npm install
RUN npm run build
RUN rm -rf node_modules
FROM node:18.15.0 as prod-stage
WORKDIR /nuxtapp
COPY --from=build-stage /nuxtapp/.output/  ./.output/
CMD [ "node", ".output/server/index.mjs" ]
