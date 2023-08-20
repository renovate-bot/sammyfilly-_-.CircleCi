/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MicrosoftResourceHealth } = require("@azure/arm-resourcehealth");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists the current availability status for all the resources in the subscription.
 *
 * @summary Lists the current availability status for all the resources in the subscription.
 * x-ms-original-file: specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/stable/2022-10-01/examples/AvailabilityStatuses_ListBySubscriptionId.json
 */
async function listHealthBySubscriptionId() {
  const subscriptionId = process.env["RESOURCEHEALTH_SUBSCRIPTION_ID"] || "subscriptionId";
  const expand = "recommendedactions";
  const options = {
    expand,
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftResourceHealth(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.availabilityStatuses.listBySubscriptionId(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listHealthBySubscriptionId();
}

main().catch(console.error);
