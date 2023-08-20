/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Keys } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  Key,
  KeysListByWorkspaceNextOptionalParams,
  KeysListByWorkspaceOptionalParams,
  KeysListByWorkspaceResponse,
  KeysGetOptionalParams,
  KeysGetResponse,
  KeysCreateOrUpdateOptionalParams,
  KeysCreateOrUpdateResponse,
  KeysDeleteOptionalParams,
  KeysDeleteResponse,
  KeysListByWorkspaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Keys operations. */
export class KeysImpl implements Keys {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class Keys class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Returns a list of keys in a workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  public listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: KeysListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<Key> {
    const iter = this.listByWorkspacePagingAll(
      resourceGroupName,
      workspaceName,
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
        return this.listByWorkspacePagingPage(
          resourceGroupName,
          workspaceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByWorkspacePagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: KeysListByWorkspaceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Key[]> {
    let result: KeysListByWorkspaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByWorkspace(
        resourceGroupName,
        workspaceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByWorkspaceNext(
        resourceGroupName,
        workspaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByWorkspacePagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: KeysListByWorkspaceOptionalParams
  ): AsyncIterableIterator<Key> {
    for await (const page of this.listByWorkspacePagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a list of keys in a workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  private _listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: KeysListByWorkspaceOptionalParams
  ): Promise<KeysListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listByWorkspaceOperationSpec
    );
  }

  /**
   * Gets a workspace key
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param keyName The name of the workspace key
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    keyName: string,
    options?: KeysGetOptionalParams
  ): Promise<KeysGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, keyName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a workspace key
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param keyName The name of the workspace key
   * @param keyProperties Key put request properties
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    keyName: string,
    keyProperties: Key,
    options?: KeysCreateOrUpdateOptionalParams
  ): Promise<KeysCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, keyName, keyProperties, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a workspace key
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param keyName The name of the workspace key
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    keyName: string,
    options?: KeysDeleteOptionalParams
  ): Promise<KeysDeleteResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, keyName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByWorkspaceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param nextLink The nextLink from the previous successful call to the ListByWorkspace method.
   * @param options The options parameters.
   */
  private _listByWorkspaceNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: KeysListByWorkspaceNextOptionalParams
  ): Promise<KeysListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listByWorkspaceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/keys",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyInfoListResult
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
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/keys/{keyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Key
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
    Parameters.workspaceName,
    Parameters.keyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/keys/{keyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Key
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.keyProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.keyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/keys/{keyName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.Key
    },
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
    Parameters.workspaceName,
    Parameters.keyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyInfoListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};