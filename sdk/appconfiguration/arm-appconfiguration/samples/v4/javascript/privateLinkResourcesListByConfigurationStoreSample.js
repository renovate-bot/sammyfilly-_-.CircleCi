/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AppConfigurationManagementClient } = require("@azure/arm-appconfiguration");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets the private link resources that need to be created for a configuration store.
 *
 * @summary Gets the private link resources that need to be created for a configuration store.
 * x-ms-original-file: specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/stable/2023-03-01/examples/PrivateLinkResourcesListByConfigurationStore.json
 */
async function privateLinkResourcesListGroupIds() {
  const subscriptionId =
    process.env["APPCONFIGURATION_SUBSCRIPTION_ID"] || "c80fb759-c965-4c6a-9110-9b2b2d038882";
  const resourceGroupName = process.env["APPCONFIGURATION_RESOURCE_GROUP"] || "myResourceGroup";
  const configStoreName = "contoso";
  const credential = new DefaultAzureCredential();
  const client = new AppConfigurationManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateLinkResources.listByConfigurationStore(
    resourceGroupName,
    configStoreName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  privateLinkResourcesListGroupIds();
}

main().catch(console.error);
