/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets an entity query.
 *
 * @summary Gets an entity query.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/entityQueryTemplates/GetActivityEntityQueryTemplateById.json
 */
async function getAnActivityEntityQueryTemplate() {
  const subscriptionId =
    process.env["SECURITYINSIGHT_SUBSCRIPTION_ID"] ||
    "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName =
    process.env["SECURITYINSIGHT_RESOURCE_GROUP"] || "myRg";
  const workspaceName = "myWorkspace";
  const entityQueryTemplateId = "07da3cc8-c8ad-4710-a44e-334cdcb7882b";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entityQueryTemplates.get(
    resourceGroupName,
    workspaceName,
    entityQueryTemplateId
  );
  console.log(result);
}

async function main() {
  getAnActivityEntityQueryTemplate();
}

main().catch(console.error);
