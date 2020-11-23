import React, { useState, useEffect } from "react";
import useConfigData from "../hooks/useConfigData";
const CombineContext = React.createContext();

const CombineProvider = (props) => {
  const {
    // formState,
    configurations,
    addConfiguration,
    augerLength,
    fuelType,
    wheelSize,
    setFuelType,
    increaseLength,
    decreaseLength,
    increaseWheels,
    decreaseWheels,
  } = useConfigData();

  return (
    <CombineContext.Provider
      value={{
        lengthState: { augerLength, increaseLength, decreaseLength },
        fuelState: { fuelType, setFuelType },
        wheelState: { wheelSize, increaseWheels, decreaseWheels },
        configurationState: { configurations, addConfiguration },
      }}
    >
      {props.children}
    </CombineContext.Provider>
  );
};
export { CombineContext, CombineProvider };
