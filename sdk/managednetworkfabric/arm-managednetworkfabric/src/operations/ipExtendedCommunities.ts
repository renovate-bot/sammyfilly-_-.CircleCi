/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { IpExtendedCommunities } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureNetworkFabricManagementServiceAPI } from "../azureNetworkFabricManagementServiceAPI";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  IpExtendedCommunity,
  IpExtendedCommunitiesListByResourceGroupNextOptionalParams,
  IpExtendedCommunitiesListByResourceGroupOptionalParams,
  IpExtendedCommunitiesListByResourceGroupResponse,
  IpExtendedCommunitiesListBySubscriptionNextOptionalParams,
  IpExtendedCommunitiesListBySubscriptionOptionalParams,
  IpExtendedCommunitiesListBySubscriptionResponse,
  IpExtendedCommunitiesCreateOptionalParams,
  IpExtendedCommunitiesCreateResponse,
  IpExtendedCommunitiesGetOptionalParams,
  IpExtendedCommunitiesGetResponse,
  IpExtendedCommunityPatch,
  IpExtendedCommunitiesUpdateOptionalParams,
  IpExtendedCommunitiesUpdateResponse,
  IpExtendedCommunitiesDeleteOptionalParams,
  IpExtendedCommunitiesDeleteResponse,
  IpExtendedCommunitiesListByResourceGroupNextResponse,
  IpExtendedCommunitiesListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing IpExtendedCommunities operations. */
export class IpExtendedCommunitiesImpl implements IpExtendedCommunities {
  private readonly client: AzureNetworkFabricManagementServiceAPI;

  /**
   * Initialize a new instance of the class IpExtendedCommunities class.
   * @param client Reference to the service client
   */
  constructor(client: AzureNetworkFabricManagementServiceAPI) {
    this.client = client;
  }

  /**
   * Implements IpExtendedCommunities list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: IpExtendedCommunitiesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<IpExtendedCommunity> {
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
    options?: IpExtendedCommunitiesListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<IpExtendedCommunity[]> {
    let result: IpExtendedCommunitiesListByResourceGroupResponse;
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
    options?: IpExtendedCommunitiesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<IpExtendedCommunity> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Implements IpExtendedCommunities list by subscription GET method.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: IpExtendedCommunitiesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<IpExtendedCommunity> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: IpExtendedCommunitiesListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<IpExtendedCommunity[]> {
    let result: IpExtendedCommunitiesListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: IpExtendedCommunitiesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<IpExtendedCommunity> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Implements IP Extended Community PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipExtendedCommunityName Name of the IP Extended Community.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    ipExtendedCommunityName: string,
    body: IpExtendedCommunity,
    options?: IpExtendedCommunitiesCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IpExtendedCommunitiesCreateResponse>,
      IpExtendedCommunitiesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IpExtendedCommunitiesCreateResponse> => {
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
      args: { resourceGroupName, ipExtendedCommunityName, body, options },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      IpExtendedCommunitiesCreateResponse,
      OperationState<IpExtendedCommunitiesCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements IP Extended Community PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipExtendedCommunityName Name of the IP Extended Community.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    ipExtendedCommunityName: string,
    body: IpExtendedCommunity,
    options?: IpExtendedCommunitiesCreateOptionalParams
  ): Promise<IpExtendedCommunitiesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      ipExtendedCommunityName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements IP Extended Community GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipExtendedCommunityName Name of the IP Extended Community.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ipExtendedCommunityName: string,
    options?: IpExtendedCommunitiesGetOptionalParams
  ): Promise<IpExtendedCommunitiesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ipExtendedCommunityName, options },
      getOperationSpec
    );
  }

  /**
   * API to update certain properties of the IP Extended Community resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipExtendedCommunityName Name of the IP Extended Community.
   * @param body IP Extended Community properties to update.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    ipExtendedCommunityName: string,
    body: IpExtendedCommunityPatch,
    options?: IpExtendedCommunitiesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IpExtendedCommunitiesUpdateResponse>,
      IpExtendedCommunitiesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IpExtendedCommunitiesUpdateResponse> => {
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
      args: { resourceGroupName, ipExtendedCommunityName, body, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      IpExtendedCommunitiesUpdateResponse,
      OperationState<IpExtendedCommunitiesUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * API to update certain properties of the IP Extended Community resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipExtendedCommunityName Name of the IP Extended Community.
   * @param body IP Extended Community properties to update.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    ipExtendedCommunityName: string,
    body: IpExtendedCommunityPatch,
    options?: IpExtendedCommunitiesUpdateOptionalParams
  ): Promise<IpExtendedCommunitiesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      ipExtendedCommunityName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements IP Extended Community DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipExtendedCommunityName Name of the IP Extended Community.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    ipExtendedCommunityName: string,
    options?: IpExtendedCommunitiesDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IpExtendedCommunitiesDeleteResponse>,
      IpExtendedCommunitiesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IpExtendedCommunitiesDeleteResponse> => {
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
      args: { resourceGroupName, ipExtendedCommunityName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      IpExtendedCommunitiesDeleteResponse,
      OperationState<IpExtendedCommunitiesDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements IP Extended Community DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipExtendedCommunityName Name of the IP Extended Community.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    ipExtendedCommunityName: string,
    options?: IpExtendedCommunitiesDeleteOptionalParams
  ): Promise<IpExtendedCommunitiesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      ipExtendedCommunityName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements IpExtendedCommunities list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: IpExtendedCommunitiesListByResourceGroupOptionalParams
  ): Promise<IpExtendedCommunitiesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Implements IpExtendedCommunities list by subscription GET method.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: IpExtendedCommunitiesListBySubscriptionOptionalParams
  ): Promise<IpExtendedCommunitiesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: IpExtendedCommunitiesListByResourceGroupNextOptionalParams
  ): Promise<IpExtendedCommunitiesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: IpExtendedCommunitiesListBySubscriptionNextOptionalParams
  ): Promise<IpExtendedCommunitiesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/{ipExtendedCommunityName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IpExtendedCommunity
    },
    201: {
      bodyMapper: Mappers.IpExtendedCommunity
    },
    202: {
      bodyMapper: Mappers.IpExtendedCommunity
    },
    204: {
      bodyMapper: Mappers.IpExtendedCommunity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ipExtendedCommunityName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/{ipExtendedCommunityName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IpExtendedCommunity
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
    Parameters.ipExtendedCommunityName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/{ipExtendedCommunityName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.IpExtendedCommunity
    },
    201: {
      bodyMapper: Mappers.IpExtendedCommunity
    },
    202: {
      bodyMapper: Mappers.IpExtendedCommunity
    },
    204: {
      bodyMapper: Mappers.IpExtendedCommunity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ipExtendedCommunityName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/{ipExtendedCommunityName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.IpExtendedCommunitiesDeleteHeaders
    },
    201: {
      headersMapper: Mappers.IpExtendedCommunitiesDeleteHeaders
    },
    202: {
      headersMapper: Mappers.IpExtendedCommunitiesDeleteHeaders
    },
    204: {
      headersMapper: Mappers.IpExtendedCommunitiesDeleteHeaders
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
    Parameters.ipExtendedCommunityName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IpExtendedCommunityListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IpExtendedCommunityListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IpExtendedCommunityListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
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
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IpExtendedCommunityListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};