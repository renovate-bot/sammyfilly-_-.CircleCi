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
  RoleInstances,
  CloudServicesReimageOptionalParams,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Reimage asynchronous operation reinstalls the operating system on instances of web roles or worker roles.
 *
 * @summary Reimage asynchronous operation reinstalls the operating system on instances of web roles or worker roles.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/CloudserviceRP/stable/2022-09-04/examples/CloudServiceRoleInstance_Reimage_ByCloudService.json
 */
async function reimageCloudServiceRoleInstancesInACloudService() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "ConstosoRG";
  const cloudServiceName = "{cs-name}";
  const parameters: RoleInstances = {
    roleInstances: ["ContosoFrontend_IN_0", "ContosoBackend_IN_1"]
  };
  const options: CloudServicesReimageOptionalParams = { parameters };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.cloudServices.beginReimageAndWait(
    resourceGroupName,
    cloudServiceName,
    options
  );
  console.log(result);
}

async function main() {
  reimageCloudServiceRoleInstancesInACloudService();
}

main().catch(console.error);
