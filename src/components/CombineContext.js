import React, { useState, useEffect } from "react";
import useConfigData from "../hooks/useConfigData";
import useVisualMode from "../hooks/useVisualMode";
const CombineContext = React.createContext();

const CombineProvider = (props) => {
  const {
    configurations,
    simulations,
    addConfiguration,
    fetchConfigurations,
    deleteConfigurationByID,
    augerLength,
    fuelType,
    wheelSize,
    setFuelType,
    increaseLength,
    decreaseLength,
    increaseWheels,
    decreaseWheels,
  } = useConfigData();

  const { mode, transition, back } = useVisualMode("CONFIG");

  const [chosenConfiguration, setChosenConfiguration] = useState();

  return (
    <CombineContext.Provider
      value={{
        lengthState: { augerLength, increaseLength, decreaseLength },
        fuelState: { fuelType, setFuelType },
        wheelState: { wheelSize, increaseWheels, decreaseWheels },
        configurationState: {
          configurations,
          addConfiguration,
          fetchConfigurations,
          deleteConfigurationByID,
          chosenConfiguration,
          setChosenConfiguration,
        },
        simulationState: { simulations },
        visualState: { mode, transition, back },
      }}
    >
      {props.children}
    </CombineContext.Provider>
  );
};
export { CombineContext, CombineProvider };
