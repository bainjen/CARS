import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const AugerDiv = styled.div`
  display: flex;
  align-items: center;
  & div {
    width: 250px;
  }
  & svg {
    color: #f2cf12;
    margin-left: 5px;
  }
  & svg:hover {
    color: #a878ff;
  }
  & svg:active {
    color: #5a5bd6;
  }
`;

const Auger = () => {
  const { lengthState } = useContext(CombineContext);
  const { augerLength, increaseLength, decreaseLength } = lengthState;

  return (
    <AugerDiv>
      <div>
        <p>auger length: {augerLength}'</p>
      </div>
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
