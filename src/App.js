import React from "react";
import styled from "styled-components";
import useConfigData from "./hooks/useConfigData";
// import Field from "./components/Field";
// import Auger from "./components/inputs/Auger";
// import Fuel from "./components/inputs/Fuel";
import Input from "./components/inputs/Input";
import { CombineProvider } from "./components/CombineContext";

const InputDiv = styled.div`
  margin: 1em;
  border: solid black 2px;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ConfigDiv = styled.div`
  margin: 1em;
  border: solid black 2px;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const AppDiv = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppDiv>
      <h2>Create New Combine Configuration</h2>
      {/* <InputDiv>
        <input
          onChange={(event) => setInput("wheelSize", event.target.value)}
          value={formState.wheelSize}
          placeholder="wheel size"
        />
        <input
          onChange={(event) => setInput("augerLength", event.target.value)}
          value={formState.augerLength}
          placeholder="auger length"
        />
        <input
          onChange={(event) => setInput("fuelType", event.target.value)}
          value={formState.fuelType}
          placeholder="fuelType"
        />
        <button onClick={addConfiguration}>Add</button>
      </InputDiv> */}

      {/* <h2>My Combines:</h2>
      {configurations.map((configuration, index) => (
        <ConfigDiv key={configuration.id ? configuration.id : index}>
          <p>Wheel Size: {configuration.wheelSize} </p>
          <span> | </span>
          <p>Auger Length: {configuration.augerLength} </p>
          <span> | </span>
          <p>Fuel Type: {configuration.fuelType}</p>
        </ConfigDiv>
      ))} */}
      <CombineProvider>
        <Input />
      </CombineProvider>
    </AppDiv>
  );
}

export default App;
