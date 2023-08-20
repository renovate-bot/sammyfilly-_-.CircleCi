/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  Webhook,
  WebhooksListOptionalParams,
  Event,
  WebhooksListEventsOptionalParams,
  WebhooksGetOptionalParams,
  WebhooksGetResponse,
  WebhookCreateParameters,
  WebhooksCreateOptionalParams,
  WebhooksCreateResponse,
  WebhooksDeleteOptionalParams,
  WebhookUpdateParameters,
  WebhooksUpdateOptionalParams,
  WebhooksUpdateResponse,
  WebhooksPingOptionalParams,
  WebhooksPingResponse,
  WebhooksGetCallbackConfigOptionalParams,
  WebhooksGetCallbackConfigResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Webhooks. */
export interface Webhooks {
  /**
   * Lists all the webhooks for the specified container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    registryName: string,
    options?: WebhooksListOptionalParams
  ): PagedAsyncIterableIterator<Webhook>;
  /**
   * Lists recent events for the specified webhook.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param options The options parameters.
   */
  listEvents(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    options?: WebhooksListEventsOptionalParams
  ): PagedAsyncIterableIterator<Event>;
  /**
   * Gets the properties of the specified webhook.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    options?: WebhooksGetOptionalParams
  ): Promise<WebhooksGetResponse>;
  /**
   * Creates a webhook for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param webhookCreateParameters The parameters for creating a webhook.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    webhookCreateParameters: WebhookCreateParameters,
    options?: WebhooksCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<WebhooksCreateResponse>,
      WebhooksCreateResponse
    >
  >;
  /**
   * Creates a webhook for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param webhookCreateParameters The parameters for creating a webhook.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    webhookCreateParameters: WebhookCreateParameters,
    options?: WebhooksCreateOptionalParams
  ): Promise<WebhooksCreateResponse>;
  /**
   * Deletes a webhook from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    options?: WebhooksDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a webhook from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    options?: WebhooksDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates a webhook with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param webhookUpdateParameters The parameters for updating a webhook.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    webhookUpdateParameters: WebhookUpdateParameters,
    options?: WebhooksUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<WebhooksUpdateResponse>,
      WebhooksUpdateResponse
    >
  >;
  /**
   * Updates a webhook with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param webhookUpdateParameters The parameters for updating a webhook.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    webhookUpdateParameters: WebhookUpdateParameters,
    options?: WebhooksUpdateOptionalParams
  ): Promise<WebhooksUpdateResponse>;
  /**
   * Triggers a ping event to be sent to the webhook.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param options The options parameters.
   */
  ping(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    options?: WebhooksPingOptionalParams
  ): Promise<WebhooksPingResponse>;
  /**
   * Gets the configuration of service URI and custom headers for the webhook.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param options The options parameters.
   */
  getCallbackConfig(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    options?: WebhooksGetCallbackConfigOptionalParams
  ): Promise<WebhooksGetCallbackConfigResponse>;
}
