# wildlife-licencing-tests
A repository for storing end-to-end tests (For regression testing of the wildlife licensing service, part of SDDS)
# create .env file from cypress root

## To build and run local image
```shell
docker build -t cypress/wildlife-licencing:latest .
docker run --env-file docker.env cypress/wildlife-licencing
```
