import React, { useContext } from "react";
import { CombineContext } from "./CombineContext";
import styled from "styled-components";

// 8.7/Math.sqrt(43560)*10
const calculateRelativeAugerSize = (augerLength, squaredFieldUnit) => {
  return (augerLength / Math.sqrt(squaredFieldUnit)) * 10;
};

const AugerDiv = styled.div`
  background-color: red;
  width: ${(props) =>
    calculateRelativeAugerSize(props.augerLength, props.squaredFieldUnit)}%;
  height: ${(props) =>
    calculateRelativeAugerSize(props.augerLength, props.squaredFieldUnit)}%;
`;

// 8.7 foot auger is 0.41684634% of field width

const Combine = (props) => {
  const { lengthState, fieldState } = useContext(CombineContext);
  const { length } = lengthState;
  console.log(fieldState.fieldMatrix);

  return <AugerDiv squaredFieldUnit={43560} augerLength={length} />;
};

export default Combine;
