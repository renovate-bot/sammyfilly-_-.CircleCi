/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { RecoveryPoints } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient";
import {
  RecoveryPoint,
  RecoveryPointsListByReplicationProtectedItemsNextOptionalParams,
  RecoveryPointsListByReplicationProtectedItemsOptionalParams,
  RecoveryPointsListByReplicationProtectedItemsResponse,
  RecoveryPointsGetOptionalParams,
  RecoveryPointsGetResponse,
  RecoveryPointsListByReplicationProtectedItemsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RecoveryPoints operations. */
export class RecoveryPointsImpl implements RecoveryPoints {
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class RecoveryPoints class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Lists the available recovery points for a replication protected item.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName The fabric name.
   * @param protectionContainerName The protection container name.
   * @param replicatedProtectedItemName The replication protected item name.
   * @param options The options parameters.
   */
  public listByReplicationProtectedItems(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    replicatedProtectedItemName: string,
    options?: RecoveryPointsListByReplicationProtectedItemsOptionalParams
  ): PagedAsyncIterableIterator<RecoveryPoint> {
    const iter = this.listByReplicationProtectedItemsPagingAll(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
      replicatedProtectedItemName,
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
        return this.listByReplicationProtectedItemsPagingPage(
          resourceName,
          resourceGroupName,
          fabricName,
          protectionContainerName,
          replicatedProtectedItemName,
          options,
          settings
        );
      }
    };
  }

  private async *listByReplicationProtectedItemsPagingPage(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    replicatedProtectedItemName: string,
    options?: RecoveryPointsListByReplicationProtectedItemsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<RecoveryPoint[]> {
    let result: RecoveryPointsListByReplicationProtectedItemsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByReplicationProtectedItems(
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        replicatedProtectedItemName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByReplicationProtectedItemsNext(
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        replicatedProtectedItemName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByReplicationProtectedItemsPagingAll(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    replicatedProtectedItemName: string,
    options?: RecoveryPointsListByReplicationProtectedItemsOptionalParams
  ): AsyncIterableIterator<RecoveryPoint> {
    for await (const page of this.listByReplicationProtectedItemsPagingPage(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
      replicatedProtectedItemName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the available recovery points for a replication protected item.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName The fabric name.
   * @param protectionContainerName The protection container name.
   * @param replicatedProtectedItemName The replication protected item name.
   * @param options The options parameters.
   */
  private _listByReplicationProtectedItems(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    replicatedProtectedItemName: string,
    options?: RecoveryPointsListByReplicationProtectedItemsOptionalParams
  ): Promise<RecoveryPointsListByReplicationProtectedItemsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        replicatedProtectedItemName,
        options
      },
      listByReplicationProtectedItemsOperationSpec
    );
  }

  /**
   * Get the details of specified recovery point.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName The fabric name.
   * @param protectionContainerName The protection container name.
   * @param replicatedProtectedItemName The replication protected item name.
   * @param recoveryPointName The recovery point name.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    replicatedProtectedItemName: string,
    recoveryPointName: string,
    options?: RecoveryPointsGetOptionalParams
  ): Promise<RecoveryPointsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        replicatedProtectedItemName,
        recoveryPointName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListByReplicationProtectedItemsNext
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName The fabric name.
   * @param protectionContainerName The protection container name.
   * @param replicatedProtectedItemName The replication protected item name.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListByReplicationProtectedItems method.
   * @param options The options parameters.
   */
  private _listByReplicationProtectedItemsNext(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    replicatedProtectedItemName: string,
    nextLink: string,
    options?: RecoveryPointsListByReplicationProtectedItemsNextOptionalParams
  ): Promise<RecoveryPointsListByReplicationProtectedItemsNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        replicatedProtectedItemName,
        nextLink,
        options
      },
      listByReplicationProtectedItemsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByReplicationProtectedItemsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/recoveryPoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPointCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.replicatedProtectedItemName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/recoveryPoints/{recoveryPointName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPoint
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.replicatedProtectedItemName,
    Parameters.recoveryPointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByReplicationProtectedItemsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPointCollection
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.replicatedProtectedItemName
  ],
  headerParameters: [Parameters.accept],
  serializer
};