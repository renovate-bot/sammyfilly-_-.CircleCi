/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Certificates } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClient } from "../webSiteManagementClient";
import {
  Certificate,
  CertificatesListNextOptionalParams,
  CertificatesListOptionalParams,
  CertificatesListResponse,
  CertificatesListByResourceGroupNextOptionalParams,
  CertificatesListByResourceGroupOptionalParams,
  CertificatesListByResourceGroupResponse,
  CertificatesGetOptionalParams,
  CertificatesGetResponse,
  CertificatesCreateOrUpdateOptionalParams,
  CertificatesCreateOrUpdateResponse,
  CertificatesDeleteOptionalParams,
  CertificatePatchResource,
  CertificatesUpdateOptionalParams,
  CertificatesUpdateResponse,
  CertificatesListNextResponse,
  CertificatesListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Certificates operations. */
export class CertificatesImpl implements Certificates {
  private readonly client: WebSiteManagementClient;

  /**
   * Initialize a new instance of the class Certificates class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClient) {
    this.client = client;
  }

  /**
   * Get all certificates for a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: CertificatesListOptionalParams
  ): PagedAsyncIterableIterator<Certificate> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: CertificatesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Certificate[]> {
    let result: CertificatesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: CertificatesListOptionalParams
  ): AsyncIterableIterator<Certificate> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get all certificates in a resource group.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: CertificatesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Certificate> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: CertificatesListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Certificate[]> {
    let result: CertificatesListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
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

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: CertificatesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Certificate> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get all certificates for a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: CertificatesListOptionalParams
  ): Promise<CertificatesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Get all certificates in a resource group.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: CertificatesListByResourceGroupOptionalParams
  ): Promise<CertificatesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Get a certificate.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    options?: CertificatesGetOptionalParams
  ): Promise<CertificatesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a certificate.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate.
   * @param certificateEnvelope Details of certificate, if it exists already.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    name: string,
    certificateEnvelope: Certificate,
    options?: CertificatesCreateOrUpdateOptionalParams
  ): Promise<CertificatesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, certificateEnvelope, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete a certificate.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    name: string,
    options?: CertificatesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, options },
      deleteOperationSpec
    );
  }

  /**
   * Create or update a certificate.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate.
   * @param certificateEnvelope Details of certificate, if it exists already.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    name: string,
    certificateEnvelope: CertificatePatchResource,
    options?: CertificatesUpdateOptionalParams
  ): Promise<CertificatesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, certificateEnvelope, options },
      updateOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: CertificatesListNextOptionalParams
  ): Promise<CertificatesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: CertificatesListByResourceGroupNextOptionalParams
  ): Promise<CertificatesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Web/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.certificateEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.certificateEnvelope1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
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
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
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