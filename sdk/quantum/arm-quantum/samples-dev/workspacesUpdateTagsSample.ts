/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { TagsObject, AzureQuantumManagementClient } from "@azure/arm-quantum";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates an existing workspace's tags.
 *
 * @summary Updates an existing workspace's tags.
 * x-ms-original-file: specification/quantum/resource-manager/Microsoft.Quantum/preview/2022-01-10-preview/examples/quantumWorkspacesPatch.json
 */
async function quantumWorkspacesPatchTags() {
  const subscriptionId =
    process.env["QUANTUM_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["QUANTUM_RESOURCE_GROUP"] || "quantumResourcegroup";
  const workspaceName = "quantumworkspace1";
  const workspaceTags: TagsObject = {
    tags: { tag1: "value1", tag2: "value2" }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureQuantumManagementClient(credential, subscriptionId);
  const result = await client.workspaces.updateTags(
    resourceGroupName,
    workspaceName,
    workspaceTags
  );
  console.log(result);
}

async function main() {
  quantumWorkspacesPatchTags();
}

main().catch(console.error);
