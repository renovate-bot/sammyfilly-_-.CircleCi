/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  GovernanceAssignment,
  GovernanceAssignmentsListOptionalParams,
  GovernanceAssignmentsGetOptionalParams,
  GovernanceAssignmentsGetResponse,
  GovernanceAssignmentsCreateOrUpdateOptionalParams,
  GovernanceAssignmentsCreateOrUpdateResponse,
  GovernanceAssignmentsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GovernanceAssignments. */
export interface GovernanceAssignments {
  /**
   * Get governance assignments on all of your resources inside a scope
   * @param scope The scope of the Governance assignments. Valid scopes are: subscription (format:
   *              'subscriptions/{subscriptionId}'), or security connector (format:
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param assessmentName The Assessment Key - A unique key for the assessment type
   * @param options The options parameters.
   */
  list(
    scope: string,
    assessmentName: string,
    options?: GovernanceAssignmentsListOptionalParams
  ): PagedAsyncIterableIterator<GovernanceAssignment>;
  /**
   * Get a specific governanceAssignment for the requested scope by AssignmentKey
   * @param scope The scope of the Governance assignments. Valid scopes are: subscription (format:
   *              'subscriptions/{subscriptionId}'), or security connector (format:
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param assessmentName The Assessment Key - A unique key for the assessment type
   * @param assignmentKey The governance assignment key - the assessment key of the required governance
   *                      assignment
   * @param options The options parameters.
   */
  get(
    scope: string,
    assessmentName: string,
    assignmentKey: string,
    options?: GovernanceAssignmentsGetOptionalParams
  ): Promise<GovernanceAssignmentsGetResponse>;
  /**
   * Creates or updates a governance assignment on the given subscription.
   * @param scope The scope of the Governance assignments. Valid scopes are: subscription (format:
   *              'subscriptions/{subscriptionId}'), or security connector (format:
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param assessmentName The Assessment Key - A unique key for the assessment type
   * @param assignmentKey The governance assignment key - the assessment key of the required governance
   *                      assignment
   * @param governanceAssignment Governance assignment over a subscription scope
   * @param options The options parameters.
   */
  createOrUpdate(
    scope: string,
    assessmentName: string,
    assignmentKey: string,
    governanceAssignment: GovernanceAssignment,
    options?: GovernanceAssignmentsCreateOrUpdateOptionalParams
  ): Promise<GovernanceAssignmentsCreateOrUpdateResponse>;
  /**
   * Delete a GovernanceAssignment over a given scope
   * @param scope The scope of the Governance assignments. Valid scopes are: subscription (format:
   *              'subscriptions/{subscriptionId}'), or security connector (format:
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param assessmentName The Assessment Key - A unique key for the assessment type
   * @param assignmentKey The governance assignment key - the assessment key of the required governance
   *                      assignment
   * @param options The options parameters.
   */
  delete(
    scope: string,
    assessmentName: string,
    assignmentKey: string,
    options?: GovernanceAssignmentsDeleteOptionalParams
  ): Promise<void>;
}