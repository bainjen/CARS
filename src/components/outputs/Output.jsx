import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";
import ConfigSimulations from "./ConfigSimulations";

const ScrollDiv = styled.div`
  background-color: #b8ebb8;
  height: 30vh;
  width: 50vw;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  font-size: 1.25vw;
`;

const ConfigDiv = styled.div`
  margin: 1em;
  /* border: solid black 2px; */
  /* width: 50%; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  & p {
    color: red;
  }
`;

const ContainerDiv = styled.div`
  height: 30vh;
  width: 50vw;
  margin: 1em;
`;

const Output = () => {
  const { configurationState } = useContext(CombineContext);
  const { configurations, deleteConfigurationByID } = configurationState;
  return (
    <ContainerDiv>
      <ConfigSimulations></ConfigSimulations>
      <h2>My Combines:</h2>
      <ScrollDiv>
        {configurations.map((configuration, index) => (
          <ConfigDiv key={configuration.id ? configuration.id : index}>
            <p>Wheel Size: {configuration.wheelSize} </p>
            <span> | </span>
            <p>Auger Length: {configuration.augerLength} </p>
            <span> | </span>
            <p>Fuel Type: {configuration.fuelType}</p>
            <button onClick={() => deleteConfigurationByID(configuration.id)}>
              delete
            </button>
            <button>fetch data</button>
          </ConfigDiv>
        ))}
      </ScrollDiv>
    </ContainerDiv>
  );
};

export default Output;
