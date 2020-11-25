import React, { useContext } from "react";
import styled from "styled-components";
import { CombineContext } from "./CombineContext";

const WizardDiv = styled.div`
  position: absolute;
  z-index: -2;
  top: 8vh;
  left: 78%;
  transform: rotate(45deg);
  & img {
    height: 300px;
  }
`;

const Wizard = () => {
  const { wizardState } = useContext(CombineContext);
  const { imageIndex } = wizardState;

  return (
    <WizardDiv>
      <img src={`./images/wizard${imageIndex}.png`}></img>
    </WizardDiv>
  );
};
export default Wizard;
