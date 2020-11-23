import { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createConfiguration } from "../graphql/mutations";
import { listConfigurations } from "../graphql/queries";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const initialState = { wheelSize: "", augerLength: "", fuelType: "" };

const useConfigData = () => {
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

  return { formState, configurations, setInput, addConfiguration };
};

export default useConfigData;
