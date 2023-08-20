## API Report File for "@azure/arm-elasticsan"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { OperationState } from '@azure/core-lro';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { SimplePollerLike } from '@azure/core-lro';

// @public
export type ActionType = string;

// @public
export type CreatedByType = string;

// @public
export interface ElasticSan extends TrackedResource {
    availabilityZones?: string[];
    baseSizeTiB: number;
    extendedCapacitySizeTiB: number;
    readonly privateEndpointConnections?: PrivateEndpointConnection[];
    readonly provisioningState?: ProvisioningStates;
    sku: Sku;
    readonly totalIops?: number;
    readonly totalMBps?: number;
    readonly totalSizeTiB?: number;
    readonly totalVolumeSizeGiB?: number;
    readonly volumeGroupCount?: number;
}

// @public
export interface ElasticSanList {
    readonly nextLink?: string;
    value?: ElasticSan[];
}

// @public (undocumented)
export class ElasticSanManagement extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ElasticSanManagementOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    elasticSans: ElasticSans;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    privateEndpointConnections: PrivateEndpointConnections;
    // (undocumented)
    privateLinkResources: PrivateLinkResources;
    // (undocumented)
    skus: Skus;
    // (undocumented)
    subscriptionId: string;
    // (undocumented)
    volumeGroups: VolumeGroups;
    // (undocumented)
    volumes: Volumes;
}

// @public
export interface ElasticSanManagementOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface ElasticSans {
    beginCreate(resourceGroupName: string, elasticSanName: string, parameters: ElasticSan, options?: ElasticSansCreateOptionalParams): Promise<SimplePollerLike<OperationState<ElasticSansCreateResponse>, ElasticSansCreateResponse>>;
    beginCreateAndWait(resourceGroupName: string, elasticSanName: string, parameters: ElasticSan, options?: ElasticSansCreateOptionalParams): Promise<ElasticSansCreateResponse>;
    beginDelete(resourceGroupName: string, elasticSanName: string, options?: ElasticSansDeleteOptionalParams): Promise<SimplePollerLike<OperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, elasticSanName: string, options?: ElasticSansDeleteOptionalParams): Promise<void>;
    beginUpdate(resourceGroupName: string, elasticSanName: string, parameters: ElasticSanUpdate, options?: ElasticSansUpdateOptionalParams): Promise<SimplePollerLike<OperationState<ElasticSansUpdateResponse>, ElasticSansUpdateResponse>>;
    beginUpdateAndWait(resourceGroupName: string, elasticSanName: string, parameters: ElasticSanUpdate, options?: ElasticSansUpdateOptionalParams): Promise<ElasticSansUpdateResponse>;
    get(resourceGroupName: string, elasticSanName: string, options?: ElasticSansGetOptionalParams): Promise<ElasticSansGetResponse>;
    listByResourceGroup(resourceGroupName: string, options?: ElasticSansListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ElasticSan>;
    listBySubscription(options?: ElasticSansListBySubscriptionOptionalParams): PagedAsyncIterableIterator<ElasticSan>;
}

// @public
export interface ElasticSansCreateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ElasticSansCreateResponse = ElasticSan;

// @public
export interface ElasticSansDeleteHeaders {
    // (undocumented)
    location?: string;
}

// @public
export interface ElasticSansDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface ElasticSansGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ElasticSansGetResponse = ElasticSan;

// @public
export interface ElasticSansListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ElasticSansListByResourceGroupNextResponse = ElasticSanList;

// @public
export interface ElasticSansListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ElasticSansListByResourceGroupResponse = ElasticSanList;

// @public
export interface ElasticSansListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ElasticSansListBySubscriptionNextResponse = ElasticSanList;

// @public
export interface ElasticSansListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ElasticSansListBySubscriptionResponse = ElasticSanList;

// @public
export interface ElasticSansUpdateHeaders {
    // (undocumented)
    location?: string;
}

// @public
export interface ElasticSansUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ElasticSansUpdateResponse = ElasticSan;

// @public
export interface ElasticSanUpdate {
    baseSizeTiB?: number;
    extendedCapacitySizeTiB?: number;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export type EncryptionType = string;

// @public
export interface ErrorAdditionalInfo {
    readonly info?: Record<string, unknown>;
    readonly type?: string;
}

// @public
export interface ErrorDetail {
    readonly additionalInfo?: ErrorAdditionalInfo[];
    readonly code?: string;
    readonly details?: ErrorDetail[];
    readonly message?: string;
    readonly target?: string;
}

// @public
export interface ErrorResponse {
    error?: ErrorDetail;
}

// @public
export function getContinuationToken(page: unknown): string | undefined;

// @public
export interface IscsiTargetInfo {
    readonly provisioningState?: ProvisioningStates;
    status?: OperationalStatus;
    readonly targetIqn?: string;
    readonly targetPortalHostname?: string;
    readonly targetPortalPort?: number;
}

// @public
export enum KnownActionType {
    Internal = "Internal"
}

// @public
export enum KnownCreatedByType {
    Application = "Application",
    Key = "Key",
    ManagedIdentity = "ManagedIdentity",
    User = "User"
}

// @public
export enum KnownEncryptionType {
    EncryptionAtRestWithPlatformKey = "EncryptionAtRestWithPlatformKey"
}

// @public
export enum KnownOperationalStatus {
    Healthy = "Healthy",
    Invalid = "Invalid",
    Running = "Running",
    Stopped = "Stopped",
    StoppedDeallocated = "Stopped (deallocated)",
    Unhealthy = "Unhealthy",
    Unknown = "Unknown",
    Updating = "Updating"
}

// @public
export enum KnownOrigin {
    System = "system",
    User = "user",
    UserSystem = "user,system"
}

// @public
export enum KnownPrivateEndpointServiceConnectionStatus {
    Approved = "Approved",
    Failed = "Failed",
    Pending = "Pending",
    Rejected = "Rejected"
}

// @public
export enum KnownProvisioningStates {
    Canceled = "Canceled",
    Creating = "Creating",
    Deleting = "Deleting",
    Failed = "Failed",
    Invalid = "Invalid",
    Pending = "Pending",
    Succeeded = "Succeeded",
    Updating = "Updating"
}

// @public
export enum KnownSkuName {
    PremiumLRS = "Premium_LRS",
    PremiumZRS = "Premium_ZRS"
}

// @public
export enum KnownSkuTier {
    Premium = "Premium"
}

// @public
export enum KnownStorageTargetType {
    Iscsi = "Iscsi",
    None = "None"
}

// @public
export interface NetworkRuleSet {
    virtualNetworkRules?: VirtualNetworkRule[];
}

// @public
export interface Operation {
    readonly actionType?: ActionType;
    display?: OperationDisplay;
    readonly isDataAction?: boolean;
    readonly name?: string;
    readonly origin?: Origin;
}

// @public
export type OperationalStatus = string;

// @public
export interface OperationDisplay {
    readonly description?: string;
    readonly operation?: string;
    readonly provider?: string;
    readonly resource?: string;
}

// @public
export interface OperationListResult {
    readonly nextLink?: string;
    readonly value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export type Origin = string;

// @public
export interface PrivateEndpoint {
    readonly id?: string;
}

// @public
export interface PrivateEndpointConnection extends Resource {
    groupIds?: string[];
    privateEndpoint?: PrivateEndpoint;
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
    readonly provisioningState?: ProvisioningStates;
}

// @public
export interface PrivateEndpointConnectionListResult {
    readonly nextLink?: string;
    value?: PrivateEndpointConnection[];
}

// @public
export interface PrivateEndpointConnections {
    beginCreate(resourceGroupName: string, elasticSanName: string, privateEndpointConnectionName: string, parameters: PrivateEndpointConnection, options?: PrivateEndpointConnectionsCreateOptionalParams): Promise<SimplePollerLike<OperationState<PrivateEndpointConnectionsCreateResponse>, PrivateEndpointConnectionsCreateResponse>>;
    beginCreateAndWait(resourceGroupName: string, elasticSanName: string, privateEndpointConnectionName: string, parameters: PrivateEndpointConnection, options?: PrivateEndpointConnectionsCreateOptionalParams): Promise<PrivateEndpointConnectionsCreateResponse>;
    beginDelete(resourceGroupName: string, elasticSanName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<SimplePollerLike<OperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, elasticSanName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, elasticSanName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsGetOptionalParams): Promise<PrivateEndpointConnectionsGetResponse>;
    list(resourceGroupName: string, elasticSanName: string, options?: PrivateEndpointConnectionsListOptionalParams): PagedAsyncIterableIterator<PrivateEndpointConnection>;
}

// @public
export interface PrivateEndpointConnectionsCreateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type PrivateEndpointConnectionsCreateResponse = PrivateEndpointConnection;

// @public
export interface PrivateEndpointConnectionsDeleteHeaders {
    // (undocumented)
    location?: string;
}

// @public
export interface PrivateEndpointConnectionsDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface PrivateEndpointConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection;

// @public
export interface PrivateEndpointConnectionsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PrivateEndpointConnectionsListResponse = PrivateEndpointConnectionListResult;

// @public
export type PrivateEndpointServiceConnectionStatus = string;

// @public
export interface PrivateLinkResource extends Resource {
    readonly groupId?: string;
    readonly requiredMembers?: string[];
    requiredZoneNames?: string[];
}

// @public
export interface PrivateLinkResourceListResult {
    readonly nextLink?: string;
    value?: PrivateLinkResource[];
}

// @public
export interface PrivateLinkResources {
    listByElasticSan(resourceGroupName: string, elasticSanName: string, options?: PrivateLinkResourcesListByElasticSanOptionalParams): Promise<PrivateLinkResourcesListByElasticSanResponse>;
}

// @public
export interface PrivateLinkResourcesListByElasticSanOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PrivateLinkResourcesListByElasticSanResponse = PrivateLinkResourceListResult;

// @public
export interface PrivateLinkServiceConnectionState {
    actionsRequired?: string;
    description?: string;
    status?: PrivateEndpointServiceConnectionStatus;
}

// @public
export type ProvisioningStates = string;

// @public
export interface ProxyResource extends Resource {
}

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly systemData?: SystemData;
    readonly type?: string;
}

// @public
export interface Sku {
    name: SkuName;
    tier?: SkuTier;
}

// @public
export interface SKUCapability {
    readonly name?: string;
    readonly value?: string;
}

// @public
export interface SkuInformation {
    readonly capabilities?: SKUCapability[];
    readonly locationInfo?: SkuLocationInfo[];
    readonly locations?: string[];
    name: SkuName;
    readonly resourceType?: string;
    tier?: SkuTier;
}

// @public
export interface SkuInformationList {
    readonly nextLink?: string;
    readonly value?: SkuInformation[];
}

// @public
export interface SkuLocationInfo {
    readonly location?: string;
    readonly zones?: string[];
}

// @public
export type SkuName = string;

// @public
export interface Skus {
    list(options?: SkusListOptionalParams): PagedAsyncIterableIterator<SkuInformation>;
}

// @public
export interface SkusListOptionalParams extends coreClient.OperationOptions {
    filter?: string;
}

// @public
export type SkusListResponse = SkuInformationList;

// @public
export type SkuTier = string;

// @public
export interface SourceCreationData {
    createSource?: "None";
    sourceUri?: string;
}

// @public
export type State = "provisioning" | "deprovisioning" | "succeeded" | "failed" | "networkSourceDeleted";

// @public
export type StorageTargetType = string;

// @public
export interface SystemData {
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
}

// @public
export interface TrackedResource extends Resource {
    location: string;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface VirtualNetworkRule {
    action?: "Allow";
    readonly state?: State;
    virtualNetworkResourceId: string;
}

// @public
export interface Volume extends ProxyResource {
    creationData?: SourceCreationData;
    sizeGiB: number;
    readonly storageTarget?: IscsiTargetInfo;
    readonly volumeId?: string;
}

// @public
export interface VolumeGroup extends ProxyResource {
    encryption?: EncryptionType;
    networkAcls?: NetworkRuleSet;
    readonly privateEndpointConnections?: PrivateEndpointConnection[];
    protocolType?: StorageTargetType;
    readonly provisioningState?: ProvisioningStates;
}

// @public
export interface VolumeGroupList {
    readonly nextLink?: string;
    value?: VolumeGroup[];
}

// @public
export interface VolumeGroups {
    beginCreate(resourceGroupName: string, elasticSanName: string, volumeGroupName: string, parameters: VolumeGroup, options?: VolumeGroupsCreateOptionalParams): Promise<SimplePollerLike<OperationState<VolumeGroupsCreateResponse>, VolumeGroupsCreateResponse>>;
    beginCreateAndWait(resourceGroupName: string, elasticSanName: string, volumeGroupName: string, parameters: VolumeGroup, options?: VolumeGroupsCreateOptionalParams): Promise<VolumeGroupsCreateResponse>;
    beginDelete(resourceGroupName: string, elasticSanName: string, volumeGroupName: string, options?: VolumeGroupsDeleteOptionalParams): Promise<SimplePollerLike<OperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, elasticSanName: string, volumeGroupName: string, options?: VolumeGroupsDeleteOptionalParams): Promise<void>;
    beginUpdate(resourceGroupName: string, elasticSanName: string, volumeGroupName: string, parameters: VolumeGroupUpdate, options?: VolumeGroupsUpdateOptionalParams): Promise<SimplePollerLike<OperationState<VolumeGroupsUpdateResponse>, VolumeGroupsUpdateResponse>>;
    beginUpdateAndWait(resourceGroupName: string, elasticSanName: string, volumeGroupName: string, parameters: VolumeGroupUpdate, options?: VolumeGroupsUpdateOptionalParams): Promise<VolumeGroupsUpdateResponse>;
    get(resourceGroupName: string, elasticSanName: string, volumeGroupName: string, options?: VolumeGroupsGetOptionalParams): Promise<VolumeGroupsGetResponse>;
    listByElasticSan(resourceGroupName: string, elasticSanName: string, options?: VolumeGroupsListByElasticSanOptionalParams): PagedAsyncIterableIterator<VolumeGroup>;
}

// @public
export interface VolumeGroupsCreateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type VolumeGroupsCreateResponse = VolumeGroup;

// @public
export interface VolumeGroupsDeleteHeaders {
    // (undocumented)
    location?: string;
}

// @public
export interface VolumeGroupsDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface VolumeGroupsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VolumeGroupsGetResponse = VolumeGroup;

// @public
export interface VolumeGroupsListByElasticSanNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VolumeGroupsListByElasticSanNextResponse = VolumeGroupList;

// @public
export interface VolumeGroupsListByElasticSanOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VolumeGroupsListByElasticSanResponse = VolumeGroupList;

// @public
export interface VolumeGroupsUpdateHeaders {
    // (undocumented)
    location?: string;
}

// @public
export interface VolumeGroupsUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type VolumeGroupsUpdateResponse = VolumeGroup;

// @public
export interface VolumeGroupUpdate {
    encryption?: EncryptionType;
    networkAcls?: NetworkRuleSet;
    protocolType?: StorageTargetType;
}

// @public
export interface VolumeList {
    readonly nextLink?: string;
    value?: Volume[];
}

// @public
export interface Volumes {
    beginCreate(resourceGroupName: string, elasticSanName: string, volumeGroupName: string, volumeName: string, parameters: Volume, options?: VolumesCreateOptionalParams): Promise<SimplePollerLike<OperationState<VolumesCreateResponse>, VolumesCreateResponse>>;
    beginCreateAndWait(resourceGroupName: string, elasticSanName: string, volumeGroupName: string, volumeName: string, parameters: Volume, options?: VolumesCreateOptionalParams): Promise<VolumesCreateResponse>;
    beginDelete(resourceGroupName: string, elasticSanName: string, volumeGroupName: string, volumeName: string, options?: VolumesDeleteOptionalParams): Promise<SimplePollerLike<OperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, elasticSanName: string, volumeGroupName: string, volumeName: string, options?: VolumesDeleteOptionalParams): Promise<void>;
    beginUpdate(resourceGroupName: string, elasticSanName: string, volumeGroupName: string, volumeName: string, parameters: VolumeUpdate, options?: VolumesUpdateOptionalParams): Promise<SimplePollerLike<OperationState<VolumesUpdateResponse>, VolumesUpdateResponse>>;
    beginUpdateAndWait(resourceGroupName: string, elasticSanName: string, volumeGroupName: string, volumeName: string, parameters: VolumeUpdate, options?: VolumesUpdateOptionalParams): Promise<VolumesUpdateResponse>;
    get(resourceGroupName: string, elasticSanName: string, volumeGroupName: string, volumeName: string, options?: VolumesGetOptionalParams): Promise<VolumesGetResponse>;
    listByVolumeGroup(resourceGroupName: string, elasticSanName: string, volumeGroupName: string, options?: VolumesListByVolumeGroupOptionalParams): PagedAsyncIterableIterator<Volume>;
}

// @public
export interface VolumesCreateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type VolumesCreateResponse = Volume;

// @public
export interface VolumesDeleteHeaders {
    // (undocumented)
    location?: string;
}

// @public
export interface VolumesDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface VolumesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VolumesGetResponse = Volume;

// @public
export interface VolumesListByVolumeGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VolumesListByVolumeGroupNextResponse = VolumeList;

// @public
export interface VolumesListByVolumeGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VolumesListByVolumeGroupResponse = VolumeList;

// @public
export interface VolumesUpdateHeaders {
    // (undocumented)
    location?: string;
}

// @public
export interface VolumesUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type VolumesUpdateResponse = Volume;

// @public
export interface VolumeUpdate {
    sizeGiB?: number;
}

// (No @packageDocumentation comment for this package)

```