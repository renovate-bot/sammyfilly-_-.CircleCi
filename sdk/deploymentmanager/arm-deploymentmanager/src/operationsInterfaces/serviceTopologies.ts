/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ServiceTopologyResource,
  ServiceTopologiesCreateOrUpdateOptionalParams,
  ServiceTopologiesCreateOrUpdateResponse,
  ServiceTopologiesGetOptionalParams,
  ServiceTopologiesGetResponse,
  ServiceTopologiesDeleteOptionalParams,
  ServiceTopologiesListOptionalParams,
  ServiceTopologiesListResponse
} from "../models";

/** Interface representing a ServiceTopologies. */
export interface ServiceTopologies {
  /**
   * Synchronously creates a new service topology or updates an existing service topology.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceTopologyName The name of the service topology .
   * @param serviceTopologyInfo Source topology object defines the resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceTopologyName: string,
    serviceTopologyInfo: ServiceTopologyResource,
    options?: ServiceTopologiesCreateOrUpdateOptionalParams
  ): Promise<ServiceTopologiesCreateOrUpdateResponse>;
  /**
   * Gets the service topology.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceTopologyName The name of the service topology .
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceTopologyName: string,
    options?: ServiceTopologiesGetOptionalParams
  ): Promise<ServiceTopologiesGetResponse>;
  /**
   * Deletes the service topology.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceTopologyName The name of the service topology .
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceTopologyName: string,
    options?: ServiceTopologiesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Lists the service topologies in the resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: ServiceTopologiesListOptionalParams
  ): Promise<ServiceTopologiesListResponse>;
}
