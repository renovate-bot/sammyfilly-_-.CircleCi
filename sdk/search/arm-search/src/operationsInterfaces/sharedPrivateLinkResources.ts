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
  SharedPrivateLinkResource,
  SharedPrivateLinkResourcesListByServiceOptionalParams,
  SharedPrivateLinkResourcesCreateOrUpdateOptionalParams,
  SharedPrivateLinkResourcesCreateOrUpdateResponse,
  SharedPrivateLinkResourcesGetOptionalParams,
  SharedPrivateLinkResourcesGetResponse,
  SharedPrivateLinkResourcesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SharedPrivateLinkResources. */
export interface SharedPrivateLinkResources {
  /**
   * Gets a list of all shared private link resources managed by the given service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    searchServiceName: string,
    options?: SharedPrivateLinkResourcesListByServiceOptionalParams
  ): PagedAsyncIterableIterator<SharedPrivateLinkResource>;
  /**
   * Initiates the creation or update of a shared private link resource managed by the search service in
   * the given resource group.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   *                                      Azure Cognitive Search service within the specified resource group.
   * @param sharedPrivateLinkResource The definition of the shared private link resource to create or
   *                                  update.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    searchServiceName: string,
    sharedPrivateLinkResourceName: string,
    sharedPrivateLinkResource: SharedPrivateLinkResource,
    options?: SharedPrivateLinkResourcesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SharedPrivateLinkResourcesCreateOrUpdateResponse>,
      SharedPrivateLinkResourcesCreateOrUpdateResponse
    >
  >;
  /**
   * Initiates the creation or update of a shared private link resource managed by the search service in
   * the given resource group.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   *                                      Azure Cognitive Search service within the specified resource group.
   * @param sharedPrivateLinkResource The definition of the shared private link resource to create or
   *                                  update.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    searchServiceName: string,
    sharedPrivateLinkResourceName: string,
    sharedPrivateLinkResource: SharedPrivateLinkResource,
    options?: SharedPrivateLinkResourcesCreateOrUpdateOptionalParams
  ): Promise<SharedPrivateLinkResourcesCreateOrUpdateResponse>;
  /**
   * Gets the details of the shared private link resource managed by the search service in the given
   * resource group.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   *                                      Azure Cognitive Search service within the specified resource group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    searchServiceName: string,
    sharedPrivateLinkResourceName: string,
    options?: SharedPrivateLinkResourcesGetOptionalParams
  ): Promise<SharedPrivateLinkResourcesGetResponse>;
  /**
   * Initiates the deletion of the shared private link resource from the search service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   *                                      Azure Cognitive Search service within the specified resource group.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    searchServiceName: string,
    sharedPrivateLinkResourceName: string,
    options?: SharedPrivateLinkResourcesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Initiates the deletion of the shared private link resource from the search service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   *                                      Azure Cognitive Search service within the specified resource group.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    searchServiceName: string,
    sharedPrivateLinkResourceName: string,
    options?: SharedPrivateLinkResourcesDeleteOptionalParams
  ): Promise<void>;
}
