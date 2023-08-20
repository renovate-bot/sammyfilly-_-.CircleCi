/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  FileImport,
  FileImportsListOptionalParams,
  FileImportsGetOptionalParams,
  FileImportsGetResponse,
  FileImportsCreateOptionalParams,
  FileImportsCreateResponse,
  FileImportsDeleteOptionalParams,
  FileImportsDeleteResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FileImports. */
export interface FileImports {
  /**
   * Gets all file imports.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: FileImportsListOptionalParams
  ): PagedAsyncIterableIterator<FileImport>;
  /**
   * Gets a file import.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param fileImportId File import ID
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    fileImportId: string,
    options?: FileImportsGetOptionalParams
  ): Promise<FileImportsGetResponse>;
  /**
   * Creates the file import.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param fileImportId File import ID
   * @param fileImport The file import
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    workspaceName: string,
    fileImportId: string,
    fileImport: FileImport,
    options?: FileImportsCreateOptionalParams
  ): Promise<FileImportsCreateResponse>;
  /**
   * Delete the file import.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param fileImportId File import ID
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    fileImportId: string,
    options?: FileImportsDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<FileImportsDeleteResponse>,
      FileImportsDeleteResponse
    >
  >;
  /**
   * Delete the file import.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param fileImportId File import ID
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    fileImportId: string,
    options?: FileImportsDeleteOptionalParams
  ): Promise<FileImportsDeleteResponse>;
}
