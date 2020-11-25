import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Input from "./components/inputs/Input";
import Output from "./components/outputs/Output";
import { CombineProvider } from "./components/CombineContext";
import { device } from "./devices";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 0.4fr 1fr;
    grid-template-rows: 100%;
    align-items: baseline;
    justify-items: center;
  }
`;

const AppDiv = styled.div``;

function App() {
  return (
    <AppDiv className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Combine Wizard</title>
        <link
          href="https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
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
