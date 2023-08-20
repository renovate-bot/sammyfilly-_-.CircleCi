/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { NamespaceTopicEventSubscriptions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClient } from "../eventGridManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Subscription,
  NamespaceTopicEventSubscriptionsListByNamespaceTopicNextOptionalParams,
  NamespaceTopicEventSubscriptionsListByNamespaceTopicOptionalParams,
  NamespaceTopicEventSubscriptionsListByNamespaceTopicResponse,
  NamespaceTopicEventSubscriptionsGetOptionalParams,
  NamespaceTopicEventSubscriptionsGetResponse,
  NamespaceTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  NamespaceTopicEventSubscriptionsCreateOrUpdateResponse,
  NamespaceTopicEventSubscriptionsDeleteOptionalParams,
  SubscriptionUpdateParameters,
  NamespaceTopicEventSubscriptionsUpdateOptionalParams,
  NamespaceTopicEventSubscriptionsUpdateResponse,
  NamespaceTopicEventSubscriptionsListByNamespaceTopicNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing NamespaceTopicEventSubscriptions operations. */
export class NamespaceTopicEventSubscriptionsImpl
  implements NamespaceTopicEventSubscriptions {
  private readonly client: EventGridManagementClient;

  /**
   * Initialize a new instance of the class NamespaceTopicEventSubscriptions class.
   * @param client Reference to the service client
   */
  constructor(client: EventGridManagementClient) {
    this.client = client;
  }

  /**
   * List event subscriptions that belong to a specific namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param options The options parameters.
   */
  public listByNamespaceTopic(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: NamespaceTopicEventSubscriptionsListByNamespaceTopicOptionalParams
  ): PagedAsyncIterableIterator<Subscription> {
    const iter = this.listByNamespaceTopicPagingAll(
      resourceGroupName,
      namespaceName,
      topicName,
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
        return this.listByNamespaceTopicPagingPage(
          resourceGroupName,
          namespaceName,
          topicName,
          options,
          settings
        );
      }
    };
  }

  private async *listByNamespaceTopicPagingPage(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: NamespaceTopicEventSubscriptionsListByNamespaceTopicOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Subscription[]> {
    let result: NamespaceTopicEventSubscriptionsListByNamespaceTopicResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByNamespaceTopic(
        resourceGroupName,
        namespaceName,
        topicName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByNamespaceTopicNext(
        resourceGroupName,
        namespaceName,
        topicName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByNamespaceTopicPagingAll(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: NamespaceTopicEventSubscriptionsListByNamespaceTopicOptionalParams
  ): AsyncIterableIterator<Subscription> {
    for await (const page of this.listByNamespaceTopicPagingPage(
      resourceGroupName,
      namespaceName,
      topicName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get properties of an event subscription of a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: NamespaceTopicEventSubscriptionsGetOptionalParams
  ): Promise<NamespaceTopicEventSubscriptionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        eventSubscriptionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Asynchronously creates or updates an event subscription of a namespace topic with the specified
   * parameters. Existing event subscriptions will be updated with this API.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the delivery mode, filter
   *                              information, and others.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: Subscription,
    options?: NamespaceTopicEventSubscriptionsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NamespaceTopicEventSubscriptionsCreateOrUpdateResponse>,
      NamespaceTopicEventSubscriptionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NamespaceTopicEventSubscriptionsCreateOrUpdateResponse> => {
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
      args: {
        resourceGroupName,
        namespaceName,
        topicName,
        eventSubscriptionName,
        eventSubscriptionInfo,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      NamespaceTopicEventSubscriptionsCreateOrUpdateResponse,
      OperationState<NamespaceTopicEventSubscriptionsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Asynchronously creates or updates an event subscription of a namespace topic with the specified
   * parameters. Existing event subscriptions will be updated with this API.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the delivery mode, filter
   *                              information, and others.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: Subscription,
    options?: NamespaceTopicEventSubscriptionsCreateOrUpdateOptionalParams
  ): Promise<NamespaceTopicEventSubscriptionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      namespaceName,
      topicName,
      eventSubscriptionName,
      eventSubscriptionInfo,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete an existing event subscription of a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: NamespaceTopicEventSubscriptionsDeleteOptionalParams
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
      args: {
        resourceGroupName,
        namespaceName,
        topicName,
        eventSubscriptionName,
        options
      },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete an existing event subscription of a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: NamespaceTopicEventSubscriptionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      namespaceName,
      topicName,
      eventSubscriptionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update an existing event subscription of a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: SubscriptionUpdateParameters,
    options?: NamespaceTopicEventSubscriptionsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NamespaceTopicEventSubscriptionsUpdateResponse>,
      NamespaceTopicEventSubscriptionsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NamespaceTopicEventSubscriptionsUpdateResponse> => {
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
      args: {
        resourceGroupName,
        namespaceName,
        topicName,
        eventSubscriptionName,
        eventSubscriptionUpdateParameters,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      NamespaceTopicEventSubscriptionsUpdateResponse,
      OperationState<NamespaceTopicEventSubscriptionsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update an existing event subscription of a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: SubscriptionUpdateParameters,
    options?: NamespaceTopicEventSubscriptionsUpdateOptionalParams
  ): Promise<NamespaceTopicEventSubscriptionsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      namespaceName,
      topicName,
      eventSubscriptionName,
      eventSubscriptionUpdateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List event subscriptions that belong to a specific namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param options The options parameters.
   */
  private _listByNamespaceTopic(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: NamespaceTopicEventSubscriptionsListByNamespaceTopicOptionalParams
  ): Promise<NamespaceTopicEventSubscriptionsListByNamespaceTopicResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, topicName, options },
      listByNamespaceTopicOperationSpec
    );
  }

  /**
   * ListByNamespaceTopicNext
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param nextLink The nextLink from the previous successful call to the ListByNamespaceTopic method.
   * @param options The options parameters.
   */
  private _listByNamespaceTopicNext(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    nextLink: string,
    options?: NamespaceTopicEventSubscriptionsListByNamespaceTopicNextOptionalParams
  ): Promise<NamespaceTopicEventSubscriptionsListByNamespaceTopicNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, topicName, nextLink, options },
      listByNamespaceTopicNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Subscription
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
    Parameters.namespaceName,
    Parameters.topicName1,
    Parameters.eventSubscriptionName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Subscription
    },
    201: {
      bodyMapper: Mappers.Subscription
    },
    202: {
      bodyMapper: Mappers.Subscription
    },
    204: {
      bodyMapper: Mappers.Subscription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.eventSubscriptionInfo1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.topicName1,
    Parameters.eventSubscriptionName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
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
    Parameters.namespaceName,
    Parameters.topicName1,
    Parameters.eventSubscriptionName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Subscription
    },
    201: {
      bodyMapper: Mappers.Subscription
    },
    202: {
      bodyMapper: Mappers.Subscription
    },
    204: {
      bodyMapper: Mappers.Subscription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.eventSubscriptionUpdateParameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.topicName1,
    Parameters.eventSubscriptionName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByNamespaceTopicOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/eventSubscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.topicName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByNamespaceTopicNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.nextLink,
    Parameters.topicName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
