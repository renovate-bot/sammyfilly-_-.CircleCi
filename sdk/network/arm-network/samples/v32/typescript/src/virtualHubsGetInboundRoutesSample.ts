/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  GetInboundRoutesParameters,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the inbound routes configured for the Virtual Hub on a particular connection.
 *
 * @summary Gets the inbound routes configured for the Virtual Hub on a particular connection.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-02-01/examples/GetInboundRoutes.json
 */
async function inboundRoutesForTheVirtualHubOnAParticularConnection() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualHubName = "virtualHub1";
  const getInboundRoutesParameters: GetInboundRoutesParameters = {
    connectionType: "ExpressRouteConnection",
    resourceUri:
      "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/expressRouteGateways/exrGw1/expressRouteConnections/exrConn1"
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualHubs.beginGetInboundRoutesAndWait(
    resourceGroupName,
    virtualHubName,
    getInboundRoutesParameters
  );
  console.log(result);
}

async function main() {
  inboundRoutesForTheVirtualHubOnAParticularConnection();
}

main().catch(console.error);
