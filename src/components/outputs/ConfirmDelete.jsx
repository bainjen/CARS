import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
  font-family: "Varela Round", sans-serif;
  color: #4b4a4a;
  padding: 1em;

  & p {
    text-align: center;
    font-size: 0.85em;
    margin-bottom: 1em;
  }
`;

const ConfirmBtn = styled.button`
  width: 7em;
  padding: 0.5em;
  border-radius: 6px;
  border: 0px;
  font-size: 0.8em;
  outline: none;
  background-color: ${(props) => props.btncolor};
  color: white;
  font-weight: 600;
  font-family: "Varela Round", sans-serif;
  margin-top: 1em;
  margin-right: 1.5em;
`;

const ConfirmDelete = () => {
  const { visualState, configurationState } = useContext(CombineContext);
  const { back } = visualState;
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
  };

  return (
    <ContainerDiv>
      <p>Are you sure you want to delete this combine configuration?</p>
      <div>
        <ConfirmBtn btncolor={"#a878ff"} onClick={back}>
          Cancel
        </ConfirmBtn>
        <ConfirmBtn btncolor={"#ff78a1"} onClick={confirmDelete}>
          Yes, Delete
        </ConfirmBtn>
      </div>
    </ContainerDiv>
  );
};

export default ConfirmDelete;
