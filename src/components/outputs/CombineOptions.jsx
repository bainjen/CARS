import React, { useContext, useState } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const ConfigTable = styled.table`
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  background-color: #b8ebb8;
  height: 40vh;
  width: 50vw;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  font-size: 1.5vw;
  margin: 0 auto;
  /* position: relative; */
  & thead {
    background-color: rgb(99, 107, 219);
    color: white;
  }
`;

const BodyRow = styled.tr`
  border: solid 1px rgb(193, 193, 193);
  background-color: white;
  color: rgb(103, 103, 103);
  &:hover {
    background-color: rgb(233 233 255);
  }
`;

const ContainerDiv = styled.div`
  /* height: 50vh; */
  width: 50vw;
  margin: 1em;
`;

const CombineOptions = (props) => {
  const { setChoseConfiguration } = props;
  const { configurationState } = useContext(CombineContext);
  const { configurations, deleteConfigurationByID } = configurationState;

  const tableData = configurations.map((configuration, index) => {
    return (
      <BodyRow key={index}>
        <td>{`${configuration.wheelSize}"`}</td>
        <td>{`${configuration.augerLength}'`}</td>
        <td>{configuration.fuelType}</td>
        <td>
          <FontAwesomeIcon
            onClick={() => deleteConfigurationByID(configuration.id)}
            icon={faTrash}
          />
          {/* <button onClick={() => deleteConfigurationByID(configuration.id)}>
            delete
          </button> */}
        </td>
        <td>
          {/* <p onClick={() => setChoseConfiguration(configuration.id)}> */}
          <FontAwesomeIcon
            onClick={() => setChoseConfiguration(configuration.id)}
            icon={faChevronCircleRight}
          />
          {/* </p> */}
        </td>
      </BodyRow>
    );
  });

  return (
    <ContainerDiv>
      <h2>My Combines:</h2>
      {/* <ScrollDiv> */}
      <ConfigTable cellSpacing={0} cellPadding={10}>
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
      </ConfigTable>
    </ContainerDiv>
  );
};

export default CombineOptions;
