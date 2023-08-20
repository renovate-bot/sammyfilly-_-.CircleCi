# client library samples for TypeScript

These sample programs show how to use the TypeScript client libraries for in some common scenarios.

| **File Name**                                                                                                           | **Description**                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [checkNameAvailability.ts][checknameavailability]                                                                       | Check if a service instance name is available. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/CheckNameAvailabilityPost.json                                                                          |
| [createOrUpdateAServiceWithAllParameters.ts][createorupdateaservicewithallparameters]                                   | Create or update the metadata of a service instance. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/ServiceCreate.json                                                                                |
| [createOrUpdateAServiceWithMinimumParameters.ts][createorupdateaservicewithminimumparameters]                           | Create or update the metadata of a service instance. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/ServiceCreateMinimum.json                                                                         |
| [deleteService.ts][deleteservice]                                                                                       | Delete a service instance. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/ServiceDelete.json                                                                                                          |
| [dicomServicesCreateOrUpdateSample.ts][dicomservicescreateorupdatesample]                                               | Creates or updates a DICOM Service resource with the specified parameters. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/dicomservices/DicomServices_Create.json                                     |
| [dicomServicesDeleteSample.ts][dicomservicesdeletesample]                                                               | Deletes a DICOM Service. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/dicomservices/DicomServices_Delete.json                                                                                       |
| [dicomServicesGetSample.ts][dicomservicesgetsample]                                                                     | Gets the properties of the specified DICOM Service. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/dicomservices/DicomServices_Get.json                                                               |
| [dicomServicesListByWorkspaceSample.ts][dicomserviceslistbyworkspacesample]                                             | Lists all DICOM Services for the given workspace x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/dicomservices/DicomServices_List.json                                                                 |
| [dicomServicesUpdateSample.ts][dicomservicesupdatesample]                                                               | Patch DICOM Service details. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/dicomservices/DicomServices_Patch.json                                                                                    |
| [fhirDestinationsListByIotConnectorSample.ts][fhirdestinationslistbyiotconnectorsample]                                 | Lists all FHIR destinations for the given IoT Connector x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/iotconnectors/iotconnector_fhirdestination_List.json                                           |
| [fhirServicesCreateOrUpdateSample.ts][fhirservicescreateorupdatesample]                                                 | Creates or updates a FHIR Service resource with the specified parameters. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/fhirservices/FhirServices_Create.json                                        |
| [fhirServicesDeleteSample.ts][fhirservicesdeletesample]                                                                 | Deletes a FHIR Service. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/fhirservices/FhirServices_Delete.json                                                                                          |
| [fhirServicesGetSample.ts][fhirservicesgetsample]                                                                       | Gets the properties of the specified FHIR Service. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/fhirservices/FhirServices_Get.json                                                                  |
| [fhirServicesListByWorkspaceSample.ts][fhirserviceslistbyworkspacesample]                                               | Lists all FHIR Services for the given workspace x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/fhirservices/FhirServices_List.json                                                                    |
| [fhirServicesUpdateSample.ts][fhirservicesupdatesample]                                                                 | Patch FHIR Service details. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/fhirservices/FhirServices_Patch.json                                                                                       |
| [getMetadata.ts][getmetadata]                                                                                           | Get the metadata of a service instance. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/ServiceGet.json                                                                                                |
| [getOperationResult.ts][getoperationresult]                                                                             | Get the operation result for a long running operation. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/OperationResultsGet.json                                                                        |
| [iotConnectorFhirDestinationCreateOrUpdateSample.ts][iotconnectorfhirdestinationcreateorupdatesample]                   | Creates or updates an IoT Connector FHIR destination resource with the specified parameters. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/iotconnectors/iotconnector_fhirdestination_Create.json    |
| [iotConnectorFhirDestinationDeleteSample.ts][iotconnectorfhirdestinationdeletesample]                                   | Deletes an IoT Connector FHIR destination. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/iotconnectors/iotconnector_fhirdestination_Delete.json                                                      |
| [iotConnectorFhirDestinationGetSample.ts][iotconnectorfhirdestinationgetsample]                                         | Gets the properties of the specified Iot Connector FHIR destination. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/iotconnectors/iotconnector_fhirdestination_Get.json                               |
| [iotConnectorsCreateOrUpdateSample.ts][iotconnectorscreateorupdatesample]                                               | Creates or updates an IoT Connector resource with the specified parameters. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/iotconnectors/iotconnector_Create.json                                     |
| [iotConnectorsDeleteSample.ts][iotconnectorsdeletesample]                                                               | Deletes an IoT Connector. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/iotconnectors/iotconnector_Delete.json                                                                                       |
| [iotConnectorsGetSample.ts][iotconnectorsgetsample]                                                                     | Gets the properties of the specified IoT Connector. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/iotconnectors/iotconnector_Get.json                                                                |
| [iotConnectorsListByWorkspaceSample.ts][iotconnectorslistbyworkspacesample]                                             | Lists all IoT Connectors for the given workspace x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/iotconnectors/iotconnector_List.json                                                                  |
| [iotConnectorsUpdateSample.ts][iotconnectorsupdatesample]                                                               | Patch an IoT Connector. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/iotconnectors/iotconnector_Patch.json                                                                                          |
| [listAllServicesInResourceGroup.ts][listallservicesinresourcegroup]                                                     | Get all the service instances in a resource group. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/ServiceListByResourceGroup.json                                                                     |
| [listAllServicesInSubscription.ts][listallservicesinsubscription]                                                       | Get all the service instances in a subscription. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/ServiceList.json                                                                                      |
| [listOperations.ts][listoperations]                                                                                     | Lists all of the available Healthcare service REST API operations. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/OperationsList.json                                                                 |
| [operationResultsGetSample.ts][operationresultsgetsample]                                                               | Get the operation result for a long running operation. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/OperationResultsGet.json                                                                        |
| [operationsListSample.ts][operationslistsample]                                                                         | Lists all of the available operations supported by Microsoft Healthcare resource provider. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/OperationsList.json                                         |
| [patchService.ts][patchservice]                                                                                         | Update the metadata of a service instance. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/ServicePatch.json                                                                                           |
| [privateEndpointConnectionCreateOrUpdate.ts][privateendpointconnectioncreateorupdate]                                   | Update the state of the specified private endpoint connection associated with the service. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/ServiceCreatePrivateEndpointConnection.json                 |
| [privateEndpointConnectionGetConnection.ts][privateendpointconnectiongetconnection]                                     | Gets the specified private endpoint connection associated with the service. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/ServiceGetPrivateEndpointConnection.json                                   |
| [privateEndpointConnectionList.ts][privateendpointconnectionlist]                                                       | Lists all private endpoint connections for a service. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/ServiceListPrivateEndpointConnections.json                                                       |
| [privateEndpointConnectionsCreateOrUpdateSample.ts][privateendpointconnectionscreateorupdatesample]                     | Update the state of the specified private endpoint connection associated with the service. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/legacy/ServiceCreatePrivateEndpointConnection.json          |
| [privateEndpointConnectionsDelete.ts][privateendpointconnectionsdelete]                                                 | Deletes a private endpoint connection. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/ServiceDeletePrivateEndpointConnection.json                                                                     |
| [privateEndpointConnectionsDeleteSample.ts][privateendpointconnectionsdeletesample]                                     | Deletes a private endpoint connection. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/legacy/ServiceDeletePrivateEndpointConnection.json                                                              |
| [privateEndpointConnectionsGetSample.ts][privateendpointconnectionsgetsample]                                           | Gets the specified private endpoint connection associated with the service. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/legacy/ServiceGetPrivateEndpointConnection.json                            |
| [privateEndpointConnectionsListByServiceSample.ts][privateendpointconnectionslistbyservicesample]                       | Lists all private endpoint connections for a service. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/legacy/ServiceListPrivateEndpointConnections.json                                                |
| [privateLinkResourcesGet.ts][privatelinkresourcesget]                                                                   | Gets a private link resource that need to be created for a service. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/PrivateLinkResourceGet.json                                                        |
| [privateLinkResourcesGetSample.ts][privatelinkresourcesgetsample]                                                       | Gets a private link resource that need to be created for a service. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/legacy/PrivateLinkResourceGet.json                                                 |
| [privateLinkResourcesListByServiceSample.ts][privatelinkresourceslistbyservicesample]                                   | Gets the private link resources that need to be created for a service. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/legacy/PrivateLinkResourcesListByService.json                                   |
| [privateLinkResourcesListGroupIds.ts][privatelinkresourceslistgroupids]                                                 | Gets the private link resources that need to be created for a service. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/PrivateLinkResourcesListByService.json                                          |
| [servicesCheckNameAvailabilitySample.ts][serviceschecknameavailabilitysample]                                           | Check if a service instance name is available. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/CheckNameAvailabilityPost.json                                                                          |
| [servicesCreateOrUpdateSample.ts][servicescreateorupdatesample]                                                         | Create or update the metadata of a service instance. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/legacy/ServiceCreate.json                                                                         |
| [servicesDeleteSample.ts][servicesdeletesample]                                                                         | Delete a service instance. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/legacy/ServiceDelete.json                                                                                                   |
| [servicesGetSample.ts][servicesgetsample]                                                                               | Get the metadata of a service instance. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/legacy/ServiceGet.json                                                                                         |
| [servicesListByResourceGroupSample.ts][serviceslistbyresourcegroupsample]                                               | Get all the service instances in a resource group. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/legacy/ServiceListByResourceGroup.json                                                              |
| [servicesListSample.ts][serviceslistsample]                                                                             | Get all the service instances in a subscription. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/legacy/ServiceList.json                                                                               |
| [servicesUpdateSample.ts][servicesupdatesample]                                                                         | Update the metadata of a service instance. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/legacy/ServicePatch.json                                                                                    |
| [workspacePrivateEndpointConnectionsCreateOrUpdateSample.ts][workspaceprivateendpointconnectionscreateorupdatesample]   | Update the state of the specified private endpoint connection associated with the workspace. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/privatelink/WorkspaceCreatePrivateEndpointConnection.json |
| [workspacePrivateEndpointConnectionsDeleteSample.ts][workspaceprivateendpointconnectionsdeletesample]                   | Deletes a private endpoint connection. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/privatelink/WorkspaceDeletePrivateEndpointConnection.json                                                       |
| [workspacePrivateEndpointConnectionsGetSample.ts][workspaceprivateendpointconnectionsgetsample]                         | Gets the specified private endpoint connection associated with the workspace. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/privatelink/WorkspaceGetPrivateEndpointConnection.json                   |
| [workspacePrivateEndpointConnectionsListByWorkspaceSample.ts][workspaceprivateendpointconnectionslistbyworkspacesample] | Lists all private endpoint connections for a workspace. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/privatelink/WorkspaceListPrivateEndpointConnections.json                                       |
| [workspacePrivateLinkResourcesGetSample.ts][workspaceprivatelinkresourcesgetsample]                                     | Gets a private link resource that need to be created for a workspace. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/privatelink/WorkspacePrivateLinkResourceGet.json                                 |
| [workspacePrivateLinkResourcesListByWorkspaceSample.ts][workspaceprivatelinkresourceslistbyworkspacesample]             | Gets the private link resources that need to be created for a workspace. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/privatelink/PrivateLinkResourcesListByWorkspace.json                          |
| [workspacesCreateOrUpdateSample.ts][workspacescreateorupdatesample]                                                     | Creates or updates a workspace resource with the specified parameters. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/workspaces/Workspaces_Create.json                                               |
| [workspacesDeleteSample.ts][workspacesdeletesample]                                                                     | Deletes a specified workspace. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/workspaces/Workspaces_Delete.json                                                                                       |
| [workspacesGetSample.ts][workspacesgetsample]                                                                           | Gets the properties of the specified workspace. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/workspaces/Workspaces_Get.json                                                                         |
| [workspacesListByResourceGroupSample.ts][workspaceslistbyresourcegroupsample]                                           | Lists all the available workspaces under the specified resource group. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/workspaces/Workspaces_ListByResourceGroup.json                                  |
| [workspacesListBySubscriptionSample.ts][workspaceslistbysubscriptionsample]                                             | Lists all the available workspaces under the specified subscription. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/workspaces/Workspaces_ListBySubscription.json                                     |
| [workspacesUpdateSample.ts][workspacesupdatesample]                                                                     | Patch workspace details. x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/workspaces/Workspaces_Patch.json                                                                                              |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Compile the samples:

```bash
npm run build
```

3. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

4. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node dist/checkNameAvailability.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx cross-env  node dist/checkNameAvailability.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[checknameavailability]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/checkNameAvailability.ts
[createorupdateaservicewithallparameters]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/createOrUpdateAServiceWithAllParameters.ts
[createorupdateaservicewithminimumparameters]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/createOrUpdateAServiceWithMinimumParameters.ts
[deleteservice]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/deleteService.ts
[dicomservicescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/dicomServicesCreateOrUpdateSample.ts
[dicomservicesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/dicomServicesDeleteSample.ts
[dicomservicesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/dicomServicesGetSample.ts
[dicomserviceslistbyworkspacesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/dicomServicesListByWorkspaceSample.ts
[dicomservicesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/dicomServicesUpdateSample.ts
[fhirdestinationslistbyiotconnectorsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/fhirDestinationsListByIotConnectorSample.ts
[fhirservicescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/fhirServicesCreateOrUpdateSample.ts
[fhirservicesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/fhirServicesDeleteSample.ts
[fhirservicesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/fhirServicesGetSample.ts
[fhirserviceslistbyworkspacesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/fhirServicesListByWorkspaceSample.ts
[fhirservicesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/fhirServicesUpdateSample.ts
[getmetadata]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/getMetadata.ts
[getoperationresult]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/getOperationResult.ts
[iotconnectorfhirdestinationcreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/iotConnectorFhirDestinationCreateOrUpdateSample.ts
[iotconnectorfhirdestinationdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/iotConnectorFhirDestinationDeleteSample.ts
[iotconnectorfhirdestinationgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/iotConnectorFhirDestinationGetSample.ts
[iotconnectorscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/iotConnectorsCreateOrUpdateSample.ts
[iotconnectorsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/iotConnectorsDeleteSample.ts
[iotconnectorsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/iotConnectorsGetSample.ts
[iotconnectorslistbyworkspacesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/iotConnectorsListByWorkspaceSample.ts
[iotconnectorsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/iotConnectorsUpdateSample.ts
[listallservicesinresourcegroup]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/listAllServicesInResourceGroup.ts
[listallservicesinsubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/listAllServicesInSubscription.ts
[listoperations]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/listOperations.ts
[operationresultsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/operationResultsGetSample.ts
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/operationsListSample.ts
[patchservice]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/patchService.ts
[privateendpointconnectioncreateorupdate]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/privateEndpointConnectionCreateOrUpdate.ts
[privateendpointconnectiongetconnection]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/privateEndpointConnectionGetConnection.ts
[privateendpointconnectionlist]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/privateEndpointConnectionList.ts
[privateendpointconnectionscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/privateEndpointConnectionsCreateOrUpdateSample.ts
[privateendpointconnectionsdelete]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/privateEndpointConnectionsDelete.ts
[privateendpointconnectionsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/privateEndpointConnectionsDeleteSample.ts
[privateendpointconnectionsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/privateEndpointConnectionsGetSample.ts
[privateendpointconnectionslistbyservicesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/privateEndpointConnectionsListByServiceSample.ts
[privatelinkresourcesget]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/privateLinkResourcesGet.ts
[privatelinkresourcesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/privateLinkResourcesGetSample.ts
[privatelinkresourceslistbyservicesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/privateLinkResourcesListByServiceSample.ts
[privatelinkresourceslistgroupids]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/privateLinkResourcesListGroupIds.ts
[serviceschecknameavailabilitysample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/servicesCheckNameAvailabilitySample.ts
[servicescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/servicesCreateOrUpdateSample.ts
[servicesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/servicesDeleteSample.ts
[servicesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/servicesGetSample.ts
[serviceslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/servicesListByResourceGroupSample.ts
[serviceslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/servicesListSample.ts
[servicesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/servicesUpdateSample.ts
[workspaceprivateendpointconnectionscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/workspacePrivateEndpointConnectionsCreateOrUpdateSample.ts
[workspaceprivateendpointconnectionsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/workspacePrivateEndpointConnectionsDeleteSample.ts
[workspaceprivateendpointconnectionsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/workspacePrivateEndpointConnectionsGetSample.ts
[workspaceprivateendpointconnectionslistbyworkspacesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/workspacePrivateEndpointConnectionsListByWorkspaceSample.ts
[workspaceprivatelinkresourcesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/workspacePrivateLinkResourcesGetSample.ts
[workspaceprivatelinkresourceslistbyworkspacesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/workspacePrivateLinkResourcesListByWorkspaceSample.ts
[workspacescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/workspacesCreateOrUpdateSample.ts
[workspacesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/workspacesDeleteSample.ts
[workspacesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/workspacesGetSample.ts
[workspaceslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/workspacesListByResourceGroupSample.ts
[workspaceslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/workspacesListBySubscriptionSample.ts
[workspacesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/healthcareapis/arm-healthcareapis/samples/v2/typescript/src/workspacesUpdateSample.ts
[apiref]: https://docs.microsoft.com/javascript/api/@azure/arm-healthcareapis?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/healthcareapis/arm-healthcareapis/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html