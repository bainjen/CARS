import React from "react";
import styled from "styled-components";

// base size = 60 inches - making assumption this is min size

const WheelDiv = styled.div`
  display: flex;
  margin: 1em;
`;

const Wheels = () => {
  return (
    <WheelDiv>
      <p>wheel size:</p>
      <p>60 inches</p>
      <button>+</button>
      <button>-</button>
    </WheelDiv>
  );
};

export default Wheels;
