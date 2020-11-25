import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";
import moment from "moment";
import { mean } from "lodash";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
  font-family: "Varela Round", sans-serif;
  color: #4b4a4a;
  padding: 1em;
  & h2 {
    color: #eeeef4;
    text-align: center;
  }
  & p {
    text-align: center;
    font-size: 0.85em;
    margin-bottom: 1em;
  }
`;

const SimTable = styled.table`
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  font-size: 0.7em;
  margin: 0 auto;
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

const ParamSpan = styled.span`
  color: #333396;
`;

const BackBtn = styled.button`
  height: 2em;
  width: 5em;
  border-radius: 6px;
  border: 0px;
  font-size: 0.8em;
  outline: none;
  background-color: #a878ff;
  color: white;
  font-weight: 600;
  font-family: "Varela Round", sans-serif;
  margin-top: 1em;
  margin-right: 1.5em;
`;

const ConfigSimulations = (props) => {
  const { configurationID } = props;
  const { configurationState, simulationState, visualState } = useContext(
    CombineContext
  );
  const { configurations } = configurationState;
  const { simulations } = simulationState;
  const { back } = visualState;

  const chosenConfiguration = configurations.find(
    (config) => config.id === configurationID
  );

  const filteredSims = simulations.filter(
    (sim) => sim.configurationID === configurationID
  );

  const formatTime = (numSeconds) => {
    return moment
      .utc(moment.duration(numSeconds, "seconds").asMilliseconds())
      .format("HH:mm:ss");
  };
  const tableData = filteredSims.map((sim, i) => {
    return (
      <BodyRow key={i}>
        <td>{i + 1}</td>
        <td>{formatTime(sim.planeTime)}</td>
        <td>{`${Math.floor(sim.percentagePlaned * 10000) / 10000}%`}</td>
        <td>{`$${sim.cost.toFixed(2)}`}</td>
        <td>{sim.efficiency.toFixed(2)}</td>
      </BodyRow>
    );
  });

  const table = (
    <SimTable cellSpacing={0} cellPadding={10}>
      <thead>
        <tr>
          <th>run no.</th>
          <th>plane time</th>
          <th>field covered</th>
          <th>cost/run</th>
          <th>efficiency</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
      <tfoot>
        <BodyRow>
          <th></th>
          <th>avg. time</th>
          <th>avg. covered</th>
          <th>avg. cost</th>
          <th>total efficiency</th>
        </BodyRow>
        <BodyRow>
          <td></td>
          <td>{formatTime(mean(filteredSims.map((s) => s.planeTime)))}</td>

          <td>{`${
            Math.floor(
              mean(filteredSims.map((s) => s.percentagePlaned)) * 100
            ) / 100
          }%`}</td>
          <td>{`$${mean(filteredSims.map((s) => s.cost)).toFixed(2)}`}</td>
          <td>{mean(filteredSims.map((s) => s.efficiency)).toFixed(2)}</td>
        </BodyRow>
      </tfoot>
    </SimTable>
  );
  return (
    <ContainerDiv>
      <h2>Simulation Data</h2>
      {configurationID && (
        <p>
          This combine has
          <ParamSpan>{chosenConfiguration.wheelSize}"</ParamSpan> wheels,{" "}
          <ParamSpan>{chosenConfiguration.augerLength}'</ParamSpan> foot auger,
          and runs on <ParamSpan>{chosenConfiguration.fuelType} </ParamSpan>👍
        </p>
      )}
      {filteredSims.length > 0 ? (
        table
      ) : (
        <p>No simulations run for this configuration yet</p>
      )}
      <BackBtn onClick={back}>back</BackBtn>
    </ContainerDiv>
  );
};

export default ConfigSimulations;
