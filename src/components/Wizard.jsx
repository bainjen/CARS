import React, { useContext } from "react";
import styled from "styled-components";
import { device } from "../devices";

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
  return (
    <WizardDiv>
      <img src="./images/wizard3.png"></img>
    </WizardDiv>
  );
};
export default Wizard;
