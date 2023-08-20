/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { AdaptiveApplicationControls } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  AdaptiveApplicationControlsListOptionalParams,
  AdaptiveApplicationControlsListResponse,
  AdaptiveApplicationControlsGetOptionalParams,
  AdaptiveApplicationControlsGetResponse,
  AdaptiveApplicationControlGroup,
  AdaptiveApplicationControlsPutOptionalParams,
  AdaptiveApplicationControlsPutResponse,
  AdaptiveApplicationControlsDeleteOptionalParams
} from "../models";

/** Class containing AdaptiveApplicationControls operations. */
export class AdaptiveApplicationControlsImpl
  implements AdaptiveApplicationControls {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class AdaptiveApplicationControls class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Gets a list of application control machine groups for the subscription.
   * @param options The options parameters.
   */
  list(
    options?: AdaptiveApplicationControlsListOptionalParams
  ): Promise<AdaptiveApplicationControlsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets an application control VM/server group.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param groupName Name of an application control machine group
   * @param options The options parameters.
   */
  get(
    ascLocation: string,
    groupName: string,
    options?: AdaptiveApplicationControlsGetOptionalParams
  ): Promise<AdaptiveApplicationControlsGetResponse> {
    return this.client.sendOperationRequest(
      { ascLocation, groupName, options },
      getOperationSpec
    );
  }

  /**
   * Update an application control machine group
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param groupName Name of an application control machine group
   * @param body
   * @param options The options parameters.
   */
  put(
    ascLocation: string,
    groupName: string,
    body: AdaptiveApplicationControlGroup,
    options?: AdaptiveApplicationControlsPutOptionalParams
  ): Promise<AdaptiveApplicationControlsPutResponse> {
    return this.client.sendOperationRequest(
      { ascLocation, groupName, body, options },
      putOperationSpec
    );
  }

  /**
   * Delete an application control machine group
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param groupName Name of an application control machine group
   * @param options The options parameters.
   */
  delete(
    ascLocation: string,
    groupName: string,
    options?: AdaptiveApplicationControlsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { ascLocation, groupName, options },
      deleteOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/applicationWhitelistings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AdaptiveApplicationControlGroups
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion10,
    Parameters.includePathRecommendations,
    Parameters.summary
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/applicationWhitelistings/{groupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AdaptiveApplicationControlGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion10],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.groupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const putOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/applicationWhitelistings/{groupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AdaptiveApplicationControlGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion10],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.groupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/applicationWhitelistings/{groupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion10],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.groupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};