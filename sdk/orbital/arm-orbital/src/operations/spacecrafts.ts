/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Spacecrafts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureOrbital } from "../azureOrbital";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Spacecraft,
  SpacecraftsListBySubscriptionNextOptionalParams,
  SpacecraftsListBySubscriptionOptionalParams,
  SpacecraftsListBySubscriptionResponse,
  SpacecraftsListNextOptionalParams,
  SpacecraftsListOptionalParams,
  SpacecraftsListResponse,
  AvailableContacts,
  ContactParametersContactProfile,
  SpacecraftsListAvailableContactsNextOptionalParams,
  SpacecraftsListAvailableContactsOptionalParams,
  SpacecraftsListAvailableContactsResponse,
  SpacecraftsGetOptionalParams,
  SpacecraftsGetResponse,
  SpacecraftLink,
  SpacecraftsCreateOrUpdateOptionalParams,
  SpacecraftsCreateOrUpdateResponse,
  SpacecraftsDeleteOptionalParams,
  TagsObject,
  SpacecraftsUpdateTagsOptionalParams,
  SpacecraftsUpdateTagsResponse,
  SpacecraftsListBySubscriptionNextResponse,
  SpacecraftsListNextResponse,
  SpacecraftsListAvailableContactsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Spacecrafts operations. */
export class SpacecraftsImpl implements Spacecrafts {
  private readonly client: AzureOrbital;

  /**
   * Initialize a new instance of the class Spacecrafts class.
   * @param client Reference to the service client
   */
  constructor(client: AzureOrbital) {
    this.client = client;
  }

  /**
   * Returns list of spacecrafts by subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: SpacecraftsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Spacecraft> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: SpacecraftsListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Spacecraft[]> {
    let result: SpacecraftsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: SpacecraftsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Spacecraft> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Returns list of spacecrafts by resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: SpacecraftsListOptionalParams
  ): PagedAsyncIterableIterator<Spacecraft> {
    const iter = this.listPagingAll(resourceGroupName, options);
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
        return this.listPagingPage(resourceGroupName, options, settings);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: SpacecraftsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Spacecraft[]> {
    let result: SpacecraftsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    options?: SpacecraftsListOptionalParams
  ): AsyncIterableIterator<Spacecraft> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Returns list of available contacts. A contact is available if the spacecraft is visible from the
   * ground station for more than the minimum viable contact duration provided in the contact profile.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param contactProfile The reference to the contact profile resource.
   * @param groundStationName Name of Azure Ground Station.
   * @param startTime Start time of a contact (ISO 8601 UTC standard).
   * @param endTime End time of a contact (ISO 8601 UTC standard).
   * @param options The options parameters.
   */
  public beginListAvailableContactsAndWait(
    resourceGroupName: string,
    spacecraftName: string,
    contactProfile: ContactParametersContactProfile,
    groundStationName: string,
    startTime: Date,
    endTime: Date,
    options?: SpacecraftsListAvailableContactsOptionalParams
  ): PagedAsyncIterableIterator<AvailableContacts> {
    const iter = this.listAvailableContactsPagingAll(
      resourceGroupName,
      spacecraftName,
      contactProfile,
      groundStationName,
      startTime,
      endTime,
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
        return this.listAvailableContactsPagingPage(
          resourceGroupName,
          spacecraftName,
          contactProfile,
          groundStationName,
          startTime,
          endTime,
          options,
          settings
        );
      }
    };
  }

  private async *listAvailableContactsPagingPage(
    resourceGroupName: string,
    spacecraftName: string,
    contactProfile: ContactParametersContactProfile,
    groundStationName: string,
    startTime: Date,
    endTime: Date,
    options?: SpacecraftsListAvailableContactsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AvailableContacts[]> {
    let result: SpacecraftsListAvailableContactsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      const poller = await this._listAvailableContacts(
        resourceGroupName,
        spacecraftName,
        contactProfile,
        groundStationName,
        startTime,
        endTime,
        options
      );
      result = await poller.pollUntilDone();
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAvailableContactsNext(
        resourceGroupName,
        spacecraftName,
        contactProfile,
        groundStationName,
        startTime,
        endTime,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAvailableContactsPagingAll(
    resourceGroupName: string,
    spacecraftName: string,
    contactProfile: ContactParametersContactProfile,
    groundStationName: string,
    startTime: Date,
    endTime: Date,
    options?: SpacecraftsListAvailableContactsOptionalParams
  ): AsyncIterableIterator<AvailableContacts> {
    for await (const page of this.listAvailableContactsPagingPage(
      resourceGroupName,
      spacecraftName,
      contactProfile,
      groundStationName,
      startTime,
      endTime,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns list of spacecrafts by subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: SpacecraftsListBySubscriptionOptionalParams
  ): Promise<SpacecraftsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Returns list of spacecrafts by resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: SpacecraftsListOptionalParams
  ): Promise<SpacecraftsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * Gets the specified spacecraft in a specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    spacecraftName: string,
    options?: SpacecraftsGetOptionalParams
  ): Promise<SpacecraftsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spacecraftName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a spacecraft resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param location The geo-location where the resource lives
   * @param titleLine Title line of the two-line element set (TLE).
   * @param tleLine1 Line 1 of the two-line element set (TLE).
   * @param tleLine2 Line 2 of the two-line element set (TLE).
   * @param links Immutable list of Spacecraft links.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    spacecraftName: string,
    location: string,
    titleLine: string,
    tleLine1: string,
    tleLine2: string,
    links: SpacecraftLink[],
    options?: SpacecraftsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SpacecraftsCreateOrUpdateResponse>,
      SpacecraftsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SpacecraftsCreateOrUpdateResponse> => {
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
        spacecraftName,
        location,
        titleLine,
        tleLine1,
        tleLine2,
        links,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      SpacecraftsCreateOrUpdateResponse,
      OperationState<SpacecraftsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a spacecraft resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param location The geo-location where the resource lives
   * @param titleLine Title line of the two-line element set (TLE).
   * @param tleLine1 Line 1 of the two-line element set (TLE).
   * @param tleLine2 Line 2 of the two-line element set (TLE).
   * @param links Immutable list of Spacecraft links.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    spacecraftName: string,
    location: string,
    titleLine: string,
    tleLine1: string,
    tleLine2: string,
    links: SpacecraftLink[],
    options?: SpacecraftsCreateOrUpdateOptionalParams
  ): Promise<SpacecraftsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      spacecraftName,
      location,
      titleLine,
      tleLine1,
      tleLine2,
      links,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a specified spacecraft resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    spacecraftName: string,
    options?: SpacecraftsDeleteOptionalParams
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
      args: { resourceGroupName, spacecraftName, options },
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
   * Deletes a specified spacecraft resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    spacecraftName: string,
    options?: SpacecraftsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      spacecraftName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates the specified spacecraft tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param parameters Parameters supplied to update spacecraft tags.
   * @param options The options parameters.
   */
  async beginUpdateTags(
    resourceGroupName: string,
    spacecraftName: string,
    parameters: TagsObject,
    options?: SpacecraftsUpdateTagsOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SpacecraftsUpdateTagsResponse>,
      SpacecraftsUpdateTagsResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SpacecraftsUpdateTagsResponse> => {
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
      args: { resourceGroupName, spacecraftName, parameters, options },
      spec: updateTagsOperationSpec
    });
    const poller = await createHttpPoller<
      SpacecraftsUpdateTagsResponse,
      OperationState<SpacecraftsUpdateTagsResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates the specified spacecraft tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param parameters Parameters supplied to update spacecraft tags.
   * @param options The options parameters.
   */
  async beginUpdateTagsAndWait(
    resourceGroupName: string,
    spacecraftName: string,
    parameters: TagsObject,
    options?: SpacecraftsUpdateTagsOptionalParams
  ): Promise<SpacecraftsUpdateTagsResponse> {
    const poller = await this.beginUpdateTags(
      resourceGroupName,
      spacecraftName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns list of available contacts. A contact is available if the spacecraft is visible from the
   * ground station for more than the minimum viable contact duration provided in the contact profile.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param contactProfile The reference to the contact profile resource.
   * @param groundStationName Name of Azure Ground Station.
   * @param startTime Start time of a contact (ISO 8601 UTC standard).
   * @param endTime End time of a contact (ISO 8601 UTC standard).
   * @param options The options parameters.
   */
  private async _listAvailableContacts(
    resourceGroupName: string,
    spacecraftName: string,
    contactProfile: ContactParametersContactProfile,
    groundStationName: string,
    startTime: Date,
    endTime: Date,
    options?: SpacecraftsListAvailableContactsOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SpacecraftsListAvailableContactsResponse>,
      SpacecraftsListAvailableContactsResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SpacecraftsListAvailableContactsResponse> => {
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
        spacecraftName,
        contactProfile,
        groundStationName,
        startTime,
        endTime,
        options
      },
      spec: listAvailableContactsOperationSpec
    });
    const poller = await createHttpPoller<
      SpacecraftsListAvailableContactsResponse,
      OperationState<SpacecraftsListAvailableContactsResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: SpacecraftsListBySubscriptionNextOptionalParams
  ): Promise<SpacecraftsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: SpacecraftsListNextOptionalParams
  ): Promise<SpacecraftsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListAvailableContactsNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param contactProfile The reference to the contact profile resource.
   * @param groundStationName Name of Azure Ground Station.
   * @param startTime Start time of a contact (ISO 8601 UTC standard).
   * @param endTime End time of a contact (ISO 8601 UTC standard).
   * @param nextLink The nextLink from the previous successful call to the ListAvailableContacts method.
   * @param options The options parameters.
   */
  private _listAvailableContactsNext(
    resourceGroupName: string,
    spacecraftName: string,
    contactProfile: ContactParametersContactProfile,
    groundStationName: string,
    startTime: Date,
    endTime: Date,
    nextLink: string,
    options?: SpacecraftsListAvailableContactsNextOptionalParams
  ): Promise<SpacecraftsListAvailableContactsNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        spacecraftName,
        contactProfile,
        groundStationName,
        startTime,
        endTime,
        nextLink,
        options
      },
      listAvailableContactsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Orbital/spacecrafts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SpacecraftListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skiptoken],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SpacecraftListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skiptoken],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Spacecraft
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
    Parameters.spacecraftName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Spacecraft
    },
    201: {
      bodyMapper: Mappers.Spacecraft
    },
    202: {
      bodyMapper: Mappers.Spacecraft
    },
    204: {
      bodyMapper: Mappers.Spacecraft
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: {
    parameterPath: {
      tags: ["options", "tags"],
      location: ["location"],
      provisioningState: ["options", "provisioningState"],
      noradId: ["options", "noradId"],
      titleLine: ["titleLine"],
      tleLine1: ["tleLine1"],
      tleLine2: ["tleLine2"],
      links: ["links"]
    },
    mapper: { ...Mappers.Spacecraft, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.spacecraftName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}",
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
    Parameters.spacecraftName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Spacecraft
    },
    201: {
      bodyMapper: Mappers.Spacecraft
    },
    202: {
      bodyMapper: Mappers.Spacecraft
    },
    204: {
      bodyMapper: Mappers.Spacecraft
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.spacecraftName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listAvailableContactsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}/listAvailableContacts",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AvailableContactsListResult
    },
    201: {
      bodyMapper: Mappers.AvailableContactsListResult
    },
    202: {
      bodyMapper: Mappers.AvailableContactsListResult
    },
    204: {
      bodyMapper: Mappers.AvailableContactsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: {
    parameterPath: {
      contactProfile: ["contactProfile"],
      groundStationName: ["groundStationName"],
      startTime: ["startTime"],
      endTime: ["endTime"]
    },
    mapper: { ...Mappers.ContactParameters, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.spacecraftName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SpacecraftListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SpacecraftListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAvailableContactsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailableContactsListResult
    },
    202: {
      headersMapper: Mappers.SpacecraftsListAvailableContactsNextHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.spacecraftName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};