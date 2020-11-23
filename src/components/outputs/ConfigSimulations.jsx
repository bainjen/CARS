import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";
import moment from "moment";
import { mean } from "lodash";

const ConfigSimulations = () => {
  const { configurationState, simulationState } = useContext(CombineContext);
  const { configurations } = configurationState;
  const { simulations } = simulationState;

  // simulations.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  const formatTime = (numSeconds) => {
    return moment
      .utc(moment.duration(numSeconds, "seconds").asMilliseconds())
      .format("HH:mm:ss");
  };
  const tableData = simulations.map((sim, i) => {
    return (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{formatTime(sim.planeTime)}</td>
        <td>{`${Math.floor(sim.percentagePlaned * 100) / 100}%`}</td>
        <td>{`$${sim.cost.toFixed(2)}`}</td>
        <td>{sim.efficiency.toFixed(2)}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>place configuration info here</h1>
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
            <td>{formatTime(mean(simulations.map((s) => s.planeTime)))}</td>

            <td>{`${
              Math.floor(
                mean(simulations.map((s) => s.percentagePlaned)) * 100
              ) / 100
            }%`}</td>
            <td>{`$${mean(simulations.map((s) => s.cost)).toFixed(2)}`}</td>
            <td>{mean(simulations.map((s) => s.efficiency)).toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ConfigSimulations;
