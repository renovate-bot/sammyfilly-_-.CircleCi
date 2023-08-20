/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { VmmServers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { Scvmm } from "../scvmm";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  VMMServer,
  VmmServersListByResourceGroupNextOptionalParams,
  VmmServersListByResourceGroupOptionalParams,
  VmmServersListByResourceGroupResponse,
  VmmServersListBySubscriptionNextOptionalParams,
  VmmServersListBySubscriptionOptionalParams,
  VmmServersListBySubscriptionResponse,
  VmmServersGetOptionalParams,
  VmmServersGetResponse,
  VmmServersCreateOrUpdateOptionalParams,
  VmmServersCreateOrUpdateResponse,
  VmmServersDeleteOptionalParams,
  ResourcePatch,
  VmmServersUpdateOptionalParams,
  VmmServersUpdateResponse,
  VmmServersListByResourceGroupNextResponse,
  VmmServersListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VmmServers operations. */
export class VmmServersImpl implements VmmServers {
  private readonly client: Scvmm;

  /**
   * Initialize a new instance of the class VmmServers class.
   * @param client Reference to the service client
   */
  constructor(client: Scvmm) {
    this.client = client;
  }

  /**
   * List of VmmServers in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: VmmServersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<VMMServer> {
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
    options?: VmmServersListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<VMMServer[]> {
    let result: VmmServersListByResourceGroupResponse;
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
    options?: VmmServersListByResourceGroupOptionalParams
  ): AsyncIterableIterator<VMMServer> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List of VmmServers in a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: VmmServersListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<VMMServer> {
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
    options?: VmmServersListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<VMMServer[]> {
    let result: VmmServersListBySubscriptionResponse;
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
    options?: VmmServersListBySubscriptionOptionalParams
  ): AsyncIterableIterator<VMMServer> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Implements VMMServer GET method.
   * @param resourceGroupName The name of the resource group.
   * @param vmmServerName Name of the VMMServer.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmmServerName: string,
    options?: VmmServersGetOptionalParams
  ): Promise<VmmServersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmmServerName, options },
      getOperationSpec
    );
  }

  /**
   * Onboards the SCVMM fabric as an Azure VmmServer resource.
   * @param resourceGroupName The name of the resource group.
   * @param vmmServerName Name of the VMMServer.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    vmmServerName: string,
    body: VMMServer,
    options?: VmmServersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VmmServersCreateOrUpdateResponse>,
      VmmServersCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VmmServersCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, vmmServerName, body, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Onboards the SCVMM fabric as an Azure VmmServer resource.
   * @param resourceGroupName The name of the resource group.
   * @param vmmServerName Name of the VMMServer.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vmmServerName: string,
    body: VMMServer,
    options?: VmmServersCreateOrUpdateOptionalParams
  ): Promise<VmmServersCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      vmmServerName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deboards the SCVMM fabric from Azure.
   * @param resourceGroupName The name of the resource group.
   * @param vmmServerName Name of the VMMServer.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    vmmServerName: string,
    options?: VmmServersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, vmmServerName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deboards the SCVMM fabric from Azure.
   * @param resourceGroupName The name of the resource group.
   * @param vmmServerName Name of the VMMServer.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    vmmServerName: string,
    options?: VmmServersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      vmmServerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates the VmmServers resource.
   * @param resourceGroupName The name of the resource group.
   * @param vmmServerName Name of the VMMServer.
   * @param body VmmServers patch payload.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    vmmServerName: string,
    body: ResourcePatch,
    options?: VmmServersUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VmmServersUpdateResponse>,
      VmmServersUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VmmServersUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, vmmServerName, body, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates the VmmServers resource.
   * @param resourceGroupName The name of the resource group.
   * @param vmmServerName Name of the VMMServer.
   * @param body VmmServers patch payload.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    vmmServerName: string,
    body: ResourcePatch,
    options?: VmmServersUpdateOptionalParams
  ): Promise<VmmServersUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      vmmServerName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List of VmmServers in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: VmmServersListByResourceGroupOptionalParams
  ): Promise<VmmServersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * List of VmmServers in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: VmmServersListBySubscriptionOptionalParams
  ): Promise<VmmServersListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: VmmServersListByResourceGroupNextOptionalParams
  ): Promise<VmmServersListByResourceGroupNextResponse> {
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
    options?: VmmServersListBySubscriptionNextOptionalParams
  ): Promise<VmmServersListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VMMServer
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
    Parameters.vmmServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VMMServer
    },
    201: {
      bodyMapper: Mappers.VMMServer
    },
    202: {
      bodyMapper: Mappers.VMMServer
    },
    204: {
      bodyMapper: Mappers.VMMServer
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vmmServerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.force],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vmmServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VMMServer
    },
    201: {
      bodyMapper: Mappers.VMMServer
    },
    202: {
      bodyMapper: Mappers.VMMServer
    },
    204: {
      bodyMapper: Mappers.VMMServer
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vmmServerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VMMServerListResult
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
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/vmmServers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VMMServerListResult
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
      bodyMapper: Mappers.VMMServerListResult
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
      bodyMapper: Mappers.VMMServerListResult
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