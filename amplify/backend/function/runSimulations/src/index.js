const axios = require("axios");
require("dotenv").config({ path: "./.env" });
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;

const listConfigurations = gql`
  query listConfigurations {
    listConfigurations {
      items {
        augerLength
        createdAt
        fuelType
        id
        updatedAt
        wheelSize
      }
    }
  }
`;

const createSimulation = gql`
  mutation createSimulation($input: CreateSimulationInput!) {
    createSimulation(input: $input) {
      id
      planeTime
      percentagePlaned
      efficiency
      cost
      configurationID
    }
  }
`;

// "CloudWatchRule": "rate(1 hour)" in parameters.json to run once per hour

exports.handler = async (event) => {
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

    // await data.forEach(async (row) => {
    //   console.log("new row");
    //   console.log(row);
    //   try {
    //     const graphqlData2 = await axios({
    //       url: process.env.GRAPHQL_ENDPOINT,
    //       method: "post",
    //       headers: {
    //         "x-api-key": process.env.GRAPHQL_API_KEY,
    //       },
    //       data: {
    //         query: print(createSimulation),
    //         variables: {
    //           input: {
    //             configurationID: row.id,
    //             efficiency: 45,
    //             cost: 4546,
    //             percentagePlaned: 89,
    //             planeTime: 6775,
    //           },
    //         },
    //       },
    //     });
        const body = {
          message: "successfully created simulation!",
        };
        return {
          statusCode: 200,
          body: JSON.stringify(body),
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        };
      } catch (err) {
        console.log("error creating simulation: ", err);
      }
    });

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
