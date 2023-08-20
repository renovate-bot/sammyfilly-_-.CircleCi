/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { NodeReports } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomationClient } from "../automationClient";
import {
  DscNodeReport,
  NodeReportsListByNodeNextOptionalParams,
  NodeReportsListByNodeOptionalParams,
  NodeReportsListByNodeResponse,
  NodeReportsGetOptionalParams,
  NodeReportsGetResponse,
  NodeReportsGetContentOptionalParams,
  NodeReportsGetContentResponse,
  NodeReportsListByNodeNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing NodeReports operations. */
export class NodeReportsImpl implements NodeReports {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class NodeReports class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Retrieve the Dsc node report list by node id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The parameters supplied to the list operation.
   * @param options The options parameters.
   */
  public listByNode(
    resourceGroupName: string,
    automationAccountName: string,
    nodeId: string,
    options?: NodeReportsListByNodeOptionalParams
  ): PagedAsyncIterableIterator<DscNodeReport> {
    const iter = this.listByNodePagingAll(
      resourceGroupName,
      automationAccountName,
      nodeId,
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
        return this.listByNodePagingPage(
          resourceGroupName,
          automationAccountName,
          nodeId,
          options,
          settings
        );
      }
    };
  }

  private async *listByNodePagingPage(
    resourceGroupName: string,
    automationAccountName: string,
    nodeId: string,
    options?: NodeReportsListByNodeOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DscNodeReport[]> {
    let result: NodeReportsListByNodeResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByNode(
        resourceGroupName,
        automationAccountName,
        nodeId,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByNodeNext(
        resourceGroupName,
        automationAccountName,
        nodeId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByNodePagingAll(
    resourceGroupName: string,
    automationAccountName: string,
    nodeId: string,
    options?: NodeReportsListByNodeOptionalParams
  ): AsyncIterableIterator<DscNodeReport> {
    for await (const page of this.listByNodePagingPage(
      resourceGroupName,
      automationAccountName,
      nodeId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieve the Dsc node report list by node id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The parameters supplied to the list operation.
   * @param options The options parameters.
   */
  private _listByNode(
    resourceGroupName: string,
    automationAccountName: string,
    nodeId: string,
    options?: NodeReportsListByNodeOptionalParams
  ): Promise<NodeReportsListByNodeResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, nodeId, options },
      listByNodeOperationSpec
    );
  }

  /**
   * Retrieve the Dsc node report data by node id and report id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The Dsc node id.
   * @param reportId The report id.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    nodeId: string,
    reportId: string,
    options?: NodeReportsGetOptionalParams
  ): Promise<NodeReportsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, nodeId, reportId, options },
      getOperationSpec
    );
  }

  /**
   * Retrieve the Dsc node reports by node id and report id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The Dsc node id.
   * @param reportId The report id.
   * @param options The options parameters.
   */
  getContent(
    resourceGroupName: string,
    automationAccountName: string,
    nodeId: string,
    reportId: string,
    options?: NodeReportsGetContentOptionalParams
  ): Promise<NodeReportsGetContentResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, nodeId, reportId, options },
      getContentOperationSpec
    );
  }

  /**
   * ListByNodeNext
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The parameters supplied to the list operation.
   * @param nextLink The nextLink from the previous successful call to the ListByNode method.
   * @param options The options parameters.
   */
  private _listByNodeNext(
    resourceGroupName: string,
    automationAccountName: string,
    nodeId: string,
    nextLink: string,
    options?: NodeReportsListByNodeNextOptionalParams
  ): Promise<NodeReportsListByNodeNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, nodeId, nextLink, options },
      listByNodeNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByNodeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}/reports",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DscNodeReportListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.nodeId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}/reports/{reportId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DscNodeReport
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
    Parameters.automationAccountName,
    Parameters.nodeId,
    Parameters.reportId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getContentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}/reports/{reportId}/content",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
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
    Parameters.automationAccountName,
    Parameters.nodeId,
    Parameters.reportId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByNodeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DscNodeReportListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.nextLink,
    Parameters.nodeId
  ],
  headerParameters: [Parameters.accept],
  serializer
};