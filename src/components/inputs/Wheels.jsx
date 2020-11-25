import React, { useContext, useEffect } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

// base size = 60 inches - making assumption this is min size

const WheelDiv = styled.div`
  display: flex;
  margin: 0.5em;
  /* justify-content: flex-end; */
  /* color: rgb(103, 103, 103); */
`;

const Wheels = () => {
  const { wheelState } = useContext(CombineContext);
  const { wheelSize, increaseWheels, decreaseWheels } = wheelState;

  return (
    <WheelDiv>
      <p>wheel size: {wheelSize}"</p>
      <FontAwesomeIcon
        icon={faPlusCircle}
        onClick={increaseWheels}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faMinusCircle}
        onClick={decreaseWheels}
      ></FontAwesomeIcon>
      {/* <button onClick={increaseWheels}>+</button> */}
      {/* <button onClick={decreaseWheels}>-</button> */}
    </WheelDiv>
  );
};

export default Wheels;
