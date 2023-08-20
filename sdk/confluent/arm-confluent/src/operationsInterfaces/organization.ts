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
  OrganizationResource,
  OrganizationListBySubscriptionOptionalParams,
  OrganizationListByResourceGroupOptionalParams,
  OrganizationGetOptionalParams,
  OrganizationGetResponse,
  OrganizationCreateOptionalParams,
  OrganizationCreateResponse,
  OrganizationUpdateOptionalParams,
  OrganizationUpdateResponse,
  OrganizationDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Organization. */
export interface Organization {
  /**
   * List all organizations under the specified subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: OrganizationListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<OrganizationResource>;
  /**
   * List all Organizations under the specified resource group.
   * @param resourceGroupName Resource group name
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: OrganizationListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<OrganizationResource>;
  /**
   * Get the properties of a specific Organization resource.
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationGetOptionalParams
  ): Promise<OrganizationGetResponse>;
  /**
   * Create Organization resource
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<OrganizationCreateResponse>,
      OrganizationCreateResponse
    >
  >;
  /**
   * Create Organization resource
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationCreateOptionalParams
  ): Promise<OrganizationCreateResponse>;
  /**
   * Update Organization resource
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationUpdateOptionalParams
  ): Promise<OrganizationUpdateResponse>;
  /**
   * Delete Organization resource
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete Organization resource
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    organizationName: string,
    options?: OrganizationDeleteOptionalParams
  ): Promise<void>;
}
