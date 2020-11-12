import React from "react";
import styled from "styled-components";

// diesel or electric

const FuelDiv = styled.div`
  display: flex;
  margin: 1em;
`;

const Fuel = () => {
  return (
    <FuelDiv>
      <p>fuel type</p>
      <button>Diesel</button>
      <button>Electric</button>
    </FuelDiv>
  );
};

export default Fuel;
