/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { TimeSeriesInsightsClient } = require("@azure/arm-timeseriesinsights");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update a reference data set in the specified environment.
 *
 * @summary Create or update a reference data set in the specified environment.
 * x-ms-original-file: specification/timeseriesinsights/resource-manager/Microsoft.TimeSeriesInsights/preview/2021-03-31-preview/examples/ReferenceDataSetsCreate.json
 */
async function referenceDataSetsCreate() {
  const subscriptionId = process.env["TIMESERIESINSIGHTS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["TIMESERIESINSIGHTS_RESOURCE_GROUP"] || "rg1";
  const environmentName = "env1";
  const referenceDataSetName = "rds1";
  const parameters = {
    keyProperties: [
      { name: "DeviceId1", type: "String" },
      { name: "DeviceFloor", type: "Double" },
    ],
    location: "West US",
  };
  const credential = new DefaultAzureCredential();
  const client = new TimeSeriesInsightsClient(credential, subscriptionId);
  const result = await client.referenceDataSets.createOrUpdate(
    resourceGroupName,
    environmentName,
    referenceDataSetName,
    parameters
  );
  console.log(result);
}

async function main() {
  referenceDataSetsCreate();
}

main().catch(console.error);