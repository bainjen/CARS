// 8.7/Math.sqrt(43560)*10
export const calculateRelativeAugerSize = (augerLength, squaredFieldUnit) => {
  return (augerLength / Math.sqrt(squaredFieldUnit)) * 10;
};

// returns an array of arrays that are filled with the number 1 according to the dimension input
export const createFieldMatrix = (dimension) => {
  let matrix = [];
  for (let i = 0; i < dimension; i++) {
    let row = [];
    for (let j = 0; j < dimension; j++) {
      row.push(1);
    }
    matrix.push(row);
  }
  return matrix;
};

// divides field length by auger length and rounds down (making the assumption the combine cannot go over the confines of 10x10 acre field)
export const findDimension = (augerLength, squaredFieldUnit) => {
  const dimension = (Math.sqrt(squaredFieldUnit) * 10) / augerLength;
  return Math.floor(dimension);
};
