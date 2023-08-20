/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { PrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomationClient } from "../automationClient";
import {
  PrivateLinkResource,
  PrivateLinkResourcesAutomationOptionalParams,
  PrivateLinkResourcesAutomationResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateLinkResources operations. */
export class PrivateLinkResourcesImpl implements PrivateLinkResources {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class PrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Gets the private link resources that need to be created for Automation account.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  public listAutomation(
    resourceGroupName: string,
    automationAccountName: string,
    options?: PrivateLinkResourcesAutomationOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource> {
    const iter = this.automationPagingAll(
      resourceGroupName,
      automationAccountName,
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
        return this.automationPagingPage(
          resourceGroupName,
          automationAccountName,
          options,
          settings
        );
      }
    };
  }

  private async *automationPagingPage(
    resourceGroupName: string,
    automationAccountName: string,
    options?: PrivateLinkResourcesAutomationOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<PrivateLinkResource[]> {
    let result: PrivateLinkResourcesAutomationResponse;
    result = await this._automation(
      resourceGroupName,
      automationAccountName,
      options
    );
    yield result.value || [];
  }

  private async *automationPagingAll(
    resourceGroupName: string,
    automationAccountName: string,
    options?: PrivateLinkResourcesAutomationOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource> {
    for await (const page of this.automationPagingPage(
      resourceGroupName,
      automationAccountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the private link resources that need to be created for Automation account.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  private _automation(
    resourceGroupName: string,
    automationAccountName: string,
    options?: PrivateLinkResourcesAutomationOptionalParams
  ): Promise<PrivateLinkResourcesAutomationResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, options },
      automationOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const automationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};