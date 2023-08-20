/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureOrbital } = require("@azure/arm-orbital");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Updates the specified contact profile tags.
 *
 * @summary Updates the specified contact profile tags.
 * x-ms-original-file: specification/orbital/resource-manager/Microsoft.Orbital/stable/2022-11-01/examples/ContactProfileUpdateTag.json
 */
async function updateContactProfileTags() {
  const subscriptionId =
    process.env["ORBITAL_SUBSCRIPTION_ID"] || "c1be1141-a7c9-4aac-9608-3c2e2f1152c3";
  const resourceGroupName = process.env["ORBITAL_RESOURCE_GROUP"] || "contoso-Rgp";
  const contactProfileName = "CONTOSO-CP";
  const parameters = { tags: { tag1: "value1", tag2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new AzureOrbital(credential, subscriptionId);
  const result = await client.contactProfiles.beginUpdateTagsAndWait(
    resourceGroupName,
    contactProfileName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateContactProfileTags();
}

main().catch(console.error);
