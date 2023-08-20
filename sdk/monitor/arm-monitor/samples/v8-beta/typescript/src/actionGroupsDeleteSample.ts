/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete an action group.
 *
 * @summary Delete an action group.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2022-06-01/examples/deleteActionGroup.json
 */
async function deleteAnActionGroup() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "187f412d-1758-44d9-b052-169e2564721d";
  const resourceGroupName =
    process.env["MONITOR_RESOURCE_GROUP"] || "Default-NotificationRules";
  const actionGroupName = "SampleActionGroup";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.actionGroups.delete(
    resourceGroupName,
    actionGroupName
  );
  console.log(result);
}

async function main() {
  deleteAnActionGroup();
}

main().catch(console.error);