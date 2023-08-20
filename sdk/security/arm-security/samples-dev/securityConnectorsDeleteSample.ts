/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes a security connector.
 *
 * @summary Deletes a security connector.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2023-03-01-preview/examples/SecurityConnectors/DeleteSecurityConnector_example.json
 */
async function deleteASecurityConnector() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] ||
    "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const resourceGroupName = process.env["SECURITY_RESOURCE_GROUP"] || "myRg";
  const securityConnectorName = "mySecurityConnectorName";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.securityConnectors.delete(
    resourceGroupName,
    securityConnectorName
  );
  console.log(result);
}

async function main() {
  deleteASecurityConnector();
}

main().catch(console.error);