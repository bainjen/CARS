import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";
import useMoveCombine from "../../hooks/useMoveCombine";

// base size = 60 inches - making assumption this is min size

const WheelDiv = styled.div`
  display: flex;
  margin: 1em;
`;

const Wheels = () => {
  const { wheelState, lengthState } = useContext(CombineContext);
  const { wheelSize, increaseWheels, decreaseWheels } = wheelState;
  const { xPos, yPos, movePosition } = useMoveCombine(wheelSize);
  console.log(lengthState.length);
  return (
    <WheelDiv>
      <p>{xPos}</p>
      <p>{yPos}</p>
      <button onClick={() => movePosition(wheelSize, lengthState.length)}>
        move
      </button>
      <p>wheel size:</p>
      <p>{wheelSize} inches</p>
      <button onClick={increaseWheels}>+</button>
      <button onClick={decreaseWheels}>-</button>
    </WheelDiv>
  );
};

export default Wheels;
