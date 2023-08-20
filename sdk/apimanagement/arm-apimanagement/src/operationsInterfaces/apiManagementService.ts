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
  ApiManagementServiceResource,
  ApiManagementServiceListByResourceGroupOptionalParams,
  ApiManagementServiceListOptionalParams,
  ApiManagementServiceBackupRestoreParameters,
  ApiManagementServiceRestoreOptionalParams,
  ApiManagementServiceRestoreResponse,
  ApiManagementServiceBackupOptionalParams,
  ApiManagementServiceBackupResponse,
  ApiManagementServiceCreateOrUpdateOptionalParams,
  ApiManagementServiceCreateOrUpdateResponse,
  ApiManagementServiceUpdateParameters,
  ApiManagementServiceUpdateOptionalParams,
  ApiManagementServiceUpdateResponse,
  ApiManagementServiceGetOptionalParams,
  ApiManagementServiceGetResponse,
  ApiManagementServiceDeleteOptionalParams,
  ApiManagementServiceGetSsoTokenOptionalParams,
  ApiManagementServiceGetSsoTokenResponse,
  ApiManagementServiceCheckNameAvailabilityParameters,
  ApiManagementServiceCheckNameAvailabilityOptionalParams,
  ApiManagementServiceCheckNameAvailabilityResponse,
  ApiManagementServiceGetDomainOwnershipIdentifierOptionalParams,
  ApiManagementServiceGetDomainOwnershipIdentifierResponse,
  ApiManagementServiceApplyNetworkConfigurationUpdatesOptionalParams,
  ApiManagementServiceApplyNetworkConfigurationUpdatesResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApiManagementService. */
export interface ApiManagementService {
  /**
   * List all API Management services within a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ApiManagementServiceListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ApiManagementServiceResource>;
  /**
   * Lists all API Management services within an Azure subscription.
   * @param options The options parameters.
   */
  list(
    options?: ApiManagementServiceListOptionalParams
  ): PagedAsyncIterableIterator<ApiManagementServiceResource>;
  /**
   * Restores a backup of an API Management service created using the ApiManagementService_Backup
   * operation on the current service. This is a long running operation and could take several minutes to
   * complete.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the Restore API Management service from backup operation.
   * @param options The options parameters.
   */
  beginRestore(
    resourceGroupName: string,
    serviceName: string,
    parameters: ApiManagementServiceBackupRestoreParameters,
    options?: ApiManagementServiceRestoreOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ApiManagementServiceRestoreResponse>,
      ApiManagementServiceRestoreResponse
    >
  >;
  /**
   * Restores a backup of an API Management service created using the ApiManagementService_Backup
   * operation on the current service. This is a long running operation and could take several minutes to
   * complete.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the Restore API Management service from backup operation.
   * @param options The options parameters.
   */
  beginRestoreAndWait(
    resourceGroupName: string,
    serviceName: string,
    parameters: ApiManagementServiceBackupRestoreParameters,
    options?: ApiManagementServiceRestoreOptionalParams
  ): Promise<ApiManagementServiceRestoreResponse>;
  /**
   * Creates a backup of the API Management service to the given Azure Storage Account. This is long
   * running operation and could take several minutes to complete.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the ApiManagementService_Backup operation.
   * @param options The options parameters.
   */
  beginBackup(
    resourceGroupName: string,
    serviceName: string,
    parameters: ApiManagementServiceBackupRestoreParameters,
    options?: ApiManagementServiceBackupOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ApiManagementServiceBackupResponse>,
      ApiManagementServiceBackupResponse
    >
  >;
  /**
   * Creates a backup of the API Management service to the given Azure Storage Account. This is long
   * running operation and could take several minutes to complete.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the ApiManagementService_Backup operation.
   * @param options The options parameters.
   */
  beginBackupAndWait(
    resourceGroupName: string,
    serviceName: string,
    parameters: ApiManagementServiceBackupRestoreParameters,
    options?: ApiManagementServiceBackupOptionalParams
  ): Promise<ApiManagementServiceBackupResponse>;
  /**
   * Creates or updates an API Management service. This is long running operation and could take several
   * minutes to complete.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the CreateOrUpdate API Management service operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    parameters: ApiManagementServiceResource,
    options?: ApiManagementServiceCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ApiManagementServiceCreateOrUpdateResponse>,
      ApiManagementServiceCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an API Management service. This is long running operation and could take several
   * minutes to complete.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the CreateOrUpdate API Management service operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    parameters: ApiManagementServiceResource,
    options?: ApiManagementServiceCreateOrUpdateOptionalParams
  ): Promise<ApiManagementServiceCreateOrUpdateResponse>;
  /**
   * Updates an existing API Management service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the CreateOrUpdate API Management service operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    serviceName: string,
    parameters: ApiManagementServiceUpdateParameters,
    options?: ApiManagementServiceUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ApiManagementServiceUpdateResponse>,
      ApiManagementServiceUpdateResponse
    >
  >;
  /**
   * Updates an existing API Management service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the CreateOrUpdate API Management service operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    parameters: ApiManagementServiceUpdateParameters,
    options?: ApiManagementServiceUpdateOptionalParams
  ): Promise<ApiManagementServiceUpdateResponse>;
  /**
   * Gets an API Management service resource description.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiManagementServiceGetOptionalParams
  ): Promise<ApiManagementServiceGetResponse>;
  /**
   * Deletes an existing API Management service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiManagementServiceDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an existing API Management service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiManagementServiceDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the Single-Sign-On token for the API Management Service which is valid for 5 Minutes.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  getSsoToken(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiManagementServiceGetSsoTokenOptionalParams
  ): Promise<ApiManagementServiceGetSsoTokenResponse>;
  /**
   * Checks availability and correctness of a name for an API Management service.
   * @param parameters Parameters supplied to the CheckNameAvailability operation.
   * @param options The options parameters.
   */
  checkNameAvailability(
    parameters: ApiManagementServiceCheckNameAvailabilityParameters,
    options?: ApiManagementServiceCheckNameAvailabilityOptionalParams
  ): Promise<ApiManagementServiceCheckNameAvailabilityResponse>;
  /**
   * Get the custom domain ownership identifier for an API Management service.
   * @param options The options parameters.
   */
  getDomainOwnershipIdentifier(
    options?: ApiManagementServiceGetDomainOwnershipIdentifierOptionalParams
  ): Promise<ApiManagementServiceGetDomainOwnershipIdentifierResponse>;
  /**
   * Updates the Microsoft.ApiManagement resource running in the Virtual network to pick the updated DNS
   * changes.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  beginApplyNetworkConfigurationUpdates(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiManagementServiceApplyNetworkConfigurationUpdatesOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        ApiManagementServiceApplyNetworkConfigurationUpdatesResponse
      >,
      ApiManagementServiceApplyNetworkConfigurationUpdatesResponse
    >
  >;
  /**
   * Updates the Microsoft.ApiManagement resource running in the Virtual network to pick the updated DNS
   * changes.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  beginApplyNetworkConfigurationUpdatesAndWait(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiManagementServiceApplyNetworkConfigurationUpdatesOptionalParams
  ): Promise<ApiManagementServiceApplyNetworkConfigurationUpdatesResponse>;
}
