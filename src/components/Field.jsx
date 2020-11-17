import React, { useContext } from "react";
import { CombineContext } from "./CombineContext";
import styled from "styled-components";
import Combine from "./Combine";
import { calculateRelativeAugerSize } from "../helpers/helpers";

const ContainerDiv = styled.div`
  position: relative;
  border: 2px solid black;
  width: 50vw;
  height: 50vw;
`;

// const SinglePlotDiv = styled.div`
//   position: absolute;
//   top: ${(props) => props.y}%;
//   left: 0;
//   background-color: #d5a9a9;
//   width: ${(props) => props.width}%;
//   height: ${(props) => props.height}%;
//   /* border: 1px solid black; */
//   /* box-sizing: border-box; //keeps border from adding pixel in size around div */
// `;

// represents a 10x10 acre field. One pass across in either direction ~ 2,087.1 feet
// 8.7 foot auger is 0.41684634% of field width
const Field = () => {
  const { lengthState, fieldState } = useContext(CombineContext);
  const { length } = lengthState;
  const { fieldMatrix } = fieldState;

  // const relativeSize = calculateRelativeAugerSize(length, 43560);
  // const numOfPlotsAcross = fieldMatrix.length;
  // const plots = fieldMatrix.map((y, i) => {
  //   return (
  //     <SinglePlotDiv
  //       key={i}
  //       y={i * relativeSize}
  //       width={relativeSize * numOfPlotsAcross}
  //       height={relativeSize}
  //     />
  //   );
  // });

  return (
    <ContainerDiv>
      {/* {plots} */}
      {/* <SinglePlotDiv
        squaredFieldUnit={43560}
        augerLength={length}
        x={10}
        y={0}
      /> */}
      <Combine />
    </ContainerDiv>
  );
};

export default Field;
