import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Wizard from "../Wizard";

const ConfigTable = styled.table`
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  font-size: 0.75em;
  margin: 0 auto;
  min-height: 300px;
  & thead {
    background-color: rgb(99, 107, 219);
    color: white;
  }
`;

const BodyRow = styled.tr`
  font-weight: 300;
  border: solid 1px rgb(193, 193, 193);
  background-color: white;
  color: rgb(103, 103, 103);
  &:hover {
    background-color: rgb(233 233 255);
  }
`;

const ContainerDiv = styled.div`
  position: relative;
  font-size: 28px;
  font-weight: 600;
  font-family: "Varela Round", sans-serif;
  color: #4b4a4a;
  & h2 {
    color: #e9e9f1;
    text-align: center;
  }
`;

const EmptyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: rgb(103, 103, 103);
  height: 300px;
  width: 45vw;
  border-radius: 4px;
  text-align: center;
`;

const CONFIRM = "CONFIRM";

const CombineOptions = (props) => {
  const { chooseConfiguration } = props;
  const { configurationState, visualState } = useContext(CombineContext);
  const { configurations, setChosenConfiguration } = configurationState;
  const { transition } = visualState;

  const confirmDelete = (id) => {
    transition(CONFIRM, false);
    setChosenConfiguration(id);
  };

  const tableData = configurations.map((configuration) => {
    return (
      <BodyRow key={configuration.id}>
        <td>{`${configuration.wheelSize}"`}</td>
        <td>{`${configuration.augerLength}'`}</td>
        <td>{configuration.fuelType}</td>
        <td>
          <FontAwesomeIcon
            onClick={() => confirmDelete(configuration.id)}
            icon={faTrash}
          />
        </td>
        <td>
          <FontAwesomeIcon
            onClick={() => chooseConfiguration(configuration.id)}
            icon={faChevronCircleRight}
          />
        </td>
      </BodyRow>
    );
  });

  return (
    <ContainerDiv>
      <h2>My Combines</h2>
      <Wizard />
      {configurations.length > 0 ? (
        <ConfigTable cellSpacing={0} cellPadding={10}>
          <thead>
            <tr>
              <th>Wheel Size</th>
              <th>Auger Length</th>
              <th>Fuel </th>
              <th>Delete</th>
              <th>Fetch Sims</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </ConfigTable>
      ) : (
        <EmptyDiv>
          <p>No configurations yet</p>
        </EmptyDiv>
      )}
    </ContainerDiv>
  );
};

export default CombineOptions;
