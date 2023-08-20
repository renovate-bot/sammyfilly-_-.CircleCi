/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update a private cloud
 *
 * @summary Create or update a private cloud
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2022-05-01/examples/PrivateClouds_CreateOrUpdate.json
 */
async function privateCloudsCreateOrUpdate() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const privateCloud = {
    identity: { type: "SystemAssigned" },
    location: "eastus2",
    managementCluster: { clusterSize: 4 },
    networkBlock: "192.168.48.0/22",
    sku: { name: "AV36" },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.privateClouds.beginCreateOrUpdateAndWait(
    resourceGroupName,
    privateCloudName,
    privateCloud
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a private cloud
 *
 * @summary Create or update a private cloud
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2022-05-01/examples/PrivateClouds_CreateOrUpdate_Stretched.json
 */
async function privateCloudsCreateOrUpdateStretched() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const privateCloud = {
    availability: { secondaryZone: 2, strategy: "DualZone", zone: 1 },
    location: "eastus2",
    managementCluster: { clusterSize: 4 },
    networkBlock: "192.168.48.0/22",
    sku: { name: "AV36" },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.privateClouds.beginCreateOrUpdateAndWait(
    resourceGroupName,
    privateCloudName,
    privateCloud
  );
  console.log(result);
}

async function main() {
  privateCloudsCreateOrUpdate();
  privateCloudsCreateOrUpdateStretched();
}

main().catch(console.error);