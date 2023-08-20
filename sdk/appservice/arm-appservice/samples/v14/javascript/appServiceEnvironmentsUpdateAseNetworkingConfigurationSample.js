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
 * This sample demonstrates how to Description for Update networking configuration of an App Service Environment
 *
 * @summary Description for Update networking configuration of an App Service Environment
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-09-01/examples/AppServiceEnvironments_UpdateAseNetworkingConfiguration.json
 */
async function updateNetworkingConfigurationOfAnAppServiceEnvironment() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "test-rg";
  const name = "test-ase";
  const aseNetworkingConfiguration = {
    ftpEnabled: true,
    remoteDebugEnabled: true,
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceEnvironments.updateAseNetworkingConfiguration(
    resourceGroupName,
    name,
    aseNetworkingConfiguration
  );
  console.log(result);
}

async function main() {
  updateNetworkingConfigurationOfAnAppServiceEnvironment();
}

main().catch(console.error);
