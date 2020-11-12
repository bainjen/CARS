import React from "react";
import styled from "styled-components";

const AugerDiv = styled.div`
  background-color: red;
  width: 0.41684634%;
  height: 0.41684634%;
`;

// 8.7 foot auger is 0.41684634% of field width

const Combine = (props) => {
  let augers = [];
  for (let i = 0; i < 240; i++) {
    augers.push(<AugerDiv />);
  }
  return <>{augurs}</>;
};

export default Combine;
