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
  const { configurationState } = useContext(CombineContext);
  const { addConfiguration, configurations } = configurationState;
  console.log(configurationState);
  return (
    <InputDiv>
      <Auger />
      <Fuel />
      <Wheels />
      <button onClick={addConfiguration}>add</button>
    </InputDiv>
  );
};

export default Input;
