import { useEffect, useState } from "react";
import useCombineParams from "./useCombineParams";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createConfiguration, deleteConfiguration } from "../graphql/mutations";
import { listConfigurations, listSimulations } from "../graphql/queries";
import useWizard from "./useWizard";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const useConfigData = () => {
  const {
    augerLength,
    fuelType,
    wheelSize,
    setFuelType,
    resetParams,
    increaseLength,
    decreaseLength,
    increaseWheels,
    decreaseWheels,
  } = useCombineParams();

  const { setTrigger, imageIndex } = useWizard();

  const [configurations, setConfigurations] = useState([]);
  const [simulations, setSimulations] = useState([]);

  useEffect(() => {
    fetchConfigurations();
    fetchSimulations();
  }, []);

  async function fetchSimulations() {
    try {
      const simulationData = await API.graphql(
        graphqlOperation(listSimulations)
      );

      const simulations = simulationData.data.listSimulations.items;
      simulations.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      setSimulations(simulations);
    } catch (err) {
      console.log("error fetching simulations");
    }
  }

  async function fetchConfigurations() {
    try {
      const configurationData = await API.graphql(
        graphqlOperation(listConfigurations)
      );
      const configurations = configurationData.data.listConfigurations.items;
      configurations.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      setConfigurations(configurations);
    } catch (err) {
      console.log("error fetching configurations");
    }
  }

  async function addConfiguration() {
    try {
      const configuration = { augerLength, fuelType, wheelSize, runNum: 1 };
      resetParams();
      setTrigger(true);
      await API.graphql(
        graphqlOperation(createConfiguration, { input: configuration })
      );
      fetchConfigurations();
    } catch (err) {
      console.log("error creating configuration:", err);
    }
  }

  async function deleteConfigurationByID(id) {
    try {
      await API.graphql(
        graphqlOperation(deleteConfiguration, { input: { id: id } })
      );
      fetchConfigurations();
    } catch (err) {
      console.log("error deleting configuration:", err);
    }
  }

  return {
    configurations,
    simulations,
    addConfiguration,
    fetchConfigurations,
    deleteConfigurationByID,
    augerLength,
    fuelType,
    wheelSize,
    setFuelType,
    resetParams,
    increaseLength,
    decreaseLength,
    increaseWheels,
    decreaseWheels,
    imageIndex,
  };
};

export default useConfigData;
