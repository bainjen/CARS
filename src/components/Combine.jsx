import React, { useContext } from "react";
import { CombineContext } from "./CombineContext";
import styled from "styled-components";
import { calculateRelativeAugerSize } from "../helpers/helpers";

const AugerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  width: ${(props) => props.size}%;
  height: ${(props) => props.size}%;
`;

// 8.7 foot auger is 0.41684634% of field width

const Combine = (props) => {
  const { lengthState, fieldState } = useContext(CombineContext);
  const { length } = lengthState;
  const relativeAugerSize = calculateRelativeAugerSize(length, 43560);

  return <AugerDiv size={relativeAugerSize} />;
};

export default Combine;
