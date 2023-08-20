/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DeletedAccounts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClient } from "../storageManagementClient";
import {
  DeletedAccount,
  DeletedAccountsListNextOptionalParams,
  DeletedAccountsListOptionalParams,
  DeletedAccountsListResponse,
  DeletedAccountsGetOptionalParams,
  DeletedAccountsGetResponse,
  DeletedAccountsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DeletedAccounts operations. */
export class DeletedAccountsImpl implements DeletedAccounts {
  private readonly client: StorageManagementClient;

  /**
   * Initialize a new instance of the class DeletedAccounts class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClient) {
    this.client = client;
  }

  /**
   * Lists deleted accounts under the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: DeletedAccountsListOptionalParams
  ): PagedAsyncIterableIterator<DeletedAccount> {
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
    options?: DeletedAccountsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeletedAccount[]> {
    let result: DeletedAccountsListResponse;
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
    options?: DeletedAccountsListOptionalParams
  ): AsyncIterableIterator<DeletedAccount> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists deleted accounts under the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: DeletedAccountsListOptionalParams
  ): Promise<DeletedAccountsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Get properties of specified deleted account resource.
   * @param deletedAccountName Name of the deleted storage account.
   * @param location The location of the deleted storage account.
   * @param options The options parameters.
   */
  get(
    deletedAccountName: string,
    location: string,
    options?: DeletedAccountsGetOptionalParams
  ): Promise<DeletedAccountsGetResponse> {
    return this.client.sendOperationRequest(
      { deletedAccountName, location, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: DeletedAccountsListNextOptionalParams
  ): Promise<DeletedAccountsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/deletedAccounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedAccountListResult
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
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/locations/{location}/deletedAccounts/{deletedAccountName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedAccount
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.deletedAccountName,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedAccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
