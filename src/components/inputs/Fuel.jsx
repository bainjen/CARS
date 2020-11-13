import React, { useState } from "react";
import styled from "styled-components";

// diesel or electric

const FuelDiv = styled.div`
  display: flex;
  margin: 1em;
`;

const FuelButton = styled.button`
  background-color: ${(props) =>
    props.label === props.fuelType ? "yellow" : "gray"};
`;

const Fuel = () => {
  const [fuelType, setFuelType] = useState("diesel");

  return (
    <FuelDiv>
      <p>fuel type: </p>
      <FuelButton
        label={"diesel"}
        fuelType={fuelType}
        onClick={() => setFuelType("diesel")}
      >
        Diesel
      </FuelButton>
      <FuelButton
        label={"electric"}
        fuelType={fuelType}
        onClick={() => setFuelType("electric")}
      >
        Electric
      </FuelButton>
    </FuelDiv>
  );
};

export default Fuel;
