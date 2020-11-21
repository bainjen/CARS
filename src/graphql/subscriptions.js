/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConfiguration = /* GraphQL */ `
  subscription OnCreateConfiguration {
    onCreateConfiguration {
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
export const onUpdateConfiguration = /* GraphQL */ `
  subscription OnUpdateConfiguration {
    onUpdateConfiguration {
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
export const onDeleteConfiguration = /* GraphQL */ `
  subscription OnDeleteConfiguration {
    onDeleteConfiguration {
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
export const onCreateSimulation = /* GraphQL */ `
  subscription OnCreateSimulation {
    onCreateSimulation {
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
export const onUpdateSimulation = /* GraphQL */ `
  subscription OnUpdateSimulation {
    onUpdateSimulation {
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
export const onDeleteSimulation = /* GraphQL */ `
  subscription OnDeleteSimulation {
    onDeleteSimulation {
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
