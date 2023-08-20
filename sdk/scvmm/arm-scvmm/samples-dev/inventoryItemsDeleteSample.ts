/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Scvmm } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes an inventoryItem.
 *
 * @summary Deletes an inventoryItem.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/preview/2020-06-05-preview/examples/DeleteInventoryItem.json
 */
async function deleteInventoryItem() {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] ||
    "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "testrg";
  const vmmServerName = "ContosoVMMServer";
  const inventoryItemName = "12345678-1234-1234-1234-123456789abc";
  const credential = new DefaultAzureCredential();
  const client = new Scvmm(credential, subscriptionId);
  const result = await client.inventoryItems.delete(
    resourceGroupName,
    vmmServerName,
    inventoryItemName
  );
  console.log(result);
}

async function main() {
  deleteInventoryItem();
}

main().catch(console.error);