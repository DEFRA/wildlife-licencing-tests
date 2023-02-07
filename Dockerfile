########################################################################################
# Create a docker image for the wildlife licencing EPS WEB service
########################################################################################
FROM cypress/included:12.5.1
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm ci
CMD [ "node", "./node_modules/.bin/cypress", "run", "--quiet" ]
