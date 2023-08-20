/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { KustoManagementClient } = require("@azure/arm-kusto");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates a data connection.
 *
 * @summary Creates or updates a data connection.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-12-29/examples/KustoDataConnectionsCosmosDbCreateOrUpdate.json
 */
async function kustoDataConnectionsCosmosDbCreateOrUpdate() {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] || "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = process.env["KUSTO_RESOURCE_GROUP"] || "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "KustoDatabase1";
  const dataConnectionName = "dataConnectionTest";
  const parameters = {
    cosmosDbAccountResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.DocumentDb/databaseAccounts/cosmosDbAccountTest1",
    cosmosDbContainer: "cosmosDbContainerTest",
    cosmosDbDatabase: "cosmosDbDatabaseTest",
    kind: "CosmosDb",
    location: "westus",
    managedIdentityResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/managedidentityTest1",
    mappingRuleName: "TestMapping",
    retrievalStartDate: new Date("2022-07-29T12:00:00.6554616Z"),
    tableName: "TestTable",
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.dataConnections.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterName,
    databaseName,
    dataConnectionName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a data connection.
 *
 * @summary Creates or updates a data connection.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-12-29/examples/KustoDataConnectionsCreateOrUpdate.json
 */
async function kustoDataConnectionsCreateOrUpdate() {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] || "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = process.env["KUSTO_RESOURCE_GROUP"] || "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "KustoDatabase8";
  const dataConnectionName = "dataConnectionTest";
  const parameters = {
    consumerGroup: "testConsumerGroup1",
    eventHubResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.EventHub/namespaces/eventhubTestns1/eventhubs/eventhubTest1",
    kind: "EventHub",
    location: "westus",
    managedIdentityResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/managedidentityTest1",
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.dataConnections.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterName,
    databaseName,
    dataConnectionName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a data connection.
 *
 * @summary Creates or updates a data connection.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-12-29/examples/KustoDataConnectionsEventGridCreateOrUpdate.json
 */
async function kustoDataConnectionsEventGridCreateOrUpdate() {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] || "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = process.env["KUSTO_RESOURCE_GROUP"] || "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "KustoDatabase8";
  const dataConnectionName = "dataConnectionTest";
  const parameters = {
    blobStorageEventType: "Microsoft.Storage.BlobCreated",
    consumerGroup: "$Default",
    dataFormat: "JSON",
    databaseRouting: "Single",
    eventGridResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.Storage/storageAccounts/teststorageaccount/providers/Microsoft.EventGrid/eventSubscriptions/eventSubscriptionTest",
    eventHubResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.EventHub/namespaces/eventhubTestns1/eventhubs/eventhubTest2",
    ignoreFirstRecord: false,
    kind: "EventGrid",
    location: "westus",
    managedIdentityResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/managedidentityTest1",
    mappingRuleName: "TestMapping",
    storageAccountResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.Storage/storageAccounts/teststorageaccount",
    tableName: "TestTable",
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.dataConnections.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterName,
    databaseName,
    dataConnectionName,
    parameters
  );
  console.log(result);
}

async function main() {
  kustoDataConnectionsCosmosDbCreateOrUpdate();
  kustoDataConnectionsCreateOrUpdate();
  kustoDataConnectionsEventGridCreateOrUpdate();
}

main().catch(console.error);
