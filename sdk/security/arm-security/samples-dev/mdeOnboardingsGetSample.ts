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
 * This sample demonstrates how to The default configuration or data needed to onboard the machine to MDE
 *
 * @summary The default configuration or data needed to onboard the machine to MDE
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2021-10-01-preview/examples/MdeOnboardings/GetMdeOnboardings_example.json
 */
async function theDefaultConfigurationOrDataNeededToOnboardTheMachineToMde() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] ||
    "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.mdeOnboardings.get();
  console.log(result);
}

async function main() {
  theDefaultConfigurationOrDataNeededToOnboardTheMachineToMde();
}

main().catch(console.error);