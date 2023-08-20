/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { OperationResults } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { LabServicesClient } from "../labServicesClient";
import {
  OperationResultsGetOptionalParams,
  OperationResultsGetResponse
} from "../models";

/** Class containing OperationResults operations. */
export class OperationResultsImpl implements OperationResults {
  private readonly client: LabServicesClient;

  /**
   * Initialize a new instance of the class OperationResults class.
   * @param client Reference to the service client
   */
  constructor(client: LabServicesClient) {
    this.client = client;
  }

  /**
   * Returns an azure operation result.
   * @param operationResultId The operation result ID / name.
   * @param options The options parameters.
   */
  get(
    operationResultId: string,
    options?: OperationResultsGetOptionalParams
  ): Promise<OperationResultsGetResponse> {
    return this.client.sendOperationRequest(
      { operationResultId, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.LabServices/operationResults/{operationResultId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationResult
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.operationResultId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
