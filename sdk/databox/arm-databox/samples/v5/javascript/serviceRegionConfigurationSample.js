/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DataBoxManagementClient } = require("@azure/arm-databox");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to This API provides configuration details specific to given region/location at Subscription level.
 *
 * @summary This API provides configuration details specific to given region/location at Subscription level.
 * x-ms-original-file: specification/databox/resource-manager/Microsoft.DataBox/stable/2022-12-01/examples/RegionConfiguration.json
 */
async function regionConfiguration() {
  const subscriptionId = process.env["DATABOX_SUBSCRIPTION_ID"] || "YourSubscriptionId";
  const location = "westus";
  const regionConfigurationRequest = {
    scheduleAvailabilityRequest: {
      skuName: "DataBox",
      storageLocation: "westus",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataBoxManagementClient(credential, subscriptionId);
  const result = await client.service.regionConfiguration(location, regionConfigurationRequest);
  console.log(result);
}

async function main() {
  regionConfiguration();
}

main().catch(console.error);
