/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { OperationResponse, OperationListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Operation. */
export interface Operation {
  /**
   * List all the operations.
   * @param options The options parameters.
   */
  list(
    options?: OperationListOptionalParams
  ): PagedAsyncIterableIterator<OperationResponse>;
}
