import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";

// diesel or electric

const FuelDiv = styled.div`
  display: flex;
  margin: 1em;
`;

const FuelButton = styled.button`
  background-color: ${(props) =>
    props.label === props.currentFuelType ? "yellow" : "gray"};
`;

const Fuel = () => {
  const { fuelState } = useContext(CombineContext);
  const { fuelType, setFuelType } = fuelState;

  return (
    <FuelDiv>
      <p>fuel type: </p>
      <FuelButton
        label={"diesel"}
        currentFuelType={fuelType}
        onClick={() => setFuelType("diesel")}
      >
        Diesel
      </FuelButton>
      <FuelButton
        label={"electric"}
        currentFuelType={fuelType}
        onClick={() => setFuelType("electric")}
      >
        Electric
      </FuelButton>
    </FuelDiv>
  );
};

export default Fuel;
