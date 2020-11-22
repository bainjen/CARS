const options = {
  squareAcreFeet: 43520,
  fieldLength: Math.sqrt(43520) * 10,
  baseWeight: 53000,
  baseWheels: 60,
  baseAuger: 8.7,
  baseFuel: "diesel",
  basePassTime: 5 * 60, //seconds
};

export const placeRandomRock = (options) => {
  const x = Math.random() * options.fieldLength;
  const y = Math.random() * options.fieldLength;
  return { x, y };
};

export const generateRocks = (numRocks) => {
  let rocks = [];
  for (let i = 0; i < numRocks; i++) {
    rocks.push(placeRandomRock(options));
  }
  return rocks;
};
//default num of passes 239.78675513389058
//3 extra square feet per rock
//  Increase in Wheel Size by 1-inch results in weight increase by 5% but a time reduction of
// 3%.
export const calculatePlaneTime = (wheelSize, augerLength) => {
  const numPasses = Math.ceil(options.fieldLength / augerLength);
  const passTime =
    options.basePassTime -
    options.basePassTime * ((wheelSize - options.baseWheels) * 0.03);
  //returns time in seconds
  return numPasses * passTime;
};

export const calculateFieldPercentage = () => {};

export const calculateCostPerRun = () => {};

export const calculateTotalEfficiency = () => {};

// Constraints and Assumptions
// 1. A Base Combine weighs 53,000 pounds, with 60-inch wheels, and 8.7 feet wide auger,
// making 240 passes to plane a 10-acre square field with each pass taking 5 min. The base
// fuel type is Diesel with a fuel consumption per 10 acres of 20 gallons. Costing $350 per
// 10 acres.
// 2. Increase in Wheel Size by 1-inch results in weight increase by 5% but a time reduction of
// 3%.
// 3. Electric Combines are more costly per 10 acres by 25% at the start but with each run
// reducing cost by 0.5 % consistently. Diesel is a fixed cost. Regardless of fuel type the
// cost per 10 acres is a factor of weight with a linear relationship.
// 4. Auger length can be altered from the base unit by 1 foot increments up to a maximum
// auger length of 25.7 feet. 1 increment increase results in weight increase by 8%.
// 5. 3 obstacles [ 1ft x 1ft rock ] are to be placed randomly on the field per run and the
// combines must transverse around them. The point of this exercise is calculating the
// most efficient path to plane the field with least amount of time.
// 6. Make and state any other reasonable assumptions made for this project
