/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AuthorizationManagementClient } = require("@azure/arm-authorization");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get the specified alert configuration.
 *
 * @summary Get the specified alert configuration.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2022-08-01-preview/examples/GetAlertConfigurationById.json
 */
async function getAlertConfigurationById() {
  const scope = "subscriptions/afa2a084-766f-4003-8ae1-c4aeb893a99f";
  const alertId = "TooManyOwnersAssignedToResource";
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const result = await client.alertConfigurations.get(scope, alertId);
  console.log(result);
}

async function main() {
  getAlertConfigurationById();
}

main().catch(console.error);
