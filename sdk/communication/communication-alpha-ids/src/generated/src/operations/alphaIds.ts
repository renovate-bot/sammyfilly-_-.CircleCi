/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing";
import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AlphaIds } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AlphaIDsClient } from "../alphaIDsClient";
import {
  AlphaId,
  AlphaIdsGetAlphaIdsNextOptionalParams,
  AlphaIdsGetAlphaIdsOptionalParams,
  AlphaIdsGetAlphaIdsResponse,
  AlphaIdsGetDynamicAlphaIdConfigurationOptionalParams,
  AlphaIdsGetDynamicAlphaIdConfigurationResponse,
  AlphaIdsUpsertDynamicAlphaIdConfigurationOptionalParams,
  AlphaIdsUpsertDynamicAlphaIdConfigurationResponse,
  AlphaIdsGetDynamicAlphaIdCountriesOptionalParams,
  AlphaIdsGetDynamicAlphaIdCountriesResponse,
  AlphaIdsGetPreRegisteredAlphaIdCountriesOptionalParams,
  AlphaIdsGetPreRegisteredAlphaIdCountriesResponse,
  AlphaIdsGetAlphaIdsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AlphaIds operations. */
export class AlphaIdsImpl implements AlphaIds {
  private readonly client: AlphaIDsClient;

  /**
   * Initialize a new instance of the class AlphaIds class.
   * @param client Reference to the service client
   */
  constructor(client: AlphaIDsClient) {
    this.client = client;
  }

  /**
   * Gets the list of alpha ids for the current resource.
   * @param options The options parameters.
   */
  public listAlphaIds(
    options?: AlphaIdsGetAlphaIdsOptionalParams
  ): PagedAsyncIterableIterator<AlphaId> {
    const iter = this.getAlphaIdsPagingAll(options);
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
        return this.getAlphaIdsPagingPage(options, settings);
      }
    };
  }

  private async *getAlphaIdsPagingPage(
    options?: AlphaIdsGetAlphaIdsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AlphaId[]> {
    let result: AlphaIdsGetAlphaIdsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getAlphaIds(options);
      let page = result.alphaIds || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getAlphaIdsNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.alphaIds || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getAlphaIdsPagingAll(
    options?: AlphaIdsGetAlphaIdsOptionalParams
  ): AsyncIterableIterator<AlphaId> {
    for await (const page of this.getAlphaIdsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the list of alpha ids for the current resource.
   * @param options The options parameters.
   */
  private async _getAlphaIds(
    options?: AlphaIdsGetAlphaIdsOptionalParams
  ): Promise<AlphaIdsGetAlphaIdsResponse> {
    return tracingClient.withSpan(
      "AlphaIDsClient._getAlphaIds",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getAlphaIdsOperationSpec
        ) as Promise<AlphaIdsGetAlphaIdsResponse>;
      }
    );
  }

  /**
   * Get the Dynamic Alpha ID configuration that's applied for the current resource.
   * @param options The options parameters.
   */
  async getDynamicAlphaIdConfiguration(
    options?: AlphaIdsGetDynamicAlphaIdConfigurationOptionalParams
  ): Promise<AlphaIdsGetDynamicAlphaIdConfigurationResponse> {
    return tracingClient.withSpan(
      "AlphaIDsClient.getDynamicAlphaIdConfiguration",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getDynamicAlphaIdConfigurationOperationSpec
        ) as Promise<AlphaIdsGetDynamicAlphaIdConfigurationResponse>;
      }
    );
  }

  /**
   * Creates or updates Dynamic Alpha ID Configuration for the current resource.
   * @param enabled Indicates whether the use of Dynamic Alpha IDs is supported for a specific resource.
   * @param options The options parameters.
   */
  async upsertDynamicAlphaIdConfiguration(
    enabled: boolean,
    options?: AlphaIdsUpsertDynamicAlphaIdConfigurationOptionalParams
  ): Promise<AlphaIdsUpsertDynamicAlphaIdConfigurationResponse> {
    return tracingClient.withSpan(
      "AlphaIDsClient.upsertDynamicAlphaIdConfiguration",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { enabled, options },
          upsertDynamicAlphaIdConfigurationOperationSpec
        ) as Promise<AlphaIdsUpsertDynamicAlphaIdConfigurationResponse>;
      }
    );
  }

  /**
   * Gets the list of countries that support Dynamic Alpha IDs.
   * @param options The options parameters.
   */
  async getDynamicAlphaIdCountries(
    options?: AlphaIdsGetDynamicAlphaIdCountriesOptionalParams
  ): Promise<AlphaIdsGetDynamicAlphaIdCountriesResponse> {
    return tracingClient.withSpan(
      "AlphaIDsClient.getDynamicAlphaIdCountries",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getDynamicAlphaIdCountriesOperationSpec
        ) as Promise<AlphaIdsGetDynamicAlphaIdCountriesResponse>;
      }
    );
  }

  /**
   * Gets the list of countries that support Pre-Registered Alpha IDs.
   * @param options The options parameters.
   */
  async getPreRegisteredAlphaIdCountries(
    options?: AlphaIdsGetPreRegisteredAlphaIdCountriesOptionalParams
  ): Promise<AlphaIdsGetPreRegisteredAlphaIdCountriesResponse> {
    return tracingClient.withSpan(
      "AlphaIDsClient.getPreRegisteredAlphaIdCountries",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getPreRegisteredAlphaIdCountriesOperationSpec
        ) as Promise<AlphaIdsGetPreRegisteredAlphaIdCountriesResponse>;
      }
    );
  }

  /**
   * GetAlphaIdsNext
   * @param nextLink The nextLink from the previous successful call to the GetAlphaIds method.
   * @param options The options parameters.
   */
  private async _getAlphaIdsNext(
    nextLink: string,
    options?: AlphaIdsGetAlphaIdsNextOptionalParams
  ): Promise<AlphaIdsGetAlphaIdsNextResponse> {
    return tracingClient.withSpan(
      "AlphaIDsClient._getAlphaIdsNext",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { nextLink, options },
          getAlphaIdsNextOperationSpec
        ) as Promise<AlphaIdsGetAlphaIdsNextResponse>;
      }
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getAlphaIdsOperationSpec: coreClient.OperationSpec = {
  path: "/alphaIds",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AcquiredAlphaIds
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const getDynamicAlphaIdConfigurationOperationSpec: coreClient.OperationSpec = {
  path: "/alphaIds/dynamic/configuration",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DynamicAlphaIdConfiguration
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const upsertDynamicAlphaIdConfigurationOperationSpec: coreClient.OperationSpec = {
  path: "/alphaIds/dynamic/configuration",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DynamicAlphaIdConfiguration
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: {
    parameterPath: { enabled: ["enabled"] },
    mapper: { ...Mappers.DynamicAlphaIdConfiguration, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDynamicAlphaIdCountriesOperationSpec: coreClient.OperationSpec = {
  path: "/alphaIds/dynamic/countries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SupportedCountries
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const getPreRegisteredAlphaIdCountriesOperationSpec: coreClient.OperationSpec = {
  path: "/alphaIds/pre-registered/countries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SupportedCountries
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const getAlphaIdsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AcquiredAlphaIds
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};