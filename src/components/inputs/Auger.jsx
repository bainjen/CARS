import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";

// min 8.7 feet
// max 25.7 feet
// user input form or +/- buttons to change size

const AugerDiv = styled.div`
  display: flex;
  margin: 0.5em;
  /* justify-content: flex-start; */
`;

const Auger = () => {
  const { lengthState } = useContext(CombineContext);
  const { augerLength, increaseLength, decreaseLength } = lengthState;

  return (
    <AugerDiv>
      <p>auger length: {augerLength} feet</p>
      {/* <span>{augerLength} feet</span> */}
      <button onClick={increaseLength}>+</button>
      <button onClick={decreaseLength}>-</button>
    </AugerDiv>
  );
};

export default Auger;
