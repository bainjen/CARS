import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";

const ConfirmDelete = () => {
  const { visualState, configurationState } = useContext(CombineContext);
  const { back, transition } = visualState;
  const {
    deleteConfigurationByID,
    chosenConfiguration,
    setChosenConfiguration,
    fetchConfigurations,
  } = configurationState;

  const confirmDelete = () => {
    deleteConfigurationByID(chosenConfiguration);
    setChosenConfiguration(null);
    fetchConfigurations();
    back();
    //@TODO need to fetch the data again
  };

  return (
    <div>
      <button onClick={confirmDelete}>Yes, Delete</button>
      <button onClick={back}>Cancel</button>
    </div>
  );
};

export default ConfirmDelete;
