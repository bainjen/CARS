# Combine Automation Report Simulator (CARS)

Description placeholder

## Installation and running locally:

Load the dependencies of the application:

```sh
cd path/to/CARS
yarn #npm install
```

Initialize amplify backend and create a new development environment from the amplify instructions from the CLI:

```sh
amplify init
```

The final output from amplify init outputs your GraphQL endpoint and your GraphQL API key. Save these values in `CARS/amplify/backend/function/runSimulations/src/.env`

```txt
# CARS/amplify/backend/function/runSimulations/src/.env

GRAPHQL_ENDPOINT="<your GraphQL endpoint>"
GRAPHQL_API_KEY="<your GraphQL API key>"
```

Push your API and lambda function to AWS:

```sh
amplify push
```

**To run the application locally**

To both bush your amplify resources and run the react front end, run:

```sh
amplify serve
```

...or just the front-end with:

```sh
yarn start #npm run start
```

## Using the app:

Combine configurations are created on the React frontend and saved to the DynamoDB backend.

Simulations are run using an hourly AWS lambda function which can be mocked locally by running:

```sh
amplify mock function runSimulations
```

**In order to view the simulation runs on the front end, be sure to run the script above and then refresh your browser. Every run, will mock one new simulation per combine configuration.**

This function takes in each combine configuration from the database and runs a simulation, inputting data to the Simulation table and updating the current number of simulation runs on each configuration.
