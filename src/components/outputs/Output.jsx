import React, { useContext, useState } from "react";
import { CombineContext } from "../CombineContext";

import ConfigSimulations from "./ConfigSimulations";
import CombineOptions from "./CombineOptions";
import ConfirmDelete from "./ConfirmDelete";

const CONFIG = "CONFIG";
const EMPTY = "EMPTY";
const SIMS = "SIMS";
const CONFIRM = "CONFIRM";

const Output = () => {
  // const [chosenConfiguration, setChoseConfiguration] = useState();

  const { visualState, configurationState } = useContext(CombineContext);
  const { mode, transition } = visualState;
  const { chosenConfiguration, setChosenConfiguration } = configurationState;

  const viewSimulations = (id) => {
    setChosenConfiguration(id);
    transition(SIMS, false);
  };

  return (
    <>
      {mode === CONFIG && (
        <CombineOptions chooseConfiguration={viewSimulations} />
      )}
      {mode === SIMS && (
        <ConfigSimulations configurationID={chosenConfiguration} />
      )}
      {mode === CONFIRM && <ConfirmDelete />}
    </>
  );
};

export default Output;
