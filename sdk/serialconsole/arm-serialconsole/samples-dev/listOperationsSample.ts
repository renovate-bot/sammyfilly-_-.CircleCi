/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftSerialConsoleClient } from "@azure/arm-serialconsole";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a list of Serial Console API operations.
 *
 * @summary Gets a list of Serial Console API operations.
 * x-ms-original-file: specification/serialconsole/resource-manager/Microsoft.SerialConsole/stable/2018-05-01/examples/GetOperationsExample.json
 */
async function listAllSerialConsoleManagementOperationsSupportedBySerialConsoleRp() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSerialConsoleClient(credential, subscriptionId);
  const result = await client.listOperations();
  console.log(result);
}

listAllSerialConsoleManagementOperationsSupportedBySerialConsoleRp().catch(
  console.error
);
