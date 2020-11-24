import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";
import moment from "moment";
import { mean } from "lodash";

const ConfigSimulations = (props) => {
  const { configurationID } = props;
  const { configurationState, simulationState } = useContext(CombineContext);
  const { configurations } = configurationState;
  const { simulations } = simulationState;

  const chosenConfiguration = configurations.find(
    (config) => config.id === configurationID
  );

  const filteredSims = simulations.filter(
    (sim) => sim.configurationID === configurationID
  );
  // simulations.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  const formatTime = (numSeconds) => {
    return moment
      .utc(moment.duration(numSeconds, "seconds").asMilliseconds())
      .format("HH:mm:ss");
  };
  const tableData = filteredSims.map((sim, i) => {
    return (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{formatTime(sim.planeTime)}</td>
        <td>{`${Math.floor(sim.percentagePlaned * 10000) / 10000}%`}</td>
        <td>{`$${sim.cost.toFixed(2)}`}</td>
        <td>{sim.efficiency.toFixed(2)}</td>
      </tr>
    );
  });

  const table = (
    <table cellSpacing={0} cellPadding={10}>
      <thead>
        <tr>
          <th>run number</th>
          <th>time to plane</th>
          <th>% of field covered</th>
          <th>cost per run</th>
          <th>efficiency</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>average time</th>
          <th>average % covered</th>
          <th>average cost</th>
          <th>total efficiency</th>
        </tr>
        <tr>
          <td></td>
          <td>{formatTime(mean(filteredSims.map((s) => s.planeTime)))}</td>

          <td>{`${
            Math.floor(
              mean(filteredSims.map((s) => s.percentagePlaned)) * 100
            ) / 100
          }%`}</td>
          <td>{`$${mean(filteredSims.map((s) => s.cost)).toFixed(2)}`}</td>
          <td>{mean(filteredSims.map((s) => s.efficiency)).toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
  );
  return (
    <div>
      {configurationID && (
        <h2>{`This combine has ${chosenConfiguration.wheelSize}" wheels, a ${chosenConfiguration.augerLength}' foot auger, and runs on ${chosenConfiguration.fuelType} 👍`}</h2>
      )}
      {filteredSims.length > 0 ? (
        table
      ) : (
        <p>No simulations run for this configuration yet</p>
      )}
    </div>
  );
};

export default ConfigSimulations;
