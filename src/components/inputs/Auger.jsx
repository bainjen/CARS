import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

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
      <p>auger length: {augerLength}'</p>
      {/* <button onClick={increaseLength}>+</button>
      <button onClick={decreaseLength}>-</button> */}
      <FontAwesomeIcon
        icon={faPlusCircle}
        onClick={increaseLength}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faMinusCircle}
        onClick={decreaseLength}
      ></FontAwesomeIcon>
    </AugerDiv>
  );
};

export default Auger;
