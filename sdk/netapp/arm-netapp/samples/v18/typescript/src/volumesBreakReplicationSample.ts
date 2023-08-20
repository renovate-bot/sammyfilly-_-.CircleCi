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
  BreakReplicationRequest,
  VolumesBreakReplicationOptionalParams,
  NetAppManagementClient
} from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Break the replication connection on the destination volume
 *
 * @summary Break the replication connection on the destination volume
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-11-01/examples/Volumes_BreakReplication.json
 */
async function volumesBreakReplication() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const poolName = "pool1";
  const volumeName = "volume1";
  const body: BreakReplicationRequest = { forceBreakReplication: false };
  const options: VolumesBreakReplicationOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.volumes.beginBreakReplicationAndWait(
    resourceGroupName,
    accountName,
    poolName,
    volumeName,
    options
  );
  console.log(result);
}

async function main() {
  volumesBreakReplication();
}

main().catch(console.error);
