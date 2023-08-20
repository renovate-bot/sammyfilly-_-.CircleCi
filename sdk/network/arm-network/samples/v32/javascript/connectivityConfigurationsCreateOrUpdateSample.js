/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates/Updates a new network manager connectivity configuration
 *
 * @summary Creates/Updates a new network manager connectivity configuration
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-02-01/examples/NetworkManagerConnectivityConfigurationPut.json
 */
async function connectivityConfigurationsPut() {
  const subscriptionId =
    process.env["NETWORK_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "myResourceGroup";
  const networkManagerName = "testNetworkManager";
  const configurationName = "myTestConnectivityConfig";
  const connectivityConfiguration = {
    description: "Sample Configuration",
    appliesToGroups: [
      {
        groupConnectivity: "None",
        isGlobal: "False",
        networkGroupId:
          "subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkManagers/testNetworkManager/networkGroups/group1",
        useHubGateway: "True",
      },
    ],
    connectivityTopology: "HubAndSpoke",
    deleteExistingPeering: "True",
    hubs: [
      {
        resourceId:
          "subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myTestConnectivityConfig",
        resourceType: "Microsoft.Network/virtualNetworks",
      },
    ],
    isGlobal: "True",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.connectivityConfigurations.createOrUpdate(
    resourceGroupName,
    networkManagerName,
    configurationName,
    connectivityConfiguration
  );
  console.log(result);
}

async function main() {
  connectivityConfigurationsPut();
}

main().catch(console.error);
