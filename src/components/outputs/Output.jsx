import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";

const ConfigDiv = styled.div`
  margin: 1em;
  /* border: solid black 2px; */
  /* width: 50%; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Output = () => {
  const { configurationState } = useContext(CombineContext);
  const { configurations } = configurationState;
  return (
    <div>
      <h2>My Combines:</h2>
      {configurations.map((configuration, index) => (
        <ConfigDiv key={configuration.id ? configuration.id : index}>
          <p>Wheel Size: {configuration.wheelSize} </p>
          <span> | </span>
          <p>Auger Length: {configuration.augerLength} </p>
          <span> | </span>
          <p>Fuel Type: {configuration.fuelType}</p>
        </ConfigDiv>
      ))}
    </div>
  );
};

export default Output;
