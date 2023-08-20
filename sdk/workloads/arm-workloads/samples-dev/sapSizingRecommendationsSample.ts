/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WorkloadsClient } from "@azure/arm-workloads";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get SAP sizing recommendations by providing input SAPS for application tier and memory required for database tier
 *
 * @summary Get SAP sizing recommendations by providing input SAPS for application tier and memory required for database tier
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/sapvirtualinstances/SAPSizingRecommendations_S4HANA_Distributed.json
 */
async function sapSizingRecommendationsS4HanaDistributed() {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] ||
    "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const location = "centralus";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPSizingRecommendations(location);
  console.log(result);
}

/**
 * This sample demonstrates how to Get SAP sizing recommendations by providing input SAPS for application tier and memory required for database tier
 *
 * @summary Get SAP sizing recommendations by providing input SAPS for application tier and memory required for database tier
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/sapvirtualinstances/SAPSizingRecommendations_S4HANA_HA_AvSet.json
 */
async function sapSizingRecommendationsS4HanaDistributedHaAvSet() {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] ||
    "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const location = "centralus";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPSizingRecommendations(location);
  console.log(result);
}

/**
 * This sample demonstrates how to Get SAP sizing recommendations by providing input SAPS for application tier and memory required for database tier
 *
 * @summary Get SAP sizing recommendations by providing input SAPS for application tier and memory required for database tier
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/sapvirtualinstances/SAPSizingRecommendations_S4HANA_HA_AvZone.json
 */
async function sapSizingRecommendationsS4HanaDistributedHaAvZone() {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] ||
    "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const location = "centralus";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPSizingRecommendations(location);
  console.log(result);
}

/**
 * This sample demonstrates how to Get SAP sizing recommendations by providing input SAPS for application tier and memory required for database tier
 *
 * @summary Get SAP sizing recommendations by providing input SAPS for application tier and memory required for database tier
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/sapvirtualinstances/SAPSizingRecommendations_S4HANA_SingleServer.json
 */
async function sapSizingRecommendationsS4HanaSingleServer() {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] ||
    "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const location = "centralus";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPSizingRecommendations(location);
  console.log(result);
}

async function main() {
  sapSizingRecommendationsS4HanaDistributed();
  sapSizingRecommendationsS4HanaDistributedHaAvSet();
  sapSizingRecommendationsS4HanaDistributedHaAvZone();
  sapSizingRecommendationsS4HanaSingleServer();
}

main().catch(console.error);
