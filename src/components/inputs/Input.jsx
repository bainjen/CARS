import React, { useContext } from "react";
import Auger from "./Auger";
import Fuel from "./Fuel";
import Wheels from "./Wheels";
import styled from "styled-components";
import { CombineContext } from "../CombineContext";

//

const InputDiv = styled.div`
  /* margin: 1em; */
  /* height: 40vh; */
  /* width: 50vw; */
  font-size: 2vw;
  /* border: solid black 2px; */
  display: flex;
  flex-direction: column;
  /* width: 50%; */
  & p {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
  }
`;

const CreateBtn = styled.button`
  height: 2em;
  width: 4em;
  border-radius: 6px;
  border: display-none;
  font-size: 0.75em;
  font-family: "Montserrat", sans-serif;
`;

const Input = () => {
  const { configurationState } = useContext(CombineContext);
  const { addConfiguration, configurations } = configurationState;
  console.log(configurationState);
  return (
    <div>
      <h2>Create New Combine Configuration</h2>
      <InputDiv>
        <Auger />
        <Fuel />
        <Wheels />
        <CreateBtn onClick={addConfiguration}>Add</CreateBtn>
      </InputDiv>
    </div>
  );
};

export default Input;
