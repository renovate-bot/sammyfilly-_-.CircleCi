/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityCenter } = require("@azure/arm-security");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Policies for protecting resources using Just-in-Time access control.
 *
 * @summary Policies for protecting resources using Just-in-Time access control.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2020-01-01/examples/JitNetworkAccessPolicies/GetJitNetworkAccessPoliciesSubscription_example.json
 */
async function getJitNetworkAccessPoliciesOnASubscription() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.jitNetworkAccessPolicies.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getJitNetworkAccessPoliciesOnASubscription();
}

main().catch(console.error);
