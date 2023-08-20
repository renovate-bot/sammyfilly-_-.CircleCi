/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AuthorizationManagementClient } from "@azure/arm-authorization";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all role assignments that apply to a subscription.
 *
 * @summary List all role assignments that apply to a subscription.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/stable/2022-04-01/examples/RoleAssignments_ListForSubscription.json
 */
async function listRoleAssignmentsForSubscription() {
  const subscriptionId =
    process.env["AUTHORIZATION_SUBSCRIPTION_ID"] ||
    "a925f2f7-5c63-4b7b-8799-25a5f97bc3b2";
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.roleAssignments.listForSubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listRoleAssignmentsForSubscription();
}

main().catch(console.error);
