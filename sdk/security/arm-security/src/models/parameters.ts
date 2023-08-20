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
  CustomAssessmentAutomationRequest as CustomAssessmentAutomationRequestMapper,
  CustomEntityStoreAssignmentRequest as CustomEntityStoreAssignmentRequestMapper,
  Pricing as PricingMapper,
  AdvancedThreatProtectionSetting as AdvancedThreatProtectionSettingMapper,
  DeviceSecurityGroup as DeviceSecurityGroupMapper,
  IoTSecuritySolutionModel as IoTSecuritySolutionModelMapper,
  UpdateIotSecuritySolutionData as UpdateIotSecuritySolutionDataMapper,
  AutoProvisioningSetting as AutoProvisioningSettingMapper,
  InformationProtectionPolicy as InformationProtectionPolicyMapper,
  SecurityContact as SecurityContactMapper,
  WorkspaceSetting as WorkspaceSettingMapper,
  Automation as AutomationMapper,
  AlertsSuppressionRule as AlertsSuppressionRuleMapper,
  SecurityAssessmentMetadataResponse as SecurityAssessmentMetadataResponseMapper,
  SecurityAssessment as SecurityAssessmentMapper,
  AdaptiveApplicationControlGroup as AdaptiveApplicationControlGroupMapper,
  AdaptiveNetworkHardeningEnforceRequest as AdaptiveNetworkHardeningEnforceRequestMapper,
  JitNetworkAccessPolicy as JitNetworkAccessPolicyMapper,
  JitNetworkAccessPolicyInitiateRequest as JitNetworkAccessPolicyInitiateRequestMapper,
  ConnectorSetting as ConnectorSettingMapper,
  AlertSimulatorRequestBody as AlertSimulatorRequestBodyMapper,
  Setting as SettingMapper,
  IngestionSetting as IngestionSettingMapper,
  GovernanceRule as GovernanceRuleMapper,
  ExecuteGovernanceRuleParams as ExecuteGovernanceRuleParamsMapper,
  GovernanceAssignment as GovernanceAssignmentMapper,
  Application as ApplicationMapper,
  RuleResultsInput as RuleResultsInputMapper,
  RulesResultsInput as RulesResultsInputMapper,
  SecurityConnector as SecurityConnectorMapper
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
    defaultValue: "2021-10-01-preview",
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
      Pattern: new RegExp(
        "^[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$"
      )
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-07-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
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

export const customAssessmentAutomationName: OperationURLParameter = {
  parameterPath: "customAssessmentAutomationName",
  mapper: {
    serializedName: "customAssessmentAutomationName",
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

export const customAssessmentAutomationBody: OperationParameter = {
  parameterPath: "customAssessmentAutomationBody",
  mapper: CustomAssessmentAutomationRequestMapper
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

export const customEntityStoreAssignmentName: OperationURLParameter = {
  parameterPath: "customEntityStoreAssignmentName",
  mapper: {
    serializedName: "customEntityStoreAssignmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const customEntityStoreAssignmentRequestBody: OperationParameter = {
  parameterPath: "customEntityStoreAssignmentRequestBody",
  mapper: CustomEntityStoreAssignmentRequestMapper
};

export const apiVersion2: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2017-08-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
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

export const resourceId: OperationURLParameter = {
  parameterPath: "resourceId",
  mapper: {
    serializedName: "resourceId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const complianceResultName: OperationURLParameter = {
  parameterPath: "complianceResultName",
  mapper: {
    serializedName: "complianceResultName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion3: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-01-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const pricingName: OperationURLParameter = {
  parameterPath: "pricingName",
  mapper: {
    serializedName: "pricingName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const pricing: OperationParameter = {
  parameterPath: "pricing",
  mapper: PricingMapper
};

export const apiVersion4: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2019-01-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const settingName: OperationURLParameter = {
  parameterPath: "settingName",
  mapper: {
    defaultValue: "current",
    isConstant: true,
    serializedName: "settingName",
    type: {
      name: "String"
    }
  }
};

export const advancedThreatProtectionSetting: OperationParameter = {
  parameterPath: "advancedThreatProtectionSetting",
  mapper: AdvancedThreatProtectionSettingMapper
};

export const apiVersion5: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2019-08-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const deviceSecurityGroupName: OperationURLParameter = {
  parameterPath: "deviceSecurityGroupName",
  mapper: {
    serializedName: "deviceSecurityGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const deviceSecurityGroup: OperationParameter = {
  parameterPath: "deviceSecurityGroup",
  mapper: DeviceSecurityGroupMapper
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

export const solutionName: OperationURLParameter = {
  parameterPath: "solutionName",
  mapper: {
    serializedName: "solutionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const iotSecuritySolutionData: OperationParameter = {
  parameterPath: "iotSecuritySolutionData",
  mapper: IoTSecuritySolutionModelMapper
};

export const updateIotSecuritySolutionData: OperationParameter = {
  parameterPath: "updateIotSecuritySolutionData",
  mapper: UpdateIotSecuritySolutionDataMapper
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const aggregatedAlertName: OperationURLParameter = {
  parameterPath: "aggregatedAlertName",
  mapper: {
    serializedName: "aggregatedAlertName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const aggregatedRecommendationName: OperationURLParameter = {
  parameterPath: "aggregatedRecommendationName",
  mapper: {
    serializedName: "aggregatedRecommendationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion6: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2015-06-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const ascLocation: OperationURLParameter = {
  parameterPath: "ascLocation",
  mapper: {
    serializedName: "ascLocation",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const taskName: OperationURLParameter = {
  parameterPath: "taskName",
  mapper: {
    serializedName: "taskName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const taskUpdateActionType: OperationURLParameter = {
  parameterPath: "taskUpdateActionType",
  mapper: {
    serializedName: "taskUpdateActionType",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion7: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2017-08-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const settingName1: OperationURLParameter = {
  parameterPath: "settingName",
  mapper: {
    serializedName: "settingName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const setting: OperationParameter = {
  parameterPath: "setting",
  mapper: AutoProvisioningSettingMapper
};

export const complianceName: OperationURLParameter = {
  parameterPath: "complianceName",
  mapper: {
    serializedName: "complianceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const informationProtectionPolicyName: OperationURLParameter = {
  parameterPath: "informationProtectionPolicyName",
  mapper: {
    serializedName: "informationProtectionPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const informationProtectionPolicy: OperationParameter = {
  parameterPath: "informationProtectionPolicy",
  mapper: InformationProtectionPolicyMapper
};

export const apiVersion8: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-01-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const securityContactName: OperationURLParameter = {
  parameterPath: "securityContactName",
  mapper: {
    serializedName: "securityContactName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const securityContact: OperationParameter = {
  parameterPath: "securityContact",
  mapper: SecurityContactMapper
};

export const workspaceSettingName: OperationURLParameter = {
  parameterPath: "workspaceSettingName",
  mapper: {
    serializedName: "workspaceSettingName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const workspaceSetting: OperationParameter = {
  parameterPath: "workspaceSetting",
  mapper: WorkspaceSettingMapper
};

export const apiVersion9: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2019-01-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const regulatoryComplianceStandardName: OperationURLParameter = {
  parameterPath: "regulatoryComplianceStandardName",
  mapper: {
    serializedName: "regulatoryComplianceStandardName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const regulatoryComplianceControlName: OperationURLParameter = {
  parameterPath: "regulatoryComplianceControlName",
  mapper: {
    serializedName: "regulatoryComplianceControlName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const regulatoryComplianceAssessmentName: OperationURLParameter = {
  parameterPath: "regulatoryComplianceAssessmentName",
  mapper: {
    serializedName: "regulatoryComplianceAssessmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const assessmentName: OperationURLParameter = {
  parameterPath: "assessmentName",
  mapper: {
    serializedName: "assessmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const subAssessmentName: OperationURLParameter = {
  parameterPath: "subAssessmentName",
  mapper: {
    serializedName: "subAssessmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const automationName: OperationURLParameter = {
  parameterPath: "automationName",
  mapper: {
    serializedName: "automationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const automation: OperationParameter = {
  parameterPath: "automation",
  mapper: AutomationMapper
};

export const alertType: OperationQueryParameter = {
  parameterPath: ["options", "alertType"],
  mapper: {
    serializedName: "AlertType",
    type: {
      name: "String"
    }
  }
};

export const alertsSuppressionRuleName: OperationURLParameter = {
  parameterPath: "alertsSuppressionRuleName",
  mapper: {
    serializedName: "alertsSuppressionRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const alertsSuppressionRule: OperationParameter = {
  parameterPath: "alertsSuppressionRule",
  mapper: AlertsSuppressionRuleMapper
};

export const resourceNamespace: OperationURLParameter = {
  parameterPath: "resourceNamespace",
  mapper: {
    serializedName: "resourceNamespace",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceType: OperationURLParameter = {
  parameterPath: "resourceType",
  mapper: {
    serializedName: "resourceType",
    required: true,
    type: {
      name: "String"
    }
  }
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

export const apiVersion10: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-01-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const serverVulnerabilityAssessment: OperationURLParameter = {
  parameterPath: "serverVulnerabilityAssessment",
  mapper: {
    defaultValue: "default",
    isConstant: true,
    serializedName: "serverVulnerabilityAssessment",
    type: {
      name: "String"
    }
  }
};

export const apiVersion11: OperationQueryParameter = {
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

export const assessmentMetadataName: OperationURLParameter = {
  parameterPath: "assessmentMetadataName",
  mapper: {
    serializedName: "assessmentMetadataName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const assessmentMetadata: OperationParameter = {
  parameterPath: "assessmentMetadata",
  mapper: SecurityAssessmentMetadataResponseMapper
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const assessment: OperationParameter = {
  parameterPath: "assessment",
  mapper: SecurityAssessmentMapper
};

export const includePathRecommendations: OperationQueryParameter = {
  parameterPath: ["options", "includePathRecommendations"],
  mapper: {
    serializedName: "includePathRecommendations",
    type: {
      name: "Boolean"
    }
  }
};

export const summary: OperationQueryParameter = {
  parameterPath: ["options", "summary"],
  mapper: {
    serializedName: "summary",
    type: {
      name: "Boolean"
    }
  }
};

export const groupName: OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    serializedName: "groupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: AdaptiveApplicationControlGroupMapper
};

export const adaptiveNetworkHardeningResourceName: OperationURLParameter = {
  parameterPath: "adaptiveNetworkHardeningResourceName",
  mapper: {
    serializedName: "adaptiveNetworkHardeningResourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: AdaptiveNetworkHardeningEnforceRequestMapper
};

export const adaptiveNetworkHardeningEnforceAction: OperationURLParameter = {
  parameterPath: "adaptiveNetworkHardeningEnforceAction",
  mapper: {
    defaultValue: "enforce",
    isConstant: true,
    serializedName: "adaptiveNetworkHardeningEnforceAction",
    type: {
      name: "String"
    }
  }
};

export const connectionType: OperationURLParameter = {
  parameterPath: "connectionType",
  mapper: {
    serializedName: "connectionType",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const topologyResourceName: OperationURLParameter = {
  parameterPath: "topologyResourceName",
  mapper: {
    serializedName: "topologyResourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const jitNetworkAccessPolicyName: OperationURLParameter = {
  parameterPath: "jitNetworkAccessPolicyName",
  mapper: {
    serializedName: "jitNetworkAccessPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: JitNetworkAccessPolicyMapper
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: JitNetworkAccessPolicyInitiateRequestMapper
};

export const jitNetworkAccessPolicyInitiateType: OperationURLParameter = {
  parameterPath: "jitNetworkAccessPolicyInitiateType",
  mapper: {
    defaultValue: "initiate",
    isConstant: true,
    serializedName: "jitNetworkAccessPolicyInitiateType",
    type: {
      name: "String"
    }
  }
};

export const discoveredSecuritySolutionName: OperationURLParameter = {
  parameterPath: "discoveredSecuritySolutionName",
  mapper: {
    serializedName: "discoveredSecuritySolutionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const externalSecuritySolutionsName: OperationURLParameter = {
  parameterPath: "externalSecuritySolutionsName",
  mapper: {
    serializedName: "externalSecuritySolutionsName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const secureScoreName: OperationURLParameter = {
  parameterPath: "secureScoreName",
  mapper: {
    serializedName: "secureScoreName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const expand1: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const securitySolutionName: OperationURLParameter = {
  parameterPath: "securitySolutionName",
  mapper: {
    serializedName: "securitySolutionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const connectorName: OperationURLParameter = {
  parameterPath: "connectorName",
  mapper: {
    serializedName: "connectorName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const connectorSetting: OperationParameter = {
  parameterPath: "connectorSetting",
  mapper: ConnectorSettingMapper
};

export const apiVersion12: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-01-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const alertName: OperationURLParameter = {
  parameterPath: "alertName",
  mapper: {
    serializedName: "alertName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const alertSimulatorRequestBody: OperationParameter = {
  parameterPath: "alertSimulatorRequestBody",
  mapper: AlertSimulatorRequestBodyMapper
};

export const apiVersion13: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-05-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const settingName2: OperationURLParameter = {
  parameterPath: "settingName",
  mapper: {
    serializedName: "settingName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const setting1: OperationParameter = {
  parameterPath: "setting",
  mapper: SettingMapper
};

export const apiVersion14: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-01-15-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const ingestionSettingName: OperationURLParameter = {
  parameterPath: "ingestionSettingName",
  mapper: {
    serializedName: "ingestionSettingName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const ingestionSetting: OperationParameter = {
  parameterPath: "ingestionSetting",
  mapper: IngestionSettingMapper
};

export const apiVersion15: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-05-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const softwareName: OperationURLParameter = {
  parameterPath: "softwareName",
  mapper: {
    serializedName: "softwareName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion16: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-01-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const scope1: OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    serializedName: "scope",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const ruleId: OperationURLParameter = {
  parameterPath: "ruleId",
  mapper: {
    serializedName: "ruleId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const governanceRule: OperationParameter = {
  parameterPath: "governanceRule",
  mapper: GovernanceRuleMapper
};

export const executeGovernanceRuleParams: OperationParameter = {
  parameterPath: ["options", "executeGovernanceRuleParams"],
  mapper: ExecuteGovernanceRuleParamsMapper
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    serializedName: "operationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const assessmentName1: OperationURLParameter = {
  parameterPath: "assessmentName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$")
    },
    serializedName: "assessmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const assignmentKey: OperationURLParameter = {
  parameterPath: "assignmentKey",
  mapper: {
    serializedName: "assignmentKey",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const governanceAssignment: OperationParameter = {
  parameterPath: "governanceAssignment",
  mapper: GovernanceAssignmentMapper
};

export const apiVersion17: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-07-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const applicationId: OperationURLParameter = {
  parameterPath: "applicationId",
  mapper: {
    serializedName: "applicationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const application: OperationParameter = {
  parameterPath: "application",
  mapper: ApplicationMapper
};

export const securityConnectorName: OperationURLParameter = {
  parameterPath: "securityConnectorName",
  mapper: {
    serializedName: "securityConnectorName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName1: OperationURLParameter = {
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

export const serviceName: OperationURLParameter = {
  parameterPath: "serviceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$"),
      MaxLength: 50,
      MinLength: 1
    },
    serializedName: "serviceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion18: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-11-20-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const apiCollectionId: OperationURLParameter = {
  parameterPath: "apiCollectionId",
  mapper: {
    constraints: {
      MaxLength: 256,
      MinLength: 1
    },
    serializedName: "apiCollectionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion19: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-02-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const scope2: OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "scope",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const healthReportName: OperationURLParameter = {
  parameterPath: "healthReportName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "[{]?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$"
      )
    },
    serializedName: "healthReportName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const scanId: OperationURLParameter = {
  parameterPath: "scanId",
  mapper: {
    serializedName: "scanId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const workspaceId: OperationQueryParameter = {
  parameterPath: "workspaceId",
  mapper: {
    serializedName: "workspaceId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const scanResultId: OperationURLParameter = {
  parameterPath: "scanResultId",
  mapper: {
    serializedName: "scanResultId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body4: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: RuleResultsInputMapper
};

export const body5: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: RulesResultsInputMapper
};

export const apiVersion20: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-03-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const securityConnector: OperationParameter = {
  parameterPath: "securityConnector",
  mapper: SecurityConnectorMapper
};

export const apiVersion21: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-01-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const pricingName1: OperationURLParameter = {
  parameterPath: "pricingName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z][a-zA-Z0-9_]+$"),
      MaxLength: 63,
      MinLength: 3
    },
    serializedName: "pricingName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const securityOperatorName: OperationURLParameter = {
  parameterPath: "securityOperatorName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z][a-zA-Z0-9_]+$"),
      MaxLength: 63,
      MinLength: 3
    },
    serializedName: "securityOperatorName",
    required: true,
    type: {
      name: "String"
    }
  }
};