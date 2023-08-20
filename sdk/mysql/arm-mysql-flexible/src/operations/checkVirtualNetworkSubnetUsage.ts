/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CheckVirtualNetworkSubnetUsage } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MySQLManagementFlexibleServerClient } from "../mySQLManagementFlexibleServerClient";
import {
  VirtualNetworkSubnetUsageParameter,
  CheckVirtualNetworkSubnetUsageExecuteOptionalParams,
  CheckVirtualNetworkSubnetUsageExecuteResponse
} from "../models";

/** Class containing CheckVirtualNetworkSubnetUsage operations. */
export class CheckVirtualNetworkSubnetUsageImpl
  implements CheckVirtualNetworkSubnetUsage {
  private readonly client: MySQLManagementFlexibleServerClient;

  /**
   * Initialize a new instance of the class CheckVirtualNetworkSubnetUsage class.
   * @param client Reference to the service client
   */
  constructor(client: MySQLManagementFlexibleServerClient) {
    this.client = client;
  }

  /**
   * Get virtual network subnet usage for a given vNet resource id.
   * @param locationName The name of the location.
   * @param parameters The required parameters for creating or updating a server.
   * @param options The options parameters.
   */
  execute(
    locationName: string,
    parameters: VirtualNetworkSubnetUsageParameter,
    options?: CheckVirtualNetworkSubnetUsageExecuteOptionalParams
  ): Promise<CheckVirtualNetworkSubnetUsageExecuteResponse> {
    return this.client.sendOperationRequest(
      { locationName, parameters, options },
      executeOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const executeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/locations/{locationName}/checkVirtualNetworkSubnetUsage",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkSubnetUsageResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};