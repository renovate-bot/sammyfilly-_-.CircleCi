/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Clusters } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StreamAnalyticsManagementClient } from "../streamAnalyticsManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Cluster,
  ClustersListBySubscriptionNextOptionalParams,
  ClustersListBySubscriptionOptionalParams,
  ClustersListBySubscriptionResponse,
  ClustersListByResourceGroupNextOptionalParams,
  ClustersListByResourceGroupOptionalParams,
  ClustersListByResourceGroupResponse,
  ClusterJob,
  ClustersListStreamingJobsNextOptionalParams,
  ClustersListStreamingJobsOptionalParams,
  ClustersListStreamingJobsResponse,
  ClustersCreateOrUpdateOptionalParams,
  ClustersCreateOrUpdateResponse,
  ClustersUpdateOptionalParams,
  ClustersUpdateResponse,
  ClustersGetOptionalParams,
  ClustersGetResponse,
  ClustersDeleteOptionalParams,
  ClustersListBySubscriptionNextResponse,
  ClustersListByResourceGroupNextResponse,
  ClustersListStreamingJobsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Clusters operations. */
export class ClustersImpl implements Clusters {
  private readonly client: StreamAnalyticsManagementClient;

  /**
   * Initialize a new instance of the class Clusters class.
   * @param client Reference to the service client
   */
  constructor(client: StreamAnalyticsManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the clusters in the given subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: ClustersListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Cluster> {
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
    options?: ClustersListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Cluster[]> {
    let result: ClustersListBySubscriptionResponse;
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
    options?: ClustersListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Cluster> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all of the clusters in the given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ClustersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Cluster> {
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
    options?: ClustersListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Cluster[]> {
    let result: ClustersListByResourceGroupResponse;
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
    options?: ClustersListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Cluster> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the streaming jobs in the given cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  public listStreamingJobs(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersListStreamingJobsOptionalParams
  ): PagedAsyncIterableIterator<ClusterJob> {
    const iter = this.listStreamingJobsPagingAll(
      resourceGroupName,
      clusterName,
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
        return this.listStreamingJobsPagingPage(
          resourceGroupName,
          clusterName,
          options,
          settings
        );
      }
    };
  }

  private async *listStreamingJobsPagingPage(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersListStreamingJobsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ClusterJob[]> {
    let result: ClustersListStreamingJobsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listStreamingJobs(
        resourceGroupName,
        clusterName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listStreamingJobsNext(
        resourceGroupName,
        clusterName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listStreamingJobsPagingAll(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersListStreamingJobsOptionalParams
  ): AsyncIterableIterator<ClusterJob> {
    for await (const page of this.listStreamingJobsPagingPage(
      resourceGroupName,
      clusterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates a Stream Analytics Cluster or replaces an already existing cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param cluster The definition of the cluster that will be used to create a new cluster or replace
   *                the existing one.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    cluster: Cluster,
    options?: ClustersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ClustersCreateOrUpdateResponse>,
      ClustersCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ClustersCreateOrUpdateResponse> => {
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
      { resourceGroupName, clusterName, cluster, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a Stream Analytics Cluster or replaces an already existing cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param cluster The definition of the cluster that will be used to create a new cluster or replace
   *                the existing one.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    cluster: Cluster,
    options?: ClustersCreateOrUpdateOptionalParams
  ): Promise<ClustersCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      clusterName,
      cluster,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing cluster. This can be used to partially update (ie. update one or two properties)
   * a cluster without affecting the rest of the cluster definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param cluster The properties specified here will overwrite the corresponding properties in the
   *                existing cluster (ie. Those properties will be updated).
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    cluster: Cluster,
    options?: ClustersUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ClustersUpdateResponse>,
      ClustersUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ClustersUpdateResponse> => {
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
      { resourceGroupName, clusterName, cluster, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates an existing cluster. This can be used to partially update (ie. update one or two properties)
   * a cluster without affecting the rest of the cluster definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param cluster The properties specified here will overwrite the corresponding properties in the
   *                existing cluster (ie. Those properties will be updated).
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    cluster: Cluster,
    options?: ClustersUpdateOptionalParams
  ): Promise<ClustersUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      clusterName,
      cluster,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersGetOptionalParams
  ): Promise<ClustersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes the specified cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams
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
      { resourceGroupName, clusterName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      clusterName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all of the clusters in the given subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: ClustersListBySubscriptionOptionalParams
  ): Promise<ClustersListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Lists all of the clusters in the given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ClustersListByResourceGroupOptionalParams
  ): Promise<ClustersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists all of the streaming jobs in the given cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  private _listStreamingJobs(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersListStreamingJobsOptionalParams
  ): Promise<ClustersListStreamingJobsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      listStreamingJobsOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: ClustersListBySubscriptionNextOptionalParams
  ): Promise<ClustersListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
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
    options?: ClustersListByResourceGroupNextOptionalParams
  ): Promise<ClustersListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListStreamingJobsNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param nextLink The nextLink from the previous successful call to the ListStreamingJobs method.
   * @param options The options parameters.
   */
  private _listStreamingJobsNext(
    resourceGroupName: string,
    clusterName: string,
    nextLink: string,
    options?: ClustersListStreamingJobsNextOptionalParams
  ): Promise<ClustersListStreamingJobsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, nextLink, options },
      listStreamingJobsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    201: {
      bodyMapper: Mappers.Cluster
    },
    202: {
      bodyMapper: Mappers.Cluster
    },
    204: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.cluster,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    201: {
      bodyMapper: Mappers.Cluster
    },
    202: {
      bodyMapper: Mappers.Cluster
    },
    204: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.cluster,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/clusters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
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
const listStreamingJobsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}/listStreamingJobs",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterJobListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listStreamingJobsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterJobListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};