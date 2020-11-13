import React, { useState } from "react";
import styled from "styled-components";

// base size = 60 inches - making assumption this is min size

const WheelDiv = styled.div`
  display: flex;
  margin: 1em;
`;

const Wheels = () => {
  const [wheelSize, setWheelSize] = useState(60);

  const handlePlus = () => setWheelSize((prev) => prev + 1);

  const handleMinus = () => {
    if (wheelSize > 60) {
      setWheelSize((prev) => prev - 1);
    }
  };

  return (
    <WheelDiv>
      <p>wheel size:</p>
      <p>{wheelSize} inches</p>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </WheelDiv>
  );
};

export default Wheels;
