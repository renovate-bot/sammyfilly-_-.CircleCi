/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { Scvmm } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Start virtual machine.
 *
 * @summary Start virtual machine.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/preview/2020-06-05-preview/examples/StartVirtualMachine.json
 */
async function startVirtualMachine() {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] || "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "testrg";
  const virtualMachineName = "DemoVM";
  const credential = new DefaultAzureCredential();
  const client = new Scvmm(credential, subscriptionId);
  const result = await client.virtualMachines.beginStartAndWait(
    resourceGroupName,
    virtualMachineName
  );
  console.log(result);
}

async function main() {
  startVirtualMachine();
}

main().catch(console.error);