import React, { useContext, useEffect } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";
import useMoveCombine from "../../hooks/useMoveCombine";

// base size = 60 inches - making assumption this is min size

const WheelDiv = styled.div`
  display: flex;
  margin: 1em;
`;

const Wheels = () => {
  const { wheelState, lengthState, combinePositionState } = useContext(
    CombineContext
  );
  const { wheelSize, increaseWheels, decreaseWheels } = wheelState;
  const { xPos, yPos, movePosition } = combinePositionState;
  console.log(lengthState.length);

  //log variables every 60 seconds = 1 hr
  //start button
  //include logic to log to db
  //if start (state) timer runs
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     movePosition();
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [xPos]);
  return (
    <WheelDiv>
      <p>{xPos}</p>
      <p>{yPos}</p>
      <button onClick={() => movePosition()}>move</button>
      <p>wheel size:</p>
      <p>{wheelSize} inches</p>
      <button onClick={increaseWheels}>+</button>
      <button onClick={decreaseWheels}>-</button>
    </WheelDiv>
  );
};

export default Wheels;
