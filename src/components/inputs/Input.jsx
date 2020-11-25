import React, { useContext } from "react";
import Auger from "./Auger";
import Fuel from "./Fuel";
import Wheels from "./Wheels";
import styled from "styled-components";
import { CombineContext } from "../CombineContext";
import { device } from "../../devices";

const ContainerDiv = styled.div`
  background-color: #333396;
  font-size: 28px;
  font-weight: 600;
  padding: 5%;
  width: 90vw;
  color: #d7d7f2;
  font-family: "Varela Round", sans-serif;
  & h1 {
    font-size: 1.5em;
    color: #f2cf12;
    margin-top: 0px;
  }
  @media ${device.laptop} {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 90%;
    box-shadow: 0px 4px 8px rgba(51, 51, 150, 0.5);
    & h1 {
      font-size: 2.5em;
    }
  }
`;

const InputDiv = styled.div`
  font-size: 0.9em;
  display: flex;
  flex-direction: column;
  & h2 {
    font-size: 78px;
  }
  & p {
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
  background-color: #a878ff;
  color: white;
  font-weight: 600;
  font-family: "Varela Round", sans-serif;
  margin-top: 1em;
  margin-right: 1.5em;
`;

const Input = () => {
  const { configurationState } = useContext(CombineContext);
  const { addConfiguration } = configurationState;

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
