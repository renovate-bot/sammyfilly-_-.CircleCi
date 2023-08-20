/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { InstancePools } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  InstancePool,
  InstancePoolsListByResourceGroupNextOptionalParams,
  InstancePoolsListByResourceGroupOptionalParams,
  InstancePoolsListByResourceGroupResponse,
  InstancePoolsListNextOptionalParams,
  InstancePoolsListOptionalParams,
  InstancePoolsListResponse,
  InstancePoolsGetOptionalParams,
  InstancePoolsGetResponse,
  InstancePoolsCreateOrUpdateOptionalParams,
  InstancePoolsCreateOrUpdateResponse,
  InstancePoolsDeleteOptionalParams,
  InstancePoolUpdate,
  InstancePoolsUpdateOptionalParams,
  InstancePoolsUpdateResponse,
  InstancePoolsListByResourceGroupNextResponse,
  InstancePoolsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing InstancePools operations. */
export class InstancePoolsImpl implements InstancePools {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class InstancePools class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of instance pools in the resource group
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: InstancePoolsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<InstancePool> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: InstancePoolsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<InstancePool[]> {
    let result: InstancePoolsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: InstancePoolsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<InstancePool> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of all instance pools in the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: InstancePoolsListOptionalParams
  ): PagedAsyncIterableIterator<InstancePool> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: InstancePoolsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<InstancePool[]> {
    let result: InstancePoolsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: InstancePoolsListOptionalParams
  ): AsyncIterableIterator<InstancePool> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    instancePoolName: string,
    options?: InstancePoolsGetOptionalParams
  ): Promise<InstancePoolsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, instancePoolName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be created or updated.
   * @param parameters The requested instance pool resource state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    instancePoolName: string,
    parameters: InstancePool,
    options?: InstancePoolsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InstancePoolsCreateOrUpdateResponse>,
      InstancePoolsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<InstancePoolsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, instancePoolName, parameters, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      InstancePoolsCreateOrUpdateResponse,
      OperationState<InstancePoolsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be created or updated.
   * @param parameters The requested instance pool resource state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    instancePoolName: string,
    parameters: InstancePool,
    options?: InstancePoolsCreateOrUpdateOptionalParams
  ): Promise<InstancePoolsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      instancePoolName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an instance pool
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be deleted
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    instancePoolName: string,
    options?: InstancePoolsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, instancePoolName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an instance pool
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be deleted
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    instancePoolName: string,
    options?: InstancePoolsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      instancePoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be updated.
   * @param parameters The requested instance pool resource state.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    instancePoolName: string,
    parameters: InstancePoolUpdate,
    options?: InstancePoolsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InstancePoolsUpdateResponse>,
      InstancePoolsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<InstancePoolsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, instancePoolName, parameters, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      InstancePoolsUpdateResponse,
      OperationState<InstancePoolsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be updated.
   * @param parameters The requested instance pool resource state.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    instancePoolName: string,
    parameters: InstancePoolUpdate,
    options?: InstancePoolsUpdateOptionalParams
  ): Promise<InstancePoolsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      instancePoolName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a list of instance pools in the resource group
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: InstancePoolsListByResourceGroupOptionalParams
  ): Promise<InstancePoolsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets a list of all instance pools in the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: InstancePoolsListOptionalParams
  ): Promise<InstancePoolsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: InstancePoolsListByResourceGroupNextOptionalParams
  ): Promise<InstancePoolsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: InstancePoolsListNextOptionalParams
  ): Promise<InstancePoolsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InstancePool
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.instancePoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.InstancePool
    },
    201: {
      bodyMapper: Mappers.InstancePool
    },
    202: {
      bodyMapper: Mappers.InstancePool
    },
    204: {
      bodyMapper: Mappers.InstancePool
    },
    default: {}
  },
  requestBody: Parameters.parameters20,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.instancePoolName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.instancePoolName
  ],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.InstancePool
    },
    201: {
      bodyMapper: Mappers.InstancePool
    },
    202: {
      bodyMapper: Mappers.InstancePool
    },
    204: {
      bodyMapper: Mappers.InstancePool
    },
    default: {}
  },
  requestBody: Parameters.parameters21,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.instancePoolName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InstancePoolListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/instancePools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InstancePoolListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InstancePoolListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InstancePoolListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
