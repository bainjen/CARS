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
    const body = {
      graphqlData: graphqlData.data.data.listConfigurations,
    };
    const data = graphqlData.data.data.listConfigurations.items;
    console.log(data);

    return {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (err) {
    console.log("error posting to appsync: ", err);
  }
};
