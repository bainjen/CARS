import React, { useContext } from "react";
import { CombineContext } from "./CombineContext";
import styled from "styled-components";
import { calculateRelativeAugerSize } from "../helpers/helpers";

const AugerDiv = styled.div`
  position: absolute;
  top: ${(props) => props.yPosition}%; //prop passed to AugerDiv
  left: ${(props) => props.xPosition}%;
  background-color: red;
  width: ${(props) => props.size}%;
  height: ${(props) => props.size}%;
`;

// 8.7 foot auger is 0.41684634% of field width

const Combine = (props) => {
  const { lengthState, combinePositionState } = useContext(CombineContext);
  const { length } = lengthState;
  const { xPos, yPos } = combinePositionState;

  const relativeAugerSize = calculateRelativeAugerSize(length, 43560);
  const relativeYPosition = (yPos / (Math.sqrt(43560) * 10)) * 100;
  const relativeXPosition =
    (xPos / (Math.sqrt(43560) * 10)) * 100 - relativeAugerSize;

  return (
    <AugerDiv
      size={relativeAugerSize}
      yPosition={relativeYPosition}
      xPosition={relativeXPosition}
    />
  );
};

export default Combine;
