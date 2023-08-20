/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AzureADOnlyAuthentications } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AzureADOnlyAuthentication,
  AzureADOnlyAuthenticationsListNextOptionalParams,
  AzureADOnlyAuthenticationsListOptionalParams,
  AzureADOnlyAuthenticationsListResponse,
  AzureADOnlyAuthenticationName,
  AzureADOnlyAuthenticationsGetOptionalParams,
  AzureADOnlyAuthenticationsGetResponse,
  AzureADOnlyAuthenticationsCreateOptionalParams,
  AzureADOnlyAuthenticationsCreateResponse,
  AzureADOnlyAuthenticationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AzureADOnlyAuthentications operations. */
export class AzureADOnlyAuthenticationsImpl
  implements AzureADOnlyAuthentications {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class AzureADOnlyAuthentications class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of Azure Active Directory only authentication property for a workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: AzureADOnlyAuthenticationsListOptionalParams
  ): PagedAsyncIterableIterator<AzureADOnlyAuthentication> {
    const iter = this.listPagingAll(resourceGroupName, workspaceName, options);
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
          workspaceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: AzureADOnlyAuthenticationsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AzureADOnlyAuthentication[]> {
    let result: AzureADOnlyAuthenticationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, workspaceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
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
    workspaceName: string,
    options?: AzureADOnlyAuthenticationsListOptionalParams
  ): AsyncIterableIterator<AzureADOnlyAuthentication> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a Azure Active Directory only authentication property
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param azureADOnlyAuthenticationName name of the property
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    azureADOnlyAuthenticationName: AzureADOnlyAuthenticationName,
    options?: AzureADOnlyAuthenticationsGetOptionalParams
  ): Promise<AzureADOnlyAuthenticationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        azureADOnlyAuthenticationName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Create or Update a Azure Active Directory only authentication property for the workspaces
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param azureADOnlyAuthenticationName name of the property
   * @param azureADOnlyAuthenticationInfo Azure Active Directory Property
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    workspaceName: string,
    azureADOnlyAuthenticationName: AzureADOnlyAuthenticationName,
    azureADOnlyAuthenticationInfo: AzureADOnlyAuthentication,
    options?: AzureADOnlyAuthenticationsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AzureADOnlyAuthenticationsCreateResponse>,
      AzureADOnlyAuthenticationsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AzureADOnlyAuthenticationsCreateResponse> => {
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
      {
        resourceGroupName,
        workspaceName,
        azureADOnlyAuthenticationName,
        azureADOnlyAuthenticationInfo,
        options
      },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or Update a Azure Active Directory only authentication property for the workspaces
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param azureADOnlyAuthenticationName name of the property
   * @param azureADOnlyAuthenticationInfo Azure Active Directory Property
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    azureADOnlyAuthenticationName: AzureADOnlyAuthenticationName,
    azureADOnlyAuthenticationInfo: AzureADOnlyAuthentication,
    options?: AzureADOnlyAuthenticationsCreateOptionalParams
  ): Promise<AzureADOnlyAuthenticationsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      workspaceName,
      azureADOnlyAuthenticationName,
      azureADOnlyAuthenticationInfo,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a list of Azure Active Directory only authentication property for a workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: AzureADOnlyAuthenticationsListOptionalParams
  ): Promise<AzureADOnlyAuthenticationsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: AzureADOnlyAuthenticationsListNextOptionalParams
  ): Promise<AzureADOnlyAuthenticationsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/azureADOnlyAuthentications/{azureADOnlyAuthenticationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureADOnlyAuthentication
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.azureADOnlyAuthenticationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/azureADOnlyAuthentications/{azureADOnlyAuthenticationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AzureADOnlyAuthentication
    },
    201: {
      bodyMapper: Mappers.AzureADOnlyAuthentication
    },
    202: {
      bodyMapper: Mappers.AzureADOnlyAuthentication
    },
    204: {
      bodyMapper: Mappers.AzureADOnlyAuthentication
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.azureADOnlyAuthenticationInfo,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.azureADOnlyAuthenticationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/azureADOnlyAuthentications",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureADOnlyAuthenticationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureADOnlyAuthenticationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
