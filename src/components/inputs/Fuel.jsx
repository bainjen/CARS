import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";

const FuelDiv = styled.div`
  display: flex;
`;

const FuelButton = styled.button`
  background-color: ${(props) =>
    props.label === props.currentFuelType ? "#5A5BD6" : "#EDEDED"};

  color: ${(props) =>
    props.label === props.currentFuelType ? "white" : "rgb(103, 103, 103)"};
  height: 2em;
  width: 5em;
  border-radius: 6px;
  border: 0px;
  font-size: 0.75em;
  font-family: "Montserrat", sans-serif;
  outline: none;
  &:active {
    border: 0px;
    outline: none;
  }
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
