/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConfiguration = /* GraphQL */ `
  query GetConfiguration($id: ID!) {
    getConfiguration(id: $id) {
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
export const listConfigurations = /* GraphQL */ `
  query ListConfigurations(
    $filter: ModelConfigurationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConfigurations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        wheelSize
        augerLength
        fuelType
        simulations {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSimulation = /* GraphQL */ `
  query GetSimulation($id: ID!) {
    getSimulation(id: $id) {
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
export const listSimulations = /* GraphQL */ `
  query ListSimulations(
    $filter: ModelSimulationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSimulations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
