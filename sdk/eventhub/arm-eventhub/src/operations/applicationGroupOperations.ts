/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ApplicationGroupOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventHubManagementClient } from "../eventHubManagementClient";
import {
  ApplicationGroup,
  ApplicationGroupListByNamespaceNextOptionalParams,
  ApplicationGroupListByNamespaceOptionalParams,
  ApplicationGroupListByNamespaceResponse,
  ApplicationGroupCreateOrUpdateApplicationGroupOptionalParams,
  ApplicationGroupCreateOrUpdateApplicationGroupResponse,
  ApplicationGroupDeleteOptionalParams,
  ApplicationGroupGetOptionalParams,
  ApplicationGroupGetResponse,
  ApplicationGroupListByNamespaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApplicationGroupOperations operations. */
export class ApplicationGroupOperationsImpl
  implements ApplicationGroupOperations {
  private readonly client: EventHubManagementClient;

  /**
   * Initialize a new instance of the class ApplicationGroupOperations class.
   * @param client Reference to the service client
   */
  constructor(client: EventHubManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of application groups for a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param options The options parameters.
   */
  public listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: ApplicationGroupListByNamespaceOptionalParams
  ): PagedAsyncIterableIterator<ApplicationGroup> {
    const iter = this.listByNamespacePagingAll(
      resourceGroupName,
      namespaceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByNamespacePagingPage(
          resourceGroupName,
          namespaceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByNamespacePagingPage(
    resourceGroupName: string,
    namespaceName: string,
    options?: ApplicationGroupListByNamespaceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ApplicationGroup[]> {
    let result: ApplicationGroupListByNamespaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByNamespace(
        resourceGroupName,
        namespaceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByNamespaceNext(
        resourceGroupName,
        namespaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByNamespacePagingAll(
    resourceGroupName: string,
    namespaceName: string,
    options?: ApplicationGroupListByNamespaceOptionalParams
  ): AsyncIterableIterator<ApplicationGroup> {
    for await (const page of this.listByNamespacePagingPage(
      resourceGroupName,
      namespaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of application groups for a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param options The options parameters.
   */
  private _listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: ApplicationGroupListByNamespaceOptionalParams
  ): Promise<ApplicationGroupListByNamespaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, options },
      listByNamespaceOperationSpec
    );
  }

  /**
   * Creates or updates an ApplicationGroup for a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param applicationGroupName The Application Group name
   * @param parameters The ApplicationGroup.
   * @param options The options parameters.
   */
  createOrUpdateApplicationGroup(
    resourceGroupName: string,
    namespaceName: string,
    applicationGroupName: string,
    parameters: ApplicationGroup,
    options?: ApplicationGroupCreateOrUpdateApplicationGroupOptionalParams
  ): Promise<ApplicationGroupCreateOrUpdateApplicationGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        applicationGroupName,
        parameters,
        options
      },
      createOrUpdateApplicationGroupOperationSpec
    );
  }

  /**
   * Deletes an ApplicationGroup for a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param applicationGroupName The Application Group name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    namespaceName: string,
    applicationGroupName: string,
    options?: ApplicationGroupDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, applicationGroupName, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets an ApplicationGroup for a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param applicationGroupName The Application Group name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    applicationGroupName: string,
    options?: ApplicationGroupGetOptionalParams
  ): Promise<ApplicationGroupGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, applicationGroupName, options },
      getOperationSpec
    );
  }

  /**
   * ListByNamespaceNext
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param nextLink The nextLink from the previous successful call to the ListByNamespace method.
   * @param options The options parameters.
   */
  private _listByNamespaceNext(
    resourceGroupName: string,
    namespaceName: string,
    nextLink: string,
    options?: ApplicationGroupListByNamespaceNextOptionalParams
  ): Promise<ApplicationGroupListByNamespaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, nextLink, options },
      listByNamespaceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByNamespaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/applicationGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGroupListResult
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
    Parameters.namespaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateApplicationGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/applicationGroups/{applicationGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.applicationGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/applicationGroups/{applicationGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.applicationGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/applicationGroups/{applicationGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGroup
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
    Parameters.namespaceName,
    Parameters.applicationGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByNamespaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGroupListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.namespaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
