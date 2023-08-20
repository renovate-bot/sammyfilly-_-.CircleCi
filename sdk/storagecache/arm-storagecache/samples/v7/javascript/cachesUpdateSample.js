/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { StorageCacheManagementClient } = require("@azure/arm-storagecache");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Update a cache instance.
 *
 * @summary Update a cache instance.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2023-05-01/examples/Caches_Update.json
 */
async function cachesUpdate() {
  const subscriptionId =
    process.env["STORAGECACHE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["STORAGECACHE_RESOURCE_GROUP"] || "scgroup";
  const cacheName = "sc1";
  const cache = {
    cacheSizeGB: 3072,
    directoryServicesSettings: {
      activeDirectory: {
        cacheNetBiosName: "contosoSmb",
        domainName: "contosoAd.contoso.local",
        domainNetBiosName: "contosoAd",
        primaryDnsIpAddress: "192.0.2.10",
        secondaryDnsIpAddress: "192.0.2.11",
      },
      usernameDownload: { extendedGroups: true, usernameSource: "AD" },
    },
    location: "westus",
    networkSettings: {
      dnsSearchDomain: "contoso.com",
      dnsServers: ["10.1.22.33", "10.1.12.33"],
      mtu: 1500,
      ntpServer: "time.contoso.com",
    },
    securitySettings: {
      accessPolicies: [
        {
          name: "default",
          accessRules: [
            {
              access: "rw",
              rootSquash: false,
              scope: "default",
              submountAccess: true,
              suid: false,
            },
          ],
        },
        {
          name: "restrictive",
          accessRules: [
            {
              access: "rw",
              filter: "10.99.3.145",
              rootSquash: false,
              scope: "host",
              submountAccess: true,
              suid: true,
            },
            {
              access: "rw",
              filter: "10.99.1.0/24",
              rootSquash: false,
              scope: "network",
              submountAccess: true,
              suid: true,
            },
            {
              access: "no",
              anonymousGID: "65534",
              anonymousUID: "65534",
              rootSquash: true,
              scope: "default",
              submountAccess: true,
              suid: false,
            },
          ],
        },
      ],
    },
    sku: { name: "Standard_2G" },
    subnet:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.Network/virtualNetworks/scvnet/subnets/sub1",
    tags: { dept: "Contoso" },
    upgradeSettings: {
      scheduledTime: new Date("2022-04-26T18:25:43.511Z"),
      upgradeScheduleEnabled: true,
    },
  };
  const options = { cache };
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.caches.beginUpdateAndWait(resourceGroupName, cacheName, options);
  console.log(result);
}

/**
 * This sample demonstrates how to Update a cache instance.
 *
 * @summary Update a cache instance.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2023-05-01/examples/Caches_Update_ldap_only.json
 */
async function cachesUpdateLdapOnly() {
  const subscriptionId =
    process.env["STORAGECACHE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["STORAGECACHE_RESOURCE_GROUP"] || "scgroup";
  const cacheName = "sc1";
  const cache = {
    cacheSizeGB: 3072,
    directoryServicesSettings: {
      usernameDownload: {
        credentials: {
          bindDn: "cn=ldapadmin,dc=contosoad,dc=contoso,dc=local",
          bindPassword: "<bindPassword>",
        },
        extendedGroups: true,
        ldapBaseDN: "dc=contosoad,dc=contoso,dc=local",
        ldapServer: "192.0.2.12",
        usernameSource: "LDAP",
      },
    },
    location: "westus",
    networkSettings: {
      dnsSearchDomain: "contoso.com",
      dnsServers: ["10.1.22.33", "10.1.12.33"],
      mtu: 1500,
      ntpServer: "time.contoso.com",
    },
    securitySettings: {
      accessPolicies: [
        {
          name: "default",
          accessRules: [
            {
              access: "rw",
              rootSquash: false,
              scope: "default",
              submountAccess: true,
              suid: false,
            },
          ],
        },
        {
          name: "restrictive",
          accessRules: [
            {
              access: "rw",
              filter: "10.99.3.145",
              rootSquash: false,
              scope: "host",
              submountAccess: true,
              suid: true,
            },
            {
              access: "rw",
              filter: "10.99.1.0/24",
              rootSquash: false,
              scope: "network",
              submountAccess: true,
              suid: true,
            },
            {
              access: "no",
              anonymousGID: "65534",
              anonymousUID: "65534",
              rootSquash: true,
              scope: "default",
              submountAccess: true,
              suid: false,
            },
          ],
        },
      ],
    },
    sku: { name: "Standard_2G" },
    subnet:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.Network/virtualNetworks/scvnet/subnets/sub1",
    tags: { dept: "Contoso" },
    upgradeSettings: {
      scheduledTime: new Date("2022-04-26T18:25:43.511Z"),
      upgradeScheduleEnabled: true,
    },
  };
  const options = { cache };
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.caches.beginUpdateAndWait(resourceGroupName, cacheName, options);
  console.log(result);
}

async function main() {
  cachesUpdate();
  cachesUpdateLdapOnly();
}

main().catch(console.error);
