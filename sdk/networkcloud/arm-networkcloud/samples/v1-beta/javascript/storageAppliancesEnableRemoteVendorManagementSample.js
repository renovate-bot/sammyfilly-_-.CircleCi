/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkCloud } = require("@azure/arm-networkcloud");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Enable remote vendor management of the provided storage appliance.
 *
 * @summary Enable remote vendor management of the provided storage appliance.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2023-05-01-preview/examples/StorageAppliances_EnableRemoteVendorManagement.json
 */
async function turnOnRemoteVendorManagementForStorageAppliance() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] || "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName = process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const storageApplianceName = "storageApplianceName";
  const storageApplianceEnableRemoteVendorManagementParameters = {
    supportEndpoints: ["10.0.0.0/24"],
  };
  const options = {
    storageApplianceEnableRemoteVendorManagementParameters,
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.storageAppliances.beginEnableRemoteVendorManagementAndWait(
    resourceGroupName,
    storageApplianceName,
    options
  );
  console.log(result);
}

async function main() {
  turnOnRemoteVendorManagementForStorageAppliance();
}

main().catch(console.error);
