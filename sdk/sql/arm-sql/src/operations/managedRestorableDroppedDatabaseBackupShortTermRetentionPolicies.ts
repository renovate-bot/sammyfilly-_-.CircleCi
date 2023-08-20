/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies } from "../operationsInterfaces";
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
  ManagedBackupShortTermRetentionPolicy,
  ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseNextOptionalParams,
  ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseOptionalParams,
  ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseResponse,
  ManagedShortTermRetentionPolicyName,
  ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesGetOptionalParams,
  ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesGetResponse,
  ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateOptionalParams,
  ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateResponse,
  ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateOptionalParams,
  ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateResponse,
  ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies operations. */
export class ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesImpl
  implements ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a dropped database's short term retention policy list.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param options The options parameters.
   */
  public listByRestorableDroppedDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    restorableDroppedDatabaseId: string,
    options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseOptionalParams
  ): PagedAsyncIterableIterator<ManagedBackupShortTermRetentionPolicy> {
    const iter = this.listByRestorableDroppedDatabasePagingAll(
      resourceGroupName,
      managedInstanceName,
      restorableDroppedDatabaseId,
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
        return this.listByRestorableDroppedDatabasePagingPage(
          resourceGroupName,
          managedInstanceName,
          restorableDroppedDatabaseId,
          options,
          settings
        );
      }
    };
  }

  private async *listByRestorableDroppedDatabasePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    restorableDroppedDatabaseId: string,
    options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ManagedBackupShortTermRetentionPolicy[]> {
    let result: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByRestorableDroppedDatabase(
        resourceGroupName,
        managedInstanceName,
        restorableDroppedDatabaseId,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByRestorableDroppedDatabaseNext(
        resourceGroupName,
        managedInstanceName,
        restorableDroppedDatabaseId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByRestorableDroppedDatabasePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    restorableDroppedDatabaseId: string,
    options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseOptionalParams
  ): AsyncIterableIterator<ManagedBackupShortTermRetentionPolicy> {
    for await (const page of this.listByRestorableDroppedDatabasePagingPage(
      resourceGroupName,
      managedInstanceName,
      restorableDroppedDatabaseId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a dropped database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param policyName The policy name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    restorableDroppedDatabaseId: string,
    policyName: ManagedShortTermRetentionPolicyName,
    options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesGetOptionalParams
  ): Promise<
    ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesGetResponse
  > {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        restorableDroppedDatabaseId,
        policyName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Sets a database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param policyName The policy name. Should always be "default".
   * @param parameters The short term retention policy info.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    restorableDroppedDatabaseId: string,
    policyName: ManagedShortTermRetentionPolicyName,
    parameters: ManagedBackupShortTermRetentionPolicy,
    options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateResponse
      >,
      ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateResponse> => {
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
        managedInstanceName,
        restorableDroppedDatabaseId,
        policyName,
        parameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateResponse,
      OperationState<
        ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateResponse
      >
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Sets a database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param policyName The policy name. Should always be "default".
   * @param parameters The short term retention policy info.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    restorableDroppedDatabaseId: string,
    policyName: ManagedShortTermRetentionPolicyName,
    parameters: ManagedBackupShortTermRetentionPolicy,
    options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateResponse
  > {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      managedInstanceName,
      restorableDroppedDatabaseId,
      policyName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Sets a database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param policyName The policy name. Should always be "default".
   * @param parameters The short term retention policy info.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    restorableDroppedDatabaseId: string,
    policyName: ManagedShortTermRetentionPolicyName,
    parameters: ManagedBackupShortTermRetentionPolicy,
    options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateResponse
      >,
      ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateResponse> => {
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
        managedInstanceName,
        restorableDroppedDatabaseId,
        policyName,
        parameters,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateResponse,
      OperationState<
        ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateResponse
      >
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Sets a database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param policyName The policy name. Should always be "default".
   * @param parameters The short term retention policy info.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    restorableDroppedDatabaseId: string,
    policyName: ManagedShortTermRetentionPolicyName,
    parameters: ManagedBackupShortTermRetentionPolicy,
    options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateOptionalParams
  ): Promise<
    ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateResponse
  > {
    const poller = await this.beginUpdate(
      resourceGroupName,
      managedInstanceName,
      restorableDroppedDatabaseId,
      policyName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a dropped database's short term retention policy list.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param options The options parameters.
   */
  private _listByRestorableDroppedDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    restorableDroppedDatabaseId: string,
    options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseOptionalParams
  ): Promise<
    ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseResponse
  > {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        restorableDroppedDatabaseId,
        options
      },
      listByRestorableDroppedDatabaseOperationSpec
    );
  }

  /**
   * ListByRestorableDroppedDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListByRestorableDroppedDatabase method.
   * @param options The options parameters.
   */
  private _listByRestorableDroppedDatabaseNext(
    resourceGroupName: string,
    managedInstanceName: string,
    restorableDroppedDatabaseId: string,
    nextLink: string,
    options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseNextOptionalParams
  ): Promise<
    ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseNextResponse
  > {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        restorableDroppedDatabaseId,
        nextLink,
        options
      },
      listByRestorableDroppedDatabaseNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies/{policyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.policyName1,
    Parameters.restorableDroppedDatabaseId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies/{policyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    201: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    202: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    204: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters30,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.policyName1,
    Parameters.restorableDroppedDatabaseId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies/{policyName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    201: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    202: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    204: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters30,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.policyName1,
    Parameters.restorableDroppedDatabaseId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByRestorableDroppedDatabaseOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.restorableDroppedDatabaseId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByRestorableDroppedDatabaseNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicyListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.managedInstanceName,
    Parameters.restorableDroppedDatabaseId
  ],
  headerParameters: [Parameters.accept],
  serializer
};