/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SynapseManagementClient } = require("@azure/arm-synapse");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Pause a SQL pool
 *
 * @summary Pause a SQL pool
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/PauseSqlPool.json
 */
async function pauseASqlAnalyticsPool() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] || "01234567-89ab-4def-0123-456789abcdef";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "Default-SQL-SouthEastAsia";
  const workspaceName = "testsvr";
  const sqlPoolName = "testdwdb";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.sqlPools.beginPauseAndWait(
    resourceGroupName,
    workspaceName,
    sqlPoolName
  );
  console.log(result);
}

async function main() {
  pauseASqlAnalyticsPool();
}

main().catch(console.error);
