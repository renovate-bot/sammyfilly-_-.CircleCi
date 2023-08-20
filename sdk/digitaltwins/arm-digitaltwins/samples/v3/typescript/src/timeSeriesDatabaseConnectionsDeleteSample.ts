/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureDigitalTwinsManagementClient } from "@azure/arm-digitaltwins";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete a time series database connection.
 *
 * @summary Delete a time series database connection.
 * x-ms-original-file: specification/digitaltwins/resource-manager/Microsoft.DigitalTwins/stable/2023-01-31/examples/TimeSeriesDatabaseConnectionsDelete_example.json
 */
async function deleteATimeSeriesDatabaseConnectionForADigitalTwinsInstance() {
  const subscriptionId =
    process.env["DIGITALTWINS_SUBSCRIPTION_ID"] ||
    "50016170-c839-41ba-a724-51e9df440b9e";
  const resourceGroupName =
    process.env["DIGITALTWINS_RESOURCE_GROUP"] || "resRg";
  const resourceName = "myDigitalTwinsService";
  const timeSeriesDatabaseConnectionName = "myConnection";
  const credential = new DefaultAzureCredential();
  const client = new AzureDigitalTwinsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.timeSeriesDatabaseConnections.beginDeleteAndWait(
    resourceGroupName,
    resourceName,
    timeSeriesDatabaseConnectionName
  );
  console.log(result);
}

async function main() {
  deleteATimeSeriesDatabaseConnectionForADigitalTwinsInstance();
}

main().catch(console.error);
