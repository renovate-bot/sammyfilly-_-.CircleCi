/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureMediaServices } from "@azure/arm-mediaservices";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all private endpoint connections.
 *
 * @summary List all private endpoint connections.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Accounts/stable/2021-11-01/examples/private-endpoint-connection-list.json
 */
async function getAllPrivateEndpointConnections() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contoso";
  const accountName = "contososports";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.privateEndpointConnections.list(
    resourceGroupName,
    accountName
  );
  console.log(result);
}

async function main() {
  getAllPrivateEndpointConnections();
}

main().catch(console.error);