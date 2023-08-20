/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { PrivateZones } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PrivateDnsManagementClient } from "../privateDnsManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  PrivateZone,
  PrivateZonesListNextOptionalParams,
  PrivateZonesListOptionalParams,
  PrivateZonesListResponse,
  PrivateZonesListByResourceGroupNextOptionalParams,
  PrivateZonesListByResourceGroupOptionalParams,
  PrivateZonesListByResourceGroupResponse,
  PrivateZonesCreateOrUpdateOptionalParams,
  PrivateZonesCreateOrUpdateResponse,
  PrivateZonesUpdateOptionalParams,
  PrivateZonesUpdateResponse,
  PrivateZonesDeleteOptionalParams,
  PrivateZonesGetOptionalParams,
  PrivateZonesGetResponse,
  PrivateZonesListNextResponse,
  PrivateZonesListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateZones operations. */
export class PrivateZonesImpl implements PrivateZones {
  private readonly client: PrivateDnsManagementClient;

  /**
   * Initialize a new instance of the class PrivateZones class.
   * @param client Reference to the service client
   */
  constructor(client: PrivateDnsManagementClient) {
    this.client = client;
  }

  /**
   * Lists the Private DNS zones in all resource groups in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: PrivateZonesListOptionalParams
  ): PagedAsyncIterableIterator<PrivateZone> {
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
    options?: PrivateZonesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PrivateZone[]> {
    let result: PrivateZonesListResponse;
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
    options?: PrivateZonesListOptionalParams
  ): AsyncIterableIterator<PrivateZone> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists the Private DNS zones within a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: PrivateZonesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<PrivateZone> {
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
    options?: PrivateZonesListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PrivateZone[]> {
    let result: PrivateZonesListByResourceGroupResponse;
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
    options?: PrivateZonesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<PrivateZone> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates or updates a Private DNS zone. Does not modify Links to virtual networks or DNS records
   * within the zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    privateZoneName: string,
    parameters: PrivateZone,
    options?: PrivateZonesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateZonesCreateOrUpdateResponse>,
      PrivateZonesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PrivateZonesCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, privateZoneName, parameters, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      PrivateZonesCreateOrUpdateResponse,
      OperationState<PrivateZonesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a Private DNS zone. Does not modify Links to virtual networks or DNS records
   * within the zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    privateZoneName: string,
    parameters: PrivateZone,
    options?: PrivateZonesCreateOrUpdateOptionalParams
  ): Promise<PrivateZonesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      privateZoneName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a Private DNS zone. Does not modify virtual network links or DNS records within the zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    privateZoneName: string,
    parameters: PrivateZone,
    options?: PrivateZonesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateZonesUpdateResponse>,
      PrivateZonesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PrivateZonesUpdateResponse> => {
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
      args: { resourceGroupName, privateZoneName, parameters, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      PrivateZonesUpdateResponse,
      OperationState<PrivateZonesUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a Private DNS zone. Does not modify virtual network links or DNS records within the zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    privateZoneName: string,
    parameters: PrivateZone,
    options?: PrivateZonesUpdateOptionalParams
  ): Promise<PrivateZonesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      privateZoneName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a Private DNS zone. WARNING: All DNS records in the zone will also be deleted. This
   * operation cannot be undone. Private DNS zone cannot be deleted unless all virtual network links to
   * it are removed.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    privateZoneName: string,
    options?: PrivateZonesDeleteOptionalParams
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
      args: { resourceGroupName, privateZoneName, options },
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
   * Deletes a Private DNS zone. WARNING: All DNS records in the zone will also be deleted. This
   * operation cannot be undone. Private DNS zone cannot be deleted unless all virtual network links to
   * it are removed.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    privateZoneName: string,
    options?: PrivateZonesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      privateZoneName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a Private DNS zone. Retrieves the zone properties, but not the virtual networks links or the
   * record sets within the zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateZoneName: string,
    options?: PrivateZonesGetOptionalParams
  ): Promise<PrivateZonesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateZoneName, options },
      getOperationSpec
    );
  }

  /**
   * Lists the Private DNS zones in all resource groups in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: PrivateZonesListOptionalParams
  ): Promise<PrivateZonesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Lists the Private DNS zones within a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: PrivateZonesListByResourceGroupOptionalParams
  ): Promise<PrivateZonesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: PrivateZonesListNextOptionalParams
  ): Promise<PrivateZonesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
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
    options?: PrivateZonesListByResourceGroupNextOptionalParams
  ): Promise<PrivateZonesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateZone
    },
    201: {
      bodyMapper: Mappers.PrivateZone
    },
    202: {
      bodyMapper: Mappers.PrivateZone
    },
    204: {
      bodyMapper: Mappers.PrivateZone
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateZone
    },
    201: {
      bodyMapper: Mappers.PrivateZone
    },
    202: {
      bodyMapper: Mappers.PrivateZone
    },
    204: {
      bodyMapper: Mappers.PrivateZone
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}",
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
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateZone
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/privateDnsZones",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.PrivateZoneListResult
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
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};