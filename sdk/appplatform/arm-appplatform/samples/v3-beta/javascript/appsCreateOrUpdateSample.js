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
 * This sample demonstrates how to Create a new App or update an exiting App.
 *
 * @summary Create a new App or update an exiting App.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2023-03-01-preview/examples/Apps_CreateOrUpdate.json
 */
async function appsCreateOrUpdate() {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const appResource = {
    identity: {
      type: "SystemAssigned,UserAssigned",
      principalId: undefined,
      tenantId: undefined,
      userAssignedIdentities: {
        "/subscriptions/00000000000000000000000000000000/resourceGroups/samplegroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/id1":
          {
            clientId: undefined,
            principalId: undefined,
          },
        "/subscriptions/00000000000000000000000000000000/resourceGroups/samplegroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/id2":
          {
            clientId: undefined,
            principalId: undefined,
          },
      },
    },
    location: "eastus",
    properties: {
      addonConfigs: {
        applicationConfigurationService: {
          resourceId:
            "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/configurationServices/myacs",
        },
        serviceRegistry: {
          resourceId:
            "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/serviceRegistries/myServiceRegistry",
        },
      },
      customPersistentDisks: [
        {
          customPersistentDiskProperties: {
            type: "AzureFileVolume",
            enableSubPath: true,
            mountOptions: ["uid=0", "gid=0", "dir_mode=0777", "file_mode=0777"],
            mountPath: "/mypath1/mypath2",
            shareName: "myFileShare",
          },
          storageId: "myASCStorageID",
        },
      ],
      enableEndToEndTLS: false,
      httpsOnly: false,
      loadedCertificates: [
        {
          loadTrustStore: false,
          resourceId:
            "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/certificates/mycert1",
        },
        {
          loadTrustStore: true,
          resourceId:
            "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/certificates/mycert2",
        },
      ],
      persistentDisk: { mountPath: "/mypersistentdisk", sizeInGB: 2 },
      public: true,
      temporaryDisk: { mountPath: "/mytemporarydisk", sizeInGB: 2 },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.apps.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    appName,
    appResource
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a new App or update an exiting App.
 *
 * @summary Create a new App or update an exiting App.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2023-03-01-preview/examples/Apps_CreateOrUpdate_VNetInjection.json
 */
async function appsCreateOrUpdateVNetInjection() {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const appResource = {
    identity: {
      type: "SystemAssigned,UserAssigned",
      principalId: undefined,
      tenantId: undefined,
      userAssignedIdentities: {
        "/subscriptions/00000000000000000000000000000000/resourceGroups/samplegroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/id1":
          {
            clientId: undefined,
            principalId: undefined,
          },
        "/subscriptions/00000000000000000000000000000000/resourceGroups/samplegroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/id2":
          {
            clientId: undefined,
            principalId: undefined,
          },
      },
    },
    location: "eastus",
    properties: {
      addonConfigs: {
        applicationConfigurationService: {
          resourceId:
            "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/configurationServices/myacs",
        },
        serviceRegistry: {
          resourceId:
            "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/serviceRegistries/myServiceRegistry",
        },
      },
      customPersistentDisks: [
        {
          customPersistentDiskProperties: {
            type: "AzureFileVolume",
            mountOptions: ["uid=0", "gid=0", "dir_mode=0777", "file_mode=0777"],
            mountPath: "/mypath1/mypath2",
            shareName: "myFileShare",
          },
          storageId: "myASCStorageID",
        },
      ],
      enableEndToEndTLS: false,
      httpsOnly: false,
      loadedCertificates: [
        {
          loadTrustStore: false,
          resourceId:
            "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/certificates/mycert1",
        },
        {
          loadTrustStore: true,
          resourceId:
            "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/certificates/mycert2",
        },
      ],
      persistentDisk: { mountPath: "/mypersistentdisk", sizeInGB: 2 },
      public: true,
      temporaryDisk: { mountPath: "/mytemporarydisk", sizeInGB: 2 },
      vnetAddons: { publicEndpoint: true },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.apps.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    appName,
    appResource
  );
  console.log(result);
}

async function main() {
  appsCreateOrUpdate();
  appsCreateOrUpdateVNetInjection();
}

main().catch(console.error);
