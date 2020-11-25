import React, { useContext } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

// base size = 60 inches - making assumption this is min size

const WheelDiv = styled.div`
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

const Wheels = () => {
  const { wheelState } = useContext(CombineContext);
  const { wheelSize, increaseWheels, decreaseWheels } = wheelState;

  return (
    <WheelDiv>
      <div>
        <p>wheel size: {wheelSize}"</p>
      </div>
      <FontAwesomeIcon
        icon={faPlusCircle}
        onClick={increaseWheels}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faMinusCircle}
        onClick={decreaseWheels}
      ></FontAwesomeIcon>
    </WheelDiv>
  );
};

export default Wheels;
