import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";

// min 8.7 feet
// max 25.7 feet
// user input form or +/- buttons to change size

const AugerDiv = styled.div`
  display: flex;
  margin: 1em;
`;

const Auger = () => {
  const { lengthState } = useContext(CombineContext);
  const { length, increaseLength, decreaseLength } = lengthState;

  return (
    <AugerDiv>
      <p>auger length:</p>
      <span>{length} feet</span>
      <button onClick={increaseLength}>+</button>
      <button onClick={decreaseLength}>-</button>
    </AugerDiv>
  );
};

export default Auger;
