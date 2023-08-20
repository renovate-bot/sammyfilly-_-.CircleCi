/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get a KPack build result log download URL.
 *
 * @summary Get a KPack build result log download URL.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2023-03-01-preview/examples/BuildService_GetBuildResultLog.json
 */
async function buildServiceGetBuildResultLog() {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const buildServiceName = "default";
  const buildName = "mybuild";
  const buildResultName = "123";
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.buildServiceOperations.getBuildResultLog(
    resourceGroupName,
    serviceName,
    buildServiceName,
    buildName,
    buildResultName
  );
  console.log(result);
}

async function main() {
  buildServiceGetBuildResultLog();
}

main().catch(console.error);
