/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  CheckNameAvailabilityInput,
  LocationsCheckNameAvailabilityOptionalParams,
  LocationsCheckNameAvailabilityResponse
} from "../models";

/** Interface representing a Locations. */
export interface Locations {
  /**
   * Checks whether the Media Service resource name is available.
   * @param locationName Location name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  checkNameAvailability(
    locationName: string,
    parameters: CheckNameAvailabilityInput,
    options?: LocationsCheckNameAvailabilityOptionalParams
  ): Promise<LocationsCheckNameAvailabilityResponse>;
}