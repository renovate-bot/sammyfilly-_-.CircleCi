/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  CurrentUsagesBase,
  UsagesListOptionalParams,
  UsagesGetOptionalParams,
  UsagesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Usages. */
export interface Usages {
  /**
   * Get a list of current usage for all resources for the scope specified.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param options The options parameters.
   */
  list(
    scope: string,
    options?: UsagesListOptionalParams
  ): PagedAsyncIterableIterator<CurrentUsagesBase>;
  /**
   * Get the current usage of a resource.
   * @param resourceName Resource name for a given resource provider. For example:
   *                     - SKU name for Microsoft.Compute
   *                     - SKU or TotalLowPriorityCores for Microsoft.MachineLearningServices
   *                      For Microsoft.Network PublicIPAddresses.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    scope: string,
    options?: UsagesGetOptionalParams
  ): Promise<UsagesGetResponse>;
}
