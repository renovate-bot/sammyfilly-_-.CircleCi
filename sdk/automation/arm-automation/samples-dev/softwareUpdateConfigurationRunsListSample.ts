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
  SoftwareUpdateConfigurationRunsListOptionalParams,
  AutomationClient
} from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Return list of software update configuration runs
 *
 * @summary Return list of software update configuration runs
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2019-06-01/examples/softwareUpdateConfigurationRun/listFailedSoftwareUpdateConfigurationRuns.json
 */
async function listSoftwareUpdateConfigurationMachineRunWithStatusEqualToFailed() {
  const subscriptionId =
    process.env["AUTOMATION_SUBSCRIPTION_ID"] ||
    "51766542-3ed7-4a72-a187-0c8ab644ddab";
  const resourceGroupName =
    process.env["AUTOMATION_RESOURCE_GROUP"] || "mygroup";
  const automationAccountName = "myaccount";
  const filter = "properties/status%20eq%20'Failed'";
  const options: SoftwareUpdateConfigurationRunsListOptionalParams = { filter };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.softwareUpdateConfigurationRuns.list(
    resourceGroupName,
    automationAccountName,
    options
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Return list of software update configuration runs
 *
 * @summary Return list of software update configuration runs
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2019-06-01/examples/softwareUpdateConfigurationRun/listSoftwareUpdateConfigurationRuns.json
 */
async function listSoftwareUpdateConfigurationMachineRuns() {
  const subscriptionId =
    process.env["AUTOMATION_SUBSCRIPTION_ID"] ||
    "51766542-3ed7-4a72-a187-0c8ab644ddab";
  const resourceGroupName =
    process.env["AUTOMATION_RESOURCE_GROUP"] || "mygroup";
  const automationAccountName = "myaccount";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.softwareUpdateConfigurationRuns.list(
    resourceGroupName,
    automationAccountName
  );
  console.log(result);
}

async function main() {
  listSoftwareUpdateConfigurationMachineRunWithStatusEqualToFailed();
  listSoftwareUpdateConfigurationMachineRuns();
}

main().catch(console.error);
