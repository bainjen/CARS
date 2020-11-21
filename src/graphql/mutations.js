/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const batchAddSimulations = /* GraphQL */ `
  mutation BatchAddSimulations($simulations: [CreateSimulationInput]) {
    batchAddSimulations(simulations: $simulations) {
      id
      planeTime
      percentagePlaned
      cost
      efficiency
      configurationID
      createdAt
      updatedAt
    }
  }
`;
export const createConfiguration = /* GraphQL */ `
  mutation CreateConfiguration(
    $input: CreateConfigurationInput!
    $condition: ModelConfigurationConditionInput
  ) {
    createConfiguration(input: $input, condition: $condition) {
      id
      wheelSize
      augerLength
      fuelType
      simulations {
        items {
          id
          planeTime
          percentagePlaned
          cost
          efficiency
          configurationID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateConfiguration = /* GraphQL */ `
  mutation UpdateConfiguration(
    $input: UpdateConfigurationInput!
    $condition: ModelConfigurationConditionInput
  ) {
    updateConfiguration(input: $input, condition: $condition) {
      id
      wheelSize
      augerLength
      fuelType
      simulations {
        items {
          id
          planeTime
          percentagePlaned
          cost
          efficiency
          configurationID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteConfiguration = /* GraphQL */ `
  mutation DeleteConfiguration(
    $input: DeleteConfigurationInput!
    $condition: ModelConfigurationConditionInput
  ) {
    deleteConfiguration(input: $input, condition: $condition) {
      id
      wheelSize
      augerLength
      fuelType
      simulations {
        items {
          id
          planeTime
          percentagePlaned
          cost
          efficiency
          configurationID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSimulation = /* GraphQL */ `
  mutation CreateSimulation(
    $input: CreateSimulationInput!
    $condition: ModelSimulationConditionInput
  ) {
    createSimulation(input: $input, condition: $condition) {
      id
      planeTime
      percentagePlaned
      cost
      efficiency
      configurationID
      createdAt
      updatedAt
    }
  }
`;
export const updateSimulation = /* GraphQL */ `
  mutation UpdateSimulation(
    $input: UpdateSimulationInput!
    $condition: ModelSimulationConditionInput
  ) {
    updateSimulation(input: $input, condition: $condition) {
      id
      planeTime
      percentagePlaned
      cost
      efficiency
      configurationID
      createdAt
      updatedAt
    }
  }
`;
export const deleteSimulation = /* GraphQL */ `
  mutation DeleteSimulation(
    $input: DeleteSimulationInput!
    $condition: ModelSimulationConditionInput
  ) {
    deleteSimulation(input: $input, condition: $condition) {
      id
      planeTime
      percentagePlaned
      cost
      efficiency
      configurationID
      createdAt
      updatedAt
    }
  }
`;
