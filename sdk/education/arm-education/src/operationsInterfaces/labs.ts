/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  LabDetails,
  LabsListAllOptionalParams,
  LabsListOptionalParams,
  LabsGetOptionalParams,
  LabsGetResponse,
  LabsDeleteOptionalParams,
  LabsCreateOrUpdateOptionalParams,
  LabsCreateOrUpdateResponse,
  InviteCodeGenerateRequest,
  LabsGenerateInviteCodeOptionalParams,
  LabsGenerateInviteCodeResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Labs. */
export interface Labs {
  /**
   * Get a list of labs associated with the provided billing account name and billing profile name.
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param options The options parameters.
   */
  listAll(
    billingAccountName: string,
    billingProfileName: string,
    options?: LabsListAllOptionalParams
  ): PagedAsyncIterableIterator<LabDetails>;
  /**
   * Get the details for a specific lab associated with the provided billing account name, billing
   * profile name, and invoice section name.
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param options The options parameters.
   */
  list(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: LabsListOptionalParams
  ): PagedAsyncIterableIterator<LabDetails>;
  /**
   * Get the details for a specific lab associated with the provided billing account name, billing
   * profile name, and invoice section name.
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: LabsGetOptionalParams
  ): Promise<LabsGetResponse>;
  /**
   * Delete a specific lab associated with the provided billing account name, billing profile name, and
   * invoice section name. Note all students must be removed from the lab in order to delete the lab.
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param options The options parameters.
   */
  delete(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: LabsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Create a new lab or update a previously created lab.
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param parameters Request parameters that are provided to create lab resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    parameters: LabDetails,
    options?: LabsCreateOrUpdateOptionalParams
  ): Promise<LabsCreateOrUpdateResponse>;
  /**
   * Generate invite code for a lab
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param parameters Request parameters that are provided to generate invite code.
   * @param options The options parameters.
   */
  generateInviteCode(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    parameters: InviteCodeGenerateRequest,
    options?: LabsGenerateInviteCodeOptionalParams
  ): Promise<LabsGenerateInviteCodeResponse>;
}
