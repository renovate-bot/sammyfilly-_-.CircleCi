/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DeletedServers } from "../operationsInterfaces";
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
  DeletedServer,
  DeletedServersListNextOptionalParams,
  DeletedServersListOptionalParams,
  DeletedServersListResponse,
  DeletedServersListByLocationNextOptionalParams,
  DeletedServersListByLocationOptionalParams,
  DeletedServersListByLocationResponse,
  DeletedServersGetOptionalParams,
  DeletedServersGetResponse,
  DeletedServersRecoverOptionalParams,
  DeletedServersRecoverResponse,
  DeletedServersListNextResponse,
  DeletedServersListByLocationNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DeletedServers operations. */
export class DeletedServersImpl implements DeletedServers {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class DeletedServers class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of all deleted servers in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: DeletedServersListOptionalParams
  ): PagedAsyncIterableIterator<DeletedServer> {
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
    options?: DeletedServersListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeletedServer[]> {
    let result: DeletedServersListResponse;
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
    options?: DeletedServersListOptionalParams
  ): AsyncIterableIterator<DeletedServer> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of deleted servers for a location.
   * @param locationName The name of the region where the resource is located.
   * @param options The options parameters.
   */
  public listByLocation(
    locationName: string,
    options?: DeletedServersListByLocationOptionalParams
  ): PagedAsyncIterableIterator<DeletedServer> {
    const iter = this.listByLocationPagingAll(locationName, options);
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
        return this.listByLocationPagingPage(locationName, options, settings);
      }
    };
  }

  private async *listByLocationPagingPage(
    locationName: string,
    options?: DeletedServersListByLocationOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeletedServer[]> {
    let result: DeletedServersListByLocationResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByLocation(locationName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByLocationNext(
        locationName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByLocationPagingAll(
    locationName: string,
    options?: DeletedServersListByLocationOptionalParams
  ): AsyncIterableIterator<DeletedServer> {
    for await (const page of this.listByLocationPagingPage(
      locationName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of all deleted servers in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: DeletedServersListOptionalParams
  ): Promise<DeletedServersListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets a deleted server.
   * @param locationName The name of the region where the resource is located.
   * @param deletedServerName The name of the deleted server.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    deletedServerName: string,
    options?: DeletedServersGetOptionalParams
  ): Promise<DeletedServersGetResponse> {
    return this.client.sendOperationRequest(
      { locationName, deletedServerName, options },
      getOperationSpec
    );
  }

  /**
   * Gets a list of deleted servers for a location.
   * @param locationName The name of the region where the resource is located.
   * @param options The options parameters.
   */
  private _listByLocation(
    locationName: string,
    options?: DeletedServersListByLocationOptionalParams
  ): Promise<DeletedServersListByLocationResponse> {
    return this.client.sendOperationRequest(
      { locationName, options },
      listByLocationOperationSpec
    );
  }

  /**
   * Recovers a deleted server.
   * @param locationName The name of the region where the resource is located.
   * @param deletedServerName The name of the deleted server.
   * @param options The options parameters.
   */
  async beginRecover(
    locationName: string,
    deletedServerName: string,
    options?: DeletedServersRecoverOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DeletedServersRecoverResponse>,
      DeletedServersRecoverResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeletedServersRecoverResponse> => {
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
      args: { locationName, deletedServerName, options },
      spec: recoverOperationSpec
    });
    const poller = await createHttpPoller<
      DeletedServersRecoverResponse,
      OperationState<DeletedServersRecoverResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Recovers a deleted server.
   * @param locationName The name of the region where the resource is located.
   * @param deletedServerName The name of the deleted server.
   * @param options The options parameters.
   */
  async beginRecoverAndWait(
    locationName: string,
    deletedServerName: string,
    options?: DeletedServersRecoverOptionalParams
  ): Promise<DeletedServersRecoverResponse> {
    const poller = await this.beginRecover(
      locationName,
      deletedServerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: DeletedServersListNextOptionalParams
  ): Promise<DeletedServersListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByLocationNext
   * @param locationName The name of the region where the resource is located.
   * @param nextLink The nextLink from the previous successful call to the ListByLocation method.
   * @param options The options parameters.
   */
  private _listByLocationNext(
    locationName: string,
    nextLink: string,
    options?: DeletedServersListByLocationNextOptionalParams
  ): Promise<DeletedServersListByLocationNextResponse> {
    return this.client.sendOperationRequest(
      { locationName, nextLink, options },
      listByLocationNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/deletedServers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedServerListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/deletedServers/{deletedServerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedServer
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName,
    Parameters.deletedServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByLocationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/deletedServers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedServerListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const recoverOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/deletedServers/{deletedServerName}/recover",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedServer
    },
    201: {
      bodyMapper: Mappers.DeletedServer
    },
    202: {
      bodyMapper: Mappers.DeletedServer
    },
    204: {
      bodyMapper: Mappers.DeletedServer
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName,
    Parameters.deletedServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedServerListResult
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
const listByLocationNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedServerListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};