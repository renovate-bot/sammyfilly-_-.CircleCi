/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

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
      }
    }
  }
};

export const CloudError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CloudErrorBody"
        }
      }
    }
  }
};

export const CloudErrorBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudErrorBody",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudErrorBody"
            }
          }
        }
      }
    }
  }
};

export const PrivateZoneListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateZoneListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateZone"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubResource",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualNetworkLinkListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualNetworkLinkListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualNetworkLink"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ARecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ARecord",
    modelProperties: {
      ipv4Address: {
        serializedName: "ipv4Address",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AaaaRecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AaaaRecord",
    modelProperties: {
      ipv6Address: {
        serializedName: "ipv6Address",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CnameRecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CnameRecord",
    modelProperties: {
      cname: {
        serializedName: "cname",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MxRecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MxRecord",
    modelProperties: {
      preference: {
        serializedName: "preference",
        type: {
          name: "Number"
        }
      },
      exchange: {
        serializedName: "exchange",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PtrRecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PtrRecord",
    modelProperties: {
      ptrdname: {
        serializedName: "ptrdname",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SoaRecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SoaRecord",
    modelProperties: {
      host: {
        serializedName: "host",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      serialNumber: {
        serializedName: "serialNumber",
        type: {
          name: "Number"
        }
      },
      refreshTime: {
        serializedName: "refreshTime",
        type: {
          name: "Number"
        }
      },
      retryTime: {
        serializedName: "retryTime",
        type: {
          name: "Number"
        }
      },
      expireTime: {
        serializedName: "expireTime",
        type: {
          name: "Number"
        }
      },
      minimumTtl: {
        serializedName: "minimumTtl",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SrvRecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SrvRecord",
    modelProperties: {
      priority: {
        serializedName: "priority",
        type: {
          name: "Number"
        }
      },
      weight: {
        serializedName: "weight",
        type: {
          name: "Number"
        }
      },
      port: {
        serializedName: "port",
        type: {
          name: "Number"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TxtRecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TxtRecord",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const RecordSetListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RecordSetListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RecordSet"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
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
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const PrivateZone: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateZone",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      maxNumberOfRecordSets: {
        serializedName: "properties.maxNumberOfRecordSets",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      numberOfRecordSets: {
        serializedName: "properties.numberOfRecordSets",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxNumberOfVirtualNetworkLinks: {
        serializedName: "properties.maxNumberOfVirtualNetworkLinks",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      numberOfVirtualNetworkLinks: {
        serializedName: "properties.numberOfVirtualNetworkLinks",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxNumberOfVirtualNetworkLinksWithRegistration: {
        serializedName:
          "properties.maxNumberOfVirtualNetworkLinksWithRegistration",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      numberOfVirtualNetworkLinksWithRegistration: {
        serializedName:
          "properties.numberOfVirtualNetworkLinksWithRegistration",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      internalId: {
        serializedName: "properties.internalId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualNetworkLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualNetworkLink",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      virtualNetwork: {
        serializedName: "properties.virtualNetwork",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      registrationEnabled: {
        serializedName: "properties.registrationEnabled",
        type: {
          name: "Boolean"
        }
      },
      virtualNetworkLinkState: {
        serializedName: "properties.virtualNetworkLinkState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RecordSet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RecordSet",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "properties.metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      ttl: {
        serializedName: "properties.ttl",
        type: {
          name: "Number"
        }
      },
      fqdn: {
        serializedName: "properties.fqdn",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isAutoRegistered: {
        serializedName: "properties.isAutoRegistered",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      aRecords: {
        serializedName: "properties.aRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ARecord"
            }
          }
        }
      },
      aaaaRecords: {
        serializedName: "properties.aaaaRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AaaaRecord"
            }
          }
        }
      },
      cnameRecord: {
        serializedName: "properties.cnameRecord",
        type: {
          name: "Composite",
          className: "CnameRecord"
        }
      },
      mxRecords: {
        serializedName: "properties.mxRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MxRecord"
            }
          }
        }
      },
      ptrRecords: {
        serializedName: "properties.ptrRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PtrRecord"
            }
          }
        }
      },
      soaRecord: {
        serializedName: "properties.soaRecord",
        type: {
          name: "Composite",
          className: "SoaRecord"
        }
      },
      srvRecords: {
        serializedName: "properties.srvRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SrvRecord"
            }
          }
        }
      },
      txtRecords: {
        serializedName: "properties.txtRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TxtRecord"
            }
          }
        }
      }
    }
  }
};