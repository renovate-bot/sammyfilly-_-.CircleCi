/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  DataLakeAnalyticsAccountBasic,
  AccountsListOptionalParams,
  AccountsListByResourceGroupOptionalParams,
  CreateDataLakeAnalyticsAccountParameters,
  AccountsCreateOptionalParams,
  AccountsCreateResponse,
  AccountsGetOptionalParams,
  AccountsGetResponse,
  AccountsUpdateOptionalParams,
  AccountsUpdateResponse,
  AccountsDeleteOptionalParams,
  CheckNameAvailabilityParameters,
  AccountsCheckNameAvailabilityOptionalParams,
  AccountsCheckNameAvailabilityResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Accounts. */
export interface Accounts {
  /**
   * Gets the first page of Data Lake Analytics accounts, if any, within the current subscription. This
   * includes a link to the next page, if any.
   * @param options The options parameters.
   */
  list(
    options?: AccountsListOptionalParams
  ): PagedAsyncIterableIterator<DataLakeAnalyticsAccountBasic>;
  /**
   * Gets the first page of Data Lake Analytics accounts, if any, within a specific resource group. This
   * includes a link to the next page, if any.
   * @param resourceGroupName The name of the Azure resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AccountsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DataLakeAnalyticsAccountBasic>;
  /**
   * Creates the specified Data Lake Analytics account. This supplies the user with computation services
   * for Data Lake Analytics workloads.
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param parameters Parameters supplied to create a new Data Lake Analytics account.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    accountName: string,
    parameters: CreateDataLakeAnalyticsAccountParameters,
    options?: AccountsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AccountsCreateResponse>,
      AccountsCreateResponse
    >
  >;
  /**
   * Creates the specified Data Lake Analytics account. This supplies the user with computation services
   * for Data Lake Analytics workloads.
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param parameters Parameters supplied to create a new Data Lake Analytics account.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    accountName: string,
    parameters: CreateDataLakeAnalyticsAccountParameters,
    options?: AccountsCreateOptionalParams
  ): Promise<AccountsCreateResponse>;
  /**
   * Gets details of the specified Data Lake Analytics account.
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsGetOptionalParams
  ): Promise<AccountsGetResponse>;
  /**
   * Updates the Data Lake Analytics account object specified by the accountName with the contents of the
   * account object.
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AccountsUpdateResponse>,
      AccountsUpdateResponse
    >
  >;
  /**
   * Updates the Data Lake Analytics account object specified by the accountName with the contents of the
   * account object.
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsUpdateOptionalParams
  ): Promise<AccountsUpdateResponse>;
  /**
   * Begins the delete process for the Data Lake Analytics account object specified by the account name.
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Begins the delete process for the Data Lake Analytics account object specified by the account name.
   * @param resourceGroupName The name of the Azure resource group.
   * @param accountName The name of the Data Lake Analytics account.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Checks whether the specified account name is available or taken.
   * @param location The resource location without whitespace.
   * @param parameters Parameters supplied to check the Data Lake Analytics account name availability.
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    parameters: CheckNameAvailabilityParameters,
    options?: AccountsCheckNameAvailabilityOptionalParams
  ): Promise<AccountsCheckNameAvailabilityResponse>;
}
