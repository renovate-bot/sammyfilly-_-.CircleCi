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
  PolicyAssignment as PolicyAssignmentMapper,
  PolicyAssignmentUpdate as PolicyAssignmentUpdateMapper,
  PolicyDefinition as PolicyDefinitionMapper,
  PolicySetDefinition as PolicySetDefinitionMapper,
  PolicyExemption as PolicyExemptionMapper
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

export const policyMode: OperationURLParameter = {
  parameterPath: "policyMode",
  mapper: {
    serializedName: "policyMode",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-09-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
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

export const scope: OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    serializedName: "scope",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const policyAssignmentName: OperationURLParameter = {
  parameterPath: "policyAssignmentName",
  mapper: {
    serializedName: "policyAssignmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-06-01",
    isConstant: true,
    serializedName: "api-version",
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

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: PolicyAssignmentMapper
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: PolicyAssignmentUpdateMapper
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
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

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceProviderNamespace: OperationURLParameter = {
  parameterPath: "resourceProviderNamespace",
  mapper: {
    serializedName: "resourceProviderNamespace",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parentResourcePath: OperationURLParameter = {
  parameterPath: "parentResourcePath",
  mapper: {
    serializedName: "parentResourcePath",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceType: OperationURLParameter = {
  parameterPath: "resourceType",
  mapper: {
    serializedName: "resourceType",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const managementGroupId: OperationURLParameter = {
  parameterPath: "managementGroupId",
  mapper: {
    serializedName: "managementGroupId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const policyAssignmentId: OperationURLParameter = {
  parameterPath: "policyAssignmentId",
  mapper: {
    serializedName: "policyAssignmentId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: PolicyDefinitionMapper
};

export const policyDefinitionName: OperationURLParameter = {
  parameterPath: "policyDefinitionName",
  mapper: {
    serializedName: "policyDefinitionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: PolicySetDefinitionMapper
};

export const policySetDefinitionName: OperationURLParameter = {
  parameterPath: "policySetDefinitionName",
  mapper: {
    serializedName: "policySetDefinitionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const policyExemptionName: OperationURLParameter = {
  parameterPath: "policyExemptionName",
  mapper: {
    serializedName: "policyExemptionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion2: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-07-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: PolicyExemptionMapper
};
