import React, { useState, useEffect } from "react";
import { createFieldMatrix, findDimension } from "../helpers/helpers";

const CombineContext = React.createContext();

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
