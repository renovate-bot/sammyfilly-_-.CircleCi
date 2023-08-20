/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { BillingSubscriptions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClient } from "../billingManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  BillingSubscription,
  BillingSubscriptionsListByCustomerNextOptionalParams,
  BillingSubscriptionsListByCustomerOptionalParams,
  BillingSubscriptionsListByCustomerResponse,
  BillingSubscriptionsListByBillingAccountNextOptionalParams,
  BillingSubscriptionsListByBillingAccountOptionalParams,
  BillingSubscriptionsListByBillingAccountResponse,
  BillingSubscriptionsListByBillingProfileNextOptionalParams,
  BillingSubscriptionsListByBillingProfileOptionalParams,
  BillingSubscriptionsListByBillingProfileResponse,
  BillingSubscriptionsListByInvoiceSectionNextOptionalParams,
  BillingSubscriptionsListByInvoiceSectionOptionalParams,
  BillingSubscriptionsListByInvoiceSectionResponse,
  BillingSubscriptionsGetOptionalParams,
  BillingSubscriptionsGetResponse,
  BillingSubscriptionsUpdateOptionalParams,
  BillingSubscriptionsUpdateResponse,
  TransferBillingSubscriptionRequestProperties,
  BillingSubscriptionsMoveOptionalParams,
  BillingSubscriptionsMoveResponse,
  BillingSubscriptionsValidateMoveOptionalParams,
  BillingSubscriptionsValidateMoveResponse,
  BillingSubscriptionsListByCustomerNextResponse,
  BillingSubscriptionsListByBillingAccountNextResponse,
  BillingSubscriptionsListByBillingProfileNextResponse,
  BillingSubscriptionsListByInvoiceSectionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BillingSubscriptions operations. */
export class BillingSubscriptionsImpl implements BillingSubscriptions {
  private readonly client: BillingManagementClient;

  /**
   * Initialize a new instance of the class BillingSubscriptions class.
   * @param client Reference to the service client
   */
  constructor(client: BillingManagementClient) {
    this.client = client;
  }

  /**
   * Lists the subscriptions for a customer. The operation is supported only for billing accounts with
   * agreement type Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The options parameters.
   */
  public listByCustomer(
    billingAccountName: string,
    customerName: string,
    options?: BillingSubscriptionsListByCustomerOptionalParams
  ): PagedAsyncIterableIterator<BillingSubscription> {
    const iter = this.listByCustomerPagingAll(
      billingAccountName,
      customerName,
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
        return this.listByCustomerPagingPage(
          billingAccountName,
          customerName,
          options,
          settings
        );
      }
    };
  }

  private async *listByCustomerPagingPage(
    billingAccountName: string,
    customerName: string,
    options?: BillingSubscriptionsListByCustomerOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<BillingSubscription[]> {
    let result: BillingSubscriptionsListByCustomerResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByCustomer(
        billingAccountName,
        customerName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByCustomerNext(
        billingAccountName,
        customerName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByCustomerPagingAll(
    billingAccountName: string,
    customerName: string,
    options?: BillingSubscriptionsListByCustomerOptionalParams
  ): AsyncIterableIterator<BillingSubscription> {
    for await (const page of this.listByCustomerPagingPage(
      billingAccountName,
      customerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the subscriptions for a billing account. The operation is supported for billing accounts with
   * agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  public listByBillingAccount(
    billingAccountName: string,
    options?: BillingSubscriptionsListByBillingAccountOptionalParams
  ): PagedAsyncIterableIterator<BillingSubscription> {
    const iter = this.listByBillingAccountPagingAll(
      billingAccountName,
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
        return this.listByBillingAccountPagingPage(
          billingAccountName,
          options,
          settings
        );
      }
    };
  }

  private async *listByBillingAccountPagingPage(
    billingAccountName: string,
    options?: BillingSubscriptionsListByBillingAccountOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<BillingSubscription[]> {
    let result: BillingSubscriptionsListByBillingAccountResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByBillingAccount(billingAccountName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByBillingAccountNext(
        billingAccountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByBillingAccountPagingAll(
    billingAccountName: string,
    options?: BillingSubscriptionsListByBillingAccountOptionalParams
  ): AsyncIterableIterator<BillingSubscription> {
    for await (const page of this.listByBillingAccountPagingPage(
      billingAccountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the subscriptions that are billed to a billing profile. The operation is supported for billing
   * accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  public listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingSubscriptionsListByBillingProfileOptionalParams
  ): PagedAsyncIterableIterator<BillingSubscription> {
    const iter = this.listByBillingProfilePagingAll(
      billingAccountName,
      billingProfileName,
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
        return this.listByBillingProfilePagingPage(
          billingAccountName,
          billingProfileName,
          options,
          settings
        );
      }
    };
  }

  private async *listByBillingProfilePagingPage(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingSubscriptionsListByBillingProfileOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<BillingSubscription[]> {
    let result: BillingSubscriptionsListByBillingProfileResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByBillingProfile(
        billingAccountName,
        billingProfileName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByBillingProfileNext(
        billingAccountName,
        billingProfileName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByBillingProfilePagingAll(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingSubscriptionsListByBillingProfileOptionalParams
  ): AsyncIterableIterator<BillingSubscription> {
    for await (const page of this.listByBillingProfilePagingPage(
      billingAccountName,
      billingProfileName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the subscriptions that are billed to an invoice section. The operation is supported only for
   * billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  public listByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: BillingSubscriptionsListByInvoiceSectionOptionalParams
  ): PagedAsyncIterableIterator<BillingSubscription> {
    const iter = this.listByInvoiceSectionPagingAll(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
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
        return this.listByInvoiceSectionPagingPage(
          billingAccountName,
          billingProfileName,
          invoiceSectionName,
          options,
          settings
        );
      }
    };
  }

  private async *listByInvoiceSectionPagingPage(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: BillingSubscriptionsListByInvoiceSectionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<BillingSubscription[]> {
    let result: BillingSubscriptionsListByInvoiceSectionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByInvoiceSection(
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByInvoiceSectionNext(
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByInvoiceSectionPagingAll(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: BillingSubscriptionsListByInvoiceSectionOptionalParams
  ): AsyncIterableIterator<BillingSubscription> {
    for await (const page of this.listByInvoiceSectionPagingPage(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the subscriptions for a customer. The operation is supported only for billing accounts with
   * agreement type Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The options parameters.
   */
  private _listByCustomer(
    billingAccountName: string,
    customerName: string,
    options?: BillingSubscriptionsListByCustomerOptionalParams
  ): Promise<BillingSubscriptionsListByCustomerResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, customerName, options },
      listByCustomerOperationSpec
    );
  }

  /**
   * Lists the subscriptions for a billing account. The operation is supported for billing accounts with
   * agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  private _listByBillingAccount(
    billingAccountName: string,
    options?: BillingSubscriptionsListByBillingAccountOptionalParams
  ): Promise<BillingSubscriptionsListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, options },
      listByBillingAccountOperationSpec
    );
  }

  /**
   * Lists the subscriptions that are billed to a billing profile. The operation is supported for billing
   * accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  private _listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingSubscriptionsListByBillingProfileOptionalParams
  ): Promise<BillingSubscriptionsListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, options },
      listByBillingProfileOperationSpec
    );
  }

  /**
   * Lists the subscriptions that are billed to an invoice section. The operation is supported only for
   * billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  private _listByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: BillingSubscriptionsListByInvoiceSectionOptionalParams
  ): Promise<BillingSubscriptionsListByInvoiceSectionResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, invoiceSectionName, options },
      listByInvoiceSectionOperationSpec
    );
  }

  /**
   * Gets a subscription by its ID. The operation is supported for billing accounts with agreement type
   * Microsoft Customer Agreement and Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    options?: BillingSubscriptionsGetOptionalParams
  ): Promise<BillingSubscriptionsGetResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, options },
      getOperationSpec
    );
  }

  /**
   * Updates the properties of a billing subscription. Currently, cost center can be updated. The
   * operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the update billing subscription operation.
   * @param options The options parameters.
   */
  update(
    billingAccountName: string,
    parameters: BillingSubscription,
    options?: BillingSubscriptionsUpdateOptionalParams
  ): Promise<BillingSubscriptionsUpdateResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Moves a subscription's charges to a new invoice section. The new invoice section must belong to the
   * same billing profile as the existing invoice section. This operation is supported for billing
   * accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the move subscription operation.
   * @param options The options parameters.
   */
  async beginMove(
    billingAccountName: string,
    parameters: TransferBillingSubscriptionRequestProperties,
    options?: BillingSubscriptionsMoveOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BillingSubscriptionsMoveResponse>,
      BillingSubscriptionsMoveResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<BillingSubscriptionsMoveResponse> => {
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
      { billingAccountName, parameters, options },
      moveOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Moves a subscription's charges to a new invoice section. The new invoice section must belong to the
   * same billing profile as the existing invoice section. This operation is supported for billing
   * accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the move subscription operation.
   * @param options The options parameters.
   */
  async beginMoveAndWait(
    billingAccountName: string,
    parameters: TransferBillingSubscriptionRequestProperties,
    options?: BillingSubscriptionsMoveOptionalParams
  ): Promise<BillingSubscriptionsMoveResponse> {
    const poller = await this.beginMove(
      billingAccountName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Validates if a subscription's charges can be moved to a new invoice section. This operation is
   * supported for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the validate move eligibility operation.
   * @param options The options parameters.
   */
  validateMove(
    billingAccountName: string,
    parameters: TransferBillingSubscriptionRequestProperties,
    options?: BillingSubscriptionsValidateMoveOptionalParams
  ): Promise<BillingSubscriptionsValidateMoveResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, parameters, options },
      validateMoveOperationSpec
    );
  }

  /**
   * ListByCustomerNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param nextLink The nextLink from the previous successful call to the ListByCustomer method.
   * @param options The options parameters.
   */
  private _listByCustomerNext(
    billingAccountName: string,
    customerName: string,
    nextLink: string,
    options?: BillingSubscriptionsListByCustomerNextOptionalParams
  ): Promise<BillingSubscriptionsListByCustomerNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, customerName, nextLink, options },
      listByCustomerNextOperationSpec
    );
  }

  /**
   * ListByBillingAccountNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingAccount method.
   * @param options The options parameters.
   */
  private _listByBillingAccountNext(
    billingAccountName: string,
    nextLink: string,
    options?: BillingSubscriptionsListByBillingAccountNextOptionalParams
  ): Promise<BillingSubscriptionsListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, nextLink, options },
      listByBillingAccountNextOperationSpec
    );
  }

  /**
   * ListByBillingProfileNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingProfile method.
   * @param options The options parameters.
   */
  private _listByBillingProfileNext(
    billingAccountName: string,
    billingProfileName: string,
    nextLink: string,
    options?: BillingSubscriptionsListByBillingProfileNextOptionalParams
  ): Promise<BillingSubscriptionsListByBillingProfileNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, nextLink, options },
      listByBillingProfileNextOperationSpec
    );
  }

  /**
   * ListByInvoiceSectionNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param nextLink The nextLink from the previous successful call to the ListByInvoiceSection method.
   * @param options The options parameters.
   */
  private _listByInvoiceSectionNext(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    nextLink: string,
    options?: BillingSubscriptionsListByInvoiceSectionNextOptionalParams
  ): Promise<BillingSubscriptionsListByInvoiceSectionNextResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        nextLink,
        options
      },
      listByInvoiceSectionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByCustomerOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/billingSubscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.customerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBillingAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.billingAccountName],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBillingProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingSubscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByInvoiceSectionOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingSubscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{subscriptionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{subscriptionId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const moveOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{subscriptionId}/move",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscription
    },
    201: {
      bodyMapper: Mappers.BillingSubscription
    },
    202: {
      bodyMapper: Mappers.BillingSubscription
    },
    204: {
      bodyMapper: Mappers.BillingSubscription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const validateMoveOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{subscriptionId}/validateMoveEligibility",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ValidateSubscriptionTransferEligibilityResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByCustomerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
    Parameters.customerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBillingAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBillingProfileNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
    Parameters.billingProfileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByInvoiceSectionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
