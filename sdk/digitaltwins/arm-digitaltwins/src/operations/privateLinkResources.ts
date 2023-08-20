/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureDigitalTwinsManagementClient } from "../azureDigitalTwinsManagementClient";
import {
  PrivateLinkResourcesListOptionalParams,
  PrivateLinkResourcesListResponse,
  PrivateLinkResourcesGetOptionalParams,
  PrivateLinkResourcesGetResponse
} from "../models";

/** Class containing PrivateLinkResources operations. */
export class PrivateLinkResourcesImpl implements PrivateLinkResources {
  private readonly client: AzureDigitalTwinsManagementClient;

  /**
   * Initialize a new instance of the class PrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: AzureDigitalTwinsManagementClient) {
    this.client = client;
  }

  /**
   * List private link resources for given Digital Twin.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: PrivateLinkResourcesListOptionalParams
  ): Promise<PrivateLinkResourcesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listOperationSpec
    );
  }

  /**
   * Get the specified private link resource for the given Digital Twin.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param resourceId The name of the private link resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    resourceId: string,
    options?: PrivateLinkResourcesGetOptionalParams
  ): Promise<PrivateLinkResourcesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, resourceId, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupIdInformationResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/privateLinkResources/{resourceId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupIdInformation
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.resourceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
