import React, { useState, useEffect } from "react";

const CombineContext = React.createContext();

// helper function returns an array of arrays that are filled with the number 1 according to the dimension input
const createFieldMatrix = (dimension) => {
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

// helper function that divides field length by auger length and rounds down (making the assumption the combine cannot go over the confines of 10x10 acre field)
const findDimension = (augerLength, squaredFieldUnit) => {
  const dimension = (Math.sqrt(squaredFieldUnit) * 10) / augerLength;
  return Math.floor(dimension);
};

const CombineProvider = (props) => {
  const [length, setLength] = useState(8.7);
  const [fuelType, setFuelType] = useState("diesel");
  const [wheelSize, setWheelSize] = useState(60);
  const [fieldMatrix, setFieldMatrix] = useState([]);

  // updates based on increase/decrease in user defined auger length
  useEffect(() => {
    const dimension = findDimension(length, 43560);
    setFieldMatrix(createFieldMatrix(dimension));
  }, [length]);

  const increaseLength = () => {
    if (length < 25.7) {
      setLength((prev) => prev + 1);
    }
  };

  const decreaseLength = () => {
    if (length > 8.7) {
      setLength((prev) => prev - 1);
    }
  };

  const increaseWheels = () => setWheelSize((prev) => prev + 1);

  const decreaseWheels = () => {
    if (wheelSize > 60) {
      setWheelSize((prev) => prev - 1);
    }
  };

  return (
    <CombineContext.Provider
      value={{
        lengthState: { length, increaseLength, decreaseLength },
        fuelState: { fuelType, setFuelType },
        wheelState: { wheelSize, increaseWheels, decreaseWheels },
        fieldState: { fieldMatrix },
      }}
    >
      {props.children}
    </CombineContext.Provider>
  );
};
export { CombineContext, CombineProvider };
