import React, { useContext } from "react";
import Auger from "./Auger";
import Fuel from "./Fuel";
import Wheels from "./Wheels";
import styled from "styled-components";
import { CombineContext } from "../CombineContext";

const ContainerDiv = styled.div`
  font-size: 28px;
  font-weight: 600;
  font-family: "Varela Round", sans-serif;
  color: #4b4a4a;
`;

const InputDiv = styled.div`
  font-size: 0.9em;
  display: flex;
  flex-direction: column;
  & h2 {
    font-size: 78px;
  }
  & p {
    /* font-family: "Montserrat", sans-serif;
     */
    font-family: "Varela Round", sans-serif;
    font-weight: 400;
    color: #ffffed;
  }
`;

const CreateBtn = styled.button`
  height: 2em;
  width: 5em;
  border-radius: 6px;
  border: 0px;
  font-size: 0.8em;
  outline: none;
  /* font-family: "Montserrat", sans-serif; */
  background-color: #333396;
  color: white;
  font-weight: 600;
  font-family: "Varela Round", sans-serif;
`;

const Input = () => {
  const { configurationState } = useContext(CombineContext);
  const { addConfiguration } = configurationState;
  console.log(configurationState);
  return (
    <ContainerDiv>
      <h1>Auger Wizard</h1>
      <h2>Configure a New Combine: </h2>
      <InputDiv>
        <Auger />
        <Fuel />
        <Wheels />
        <CreateBtn onClick={addConfiguration}>Add</CreateBtn>
      </InputDiv>
    </ContainerDiv>
  );
};

export default Input;
