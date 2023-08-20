/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DeploymentOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ResourceManagementClient } from "../resourceManagementClient";
import {
  DeploymentOperation,
  DeploymentOperationsListAtScopeNextOptionalParams,
  DeploymentOperationsListAtScopeOptionalParams,
  DeploymentOperationsListAtScopeResponse,
  DeploymentOperationsListAtTenantScopeNextOptionalParams,
  DeploymentOperationsListAtTenantScopeOptionalParams,
  DeploymentOperationsListAtTenantScopeResponse,
  DeploymentOperationsListAtManagementGroupScopeNextOptionalParams,
  DeploymentOperationsListAtManagementGroupScopeOptionalParams,
  DeploymentOperationsListAtManagementGroupScopeResponse,
  DeploymentOperationsListAtSubscriptionScopeNextOptionalParams,
  DeploymentOperationsListAtSubscriptionScopeOptionalParams,
  DeploymentOperationsListAtSubscriptionScopeResponse,
  DeploymentOperationsListNextOptionalParams,
  DeploymentOperationsListOptionalParams,
  DeploymentOperationsListResponse,
  DeploymentOperationsGetAtScopeOptionalParams,
  DeploymentOperationsGetAtScopeResponse,
  DeploymentOperationsGetAtTenantScopeOptionalParams,
  DeploymentOperationsGetAtTenantScopeResponse,
  DeploymentOperationsGetAtManagementGroupScopeOptionalParams,
  DeploymentOperationsGetAtManagementGroupScopeResponse,
  DeploymentOperationsGetAtSubscriptionScopeOptionalParams,
  DeploymentOperationsGetAtSubscriptionScopeResponse,
  DeploymentOperationsGetOptionalParams,
  DeploymentOperationsGetResponse,
  DeploymentOperationsListAtScopeNextResponse,
  DeploymentOperationsListAtTenantScopeNextResponse,
  DeploymentOperationsListAtManagementGroupScopeNextResponse,
  DeploymentOperationsListAtSubscriptionScopeNextResponse,
  DeploymentOperationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DeploymentOperations operations. */
export class DeploymentOperationsImpl implements DeploymentOperations {
  private readonly client: ResourceManagementClient;

  /**
   * Initialize a new instance of the class DeploymentOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ResourceManagementClient) {
    this.client = client;
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  public listAtScope(
    scope: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation> {
    const iter = this.listAtScopePagingAll(scope, deploymentName, options);
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
        return this.listAtScopePagingPage(
          scope,
          deploymentName,
          options,
          settings
        );
      }
    };
  }

  private async *listAtScopePagingPage(
    scope: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtScopeOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeploymentOperation[]> {
    let result: DeploymentOperationsListAtScopeResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAtScope(scope, deploymentName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAtScopeNext(
        scope,
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAtScopePagingAll(
    scope: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtScopeOptionalParams
  ): AsyncIterableIterator<DeploymentOperation> {
    for await (const page of this.listAtScopePagingPage(
      scope,
      deploymentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  public listAtTenantScope(
    deploymentName: string,
    options?: DeploymentOperationsListAtTenantScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation> {
    const iter = this.listAtTenantScopePagingAll(deploymentName, options);
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
        return this.listAtTenantScopePagingPage(
          deploymentName,
          options,
          settings
        );
      }
    };
  }

  private async *listAtTenantScopePagingPage(
    deploymentName: string,
    options?: DeploymentOperationsListAtTenantScopeOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeploymentOperation[]> {
    let result: DeploymentOperationsListAtTenantScopeResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAtTenantScope(deploymentName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAtTenantScopeNext(
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAtTenantScopePagingAll(
    deploymentName: string,
    options?: DeploymentOperationsListAtTenantScopeOptionalParams
  ): AsyncIterableIterator<DeploymentOperation> {
    for await (const page of this.listAtTenantScopePagingPage(
      deploymentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  public listAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtManagementGroupScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation> {
    const iter = this.listAtManagementGroupScopePagingAll(
      groupId,
      deploymentName,
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
        return this.listAtManagementGroupScopePagingPage(
          groupId,
          deploymentName,
          options,
          settings
        );
      }
    };
  }

  private async *listAtManagementGroupScopePagingPage(
    groupId: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtManagementGroupScopeOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeploymentOperation[]> {
    let result: DeploymentOperationsListAtManagementGroupScopeResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAtManagementGroupScope(
        groupId,
        deploymentName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAtManagementGroupScopeNext(
        groupId,
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAtManagementGroupScopePagingAll(
    groupId: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtManagementGroupScopeOptionalParams
  ): AsyncIterableIterator<DeploymentOperation> {
    for await (const page of this.listAtManagementGroupScopePagingPage(
      groupId,
      deploymentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  public listAtSubscriptionScope(
    deploymentName: string,
    options?: DeploymentOperationsListAtSubscriptionScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation> {
    const iter = this.listAtSubscriptionScopePagingAll(deploymentName, options);
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
        return this.listAtSubscriptionScopePagingPage(
          deploymentName,
          options,
          settings
        );
      }
    };
  }

  private async *listAtSubscriptionScopePagingPage(
    deploymentName: string,
    options?: DeploymentOperationsListAtSubscriptionScopeOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeploymentOperation[]> {
    let result: DeploymentOperationsListAtSubscriptionScopeResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAtSubscriptionScope(deploymentName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAtSubscriptionScopeNext(
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAtSubscriptionScopePagingAll(
    deploymentName: string,
    options?: DeploymentOperationsListAtSubscriptionScopeOptionalParams
  ): AsyncIterableIterator<DeploymentOperation> {
    for await (const page of this.listAtSubscriptionScopePagingPage(
      deploymentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentOperationsListOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation> {
    const iter = this.listPagingAll(resourceGroupName, deploymentName, options);
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
        return this.listPagingPage(
          resourceGroupName,
          deploymentName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentOperationsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeploymentOperation[]> {
    let result: DeploymentOperationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, deploymentName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentOperationsListOptionalParams
  ): AsyncIterableIterator<DeploymentOperation> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      deploymentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a deployments operation.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The options parameters.
   */
  getAtScope(
    scope: string,
    deploymentName: string,
    operationId: string,
    options?: DeploymentOperationsGetAtScopeOptionalParams
  ): Promise<DeploymentOperationsGetAtScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, deploymentName, operationId, options },
      getAtScopeOperationSpec
    );
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  private _listAtScope(
    scope: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtScopeOptionalParams
  ): Promise<DeploymentOperationsListAtScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, deploymentName, options },
      listAtScopeOperationSpec
    );
  }

  /**
   * Gets a deployments operation.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The options parameters.
   */
  getAtTenantScope(
    deploymentName: string,
    operationId: string,
    options?: DeploymentOperationsGetAtTenantScopeOptionalParams
  ): Promise<DeploymentOperationsGetAtTenantScopeResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, operationId, options },
      getAtTenantScopeOperationSpec
    );
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  private _listAtTenantScope(
    deploymentName: string,
    options?: DeploymentOperationsListAtTenantScopeOptionalParams
  ): Promise<DeploymentOperationsListAtTenantScopeResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, options },
      listAtTenantScopeOperationSpec
    );
  }

  /**
   * Gets a deployments operation.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The options parameters.
   */
  getAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    operationId: string,
    options?: DeploymentOperationsGetAtManagementGroupScopeOptionalParams
  ): Promise<DeploymentOperationsGetAtManagementGroupScopeResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentName, operationId, options },
      getAtManagementGroupScopeOperationSpec
    );
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  private _listAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtManagementGroupScopeOptionalParams
  ): Promise<DeploymentOperationsListAtManagementGroupScopeResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentName, options },
      listAtManagementGroupScopeOperationSpec
    );
  }

  /**
   * Gets a deployments operation.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The options parameters.
   */
  getAtSubscriptionScope(
    deploymentName: string,
    operationId: string,
    options?: DeploymentOperationsGetAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentOperationsGetAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, operationId, options },
      getAtSubscriptionScopeOperationSpec
    );
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  private _listAtSubscriptionScope(
    deploymentName: string,
    options?: DeploymentOperationsListAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentOperationsListAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, options },
      listAtSubscriptionScopeOperationSpec
    );
  }

  /**
   * Gets a deployments operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    deploymentName: string,
    operationId: string,
    options?: DeploymentOperationsGetOptionalParams
  ): Promise<DeploymentOperationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, operationId, options },
      getOperationSpec
    );
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentOperationsListOptionalParams
  ): Promise<DeploymentOperationsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, options },
      listOperationSpec
    );
  }

  /**
   * ListAtScopeNext
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtScope method.
   * @param options The options parameters.
   */
  private _listAtScopeNext(
    scope: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtScopeNextOptionalParams
  ): Promise<DeploymentOperationsListAtScopeNextResponse> {
    return this.client.sendOperationRequest(
      { scope, deploymentName, nextLink, options },
      listAtScopeNextOperationSpec
    );
  }

  /**
   * ListAtTenantScopeNext
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtTenantScope method.
   * @param options The options parameters.
   */
  private _listAtTenantScopeNext(
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtTenantScopeNextOptionalParams
  ): Promise<DeploymentOperationsListAtTenantScopeNextResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, nextLink, options },
      listAtTenantScopeNextOperationSpec
    );
  }

  /**
   * ListAtManagementGroupScopeNext
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtManagementGroupScope
   *                 method.
   * @param options The options parameters.
   */
  private _listAtManagementGroupScopeNext(
    groupId: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtManagementGroupScopeNextOptionalParams
  ): Promise<DeploymentOperationsListAtManagementGroupScopeNextResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentName, nextLink, options },
      listAtManagementGroupScopeNextOperationSpec
    );
  }

  /**
   * ListAtSubscriptionScopeNext
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtSubscriptionScope
   *                 method.
   * @param options The options parameters.
   */
  private _listAtSubscriptionScopeNext(
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtSubscriptionScopeNextOptionalParams
  ): Promise<DeploymentOperationsListAtSubscriptionScopeNextResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, nextLink, options },
      listAtSubscriptionScopeNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListNextOptionalParams
  ): Promise<DeploymentOperationsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getAtScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.deploymentName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Resources/deployments/{deploymentName}/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getAtTenantScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtTenantScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Resources/deployments/{deploymentName}/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.deploymentName],
  headerParameters: [Parameters.accept],
  serializer
};
const getAtManagementGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.groupId,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtManagementGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.scope,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtTenantScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtManagementGroupScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.deploymentName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtSubscriptionScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};