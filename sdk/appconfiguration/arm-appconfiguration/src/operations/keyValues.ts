/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { KeyValues } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppConfigurationManagementClient } from "../appConfigurationManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  KeyValuesGetOptionalParams,
  KeyValuesGetResponse,
  KeyValuesCreateOrUpdateOptionalParams,
  KeyValuesCreateOrUpdateResponse,
  KeyValuesDeleteOptionalParams
} from "../models";

/** Class containing KeyValues operations. */
export class KeyValuesImpl implements KeyValues {
  private readonly client: AppConfigurationManagementClient;

  /**
   * Initialize a new instance of the class KeyValues class.
   * @param client Reference to the service client
   */
  constructor(client: AppConfigurationManagementClient) {
    this.client = client;
  }

  /**
   * Gets the properties of the specified key-value.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param keyValueName Identifier of key and label combination. Key and label are joined by $
   *                     character. Label is optional.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    configStoreName: string,
    keyValueName: string,
    options?: KeyValuesGetOptionalParams
  ): Promise<KeyValuesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, configStoreName, keyValueName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a key-value.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param keyValueName Identifier of key and label combination. Key and label are joined by $
   *                     character. Label is optional.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    configStoreName: string,
    keyValueName: string,
    options?: KeyValuesCreateOrUpdateOptionalParams
  ): Promise<KeyValuesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, configStoreName, keyValueName, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a key-value.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param keyValueName Identifier of key and label combination. Key and label are joined by $
   *                     character. Label is optional.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    configStoreName: string,
    keyValueName: string,
    options?: KeyValuesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      args: { resourceGroupName, configStoreName, keyValueName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a key-value.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param keyValueName Identifier of key and label combination. Key and label are joined by $
   *                     character. Label is optional.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    configStoreName: string,
    keyValueName: string,
    options?: KeyValuesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      configStoreName,
      keyValueName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/keyValues/{keyValueName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue
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
    Parameters.configStoreName,
    Parameters.keyValueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/keyValues/{keyValueName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.keyValueParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.configStoreName,
    Parameters.keyValueName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/keyValues/{keyValueName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.configStoreName,
    Parameters.keyValueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};