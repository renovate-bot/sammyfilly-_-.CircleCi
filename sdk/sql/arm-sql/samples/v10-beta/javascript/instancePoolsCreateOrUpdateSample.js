/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SqlManagementClient } = require("@azure/arm-sql");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates an instance pool.
 *
 * @summary Creates or updates an instance pool.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/CreateOrUpdateInstancePoolMax.json
 */
async function createAnInstancePoolWithAllProperties() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "group1";
  const instancePoolName = "testIP";
  const parameters = {
    licenseType: "LicenseIncluded",
    location: "japaneast",
    sku: { name: "GP_Gen5", family: "Gen5", tier: "GeneralPurpose" },
    subnetId:
      "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Network/virtualNetworks/myvnet/subnets/mysubnet1",
    tags: { a: "b" },
    vCores: 8,
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.instancePools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    instancePoolName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an instance pool.
 *
 * @summary Creates or updates an instance pool.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/CreateOrUpdateInstancePoolMin.json
 */
async function createAnInstancePoolWithMinProperties() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "group1";
  const instancePoolName = "testIP";
  const parameters = {
    licenseType: "LicenseIncluded",
    location: "japaneast",
    sku: { name: "GP_Gen5", family: "Gen5", tier: "GeneralPurpose" },
    subnetId:
      "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Network/virtualNetworks/myvnet/subnets/mysubnet1",
    vCores: 8,
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.instancePools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    instancePoolName,
    parameters
  );
  console.log(result);
}

async function main() {
  createAnInstancePoolWithAllProperties();
  createAnInstancePoolWithMinProperties();
}

main().catch(console.error);
