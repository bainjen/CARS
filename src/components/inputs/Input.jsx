import React, { useContext } from "react";
import Auger from "./Auger";
import Fuel from "./Fuel";
import Wheels from "./Wheels";
import styled from "styled-components";
import { CombineContext } from "../CombineContext";

const InputDiv = styled.div`
  /* display: flex; */
  /* margin: 1em; */
`;

const Input = () => {
  const { combinePositionState } = useContext(CombineContext);
  const { setStartSimulation } = combinePositionState;

  return (
    <InputDiv>
      <button onClick={() => setStartSimulation(true)}>start</button>
      <Auger />
      <Fuel />
      <Wheels />
    </InputDiv>
  );
};

export default Input;
