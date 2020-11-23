import React, { useContext, useEffect } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";

// base size = 60 inches - making assumption this is min size

const WheelDiv = styled.div`
  display: flex;
  margin: 0.5em;
`;

const Wheels = () => {
  const { wheelState } = useContext(CombineContext);
  const { wheelSize, increaseWheels, decreaseWheels } = wheelState;

  return (
    <WheelDiv>
      <p>wheel size: {wheelSize} inches</p>
      {/* <p>{wheelSize} inches</p> */}
      <button onClick={increaseWheels}>+</button>
      <button onClick={decreaseWheels}>-</button>
    </WheelDiv>
  );
};

export default Wheels;
