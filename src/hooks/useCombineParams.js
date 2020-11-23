import { useState } from "react";

const useCombineParams = () => {
  const initialAugerLength = 8.7;
  const initialFuelType = "diesel";
  const initialWheelSize = 60;

  const [augerLength, setAugerLength] = useState(initialAugerLength);
  const [fuelType, setFuelType] = useState(initialFuelType);
  const [wheelSize, setWheelSize] = useState(initialWheelSize);

  const resetParams = () => {
    setAugerLength(initialAugerLength);
    setFuelType(initialFuelType);
    setWheelSize(initialWheelSize);
  };

  const increaseLength = () => {
    if (augerLength < 25.7) {
      setAugerLength((prev) => prev + 1);
    }
  };

  const decreaseLength = () => {
    if (augerLength > 8.7) {
      setAugerLength((prev) => prev - 1);
    }
  };

  const increaseWheels = () => setWheelSize((prev) => prev + 1);

  const decreaseWheels = () => {
    if (wheelSize > 60) {
      setWheelSize((prev) => prev - 1);
    }
  };

  return {
    augerLength,
    fuelType,
    wheelSize,
    setFuelType,
    resetParams,
    increaseLength,
    decreaseLength,
    increaseWheels,
    decreaseWheels,
  };
};

export default useCombineParams;
