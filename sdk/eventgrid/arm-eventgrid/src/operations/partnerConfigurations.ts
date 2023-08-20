/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { PartnerConfigurations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClient } from "../eventGridManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  PartnerConfiguration,
  PartnerConfigurationsListByResourceGroupOptionalParams,
  PartnerConfigurationsListByResourceGroupResponse,
  PartnerConfigurationsListBySubscriptionNextOptionalParams,
  PartnerConfigurationsListBySubscriptionOptionalParams,
  PartnerConfigurationsListBySubscriptionResponse,
  PartnerConfigurationsGetOptionalParams,
  PartnerConfigurationsGetResponse,
  PartnerConfigurationsCreateOrUpdateOptionalParams,
  PartnerConfigurationsCreateOrUpdateResponse,
  PartnerConfigurationsDeleteOptionalParams,
  PartnerConfigurationUpdateParameters,
  PartnerConfigurationsUpdateOptionalParams,
  PartnerConfigurationsUpdateResponse,
  Partner,
  PartnerConfigurationsAuthorizePartnerOptionalParams,
  PartnerConfigurationsAuthorizePartnerResponse,
  PartnerConfigurationsUnauthorizePartnerOptionalParams,
  PartnerConfigurationsUnauthorizePartnerResponse,
  PartnerConfigurationsListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PartnerConfigurations operations. */
export class PartnerConfigurationsImpl implements PartnerConfigurations {
  private readonly client: EventGridManagementClient;

  /**
   * Initialize a new instance of the class PartnerConfigurations class.
   * @param client Reference to the service client
   */
  constructor(client: EventGridManagementClient) {
    this.client = client;
  }

  /**
   * List all the partner configurations under a resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: PartnerConfigurationsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<PartnerConfiguration> {
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
    options?: PartnerConfigurationsListByResourceGroupOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<PartnerConfiguration[]> {
    let result: PartnerConfigurationsListByResourceGroupResponse;
    result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: PartnerConfigurationsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<PartnerConfiguration> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all the partner configurations under an Azure subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: PartnerConfigurationsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<PartnerConfiguration> {
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
    options?: PartnerConfigurationsListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PartnerConfiguration[]> {
    let result: PartnerConfigurationsListBySubscriptionResponse;
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
    options?: PartnerConfigurationsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<PartnerConfiguration> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get properties of a partner configuration.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    options?: PartnerConfigurationsGetOptionalParams
  ): Promise<PartnerConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Synchronously creates or updates a partner configuration with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerConfigurationInfo Partner configuration information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    partnerConfigurationInfo: PartnerConfiguration,
    options?: PartnerConfigurationsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<PartnerConfigurationsCreateOrUpdateResponse>,
      PartnerConfigurationsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PartnerConfigurationsCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, partnerConfigurationInfo, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      PartnerConfigurationsCreateOrUpdateResponse,
      OperationState<PartnerConfigurationsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Synchronously creates or updates a partner configuration with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerConfigurationInfo Partner configuration information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    partnerConfigurationInfo: PartnerConfiguration,
    options?: PartnerConfigurationsCreateOrUpdateOptionalParams
  ): Promise<PartnerConfigurationsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      partnerConfigurationInfo,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete existing partner configuration.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    options?: PartnerConfigurationsDeleteOptionalParams
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
      args: { resourceGroupName, options },
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
   * Delete existing partner configuration.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    options?: PartnerConfigurationsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(resourceGroupName, options);
    return poller.pollUntilDone();
  }

  /**
   * Synchronously updates a partner configuration with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerConfigurationUpdateParameters Partner configuration update information.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    partnerConfigurationUpdateParameters: PartnerConfigurationUpdateParameters,
    options?: PartnerConfigurationsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<PartnerConfigurationsUpdateResponse>,
      PartnerConfigurationsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PartnerConfigurationsUpdateResponse> => {
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
      args: {
        resourceGroupName,
        partnerConfigurationUpdateParameters,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      PartnerConfigurationsUpdateResponse,
      OperationState<PartnerConfigurationsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Synchronously updates a partner configuration with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerConfigurationUpdateParameters Partner configuration update information.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    partnerConfigurationUpdateParameters: PartnerConfigurationUpdateParameters,
    options?: PartnerConfigurationsUpdateOptionalParams
  ): Promise<PartnerConfigurationsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      partnerConfigurationUpdateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List all the partner configurations under a resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: PartnerConfigurationsListByResourceGroupOptionalParams
  ): Promise<PartnerConfigurationsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * List all the partner configurations under an Azure subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: PartnerConfigurationsListBySubscriptionOptionalParams
  ): Promise<PartnerConfigurationsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Authorize a single partner either by partner registration immutable Id or by partner name.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerInfo The information of the partner to be authorized.
   * @param options The options parameters.
   */
  authorizePartner(
    resourceGroupName: string,
    partnerInfo: Partner,
    options?: PartnerConfigurationsAuthorizePartnerOptionalParams
  ): Promise<PartnerConfigurationsAuthorizePartnerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, partnerInfo, options },
      authorizePartnerOperationSpec
    );
  }

  /**
   * Unauthorize a single partner either by partner registration immutable Id or by partner name.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerInfo The information of the partner to be unauthorized.
   * @param options The options parameters.
   */
  unauthorizePartner(
    resourceGroupName: string,
    partnerInfo: Partner,
    options?: PartnerConfigurationsUnauthorizePartnerOptionalParams
  ): Promise<PartnerConfigurationsUnauthorizePartnerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, partnerInfo, options },
      unauthorizePartnerOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: PartnerConfigurationsListBySubscriptionNextOptionalParams
  ): Promise<PartnerConfigurationsListBySubscriptionNextResponse> {
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerConfigurations/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerConfiguration
    },
    default: {}
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
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerConfigurations/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerConfiguration
    },
    201: {
      bodyMapper: Mappers.PartnerConfiguration
    },
    202: {
      bodyMapper: Mappers.PartnerConfiguration
    },
    204: {
      bodyMapper: Mappers.PartnerConfiguration
    },
    default: {}
  },
  requestBody: Parameters.partnerConfigurationInfo,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerConfigurations/default",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerConfigurations/default",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerConfiguration
    },
    201: {
      bodyMapper: Mappers.PartnerConfiguration
    },
    202: {
      bodyMapper: Mappers.PartnerConfiguration
    },
    204: {
      bodyMapper: Mappers.PartnerConfiguration
    },
    default: {}
  },
  requestBody: Parameters.partnerConfigurationUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerConfigurationsListResult
    },
    default: {}
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
    "/subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/partnerConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerConfigurationsListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const authorizePartnerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerConfigurations/default/authorizePartner",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerConfiguration
    },
    default: {}
  },
  requestBody: Parameters.partnerInfo,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const unauthorizePartnerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerConfigurations/default/unauthorizePartner",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerConfiguration
    },
    default: {}
  },
  requestBody: Parameters.partnerInfo,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerConfigurationsListResult
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