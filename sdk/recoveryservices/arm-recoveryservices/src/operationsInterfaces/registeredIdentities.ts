/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { RegisteredIdentitiesDeleteOptionalParams } from "../models";

/** Interface representing a RegisteredIdentities. */
export interface RegisteredIdentities {
  /**
   * Unregisters the given container from your Recovery Services vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the recovery services vault.
   * @param identityName Name of the protection container to unregister.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    vaultName: string,
    identityName: string,
    options?: RegisteredIdentitiesDeleteOptionalParams
  ): Promise<void>;
}
