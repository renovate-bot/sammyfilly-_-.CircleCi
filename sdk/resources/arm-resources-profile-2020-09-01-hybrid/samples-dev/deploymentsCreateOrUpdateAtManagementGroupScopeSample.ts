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
  ScopedDeployment,
  ResourceManagementClient
} from "@azure/arm-resources-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to You can provide the template and parameters directly in the request or link to JSON files.
 *
 * @summary You can provide the template and parameters directly in the request or link to JSON files.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2019-10-01/examples/PutDeploymentAtManagementGroup.json
 */
async function createDeploymentAtManagementGroupScope() {
  const subscriptionId =
    process.env["RESOURCES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const groupId = "tiano-group1";
  const deploymentName = "mg-dep01";
  const parameters: ScopedDeployment = {
    location: "eastus",
    properties: {
      mode: "Incremental",
      parameters: {},
      templateLink: { uri: "{templateUri}" }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceManagementClient(credential, subscriptionId);
  const result = await client.deployments.beginCreateOrUpdateAtManagementGroupScopeAndWait(
    groupId,
    deploymentName,
    parameters
  );
  console.log(result);
}

async function main() {
  createDeploymentAtManagementGroupScope();
}

main().catch(console.error);
