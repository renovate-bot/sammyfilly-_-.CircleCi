/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Machine,
  MachinesListByResourceGroupOptionalParams,
  MachinesListBySubscriptionOptionalParams,
  MachinesDeleteOptionalParams,
  MachinesGetOptionalParams,
  MachinesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Machines. */
export interface Machines {
  /**
   * Lists all the hybrid machines in the specified resource group. Use the nextLink property in the
   * response to get the next page of hybrid machines.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: MachinesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Machine>;
  /**
   * Lists all the hybrid machines in the specified subscription. Use the nextLink property in the
   * response to get the next page of hybrid machines.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: MachinesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Machine>;
  /**
   * The operation to remove a hybrid machine identity in Azure.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the hybrid machine.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    machineName: string,
    options?: MachinesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Retrieves information about the model view or the instance view of a hybrid machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the hybrid machine.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    machineName: string,
    options?: MachinesGetOptionalParams
  ): Promise<MachinesGetResponse>;
}
