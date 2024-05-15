# wildlife-licencing-tests
A repository for storing end-to-end tests (For regression testing of the wildlife licensing service, part of SDDS)

## Current repo status

Work on the frontend service is paused as of April 2024.

# create .env file from cypress root

## To build and run local image
```shell
docker build -t cypress/wildlife-licencing:latest .
docker run --env-file docker.env cypress/wildlife-licencing:latest --spec cypress/e2e/SmokeTest.js --no-exit
```
## Misc, used for the Jenkins Pipeline Jobs
```shell
docker build -t cypress/wildlife-licencing:latest .
docker volume create cypress_reports
docker run --name cypress_container --env-file docker.env --mount type=volume,src=cypress_reports,target=/app/reports cypress/wildlife-licencing --spec cypress/e2e/SmokeTest.js
docker cp cypress_container:/app/reports .
docker container rm cypress_container
docker volume rm cypress_reports
```

## To run on Test environment using cypress interface
```
Open project on Visual studio code
Do npm install
export cypress_base_url=https://new-tst.aws.defra.cloud/; npm run open (it will launched the Cypress interface and user can select the test to run)
```

## To run on Test environment using command line
```
Open project on Visual studio code
Do npm install
export cypress_base_url=https://new-tst.aws.defra.cloud/; npm run test
```
