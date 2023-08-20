/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  EnvironmentContainer,
  AzureMachineLearningWorkspaces
} from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update container.
 *
 * @summary Create or update container.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2022-10-01/examples/EnvironmentContainer/createOrUpdate.json
 */
async function createOrUpdateEnvironmentContainer() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg123";
  const workspaceName = "testworkspace";
  const name = "testEnvironment";
  const body: EnvironmentContainer = {
    properties: {
      description: "string",
      properties: {
        additionalProp1: "string",
        additionalProp2: "string",
        additionalProp3: "string"
      },
      tags: {
        additionalProp1: "string",
        additionalProp2: "string",
        additionalProp3: "string"
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningWorkspaces(credential, subscriptionId);
  const result = await client.environmentContainers.createOrUpdate(
    resourceGroupName,
    workspaceName,
    name,
    body
  );
  console.log(result);
}

createOrUpdateEnvironmentContainer().catch(console.error);
