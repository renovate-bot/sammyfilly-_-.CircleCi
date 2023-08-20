/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Description for Creates or updates an App Service Plan.
 *
 * @summary Description for Creates or updates an App Service Plan.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-09-01/examples/CreateOrUpdateAppServicePlan.json
 */
async function createOrUpdateAppServicePlan() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "testrg123";
  const name = "testsf6141";
  const appServicePlan = {
    kind: "app",
    location: "East US",
    sku: { name: "P1", capacity: 1, family: "P", size: "P1", tier: "Premium" },
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServicePlans.beginCreateOrUpdateAndWait(
    resourceGroupName,
    name,
    appServicePlan
  );
  console.log(result);
}

async function main() {
  createOrUpdateAppServicePlan();
}

main().catch(console.error);
