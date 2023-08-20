/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { RuntimeVersions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClient } from "../appPlatformManagementClient";
import {
  RuntimeVersionsListRuntimeVersionsOptionalParams,
  RuntimeVersionsListRuntimeVersionsResponse
} from "../models";

/** Class containing RuntimeVersions operations. */
export class RuntimeVersionsImpl implements RuntimeVersions {
  private readonly client: AppPlatformManagementClient;

  /**
   * Initialize a new instance of the class RuntimeVersions class.
   * @param client Reference to the service client
   */
  constructor(client: AppPlatformManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the available runtime versions supported by Microsoft.AppPlatform provider.
   * @param options The options parameters.
   */
  listRuntimeVersions(
    options?: RuntimeVersionsListRuntimeVersionsOptionalParams
  ): Promise<RuntimeVersionsListRuntimeVersionsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listRuntimeVersionsOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listRuntimeVersionsOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppPlatform/runtimeVersions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailableRuntimeVersions
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};