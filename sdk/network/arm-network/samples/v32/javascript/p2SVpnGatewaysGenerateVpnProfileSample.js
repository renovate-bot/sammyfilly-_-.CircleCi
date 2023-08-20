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
 * This sample demonstrates how to Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group.
 *
 * @summary Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-02-01/examples/P2SVpnGatewayGenerateVpnProfile.json
 */
async function generateP2SVpnGatewayVpnprofile() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const gatewayName = "p2sVpnGateway1";
  const parameters = {
    authenticationMethod: "EAPTLS",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.p2SVpnGateways.beginGenerateVpnProfileAndWait(
    resourceGroupName,
    gatewayName,
    parameters
  );
  console.log(result);
}

async function main() {
  generateP2SVpnGatewayVpnprofile();
}

main().catch(console.error);
