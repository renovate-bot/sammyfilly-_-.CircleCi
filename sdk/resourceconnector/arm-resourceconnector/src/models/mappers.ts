/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const ApplianceOperationsList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApplianceOperationsList",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplianceOperation"
            }
          }
        }
      }
    }
  }
};

export const ApplianceOperation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApplianceOperation",
    modelProperties: {
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "display.description",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "display.operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "display.provider",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "display.resource",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ApplianceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApplianceListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Appliance"
            }
          }
        }
      }
    }
  }
};

export const Identity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppliancePropertiesInfrastructureConfig: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppliancePropertiesInfrastructureConfig",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ApplianceGetTelemetryConfigResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApplianceGetTelemetryConfigResult",
    modelProperties: {
      telemetryInstrumentationKey: {
        serializedName: "telemetryInstrumentationKey",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PatchableAppliance: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PatchableAppliance",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ApplianceListCredentialResults: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApplianceListCredentialResults",
    modelProperties: {
      hybridConnectionConfig: {
        serializedName: "hybridConnectionConfig",
        type: {
          name: "Composite",
          className: "HybridConnectionConfig"
        }
      },
      kubeconfigs: {
        serializedName: "kubeconfigs",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplianceCredentialKubeconfig"
            }
          }
        }
      }
    }
  }
};

export const HybridConnectionConfig: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "HybridConnectionConfig",
    modelProperties: {
      expirationTime: {
        serializedName: "expirationTime",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      hybridConnectionName: {
        serializedName: "hybridConnectionName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      relay: {
        serializedName: "relay",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      token: {
        serializedName: "token",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApplianceCredentialKubeconfig: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApplianceCredentialKubeconfig",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApplianceListKeysResults: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApplianceListKeysResults",
    modelProperties: {
      artifactProfiles: {
        serializedName: "artifactProfiles",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "ArtifactProfile" } }
        }
      },
      kubeconfigs: {
        serializedName: "kubeconfigs",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplianceCredentialKubeconfig"
            }
          }
        }
      },
      sshKeys: {
        serializedName: "sshKeys",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "SSHKey" } }
        }
      }
    }
  }
};

export const ArtifactProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ArtifactProfile",
    modelProperties: {
      endpoint: {
        serializedName: "endpoint",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SSHKey: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SSHKey",
    modelProperties: {
      certificate: {
        serializedName: "certificate",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      creationTimeStamp: {
        serializedName: "creationTimeStamp",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      expirationTimeStamp: {
        serializedName: "expirationTimeStamp",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      privateKey: {
        serializedName: "privateKey",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      publicKey: {
        serializedName: "publicKey",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpgradeGraph: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpgradeGraph",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "UpgradeGraphProperties"
        }
      }
    }
  }
};

export const UpgradeGraphProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpgradeGraphProperties",
    modelProperties: {
      applianceVersion: {
        serializedName: "applianceVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      supportedVersions: {
        serializedName: "supportedVersions",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SupportedVersion"
            }
          }
        }
      }
    }
  }
};

export const SupportedVersion: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SupportedVersion",
    modelProperties: {
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "SupportedVersionMetadata"
        }
      },
      version: {
        serializedName: "version",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SupportedVersionMetadata: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SupportedVersionMetadata",
    modelProperties: {
      catalogVersion: {
        serializedName: "catalogVersion",
        type: {
          name: "Composite",
          className: "SupportedVersionCatalogVersion"
        }
      }
    }
  }
};

export const SupportedVersionCatalogVersion: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SupportedVersionCatalogVersion",
    modelProperties: {
      data: {
        serializedName: "data",
        type: {
          name: "Composite",
          className: "SupportedVersionCatalogVersionData"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      namespace: {
        serializedName: "namespace",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SupportedVersionCatalogVersionData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SupportedVersionCatalogVersionData",
    modelProperties: {
      audience: {
        serializedName: "audience",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      catalog: {
        serializedName: "catalog",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      offer: {
        serializedName: "offer",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Appliance: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Appliance",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      },
      distro: {
        defaultValue: "AKSEdge",
        serializedName: "properties.distro",
        type: {
          name: "String"
        }
      },
      infrastructureConfig: {
        serializedName: "properties.infrastructureConfig",
        type: {
          name: "Composite",
          className: "AppliancePropertiesInfrastructureConfig"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      publicKey: {
        serializedName: "properties.publicKey",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "properties.status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "properties.version",
        type: {
          name: "String"
        }
      }
    }
  }
};