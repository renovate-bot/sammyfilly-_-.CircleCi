/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { RecoveryServicesClient } = require("@azure/arm-recoveryservices");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Updates the vault.
 *
 * @summary Updates the vault.
 * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2023-02-01/examples/PATCHVault.json
 */
async function updateResource() {
  const subscriptionId =
    process.env["RECOVERYSERVICES_SUBSCRIPTION_ID"] || "77777777-b0c6-47a2-b37c-d8e65a629c18";
  const resourceGroupName = process.env["RECOVERYSERVICES_RESOURCE_GROUP"] || "HelloWorld";
  const vaultName = "swaggerExample";
  const vault = { tags: { patchKey: "PatchKeyUpdated" } };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesClient(credential, subscriptionId);
  const result = await client.vaults.beginUpdateAndWait(resourceGroupName, vaultName, vault);
  console.log(result);
}

/**
 * This sample demonstrates how to Updates the vault.
 *
 * @summary Updates the vault.
 * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2023-02-01/examples/PATCHVault_WithCMK.json
 */
async function updateResourceWithCustomerManagedKeys() {
  const subscriptionId =
    process.env["RECOVERYSERVICES_SUBSCRIPTION_ID"] || "77777777-b0c6-47a2-b37c-d8e65a629c18";
  const resourceGroupName = process.env["RECOVERYSERVICES_RESOURCE_GROUP"] || "HelloWorld";
  const vaultName = "swaggerExample";
  const vault = {
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/85bf5e8c30844f42Add2746ebb7e97b2/resourcegroups/defaultrg/providers/MicrosoftManagedIdentity/userAssignedIdentities/examplemsi":
          {},
      },
    },
    properties: {
      encryption: {
        infrastructureEncryption: "Enabled",
        kekIdentity: {
          userAssignedIdentity:
            "/subscriptions/85bf5e8c-3084-4f42-add2-746ebb7e97b2/resourcegroups/defaultrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/examplemsi",
        },
        keyVaultProperties: {
          keyUri: "https://cmk2xkv.vault.azure.net/keys/Key1/0767b348bb1a4c07baa6c4ec0055d2b3",
        },
      },
    },
    tags: { patchKey: "PatchKeyUpdated" },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesClient(credential, subscriptionId);
  const result = await client.vaults.beginUpdateAndWait(resourceGroupName, vaultName, vault);
  console.log(result);
}

/**
 * This sample demonstrates how to Updates the vault.
 *
 * @summary Updates the vault.
 * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2023-02-01/examples/PatchVault_WithCMK2.json
 */
async function updateResourceWithCustomerManagedKeys2() {
  const subscriptionId =
    process.env["RECOVERYSERVICES_SUBSCRIPTION_ID"] || "77777777-b0c6-47a2-b37c-d8e65a629c18";
  const resourceGroupName = process.env["RECOVERYSERVICES_RESOURCE_GROUP"] || "HelloWorld";
  const vaultName = "swaggerExample";
  const vault = {
    identity: { type: "SystemAssigned" },
    properties: {
      encryption: { kekIdentity: { useSystemAssignedIdentity: true } },
    },
    tags: { patchKey: "PatchKeyUpdated" },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesClient(credential, subscriptionId);
  const result = await client.vaults.beginUpdateAndWait(resourceGroupName, vaultName, vault);
  console.log(result);
}

/**
 * This sample demonstrates how to Updates the vault.
 *
 * @summary Updates the vault.
 * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2023-02-01/examples/PATCHVault_WithCMK3.json
 */
async function updateResourceWithCustomerManagedKeys3() {
  const subscriptionId =
    process.env["RECOVERYSERVICES_SUBSCRIPTION_ID"] || "77777777-b0c6-47a2-b37c-d8e65a629c18";
  const resourceGroupName = process.env["RECOVERYSERVICES_RESOURCE_GROUP"] || "HelloWorld";
  const vaultName = "swaggerExample";
  const vault = {
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/85bf5e8c30844f42Add2746ebb7e97b2/resourcegroups/defaultrg/providers/MicrosoftManagedIdentity/userAssignedIdentities/examplemsi":
          {},
      },
    },
    properties: {
      encryption: {
        keyVaultProperties: {
          keyUri: "https://cmk2xkv.vault.azure.net/keys/Key1/0767b348bb1a4c07baa6c4ec0055d2b3",
        },
      },
    },
    tags: { patchKey: "PatchKeyUpdated" },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesClient(credential, subscriptionId);
  const result = await client.vaults.beginUpdateAndWait(resourceGroupName, vaultName, vault);
  console.log(result);
}

/**
 * This sample demonstrates how to Updates the vault.
 *
 * @summary Updates the vault.
 * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2023-02-01/examples/PATCHVault_WithUserAssignedIdentity.json
 */
async function updateResourceWithUserAssignedIdentity() {
  const subscriptionId =
    process.env["RECOVERYSERVICES_SUBSCRIPTION_ID"] || "77777777-b0c6-47a2-b37c-d8e65a629c18";
  const resourceGroupName = process.env["RECOVERYSERVICES_RESOURCE_GROUP"] || "HelloWorld";
  const vaultName = "swaggerExample";
  const vault = {
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/85bf5e8c30844f42Add2746ebb7e97b2/resourcegroups/defaultrg/providers/MicrosoftManagedIdentity/userAssignedIdentities/examplemsi":
          {},
      },
    },
    tags: { patchKey: "PatchKeyUpdated" },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesClient(credential, subscriptionId);
  const result = await client.vaults.beginUpdateAndWait(resourceGroupName, vaultName, vault);
  console.log(result);
}

/**
 * This sample demonstrates how to Updates the vault.
 *
 * @summary Updates the vault.
 * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2023-02-01/examples/PATCHVault_WithMonitoringSettings.json
 */
async function updateVaultWithMonitoringSetting() {
  const subscriptionId =
    process.env["RECOVERYSERVICES_SUBSCRIPTION_ID"] || "77777777-b0c6-47a2-b37c-d8e65a629c18";
  const resourceGroupName = process.env["RECOVERYSERVICES_RESOURCE_GROUP"] || "HelloWorld";
  const vaultName = "swaggerExample";
  const vault = {
    properties: {
      monitoringSettings: {
        azureMonitorAlertSettings: { alertsForAllJobFailures: "Enabled" },
        classicAlertSettings: { alertsForCriticalOperations: "Disabled" },
      },
    },
    tags: { patchKey: "PatchKeyUpdated" },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesClient(credential, subscriptionId);
  const result = await client.vaults.beginUpdateAndWait(resourceGroupName, vaultName, vault);
  console.log(result);
}

async function main() {
  updateResource();
  updateResourceWithCustomerManagedKeys();
  updateResourceWithCustomerManagedKeys2();
  updateResourceWithCustomerManagedKeys3();
  updateResourceWithUserAssignedIdentity();
  updateVaultWithMonitoringSetting();
}

main().catch(console.error);