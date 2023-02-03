########################################################################################
# Create a docker image for the wildlife licencing EPS WEB service
########################################################################################
FROM cypress/included:12.5.1
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm ci
RUN npx --yes browserslist@latest --update-db
#CMD [ "node", "./node_modules/.bin/cypress", "run" ]
ENTRYPOINT ["tail", "-f", "/dev/null"]
