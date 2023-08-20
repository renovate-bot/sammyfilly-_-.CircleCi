/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets all network watchers by subscription.
 *
 * @summary Gets all network watchers by subscription.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-02-01/examples/NetworkWatcherListAll.json
 */
async function listAllNetworkWatchers() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.networkWatchers.listAll()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAllNetworkWatchers();
}

main().catch(console.error);
