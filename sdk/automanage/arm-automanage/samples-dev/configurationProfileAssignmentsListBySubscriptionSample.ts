/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AutomanageClient } from "@azure/arm-automanage";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get list of configuration profile assignments under a given subscription
 *
 * @summary Get list of configuration profile assignments under a given subscription
 * x-ms-original-file: specification/automanage/resource-manager/Microsoft.Automanage/stable/2022-05-04/examples/listConfigurationProfileAssignmentsBySubscription.json
 */
async function listConfigurationProfileAssignmentsBySubscription() {
  const subscriptionId =
    process.env["AUTOMANAGE_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const credential = new DefaultAzureCredential();
  const client = new AutomanageClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.configurationProfileAssignments.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listConfigurationProfileAssignmentsBySubscription();
}

main().catch(console.error);