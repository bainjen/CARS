import React from "react";
import styled from "styled-components";
// import useConfigData from "./hooks/useConfigData";
// import Field from "./components/Field";
// import Auger from "./components/inputs/Auger";
// import Fuel from "./components/inputs/Fuel";
import Input from "./components/inputs/Input";
import Output from "./components/outputs/Output";
import { CombineProvider } from "./components/CombineContext";

// const ConfigDiv = styled.div`
//   margin: 1em;
//   border: solid black 2px;
//   width: 50%;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
// `;

const AppDiv = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppDiv>
      <CombineProvider>
        <Input />
        <Output />
      </CombineProvider>
    </AppDiv>
  );
}

export default App;
