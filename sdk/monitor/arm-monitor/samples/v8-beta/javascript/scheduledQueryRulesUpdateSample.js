/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MonitorClient } = require("@azure/arm-monitor");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Update a scheduled query rule.
 *
 * @summary Update a scheduled query rule.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2022-08-01-preview/examples/patchScheduledQueryRule.json
 */
async function createOrUpdateAScheduledQueryRule() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "dd4bfc94-a096-412b-9c43-4bd13e35afbc";
  const resourceGroupName = process.env["MONITOR_RESOURCE_GROUP"] || "QueryResourceGroupName";
  const ruleName = "heartbeat";
  const parameters = { enabled: false };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.scheduledQueryRules.update(resourceGroupName, ruleName, parameters);
  console.log(result);
}

async function main() {
  createOrUpdateAScheduledQueryRule();
}

main().catch(console.error);
