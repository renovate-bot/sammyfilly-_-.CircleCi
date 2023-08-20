/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Share } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageClient } from "../storageClient";
import {
  ShareCreateOptionalParams,
  ShareCreateResponse,
  ShareGetPropertiesOptionalParams,
  ShareGetPropertiesResponse,
  ShareDeleteOptionalParams,
  ShareDeleteResponse,
  ShareAcquireLeaseOptionalParams,
  ShareAcquireLeaseResponse,
  ShareReleaseLeaseOptionalParams,
  ShareReleaseLeaseResponse,
  ShareChangeLeaseOptionalParams,
  ShareChangeLeaseResponse,
  ShareRenewLeaseOptionalParams,
  ShareRenewLeaseResponse,
  ShareBreakLeaseOptionalParams,
  ShareBreakLeaseResponse,
  ShareCreateSnapshotOptionalParams,
  ShareCreateSnapshotResponse,
  SharePermission,
  ShareCreatePermissionOptionalParams,
  ShareCreatePermissionResponse,
  ShareGetPermissionOptionalParams,
  ShareGetPermissionResponse,
  ShareSetPropertiesOptionalParams,
  ShareSetPropertiesResponse,
  ShareSetMetadataOptionalParams,
  ShareSetMetadataResponse,
  ShareGetAccessPolicyOptionalParams,
  ShareGetAccessPolicyResponse,
  ShareSetAccessPolicyOptionalParams,
  ShareSetAccessPolicyResponse,
  ShareGetStatisticsOptionalParams,
  ShareGetStatisticsResponse,
  ShareRestoreOptionalParams,
  ShareRestoreResponse
} from "../models";

/** Class containing Share operations. */
export class ShareImpl implements Share {
  private readonly client: StorageClient;

  /**
   * Initialize a new instance of the class Share class.
   * @param client Reference to the service client
   */
  constructor(client: StorageClient) {
    this.client = client;
  }

  /**
   * Creates a new share under the specified account. If the share with the same name already exists, the
   * operation fails.
   * @param options The options parameters.
   */
  create(options?: ShareCreateOptionalParams): Promise<ShareCreateResponse> {
    return this.client.sendOperationRequest({ options }, createOperationSpec);
  }

  /**
   * Returns all user-defined metadata and system properties for the specified share or share snapshot.
   * The data returned does not include the share's list of files.
   * @param options The options parameters.
   */
  getProperties(
    options?: ShareGetPropertiesOptionalParams
  ): Promise<ShareGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      { options },
      getPropertiesOperationSpec
    );
  }

  /**
   * Operation marks the specified share or share snapshot for deletion. The share or share snapshot and
   * any files contained within it are later deleted during garbage collection.
   * @param options The options parameters.
   */
  delete(options?: ShareDeleteOptionalParams): Promise<ShareDeleteResponse> {
    return this.client.sendOperationRequest({ options }, deleteOperationSpec);
  }

  /**
   * The Lease Share operation establishes and manages a lock on a share, or the specified snapshot for
   * set and delete share operations.
   * @param options The options parameters.
   */
  acquireLease(
    options?: ShareAcquireLeaseOptionalParams
  ): Promise<ShareAcquireLeaseResponse> {
    return this.client.sendOperationRequest(
      { options },
      acquireLeaseOperationSpec
    );
  }

  /**
   * The Lease Share operation establishes and manages a lock on a share, or the specified snapshot for
   * set and delete share operations.
   * @param leaseId Specifies the current lease ID on the resource.
   * @param options The options parameters.
   */
  releaseLease(
    leaseId: string,
    options?: ShareReleaseLeaseOptionalParams
  ): Promise<ShareReleaseLeaseResponse> {
    return this.client.sendOperationRequest(
      { leaseId, options },
      releaseLeaseOperationSpec
    );
  }

  /**
   * The Lease Share operation establishes and manages a lock on a share, or the specified snapshot for
   * set and delete share operations.
   * @param leaseId Specifies the current lease ID on the resource.
   * @param options The options parameters.
   */
  changeLease(
    leaseId: string,
    options?: ShareChangeLeaseOptionalParams
  ): Promise<ShareChangeLeaseResponse> {
    return this.client.sendOperationRequest(
      { leaseId, options },
      changeLeaseOperationSpec
    );
  }

  /**
   * The Lease Share operation establishes and manages a lock on a share, or the specified snapshot for
   * set and delete share operations.
   * @param leaseId Specifies the current lease ID on the resource.
   * @param options The options parameters.
   */
  renewLease(
    leaseId: string,
    options?: ShareRenewLeaseOptionalParams
  ): Promise<ShareRenewLeaseResponse> {
    return this.client.sendOperationRequest(
      { leaseId, options },
      renewLeaseOperationSpec
    );
  }

  /**
   * The Lease Share operation establishes and manages a lock on a share, or the specified snapshot for
   * set and delete share operations.
   * @param options The options parameters.
   */
  breakLease(
    options?: ShareBreakLeaseOptionalParams
  ): Promise<ShareBreakLeaseResponse> {
    return this.client.sendOperationRequest(
      { options },
      breakLeaseOperationSpec
    );
  }

  /**
   * Creates a read-only snapshot of a share.
   * @param options The options parameters.
   */
  createSnapshot(
    options?: ShareCreateSnapshotOptionalParams
  ): Promise<ShareCreateSnapshotResponse> {
    return this.client.sendOperationRequest(
      { options },
      createSnapshotOperationSpec
    );
  }

  /**
   * Create a permission (a security descriptor).
   * @param sharePermission A permission (a security descriptor) at the share level.
   * @param options The options parameters.
   */
  createPermission(
    sharePermission: SharePermission,
    options?: ShareCreatePermissionOptionalParams
  ): Promise<ShareCreatePermissionResponse> {
    return this.client.sendOperationRequest(
      { sharePermission, options },
      createPermissionOperationSpec
    );
  }

  /**
   * Returns the permission (security descriptor) for a given key
   * @param filePermissionKey Key of the permission to be set for the directory/file.
   * @param options The options parameters.
   */
  getPermission(
    filePermissionKey: string,
    options?: ShareGetPermissionOptionalParams
  ): Promise<ShareGetPermissionResponse> {
    return this.client.sendOperationRequest(
      { filePermissionKey, options },
      getPermissionOperationSpec
    );
  }

  /**
   * Sets properties for the specified share.
   * @param options The options parameters.
   */
  setProperties(
    options?: ShareSetPropertiesOptionalParams
  ): Promise<ShareSetPropertiesResponse> {
    return this.client.sendOperationRequest(
      { options },
      setPropertiesOperationSpec
    );
  }

  /**
   * Sets one or more user-defined name-value pairs for the specified share.
   * @param options The options parameters.
   */
  setMetadata(
    options?: ShareSetMetadataOptionalParams
  ): Promise<ShareSetMetadataResponse> {
    return this.client.sendOperationRequest(
      { options },
      setMetadataOperationSpec
    );
  }

  /**
   * Returns information about stored access policies specified on the share.
   * @param options The options parameters.
   */
  getAccessPolicy(
    options?: ShareGetAccessPolicyOptionalParams
  ): Promise<ShareGetAccessPolicyResponse> {
    return this.client.sendOperationRequest(
      { options },
      getAccessPolicyOperationSpec
    );
  }

  /**
   * Sets a stored access policy for use with shared access signatures.
   * @param options The options parameters.
   */
  setAccessPolicy(
    options?: ShareSetAccessPolicyOptionalParams
  ): Promise<ShareSetAccessPolicyResponse> {
    return this.client.sendOperationRequest(
      { options },
      setAccessPolicyOperationSpec
    );
  }

  /**
   * Retrieves statistics related to the share.
   * @param options The options parameters.
   */
  getStatistics(
    options?: ShareGetStatisticsOptionalParams
  ): Promise<ShareGetStatisticsResponse> {
    return this.client.sendOperationRequest(
      { options },
      getStatisticsOperationSpec
    );
  }

  /**
   * Restores a previously deleted Share.
   * @param options The options parameters.
   */
  restore(options?: ShareRestoreOptionalParams): Promise<ShareRestoreResponse> {
    return this.client.sendOperationRequest({ options }, restoreOperationSpec);
  }
}
// Operation Specifications
const xmlSerializer = coreClient.createSerializer(Mappers, /* isXml */ true);

const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.ShareCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareCreateExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.restype1],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.quota,
    Parameters.accessTier,
    Parameters.enabledProtocols,
    Parameters.rootSquash
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getPropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "GET",
  responses: {
    200: {
      headersMapper: Mappers.ShareGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareGetPropertiesExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.shareSnapshot
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.leaseId
  ],
  isXML: true,
  serializer: xmlSerializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "DELETE",
  responses: {
    202: {
      headersMapper: Mappers.ShareDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareDeleteExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.shareSnapshot
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.deleteSnapshots
  ],
  isXML: true,
  serializer: xmlSerializer
};
const acquireLeaseOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.ShareAcquireLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareAcquireLeaseExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.shareSnapshot,
    Parameters.comp2
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.action,
    Parameters.duration,
    Parameters.proposedLeaseId,
    Parameters.requestId
  ],
  isXML: true,
  serializer: xmlSerializer
};
const releaseLeaseOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ShareReleaseLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareReleaseLeaseExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.shareSnapshot,
    Parameters.comp2
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.requestId,
    Parameters.action1,
    Parameters.leaseId1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const changeLeaseOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ShareChangeLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareChangeLeaseExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.shareSnapshot,
    Parameters.comp2
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.proposedLeaseId,
    Parameters.requestId,
    Parameters.leaseId1,
    Parameters.action2
  ],
  isXML: true,
  serializer: xmlSerializer
};
const renewLeaseOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ShareRenewLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareRenewLeaseExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.shareSnapshot,
    Parameters.comp2
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.requestId,
    Parameters.leaseId1,
    Parameters.action3
  ],
  isXML: true,
  serializer: xmlSerializer
};
const breakLeaseOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "PUT",
  responses: {
    202: {
      headersMapper: Mappers.ShareBreakLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareBreakLeaseExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.shareSnapshot,
    Parameters.comp2
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.requestId,
    Parameters.action4,
    Parameters.breakPeriod
  ],
  isXML: true,
  serializer: xmlSerializer
};
const createSnapshotOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.ShareCreateSnapshotHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareCreateSnapshotExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp3
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.metadata
  ],
  isXML: true,
  serializer: xmlSerializer
};
const createPermissionOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.ShareCreatePermissionHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareCreatePermissionExceptionHeaders
    }
  },
  requestBody: Parameters.sharePermission,
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp4
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.contentType1,
    Parameters.fileRequestIntent
  ],
  mediaType: "json",
  serializer
};
const getPermissionOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharePermission,
      headersMapper: Mappers.ShareGetPermissionHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareGetPermissionExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp4
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.fileRequestIntent,
    Parameters.accept2,
    Parameters.filePermissionKey
  ],
  serializer
};
const setPropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ShareSetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareSetPropertiesExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.comp,
    Parameters.timeoutInSeconds,
    Parameters.restype1
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.quota,
    Parameters.accessTier,
    Parameters.rootSquash,
    Parameters.leaseId
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setMetadataOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ShareSetMetadataHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareSetMetadataExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp5
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.leaseId
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getAccessPolicyOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "SignedIdentifier" }
          }
        },
        serializedName: "SignedIdentifiers",
        xmlName: "SignedIdentifiers",
        xmlIsWrapped: true,
        xmlElementName: "SignedIdentifier"
      },
      headersMapper: Mappers.ShareGetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareGetAccessPolicyExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp6
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.leaseId
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setAccessPolicyOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ShareSetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareSetAccessPolicyExceptionHeaders
    }
  },
  requestBody: Parameters.shareAcl,
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp6
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.version,
    Parameters.leaseId
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getStatisticsOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ShareStats,
      headersMapper: Mappers.ShareGetStatisticsHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareGetStatisticsExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp7
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.leaseId
  ],
  isXML: true,
  serializer: xmlSerializer
};
const restoreOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.ShareRestoreHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ShareRestoreExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp8
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.requestId,
    Parameters.deletedShareName,
    Parameters.deletedShareVersion
  ],
  isXML: true,
  serializer: xmlSerializer
};