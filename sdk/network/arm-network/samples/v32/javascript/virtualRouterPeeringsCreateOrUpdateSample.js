/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates the specified Virtual Router Peering.
 *
 * @summary Creates or updates the specified Virtual Router Peering.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-02-01/examples/VirtualRouterPeeringPut.json
 */
async function createVirtualRouterPeering() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualRouterName = "virtualRouter";
  const peeringName = "peering1";
  const parameters = {
    peerAsn: 20000,
    peerIp: "192.168.1.5",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualRouterPeerings.beginCreateOrUpdateAndWait(
    resourceGroupName,
    virtualRouterName,
    peeringName,
    parameters
  );
  console.log(result);
}

async function main() {
  createVirtualRouterPeering();
}

main().catch(console.error);
