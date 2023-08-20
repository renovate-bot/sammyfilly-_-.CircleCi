/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  Spacecraft as SpacecraftMapper,
  TagsObject as TagsObjectMapper,
  ContactParameters as ContactParametersMapper,
  Contact as ContactMapper,
  ContactProfile as ContactProfileMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-11-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const skiptoken: OperationQueryParameter = {
  parameterPath: ["options", "skiptoken"],
  mapper: {
    serializedName: "$skiptoken",
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const spacecraftName: OperationURLParameter = {
  parameterPath: "spacecraftName",
  mapper: {
    serializedName: "spacecraftName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const tags: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: SpacecraftMapper
};

export const location: OperationParameter = {
  parameterPath: "location",
  mapper: SpacecraftMapper
};

export const provisioningState: OperationParameter = {
  parameterPath: ["options", "provisioningState"],
  mapper: SpacecraftMapper
};

export const noradId: OperationParameter = {
  parameterPath: ["options", "noradId"],
  mapper: SpacecraftMapper
};

export const titleLine: OperationParameter = {
  parameterPath: "titleLine",
  mapper: SpacecraftMapper
};

export const tleLine1: OperationParameter = {
  parameterPath: "tleLine1",
  mapper: SpacecraftMapper
};

export const tleLine2: OperationParameter = {
  parameterPath: "tleLine2",
  mapper: SpacecraftMapper
};

export const links: OperationParameter = {
  parameterPath: "links",
  mapper: SpacecraftMapper
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: TagsObjectMapper
};

export const contactProfile: OperationParameter = {
  parameterPath: "contactProfile",
  mapper: ContactParametersMapper
};

export const groundStationName: OperationParameter = {
  parameterPath: "groundStationName",
  mapper: ContactParametersMapper
};

export const startTime: OperationParameter = {
  parameterPath: "startTime",
  mapper: ContactParametersMapper
};

export const endTime: OperationParameter = {
  parameterPath: "endTime",
  mapper: ContactParametersMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const contactName: OperationURLParameter = {
  parameterPath: "contactName",
  mapper: {
    serializedName: "contactName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: ContactMapper
};

export const contactProfileName: OperationURLParameter = {
  parameterPath: "contactProfileName",
  mapper: {
    serializedName: "contactProfileName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const tags1: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: ContactProfileMapper
};

export const location1: OperationParameter = {
  parameterPath: "location",
  mapper: ContactProfileMapper
};

export const provisioningState1: OperationParameter = {
  parameterPath: ["options", "provisioningState"],
  mapper: ContactProfileMapper
};

export const minimumViableContactDuration: OperationParameter = {
  parameterPath: ["options", "minimumViableContactDuration"],
  mapper: ContactProfileMapper
};

export const minimumElevationDegrees: OperationParameter = {
  parameterPath: ["options", "minimumElevationDegrees"],
  mapper: ContactProfileMapper
};

export const autoTrackingConfiguration: OperationParameter = {
  parameterPath: ["options", "autoTrackingConfiguration"],
  mapper: ContactProfileMapper
};

export const eventHubUri: OperationParameter = {
  parameterPath: ["options", "eventHubUri"],
  mapper: ContactProfileMapper
};

export const networkConfiguration: OperationParameter = {
  parameterPath: "networkConfiguration",
  mapper: ContactProfileMapper
};

export const thirdPartyConfigurations: OperationParameter = {
  parameterPath: ["options", "thirdPartyConfigurations"],
  mapper: ContactProfileMapper
};

export const links1: OperationParameter = {
  parameterPath: "links",
  mapper: ContactProfileMapper
};

export const capability: OperationQueryParameter = {
  parameterPath: "capability",
  mapper: {
    serializedName: "capability",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const location2: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "operationId",
    required: true,
    type: {
      name: "String"
    }
  }
};