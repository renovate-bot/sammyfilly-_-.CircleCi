/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureArcVMwareManagementServiceAPI } = require("@azure/arm-connectedvmware");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to The operation to create or update the extension.
 *
 * @summary The operation to create or update the extension.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/PUTExtension.json
 */
async function createOrUpdateAMachineExtensionPut() {
  const subscriptionId = process.env["CONNECTEDVMWARE_SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName = process.env["CONNECTEDVMWARE_RESOURCE_GROUP"] || "myResourceGroup";
  const name = "myMachine";
  const extensionName = "CustomScriptExtension";
  const extensionParameters = {
    typePropertiesType: "CustomScriptExtension",
    location: "eastus2euap",
    publisher: "Microsoft.Compute",
    settings: {
      commandToExecute: 'powershell.exe -c "Get-Process | Where-Object { $_.CPU -gt 10000 }"',
    },
    typeHandlerVersion: "1.10",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(credential, subscriptionId);
  const result = await client.machineExtensions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    name,
    extensionName,
    extensionParameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateAMachineExtensionPut();
}

main().catch(console.error);
