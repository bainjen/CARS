"use strict";
const AWS = require("aws-sdk");

AWS.config.update({ region: "ca-central-1" });
//purpose of function to retrieve an item from DynamoDB

// lambda functions take 3 default parameters
// event - object contains info about trigger: request body, url parameters, other info
// context - methods and properties that provide  information about invocation, function, execution environment
// call back - return to calling function the invokes lambda

exports.handler = function (event, context, callback) {
  console.log(JSON.stringify(`Event: event`));
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08" });

  //DynamoDB JSON
  const params = {
    TableName: "UserInputs",
    Key: {
      id: {
        N: 0,
      },
    },
  };
  ddb.getItem(params, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
  // Lambda Code Here
  // context.succeed('Success!')
  // context.fail('Failed!')
};
