/* Amplify Params - DO NOT EDIT
	API_CARS_CONFIGURATIONTABLE_ARN
	API_CARS_CONFIGURATIONTABLE_NAME
	API_CARS_GRAPHQLAPIENDPOINTOUTPUT
	API_CARS_GRAPHQLAPIIDOUTPUT
	API_CARS_GRAPHQLAPIKEYOUTPUT
	API_CARS_SIMULATIONTABLE_ARN
	API_CARS_SIMULATIONTABLE_NAME
	AUTH_CARS33FEFFEB_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const axios = require("axios");
require("dotenv").config({ path: "./.env" });
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;
const {
  // options,
  // placeRandomRock,
  // calculateRockManeuver,
  generateRocks,
  calculateFieldPercentage,
  calculatePlaneTime,
  // totalCombineWeight,
  calculateCostPerRun,
  calculateEfficiencyPerRun,
} = require("../helpers/simCalculations");

// pulls an array of items (objects)
const listConfigurations = gql`
  query listConfigurations {
    listConfigurations {
      items {
        augerLength
        fuelType
        id
        wheelSize
        runNum
      }
    }
  }
`;

// ! means input param cannot be empty
// $ is a param
// mutation creates simulation and updates runNum
const createSimulation = gql`
  mutation createSimulation(
    $input: CreateSimulationInput!
    $input1: UpdateConfigurationInput!
  ) {
    createSimulation(input: $input) {
      configurationID
    }
    updateConfiguration(input: $input1) {
      id
      runNum
    }
  }
`;

// "CloudWatchRule": "rate(1 hour)" in parameters.json to run once per hour

exports.handler = async (event) => {
  // getting the configuration data from DynamoDB
  let configurationData;
  const rocks = generateRocks(3);
  try {
    const graphqlData = await axios({
      url: process.env.GRAPHQL_ENDPOINT,
      method: "post",
      headers: {
        "x-api-key": process.env.GRAPHQL_API_KEY,
      },
      data: {
        query: print(listConfigurations),
      },
    });

    configurationData = graphqlData.data.data.listConfigurations.items;
  } catch (err) {
    console.log("error fetching combine configuration data ", err);
  }

  // putting new data into simulations in DynamoDB
  try {
    for (const row of configurationData) {
      const graphqlData = await axios({
        url: process.env.GRAPHQL_ENDPOINT,
        method: "post",
        headers: {
          "x-api-key": process.env.GRAPHQL_API_KEY,
        },
        data: {
          query: print(createSimulation),
          variables: {
            input: {
              configurationID: row.id,
              planeTime: calculatePlaneTime(
                row.wheelSize,
                row.augerLength,
                rocks
              ),
              percentagePlaned: calculateFieldPercentage(
                row.augerLength,
                rocks
              ),
              cost: calculateCostPerRun(
                row.fuelType,
                row.runNum,
                row.wheelSize,
                row.augerLength
              ),
              efficiency: calculateEfficiencyPerRun(
                row.wheelSize,
                row.augerLength,
                rocks,
                row.fuelType,
                row.runNum
              ),
            },
            input1: {
              id: row.id,
              runNum: row.runNum + 1,
            },
          },
        },
      });

      console.log("inserted row");
    }
  } catch (err) {
    console.log("error writing data to simulation table ", err);
  }
};
