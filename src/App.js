import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Input from "./components/inputs/Input";
import Output from "./components/outputs/Output";
import { CombineProvider } from "./components/CombineContext";

const InfoContainer = styled.div`
  /* margin: 1em; */
  /* border: solid black 2px; */
  width: 90vh;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  justify-content: space-evenly;
`;

const AppDiv = styled.div`
  margin: 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppDiv>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Auger Wizard</title>
      </Helmet>
      <CombineProvider>
        <InfoContainer>
          <Input />
          <Output />
        </InfoContainer>
      </CombineProvider>
    </AppDiv>
  );
}

export default App;
