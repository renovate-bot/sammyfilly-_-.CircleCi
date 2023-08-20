/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { RunbookDraftOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomationClient } from "../automationClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  RunbookDraftGetContentOptionalParams,
  RunbookDraftGetContentResponse,
  RunbookDraftReplaceContentOptionalParams,
  RunbookDraftReplaceContentResponse,
  RunbookDraftGetOptionalParams,
  RunbookDraftGetResponse,
  RunbookDraftUndoEditOptionalParams,
  RunbookDraftUndoEditResponse
} from "../models";

/** Class containing RunbookDraftOperations operations. */
export class RunbookDraftOperationsImpl implements RunbookDraftOperations {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class RunbookDraftOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Retrieve the content of runbook draft identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The options parameters.
   */
  getContent(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: RunbookDraftGetContentOptionalParams
  ): Promise<RunbookDraftGetContentResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, runbookName, options },
      getContentOperationSpec
    );
  }

  /**
   * Replaces the runbook draft content.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param runbookContent The runbook draft content.
   * @param options The options parameters.
   */
  async beginReplaceContent(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    runbookContent: string,
    options?: RunbookDraftReplaceContentOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RunbookDraftReplaceContentResponse>,
      RunbookDraftReplaceContentResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<RunbookDraftReplaceContentResponse> => {
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
        automationAccountName,
        runbookName,
        runbookContent,
        options
      },
      replaceContentOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Replaces the runbook draft content.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param runbookContent The runbook draft content.
   * @param options The options parameters.
   */
  async beginReplaceContentAndWait(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    runbookContent: string,
    options?: RunbookDraftReplaceContentOptionalParams
  ): Promise<RunbookDraftReplaceContentResponse> {
    const poller = await this.beginReplaceContent(
      resourceGroupName,
      automationAccountName,
      runbookName,
      runbookContent,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieve the runbook draft identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: RunbookDraftGetOptionalParams
  ): Promise<RunbookDraftGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, runbookName, options },
      getOperationSpec
    );
  }

  /**
   * Undo draft edit to last known published state identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The options parameters.
   */
  undoEdit(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: RunbookDraftUndoEditOptionalParams
  ): Promise<RunbookDraftUndoEditResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, runbookName, options },
      undoEditOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getContentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/content",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" } }
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  headerParameters: [Parameters.accept2],
  serializer
};
const replaceContentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/content",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    201: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    202: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    204: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.runbookContent,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  headerParameters: [Parameters.accept1, Parameters.contentType3],
  mediaType: "text",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RunbookDraft
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const undoEditOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/undoEdit",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RunbookDraftUndoEditResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  headerParameters: [Parameters.accept],
  serializer
};