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
    console.log(graphqlData.data.data.listConfigurations);
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
