import { container } from "aws-amplify";
import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  border: 2px solid black;
  width: 50vw;
  height: 50vw;
`;

const Field = () => {
  return <ContainerDiv />;
};

export default Field;
