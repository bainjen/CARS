"use strict";
const AWS = require("aws-sdk");

AWS.config.update({ region: "ca-central-1" });

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08" });
  //transforms into regular JSON for easier access to data
  const documentClient = new AWS.DynamoDB.DocumentClient({
    region: "ca-central-1",
  });
  const params = {
    TableName: "UserInputs",
    Key: {
      id: 1,
    },
  };

  try {
    const data = await documentClient.get(params).promise();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
