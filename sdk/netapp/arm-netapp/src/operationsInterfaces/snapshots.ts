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
  Snapshot,
  SnapshotsListOptionalParams,
  SnapshotsGetOptionalParams,
  SnapshotsGetResponse,
  SnapshotsCreateOptionalParams,
  SnapshotsCreateResponse,
  SnapshotsUpdateOptionalParams,
  SnapshotsUpdateResponse,
  SnapshotsDeleteOptionalParams,
  SnapshotRestoreFiles,
  SnapshotsRestoreFilesOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Snapshots. */
export interface Snapshots {
  /**
   * List all snapshots associated with the volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: SnapshotsListOptionalParams
  ): PagedAsyncIterableIterator<Snapshot>;
  /**
   * Get details of the specified snapshot
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    snapshotName: string,
    options?: SnapshotsGetOptionalParams
  ): Promise<SnapshotsGetResponse>;
  /**
   * Create the specified snapshot within the given volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param body Snapshot object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    snapshotName: string,
    body: Snapshot,
    options?: SnapshotsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SnapshotsCreateResponse>,
      SnapshotsCreateResponse
    >
  >;
  /**
   * Create the specified snapshot within the given volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param body Snapshot object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    snapshotName: string,
    body: Snapshot,
    options?: SnapshotsCreateOptionalParams
  ): Promise<SnapshotsCreateResponse>;
  /**
   * Patch a snapshot
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param body Snapshot object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    snapshotName: string,
    body: Record<string, unknown>,
    options?: SnapshotsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SnapshotsUpdateResponse>,
      SnapshotsUpdateResponse
    >
  >;
  /**
   * Patch a snapshot
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param body Snapshot object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    snapshotName: string,
    body: Record<string, unknown>,
    options?: SnapshotsUpdateOptionalParams
  ): Promise<SnapshotsUpdateResponse>;
  /**
   * Delete snapshot
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    snapshotName: string,
    options?: SnapshotsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete snapshot
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    snapshotName: string,
    options?: SnapshotsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Restore the specified files from the specified snapshot to the active filesystem
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param body Restore payload supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginRestoreFiles(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    snapshotName: string,
    body: SnapshotRestoreFiles,
    options?: SnapshotsRestoreFilesOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Restore the specified files from the specified snapshot to the active filesystem
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the snapshot
   * @param body Restore payload supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginRestoreFilesAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    snapshotName: string,
    body: SnapshotRestoreFiles,
    options?: SnapshotsRestoreFilesOptionalParams
  ): Promise<void>;
}