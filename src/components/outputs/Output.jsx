import React, { useContext, useState } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";
import ConfigSimulations from "./ConfigSimulations";

const ScrollDiv = styled.div`
  background-color: #b8ebb8;
  height: 50vh;
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
    /* color: red; */
  }
`;

const ContainerDiv = styled.div`
  height: 50vh;
  width: 50vw;
  margin: 1em;
`;

const Output = () => {
  const { configurationState } = useContext(CombineContext);
  const { configurations, deleteConfigurationByID } = configurationState;
  const [chosenConfiguration, setChoseConfiguration] = useState();

  const tableData = configurations.map((configuration, index) => {
    return (
      <tr key={index}>
        <td>{`${configuration.wheelSize}"`}</td>
        <td>{`${configuration.augerLength}'`}</td>
        <td>{configuration.fuelType}</td>
        <td>
          <button onClick={() => deleteConfigurationByID(configuration.id)}>
            delete
          </button>
        </td>
        <td>
          <button onClick={() => setChoseConfiguration(configuration.id)}>
            fetch data
          </button>
        </td>
      </tr>
    );
  });

  return (
    <ContainerDiv>
      <ConfigSimulations
        configurationID={chosenConfiguration}
      ></ConfigSimulations>
      <h2>My Combines:</h2>
      <ScrollDiv>
        <table cellSpacing={0} cellPadding={10}>
          <thead>
            <tr>
              <th>Wheel Size</th>
              <th>Auger Length</th>
              <th>Fuel </th>
              <th>Delete</th>
              <th>Fetch Data</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
        {/* {configurations.map((configuration, index) => (
          <ConfigDiv key={configuration.id ? configuration.id : index}>
            <p>Wheel Size: {`${configuration.wheelSize}"`} </p>

            <p>Auger Length: {`${configuration.augerLength}'`} </p>

            <p>Fuel Type: {configuration.fuelType}</p>
            <button onClick={() => deleteConfigurationByID(configuration.id)}>
              delete
            </button>
            <button onClick={() => setChoseConfiguration(configuration.id)}>
              fetch data
            </button>
          </ConfigDiv>
        ))} */}
      </ScrollDiv>
    </ContainerDiv>
  );
};

export default Output;
