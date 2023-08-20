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
  DataConnectionUnion,
  DataConnectionsListByDatabaseOptionalParams,
  DataConnectionValidation,
  DataConnectionsDataConnectionValidationOptionalParams,
  DataConnectionsDataConnectionValidationResponse,
  DataConnectionCheckNameRequest,
  DataConnectionsCheckNameAvailabilityOptionalParams,
  DataConnectionsCheckNameAvailabilityResponse,
  DataConnectionsGetOptionalParams,
  DataConnectionsGetResponse,
  DataConnectionsCreateOrUpdateOptionalParams,
  DataConnectionsCreateOrUpdateResponse,
  DataConnectionsUpdateOptionalParams,
  DataConnectionsUpdateResponse,
  DataConnectionsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DataConnections. */
export interface DataConnections {
  /**
   * Returns the list of data connections of the given Kusto database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DataConnectionsListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<DataConnectionUnion>;
  /**
   * Checks that the data connection parameters are valid.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param parameters The data connection parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginDataConnectionValidation(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    parameters: DataConnectionValidation,
    options?: DataConnectionsDataConnectionValidationOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DataConnectionsDataConnectionValidationResponse>,
      DataConnectionsDataConnectionValidationResponse
    >
  >;
  /**
   * Checks that the data connection parameters are valid.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param parameters The data connection parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginDataConnectionValidationAndWait(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    parameters: DataConnectionValidation,
    options?: DataConnectionsDataConnectionValidationOptionalParams
  ): Promise<DataConnectionsDataConnectionValidationResponse>;
  /**
   * Checks that the data connection name is valid and is not already in use.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param options The options parameters.
   */
  checkNameAvailability(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: DataConnectionCheckNameRequest,
    options?: DataConnectionsCheckNameAvailabilityOptionalParams
  ): Promise<DataConnectionsCheckNameAvailabilityResponse>;
  /**
   * Returns a data connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    options?: DataConnectionsGetOptionalParams
  ): Promise<DataConnectionsGetResponse>;
  /**
   * Creates or updates a data connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param parameters The data connection parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    parameters: DataConnectionUnion,
    options?: DataConnectionsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DataConnectionsCreateOrUpdateResponse>,
      DataConnectionsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a data connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param parameters The data connection parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    parameters: DataConnectionUnion,
    options?: DataConnectionsCreateOrUpdateOptionalParams
  ): Promise<DataConnectionsCreateOrUpdateResponse>;
  /**
   * Updates a data connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param parameters The data connection parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    parameters: DataConnectionUnion,
    options?: DataConnectionsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DataConnectionsUpdateResponse>,
      DataConnectionsUpdateResponse
    >
  >;
  /**
   * Updates a data connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param parameters The data connection parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    parameters: DataConnectionUnion,
    options?: DataConnectionsUpdateOptionalParams
  ): Promise<DataConnectionsUpdateResponse>;
  /**
   * Deletes the data connection with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    options?: DataConnectionsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the data connection with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    options?: DataConnectionsDeleteOptionalParams
  ): Promise<void>;
}
