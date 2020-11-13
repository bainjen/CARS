import React, { useState } from "react";
import styled from "styled-components";

// min 8.7 feet
// max 25.7 feet
// user input form or +/- buttons to change size

const AugerDiv = styled.div`
  display: flex;
  margin: 1em;
`;

const Auger = () => {
  const [length, setLength] = useState(8.7);

  const handlePlus = () => {
    if (length < 25.7) {
      setLength((prev) => prev + 1);
    }
  };

  const handleMinus = () => {
    if (length > 8.7) {
      setLength((prev) => prev - 1);
    }
  };

  return (
    <AugerDiv>
      <p>auger length:</p>
      <span>{length} feet</span>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </AugerDiv>
  );
};

export default Auger;
