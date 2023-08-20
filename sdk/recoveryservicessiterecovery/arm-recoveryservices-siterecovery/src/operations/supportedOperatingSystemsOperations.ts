/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SupportedOperatingSystemsOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient";
import {
  SupportedOperatingSystemsGetOptionalParams,
  SupportedOperatingSystemsGetResponse
} from "../models";

/** Class containing SupportedOperatingSystemsOperations operations. */
export class SupportedOperatingSystemsOperationsImpl
  implements SupportedOperatingSystemsOperations {
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class SupportedOperatingSystemsOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Gets the data of supported operating systems by SRS.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    resourceGroupName: string,
    options?: SupportedOperatingSystemsGetOptionalParams
  ): Promise<SupportedOperatingSystemsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceName, resourceGroupName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationSupportedOperatingSystems",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SupportedOperatingSystems
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.instanceType],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};