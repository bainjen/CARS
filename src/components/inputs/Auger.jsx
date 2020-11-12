import React from "react";
import styled from "styled-components";

// min 8.7 feet
// max 25.7 feet
// user input form or +/- buttons to change size

const AugerDiv = styled.div`
  display: flex;
  margin: 1em;
`;

const Auger = () => {
  return (
    <AugerDiv>
      <p>auger length:</p>
      <span>8.7 feet</span>
      <button>+</button>
      <button>-</button>
    </AugerDiv>
  );
};

export default Auger;
