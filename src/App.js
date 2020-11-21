import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import styled from "styled-components";
import { createConfiguration } from "./graphql/mutations";
import { listConfigurations } from "./graphql/queries";
// import Field from "./components/Field";
// import Auger from "./components/inputs/Auger";
// import Fuel from "./components/inputs/Fuel";
// import Input from "./components/inputs/Input";
// import { CombineProvider } from "./components/CombineContext";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { wheelSize: "", augerLength: "", fuelType: "" };

const AppDiv = styled.div`
  margin: 1em;
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
      <h2>Combine Configurations</h2>
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
      <button onClick={addConfiguration}>Create Combine Configuration</button>
      {configurations.map((configuration, index) => (
        <div key={configuration.id ? configuration.id : index}>
          <p>{configuration.wheelSize}</p>
          <p>{configuration.augerLength}</p>
          <p>{configuration.fuelType}</p>
        </div>
      ))}
      {/* <CombineProvider>
        <Input />
        <Field />
      </CombineProvider> */}
    </AppDiv>
  );
}

export default App;
