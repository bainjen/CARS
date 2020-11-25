import React, { useContext } from "react";
import styled from "styled-components";

const WizardDiv = styled.div`
  /* margin-left: 1em; */
  /* & h1 {
    font-family: "Sacramento", cursive;
    font-size: 8vh;
    margin-top: 0.25em;
  } */

  /* & img {
    height: 25vw;
  } */
`;

const Wizard = () => {
  return (
    <WizardDiv>
      {/* <h1>Auger Wizard</h1> */}
      <img src="./images/wizard3.png"></img>
    </WizardDiv>
  );
};
export default Wizard;
