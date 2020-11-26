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
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;

const options = {
  squareAcreFeet: 43520,
  fieldLength: Math.sqrt(43520) * 10,
  baseWeight: 53000,
  baseWheels: 60,
  baseAuger: 8.7,
  baseFuel: "diesel",
  baseFuelCost: 350,
  basePassTime: 5 * 60, //seconds
};

const placeRandomRock = (options) => {
  const x = Math.random() * options.fieldLength;
  const y = Math.random() * options.fieldLength;
  return { x, y };
};

// calculates the number of square feet the auger will miss in order to go around a rock
// and the amount of extra square feet it moves to navigate rocks
// assuming the combine turns at a 90 degree angle
const calculateRockManeuver = (augerLength, rock) => {
  const topThreshold = augerLength,
    bottomThreshold = options.fieldLength - augerLength,
    leftThreshold = augerLength,
    rightThreshold = options.fieldLength - augerLength;

  const feetAroundRock = 3;
  let extraMiss = 0;

  if (topThreshold >= rock.y) {
    extraMiss += rock.y;
  }
  if (bottomThreshold <= rock.y) {
    extraMiss += options.fieldLength - rock.y;
  }
  if (leftThreshold >= rock.x) {
    extraMiss += 2 * augerLength * rock.x;
  }
  if (rightThreshold <= rock.x) {
    extraMiss += 2 * augerLength * (options.fieldLength - rock.x);
  }

  return {
    extraSquareFeet: feetAroundRock,
    missedSquareFeet: extraMiss + 1,
  };
};

const generateRocks = (numRocks) => {
  let rocks = [];
  for (let i = 0; i < numRocks; i++) {
    rocks.push(placeRandomRock(options));
  }
  return rocks;
};
// default num of passes 239.78675513389058 // 3 extra square feet per rock
// Increase in Wheel Size by 1-inch results in weight increase by 5% but a time reduction of 3%
const calculatePlaneTime = (wheelSize, augerLength, rocksArr) => {
  let rockMiss = 0;
  let rockAdd = 0;
  rocksArr.forEach((rock) => {
    const { extraSquareFeet, missedSquareFeet } = calculateRockManeuver(
      augerLength,
      rock
    );
    rockMiss += Math.sqrt(missedSquareFeet);
    rockAdd += Math.sqrt(extraSquareFeet);
  });
  const extraPassLength = rockAdd - rockMiss;
  const extraPassProportion = extraPassLength / options.fieldLength;
  const numPasses = Math.ceil(options.fieldLength / augerLength);
  const passTime =
    options.basePassTime -
    options.basePassTime * ((wheelSize - options.baseWheels) * 0.03);
  //returns time in seconds
  return (numPasses + extraPassProportion) * passTime;
};

const calculateFieldPercentage = (augerLength, rocksArr) => {
  const tenSqAcres = options.squareAcreFeet * 10;
  let rockMiss = 0;
  rocksArr.forEach((rock) => {
    const { missedSquareFeet } = calculateRockManeuver(augerLength, rock);
    rockMiss += missedSquareFeet;
  });
  return ((tenSqAcres - rockMiss) / tenSqAcres) * 100;
};

// Increase in Wheel Size by 1-inch results in weight increase by 5%
// auger length 1 increment increase results in weight increase by 8%.
const totalCombineWeight = (wheelSize, augerLength) => {
  const augerDiff = augerLength - options.baseAuger;
  const wheelDiff = wheelSize - options.baseWheels;
  const increasePercent = augerDiff * 0.08 + wheelDiff * 0.05;
  // returns weight in lbs
  return options.baseWeight * increasePercent + options.baseWeight;
};

const calculateCostPerRun = (fuelType, runNum, wheelSize, augerLength) => {
  const combineWeight = totalCombineWeight(wheelSize, augerLength);

  const weightIncreasePercent =
    (combineWeight - options.baseWeight) / options.baseWeight;

  let cost =
    options.baseFuelCost + options.baseFuelCost * weightIncreasePercent;

  if (fuelType !== options.baseFuel) {
    const percentage = 0.25;
    const adjustedCost = cost + cost * percentage;
    cost = adjustedCost - adjustedCost * 0.005 * (runNum - 1);
  }
  return cost;
};

// calculates efficiency per run -- calculating average efficiency on front end
const calculateEfficiencyPerRun = (
  wheelSize,
  augerLength,
  rocksArr,
  fuelType,
  runNum
) => {
  const timeTakenMins =
    calculatePlaneTime(wheelSize, augerLength, rocksArr) / 60;
  const percentFieldChosen = calculateFieldPercentage(augerLength, rocksArr);
  const runCost = calculateCostPerRun(fuelType, runNum, wheelSize, augerLength);
  const e = 600 / timeTakenMins + percentFieldChosen + runCost / 350;
  return e;
};

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

exports.handler = async (event) => {
  // getting the configuration data from DynamoDB
  let configurationData;
  try {
    const graphqlData = await axios({
      url: process.env.API_CARS_GRAPHQLAPIENDPOINTOUTPUT,
      method: "post",
      headers: {
        "x-api-key": process.env.API_CARS_GRAPHQLAPIKEYOUTPUT,
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
      const rocks = generateRocks(3);
      const graphqlData = await axios({
        url: process.env.API_CARS_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        headers: {
          "x-api-key": process.env.API_CARS_GRAPHQLAPIKEYOUTPUT,
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
