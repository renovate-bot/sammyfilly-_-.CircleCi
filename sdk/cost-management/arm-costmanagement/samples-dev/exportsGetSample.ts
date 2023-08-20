/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CostManagementClient } from "@azure/arm-costmanagement";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to get the export for the defined scope by export name.
 *
 * @summary The operation to get the export for the defined scope by export name.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportGetByBillingAccount.json
 */
async function exportGetByBillingAccount() {
  const scope = "providers/Microsoft.Billing/billingAccounts/123456";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.get(scope, exportName);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to get the export for the defined scope by export name.
 *
 * @summary The operation to get the export for the defined scope by export name.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportGetByDepartment.json
 */
async function exportGetByDepartment() {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/12/departments/1234";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.get(scope, exportName);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to get the export for the defined scope by export name.
 *
 * @summary The operation to get the export for the defined scope by export name.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportGetByEnrollmentAccount.json
 */
async function exportGetByEnrollmentAccount() {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/100/enrollmentAccounts/456";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.get(scope, exportName);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to get the export for the defined scope by export name.
 *
 * @summary The operation to get the export for the defined scope by export name.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportGetByManagementGroup.json
 */
async function exportGetByManagementGroup() {
  const scope = "providers/Microsoft.Management/managementGroups/TestMG";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.get(scope, exportName);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to get the export for the defined scope by export name.
 *
 * @summary The operation to get the export for the defined scope by export name.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportGetByResourceGroup.json
 */
async function exportGetByResourceGroup() {
  const scope =
    "subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.get(scope, exportName);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to get the export for the defined scope by export name.
 *
 * @summary The operation to get the export for the defined scope by export name.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportGetBySubscription.json
 */
async function exportGetBySubscription() {
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.get(scope, exportName);
  console.log(result);
}

async function main() {
  exportGetByBillingAccount();
  exportGetByDepartment();
  exportGetByEnrollmentAccount();
  exportGetByManagementGroup();
  exportGetByResourceGroup();
  exportGetBySubscription();
}

main().catch(console.error);
