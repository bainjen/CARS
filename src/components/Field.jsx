import { container } from "aws-amplify";
import React from "react";
import styled from "styled-components";
import Combine from "./Combine";

const ContainerDiv = styled.div`
  border: 2px solid black;
  width: 50vw;
  height: 50vw;
`;

// represents a 10x10 acre field. One pass across in either direction ~ 2,087.1 feet
// 8.7 foot auger is 0.41684634% of field width
const Field = () => {
  return (
    <ContainerDiv>
      <Combine />
    </ContainerDiv>
  );
};

export default Field;