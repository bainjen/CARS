import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import styled from "styled-components";
import { createConfiguration } from "./graphql/mutations";
import { listConfigurations } from "./graphql/queries";
// import Field from "./components/Field";
import Auger from "./components/inputs/Auger";
// import Fuel from "./components/inputs/Fuel";
// import Input from "./components/inputs/Input";
// import { CombineProvider } from "./components/CombineContext";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { wheelSize: "", augerLength: "", fuelType: "" };

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
  const [formState, setFormState] = useState(initialState);
  const [configurations, setConfigurations] = useState([]);

  useEffect(() => {
    fetchConfigurations();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchConfigurations() {
    try {
      const configurationData = await API.graphql(
        graphqlOperation(listConfigurations)
      );
      const configurations = configurationData.data.listConfigurations.items;
      setConfigurations(configurations);
    } catch (err) {
      console.log("error fetching configurations");
    }
  }

  async function addConfiguration() {
    try {
      if (!formState.wheelSize || !formState.augerLength || !formState.fuelType)
        return;
      const configuration = { ...formState };
      setConfigurations([...configurations, configuration]);
      setFormState(initialState);
      await API.graphql(
        graphqlOperation(createConfiguration, { input: configuration })
      );
    } catch (err) {
      console.log("error creating configuration:", err);
    }
  }

  return (
    <AppDiv>
      <h2>Create New Combine Configuration</h2>
      <InputDiv>
        {/* <Auger /> */}
        <input
          onChange={(event) => setInput("wheelSize", event.target.value)}
          // style={styles.input}
          value={formState.wheelSize}
          placeholder="wheel size"
        />
        <input
          onChange={(event) => setInput("augerLength", event.target.value)}
          // style={styles.input}
          value={formState.augerLength}
          placeholder="auger length"
        />
        <input
          onChange={(event) => setInput("fuelType", event.target.value)}
          // style={styles.input}
          value={formState.fuelType}
          placeholder="fuelType"
        />
        <button onClick={addConfiguration}>Add</button>
      </InputDiv>

      <h2>My Combines:</h2>
      {configurations.map((configuration, index) => (
        <ConfigDiv key={configuration.id ? configuration.id : index}>
          <p>Wheel Size: {configuration.wheelSize} </p>
          <span> | </span>
          <p>Auger Length: {configuration.augerLength} </p>
          <span> | </span>
          <p>Fuel Type: {configuration.fuelType}</p>
          {/* <button>show data</button> */}
        </ConfigDiv>
      ))}
      {/* <CombineProvider>
        <Input />
        <Field />
      </CombineProvider> */}
    </AppDiv>
  );
}

export default App;
