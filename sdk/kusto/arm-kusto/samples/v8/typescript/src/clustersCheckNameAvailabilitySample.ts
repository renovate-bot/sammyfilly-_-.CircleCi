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
  ClusterCheckNameRequest,
  KustoManagementClient
} from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Checks that the cluster name is valid and is not already in use.
 *
 * @summary Checks that the cluster name is valid and is not already in use.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2023-05-02/examples/KustoClustersCheckNameAvailability.json
 */
async function kustoClustersCheckNameAvailability() {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-123456789098";
  const location = "westus";
  const clusterName: ClusterCheckNameRequest = {
    name: "kustoCluster",
    type: "Microsoft.Kusto/clusters"
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.clusters.checkNameAvailability(
    location,
    clusterName
  );
  console.log(result);
}

async function main() {
  kustoClustersCheckNameAvailability();
}

main().catch(console.error);