import React, { useState, useEffect } from "react";
import useConfigData from "../hooks/useConfigData";
const CombineContext = React.createContext();

const CombineProvider = (props) => {
  const {
    // formState,
    configurations,
    simulations,
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
        simulationState: { simulations },
      }}
    >
      {props.children}
    </CombineContext.Provider>
  );
};
export { CombineContext, CombineProvider };
