/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 *
 * @summary Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/sapvirtualinstances/SAPSupportedSkus_Distributed.json
 */
async function sapSupportedSkusDistributed() {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] || "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const location = "centralus";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPSupportedSku(location);
  console.log(result);
}

/**
 * This sample demonstrates how to Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 *
 * @summary Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/sapvirtualinstances/SAPSupportedSkus_DistributedHA_AvSet.json
 */
async function sapSupportedSkusDistributedHaAvSet() {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] || "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const location = "centralus";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPSupportedSku(location);
  console.log(result);
}

/**
 * This sample demonstrates how to Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 *
 * @summary Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/sapvirtualinstances/SAPSupportedSkus_DistributedHA_AvZone.json
 */
async function sapSupportedSkusDistributedHaAvZone() {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] || "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const location = "centralus";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPSupportedSku(location);
  console.log(result);
}

/**
 * This sample demonstrates how to Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 *
 * @summary Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/sapvirtualinstances/SAPSupportedSkus_SingleServer.json
 */
async function sapSupportedSkusSingleServer() {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] || "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const location = "centralus";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPSupportedSku(location);
  console.log(result);
}

async function main() {
  sapSupportedSkusDistributed();
  sapSupportedSkusDistributedHaAvSet();
  sapSupportedSkusDistributedHaAvZone();
  sapSupportedSkusSingleServer();
}

main().catch(console.error);
