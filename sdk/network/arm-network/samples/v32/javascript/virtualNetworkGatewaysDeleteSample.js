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
 * This sample demonstrates how to Deletes the specified virtual network gateway.
 *
 * @summary Deletes the specified virtual network gateway.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-02-01/examples/VirtualNetworkGatewayDelete.json
 */
async function deleteVirtualNetworkGateway() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualNetworkGatewayName = "vpngw";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkGateways.beginDeleteAndWait(
    resourceGroupName,
    virtualNetworkGatewayName
  );
  console.log(result);
}

async function main() {
  deleteVirtualNetworkGateway();
}

main().catch(console.error);
