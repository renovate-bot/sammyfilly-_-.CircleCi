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
  AuthConfig as AuthConfigMapper,
  ConnectedEnvironment as ConnectedEnvironmentMapper,
  CheckNameAvailabilityRequest as CheckNameAvailabilityRequestMapper,
  Certificate as CertificateMapper,
  CertificatePatch as CertificatePatchMapper,
  DaprComponent as DaprComponentMapper,
  ConnectedEnvironmentStorage as ConnectedEnvironmentStorageMapper,
  ContainerApp as ContainerAppMapper,
  Job as JobMapper,
  JobPatchProperties as JobPatchPropertiesMapper,
  JobExecutionTemplate as JobExecutionTemplateMapper,
  JobExecutionNamesCollection as JobExecutionNamesCollectionMapper,
  ManagedEnvironment as ManagedEnvironmentMapper,
  ManagedCertificate as ManagedCertificateMapper,
  ManagedCertificatePatch as ManagedCertificatePatchMapper,
  ManagedEnvironmentStorage as ManagedEnvironmentStorageMapper,
  SourceControl as SourceControlMapper
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

export const containerAppName: OperationURLParameter = {
  parameterPath: "containerAppName",
  mapper: {
    serializedName: "containerAppName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-11-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const authConfigName: OperationURLParameter = {
  parameterPath: "authConfigName",
  mapper: {
    serializedName: "authConfigName",
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

export const authConfigEnvelope: OperationParameter = {
  parameterPath: "authConfigEnvelope",
  mapper: AuthConfigMapper
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

export const location: OperationURLParameter = {
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

export const connectedEnvironmentName: OperationURLParameter = {
  parameterPath: "connectedEnvironmentName",
  mapper: {
    serializedName: "connectedEnvironmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const environmentEnvelope: OperationParameter = {
  parameterPath: "environmentEnvelope",
  mapper: ConnectedEnvironmentMapper
};

export const checkNameAvailabilityRequest: OperationParameter = {
  parameterPath: "checkNameAvailabilityRequest",
  mapper: CheckNameAvailabilityRequestMapper
};

export const certificateName: OperationURLParameter = {
  parameterPath: "certificateName",
  mapper: {
    serializedName: "certificateName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const certificateEnvelope: OperationParameter = {
  parameterPath: ["options", "certificateEnvelope"],
  mapper: CertificateMapper
};

export const certificateEnvelope1: OperationParameter = {
  parameterPath: "certificateEnvelope",
  mapper: CertificatePatchMapper
};

export const componentName: OperationURLParameter = {
  parameterPath: "componentName",
  mapper: {
    serializedName: "componentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const daprComponentEnvelope: OperationParameter = {
  parameterPath: "daprComponentEnvelope",
  mapper: DaprComponentMapper
};

export const storageName: OperationURLParameter = {
  parameterPath: "storageName",
  mapper: {
    serializedName: "storageName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const storageEnvelope: OperationParameter = {
  parameterPath: "storageEnvelope",
  mapper: ConnectedEnvironmentStorageMapper
};

export const containerAppEnvelope: OperationParameter = {
  parameterPath: "containerAppEnvelope",
  mapper: ContainerAppMapper
};

export const customHostname: OperationQueryParameter = {
  parameterPath: ["options", "customHostname"],
  mapper: {
    serializedName: "customHostname",
    type: {
      name: "String"
    }
  }
};

export const jobName: OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$")
    },
    serializedName: "jobName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const jobEnvelope: OperationParameter = {
  parameterPath: "jobEnvelope",
  mapper: JobMapper
};

export const jobName1: OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    serializedName: "jobName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const jobEnvelope1: OperationParameter = {
  parameterPath: "jobEnvelope",
  mapper: JobPatchPropertiesMapper
};

export const template: OperationParameter = {
  parameterPath: "template",
  mapper: JobExecutionTemplateMapper
};

export const jobExecutionName: OperationURLParameter = {
  parameterPath: "jobExecutionName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$")
    },
    serializedName: "jobExecutionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const jobExecutionName1: OperationParameter = {
  parameterPath: "jobExecutionName",
  mapper: JobExecutionNamesCollectionMapper
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const revisionName: OperationURLParameter = {
  parameterPath: "revisionName",
  mapper: {
    serializedName: "revisionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const replicaName: OperationURLParameter = {
  parameterPath: "replicaName",
  mapper: {
    serializedName: "replicaName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const detectorName: OperationURLParameter = {
  parameterPath: "detectorName",
  mapper: {
    serializedName: "detectorName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const environmentName: OperationURLParameter = {
  parameterPath: "environmentName",
  mapper: {
    serializedName: "environmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const environmentEnvelope1: OperationParameter = {
  parameterPath: "environmentEnvelope",
  mapper: ManagedEnvironmentMapper
};

export const managedCertificateName: OperationURLParameter = {
  parameterPath: "managedCertificateName",
  mapper: {
    serializedName: "managedCertificateName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const managedCertificateEnvelope: OperationParameter = {
  parameterPath: ["options", "managedCertificateEnvelope"],
  mapper: ManagedCertificateMapper
};

export const managedCertificateEnvelope1: OperationParameter = {
  parameterPath: "managedCertificateEnvelope",
  mapper: ManagedCertificatePatchMapper
};

export const storageEnvelope1: OperationParameter = {
  parameterPath: "storageEnvelope",
  mapper: ManagedEnvironmentStorageMapper
};

export const sourceControlName: OperationURLParameter = {
  parameterPath: "sourceControlName",
  mapper: {
    serializedName: "sourceControlName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const sourceControlEnvelope: OperationParameter = {
  parameterPath: "sourceControlEnvelope",
  mapper: SourceControlMapper
};