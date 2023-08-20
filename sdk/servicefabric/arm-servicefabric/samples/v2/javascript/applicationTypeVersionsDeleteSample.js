/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ServiceFabricManagementClient } = require("@azure/arm-servicefabric");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Delete a Service Fabric application type version resource with the specified name.
 *
 * @summary Delete a Service Fabric application type version resource with the specified name.
 * x-ms-original-file: specification/servicefabric/resource-manager/Microsoft.ServiceFabric/stable/2021-06-01/examples/ApplicationTypeVersionDeleteOperation_example.json
 */
async function deleteAnApplicationTypeVersion() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "resRg";
  const clusterName = "myCluster";
  const applicationTypeName = "myAppType";
  const version = "1.0";
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricManagementClient(credential, subscriptionId);
  const result = await client.applicationTypeVersions.beginDeleteAndWait(
    resourceGroupName,
    clusterName,
    applicationTypeName,
    version
  );
  console.log(result);
}

deleteAnApplicationTypeVersion().catch(console.error);
