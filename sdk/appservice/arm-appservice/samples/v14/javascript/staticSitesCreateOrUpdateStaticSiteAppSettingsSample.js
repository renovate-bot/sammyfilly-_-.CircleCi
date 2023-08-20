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
 * This sample demonstrates how to Description for Creates or updates the app settings of a static site.
 *
 * @summary Description for Creates or updates the app settings of a static site.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-09-01/examples/CreateOrUpdateStaticSiteAppSettings.json
 */
async function createsOrUpdatesTheAppSettingsOfAStaticSite() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "rg";
  const name = "testStaticSite0";
  const appSettings = {
    properties: { setting1: "someval", setting2: "someval2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.createOrUpdateStaticSiteAppSettings(
    resourceGroupName,
    name,
    appSettings
  );
  console.log(result);
}

async function main() {
  createsOrUpdatesTheAppSettingsOfAStaticSite();
}

main().catch(console.error);
