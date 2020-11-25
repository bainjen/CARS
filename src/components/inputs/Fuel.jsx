import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";

// diesel or electric

const FuelDiv = styled.div`
  display: flex;
  margin: 0.5em;
`;

const FuelButton = styled.button`
  background-color: ${(props) =>
    props.label === props.currentFuelType ? "#5A5BD6" : "#EDEDED"};

  color: white;
  height: 2em;
  width: 5em;
  border-radius: 6px;
  border: display-none;
  font-size: 0.75em;
  font-family: "Montserrat", sans-serif;
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
