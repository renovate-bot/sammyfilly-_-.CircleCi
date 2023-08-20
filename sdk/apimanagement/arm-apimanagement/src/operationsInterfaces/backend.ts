/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  BackendContract,
  BackendListByServiceOptionalParams,
  BackendGetEntityTagOptionalParams,
  BackendGetEntityTagResponse,
  BackendGetOptionalParams,
  BackendGetResponse,
  BackendCreateOrUpdateOptionalParams,
  BackendCreateOrUpdateResponse,
  BackendUpdateParameters,
  BackendUpdateOptionalParams,
  BackendUpdateResponse,
  BackendDeleteOptionalParams,
  BackendReconnectOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Backend. */
export interface Backend {
  /**
   * Lists a collection of backends in the specified service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: BackendListByServiceOptionalParams
  ): PagedAsyncIterableIterator<BackendContract>;
  /**
   * Gets the entity state (Etag) version of the backend specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param backendId Identifier of the Backend entity. Must be unique in the current API Management
   *                  service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    backendId: string,
    options?: BackendGetEntityTagOptionalParams
  ): Promise<BackendGetEntityTagResponse>;
  /**
   * Gets the details of the backend specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param backendId Identifier of the Backend entity. Must be unique in the current API Management
   *                  service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    backendId: string,
    options?: BackendGetOptionalParams
  ): Promise<BackendGetResponse>;
  /**
   * Creates or Updates a backend.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param backendId Identifier of the Backend entity. Must be unique in the current API Management
   *                  service instance.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    backendId: string,
    parameters: BackendContract,
    options?: BackendCreateOrUpdateOptionalParams
  ): Promise<BackendCreateOrUpdateResponse>;
  /**
   * Updates an existing backend.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param backendId Identifier of the Backend entity. Must be unique in the current API Management
   *                  service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    backendId: string,
    ifMatch: string,
    parameters: BackendUpdateParameters,
    options?: BackendUpdateOptionalParams
  ): Promise<BackendUpdateResponse>;
  /**
   * Deletes the specified backend.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param backendId Identifier of the Backend entity. Must be unique in the current API Management
   *                  service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    backendId: string,
    ifMatch: string,
    options?: BackendDeleteOptionalParams
  ): Promise<void>;
  /**
   * Notifies the APIM proxy to create a new connection to the backend after the specified timeout. If no
   * timeout was specified, timeout of 2 minutes is used.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param backendId Identifier of the Backend entity. Must be unique in the current API Management
   *                  service instance.
   * @param options The options parameters.
   */
  reconnect(
    resourceGroupName: string,
    serviceName: string,
    backendId: string,
    options?: BackendReconnectOptionalParams
  ): Promise<void>;
}
