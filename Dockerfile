########################################################################################
# Create a docker image for the wildlife licencing EPS WEB service
########################################################################################
FROM cypress/included:12.5.1
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm ci
ENTRYPOINT curl -i ${cypress_base_url}
#ENTRYPOINT [ "node", "./node_modules/.bin/cypress", "run" ]
#ENTRYPOINT ["tail", "-f", "/dev/null"]
