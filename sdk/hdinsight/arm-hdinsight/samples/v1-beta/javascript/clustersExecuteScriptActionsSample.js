/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Executes script actions on the specified HDInsight cluster.
 *
 * @summary Executes script actions on the specified HDInsight cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/preview/2023-04-15-preview/examples/PostExecuteScriptAction.json
 */
async function executeScriptActionOnHdInsightCluster() {
  const subscriptionId = process.env["HDINSIGHT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["HDINSIGHT_RESOURCE_GROUP"] || "rg1";
  const clusterName = "cluster1";
  const parameters = {
    persistOnSuccess: false,
    scriptActions: [
      {
        name: "Test",
        parameters: "",
        roles: ["headnode", "workernode"],
        uri: "http://testurl.com/install.ssh",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginExecuteScriptActionsAndWait(
    resourceGroupName,
    clusterName,
    parameters
  );
  console.log(result);
}

async function main() {
  executeScriptActionOnHdInsightCluster();
}

main().catch(console.error);
