/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AzureFirewallFqdnTags } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import {
  AzureFirewallFqdnTag,
  AzureFirewallFqdnTagsListAllNextOptionalParams,
  AzureFirewallFqdnTagsListAllOptionalParams,
  AzureFirewallFqdnTagsListAllResponse,
  AzureFirewallFqdnTagsListAllNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AzureFirewallFqdnTags operations. */
export class AzureFirewallFqdnTagsImpl implements AzureFirewallFqdnTags {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class AzureFirewallFqdnTags class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the Azure Firewall FQDN Tags in a subscription.
   * @param options The options parameters.
   */
  public listAll(
    options?: AzureFirewallFqdnTagsListAllOptionalParams
  ): PagedAsyncIterableIterator<AzureFirewallFqdnTag> {
    const iter = this.listAllPagingAll(options);
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
        return this.listAllPagingPage(options, settings);
      }
    };
  }

  private async *listAllPagingPage(
    options?: AzureFirewallFqdnTagsListAllOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AzureFirewallFqdnTag[]> {
    let result: AzureFirewallFqdnTagsListAllResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAll(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAllNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAllPagingAll(
    options?: AzureFirewallFqdnTagsListAllOptionalParams
  ): AsyncIterableIterator<AzureFirewallFqdnTag> {
    for await (const page of this.listAllPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets all the Azure Firewall FQDN Tags in a subscription.
   * @param options The options parameters.
   */
  private _listAll(
    options?: AzureFirewallFqdnTagsListAllOptionalParams
  ): Promise<AzureFirewallFqdnTagsListAllResponse> {
    return this.client.sendOperationRequest({ options }, listAllOperationSpec);
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  private _listAllNext(
    nextLink: string,
    options?: AzureFirewallFqdnTagsListAllNextOptionalParams
  ): Promise<AzureFirewallFqdnTagsListAllNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAllNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listAllOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/azureFirewallFqdnTags",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureFirewallFqdnTagListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureFirewallFqdnTagListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
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