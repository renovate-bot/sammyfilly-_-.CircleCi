/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  RoleEligibilitySchedulesListForScopeOptionalParams,
  AuthorizationManagementClient
} from "@azure/arm-authorization";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets role eligibility schedules for a resource scope.
 *
 * @summary Gets role eligibility schedules for a resource scope.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2020-10-01-preview/examples/GetRoleEligibilitySchedulesByScope.json
 */
async function getRoleEligibilitySchedulesByScope() {
  const scope =
    "providers/Microsoft.Subscription/subscriptions/dfa2a084-766f-4003-8ae1-c4aeb893a99f";
  const filter = "assignedTo('a3bb8764-cb92-4276-9d2a-ca1e895e55ea')";
  const options: RoleEligibilitySchedulesListForScopeOptionalParams = {
    filter
  };
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.roleEligibilitySchedules.listForScope(
    scope,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getRoleEligibilitySchedulesByScope();
}

main().catch(console.error);
