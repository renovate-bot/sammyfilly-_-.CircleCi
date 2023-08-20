/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { GatewayRouteConfigs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClient } from "../appPlatformManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  GatewayRouteConfigResource,
  GatewayRouteConfigsListNextOptionalParams,
  GatewayRouteConfigsListOptionalParams,
  GatewayRouteConfigsListResponse,
  GatewayRouteConfigsGetOptionalParams,
  GatewayRouteConfigsGetResponse,
  GatewayRouteConfigsCreateOrUpdateOptionalParams,
  GatewayRouteConfigsCreateOrUpdateResponse,
  GatewayRouteConfigsDeleteOptionalParams,
  GatewayRouteConfigsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GatewayRouteConfigs operations. */
export class GatewayRouteConfigsImpl implements GatewayRouteConfigs {
  private readonly client: AppPlatformManagementClient;

  /**
   * Initialize a new instance of the class GatewayRouteConfigs class.
   * @param client Reference to the service client
   */
  constructor(client: AppPlatformManagementClient) {
    this.client = client;
  }

  /**
   * Handle requests to list all Spring Cloud Gateway route configs.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param gatewayName The name of Spring Cloud Gateway.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    gatewayName: string,
    options?: GatewayRouteConfigsListOptionalParams
  ): PagedAsyncIterableIterator<GatewayRouteConfigResource> {
    const iter = this.listPagingAll(
      resourceGroupName,
      serviceName,
      gatewayName,
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
        return this.listPagingPage(
          resourceGroupName,
          serviceName,
          gatewayName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    gatewayName: string,
    options?: GatewayRouteConfigsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<GatewayRouteConfigResource[]> {
    let result: GatewayRouteConfigsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        serviceName,
        gatewayName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serviceName,
        gatewayName,
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
    serviceName: string,
    gatewayName: string,
    options?: GatewayRouteConfigsListOptionalParams
  ): AsyncIterableIterator<GatewayRouteConfigResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      gatewayName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the Spring Cloud Gateway route configs.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param gatewayName The name of Spring Cloud Gateway.
   * @param routeConfigName The name of the Spring Cloud Gateway route config.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    gatewayName: string,
    routeConfigName: string,
    options?: GatewayRouteConfigsGetOptionalParams
  ): Promise<GatewayRouteConfigsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayName, routeConfigName, options },
      getOperationSpec
    );
  }

  /**
   * Create the default Spring Cloud Gateway route configs or update the existing Spring Cloud Gateway
   * route configs.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param gatewayName The name of Spring Cloud Gateway.
   * @param routeConfigName The name of the Spring Cloud Gateway route config.
   * @param gatewayRouteConfigResource The Spring Cloud Gateway route config for the create or update
   *                                   operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    gatewayName: string,
    routeConfigName: string,
    gatewayRouteConfigResource: GatewayRouteConfigResource,
    options?: GatewayRouteConfigsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<GatewayRouteConfigsCreateOrUpdateResponse>,
      GatewayRouteConfigsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GatewayRouteConfigsCreateOrUpdateResponse> => {
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
        serviceName,
        gatewayName,
        routeConfigName,
        gatewayRouteConfigResource,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      GatewayRouteConfigsCreateOrUpdateResponse,
      OperationState<GatewayRouteConfigsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create the default Spring Cloud Gateway route configs or update the existing Spring Cloud Gateway
   * route configs.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param gatewayName The name of Spring Cloud Gateway.
   * @param routeConfigName The name of the Spring Cloud Gateway route config.
   * @param gatewayRouteConfigResource The Spring Cloud Gateway route config for the create or update
   *                                   operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    gatewayName: string,
    routeConfigName: string,
    gatewayRouteConfigResource: GatewayRouteConfigResource,
    options?: GatewayRouteConfigsCreateOrUpdateOptionalParams
  ): Promise<GatewayRouteConfigsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serviceName,
      gatewayName,
      routeConfigName,
      gatewayRouteConfigResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete the Spring Cloud Gateway route config.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param gatewayName The name of Spring Cloud Gateway.
   * @param routeConfigName The name of the Spring Cloud Gateway route config.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serviceName: string,
    gatewayName: string,
    routeConfigName: string,
    options?: GatewayRouteConfigsDeleteOptionalParams
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
      args: {
        resourceGroupName,
        serviceName,
        gatewayName,
        routeConfigName,
        options
      },
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
   * Delete the Spring Cloud Gateway route config.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param gatewayName The name of Spring Cloud Gateway.
   * @param routeConfigName The name of the Spring Cloud Gateway route config.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    gatewayName: string,
    routeConfigName: string,
    options?: GatewayRouteConfigsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serviceName,
      gatewayName,
      routeConfigName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Handle requests to list all Spring Cloud Gateway route configs.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param gatewayName The name of Spring Cloud Gateway.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    gatewayName: string,
    options?: GatewayRouteConfigsListOptionalParams
  ): Promise<GatewayRouteConfigsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param gatewayName The name of Spring Cloud Gateway.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    gatewayName: string,
    nextLink: string,
    options?: GatewayRouteConfigsListNextOptionalParams
  ): Promise<GatewayRouteConfigsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/routeConfigs/{routeConfigName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayRouteConfigResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.gatewayName,
    Parameters.routeConfigName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/routeConfigs/{routeConfigName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayRouteConfigResource
    },
    201: {
      bodyMapper: Mappers.GatewayRouteConfigResource
    },
    202: {
      bodyMapper: Mappers.GatewayRouteConfigResource
    },
    204: {
      bodyMapper: Mappers.GatewayRouteConfigResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.gatewayRouteConfigResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.gatewayName,
    Parameters.routeConfigName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/routeConfigs/{routeConfigName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.gatewayName,
    Parameters.routeConfigName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/routeConfigs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayRouteConfigResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayRouteConfigResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.nextLink,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};