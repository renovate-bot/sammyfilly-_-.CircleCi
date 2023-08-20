## API Report File for "@azure/arm-peering"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

// @public
export interface BgpSession {
    maxPrefixesAdvertisedV4?: number;
    maxPrefixesAdvertisedV6?: number;
    md5AuthenticationKey?: string;
    microsoftSessionIPv4Address?: string;
    microsoftSessionIPv6Address?: string;
    peerSessionIPv4Address?: string;
    peerSessionIPv6Address?: string;
    sessionPrefixV4?: string;
    sessionPrefixV6?: string;
    readonly sessionStateV4?: SessionStateV4;
    readonly sessionStateV6?: SessionStateV6;
}

// @public
export interface CdnPeeringPrefix extends Resource {
    readonly azureRegion?: string;
    readonly azureService?: string;
    readonly bgpCommunity?: string;
    readonly isPrimaryRegion?: boolean;
    readonly prefix?: string;
}

// @public
export interface CdnPeeringPrefixes {
    list(peeringLocation: string, options?: CdnPeeringPrefixesListOptionalParams): PagedAsyncIterableIterator<CdnPeeringPrefix>;
}

// @public
export interface CdnPeeringPrefixesListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type CdnPeeringPrefixesListNextResponse = CdnPeeringPrefixListResult;

// @public
export interface CdnPeeringPrefixesListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type CdnPeeringPrefixesListResponse = CdnPeeringPrefixListResult;

// @public
export interface CdnPeeringPrefixListResult {
    nextLink?: string;
    value?: CdnPeeringPrefix[];
}

// @public
export interface CheckServiceProviderAvailabilityInput {
    peeringServiceLocation?: string;
    peeringServiceProvider?: string;
}

// @public
export interface CheckServiceProviderAvailabilityOptionalParams extends coreClient.OperationOptions {
}

// @public
export type CheckServiceProviderAvailabilityResponse = {
    body: Enum0;
};

// @public
export type Command = string;

// @public
export interface ConnectionMonitorTest extends Resource {
    destination?: string;
    destinationPort?: number;
    readonly isTestSuccessful?: boolean;
    readonly path?: string[];
    readonly provisioningState?: ProvisioningState;
    sourceAgent?: string;
    testFrequencyInSec?: number;
}

// @public
export interface ConnectionMonitorTestListResult {
    nextLink?: string;
    value?: ConnectionMonitorTest[];
}

// @public
export interface ConnectionMonitorTests {
    createOrUpdate(resourceGroupName: string, peeringServiceName: string, connectionMonitorTestName: string, connectionMonitorTest: ConnectionMonitorTest, options?: ConnectionMonitorTestsCreateOrUpdateOptionalParams): Promise<ConnectionMonitorTestsCreateOrUpdateResponse>;
    delete(resourceGroupName: string, peeringServiceName: string, connectionMonitorTestName: string, options?: ConnectionMonitorTestsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, peeringServiceName: string, connectionMonitorTestName: string, options?: ConnectionMonitorTestsGetOptionalParams): Promise<ConnectionMonitorTestsGetResponse>;
    listByPeeringService(resourceGroupName: string, peeringServiceName: string, options?: ConnectionMonitorTestsListByPeeringServiceOptionalParams): PagedAsyncIterableIterator<ConnectionMonitorTest>;
}

// @public
export interface ConnectionMonitorTestsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ConnectionMonitorTestsCreateOrUpdateResponse = ConnectionMonitorTest;

// @public
export interface ConnectionMonitorTestsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface ConnectionMonitorTestsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ConnectionMonitorTestsGetResponse = ConnectionMonitorTest;

// @public
export interface ConnectionMonitorTestsListByPeeringServiceNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ConnectionMonitorTestsListByPeeringServiceNextResponse = ConnectionMonitorTestListResult;

// @public
export interface ConnectionMonitorTestsListByPeeringServiceOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ConnectionMonitorTestsListByPeeringServiceResponse = ConnectionMonitorTestListResult;

// @public
export type ConnectionState = string;

// @public
export interface ContactDetail {
    email?: string;
    phone?: string;
    role?: Role;
}

// @public
export interface DirectConnection {
    bandwidthInMbps?: number;
    bgpSession?: BgpSession;
    connectionIdentifier?: string;
    readonly connectionState?: ConnectionState;
    readonly errorMessage?: string;
    readonly microsoftTrackingId?: string;
    peeringDBFacilityId?: number;
    readonly provisionedBandwidthInMbps?: number;
    sessionAddressProvider?: SessionAddressProvider;
    useForPeeringService?: boolean;
}

// @public
export interface DirectPeeringFacility {
    address?: string;
    directPeeringType?: DirectPeeringType;
    peeringDBFacilityId?: number;
    peeringDBFacilityLink?: string;
}

// @public
export type DirectPeeringType = string;

// @public
export type Enum0 = string;

// @public
export interface ErrorDetail {
    readonly code?: string;
    readonly message?: string;
}

// @public
export interface ErrorResponse {
    error?: ErrorDetail;
}

// @public
export interface ExchangeConnection {
    bgpSession?: BgpSession;
    connectionIdentifier?: string;
    readonly connectionState?: ConnectionState;
    readonly errorMessage?: string;
    peeringDBFacilityId?: number;
}

// @public
export interface ExchangePeeringFacility {
    bandwidthInMbps?: number;
    exchangeName?: string;
    facilityIPv4Prefix?: string;
    facilityIPv6Prefix?: string;
    microsoftIPv4Address?: string;
    microsoftIPv6Address?: string;
    peeringDBFacilityId?: number;
    peeringDBFacilityLink?: string;
}

// @public
export type Family = string;

// @public
export function getContinuationToken(page: unknown): string | undefined;

// @public
export type Kind = string;

// @public
export enum KnownCommand {
    BgpRoute = "BgpRoute",
    Ping = "Ping",
    Traceroute = "Traceroute"
}

// @public
export enum KnownConnectionState {
    Active = "Active",
    Approved = "Approved",
    None = "None",
    PendingApproval = "PendingApproval",
    ProvisioningCompleted = "ProvisioningCompleted",
    ProvisioningFailed = "ProvisioningFailed",
    ProvisioningStarted = "ProvisioningStarted",
    Validating = "Validating"
}

// @public
export enum KnownDirectPeeringType {
    Cdn = "Cdn",
    Edge = "Edge",
    Internal = "Internal",
    Ix = "Ix",
    IxRs = "IxRs",
    Transit = "Transit",
    Voice = "Voice"
}

// @public
export enum KnownEnum0 {
    Available = "Available",
    Unavailable = "Unavailable"
}

// @public
export enum KnownFamily {
    Direct = "Direct",
    Exchange = "Exchange"
}

// @public
export enum KnownKind {
    Direct = "Direct",
    Exchange = "Exchange"
}

// @public
export enum KnownLearnedType {
    None = "None",
    ViaServiceProvider = "ViaServiceProvider",
    ViaSession = "ViaSession"
}

// @public
export enum KnownLegacyPeeringsKind {
    Direct = "Direct",
    Exchange = "Exchange"
}

// @public
export enum KnownLookingGlassCommand {
    BgpRoute = "BgpRoute",
    Ping = "Ping",
    Traceroute = "Traceroute"
}

// @public
export enum KnownLookingGlassSourceType {
    AzureRegion = "AzureRegion",
    EdgeSite = "EdgeSite"
}

// @public
export enum KnownPeeringLocationsDirectPeeringType {
    Cdn = "Cdn",
    Edge = "Edge",
    Internal = "Internal",
    Ix = "Ix",
    IxRs = "IxRs",
    Transit = "Transit",
    Voice = "Voice"
}

// @public
export enum KnownPeeringLocationsKind {
    Direct = "Direct",
    Exchange = "Exchange"
}

// @public
export enum KnownPrefixValidationState {
    Failed = "Failed",
    Invalid = "Invalid",
    None = "None",
    Pending = "Pending",
    Unknown = "Unknown",
    Verified = "Verified",
    Warning = "Warning"
}

// @public
export enum KnownProvisioningState {
    Deleting = "Deleting",
    Failed = "Failed",
    Succeeded = "Succeeded",
    Updating = "Updating"
}

// @public
export enum KnownRole {
    Escalation = "Escalation",
    Noc = "Noc",
    Other = "Other",
    Policy = "Policy",
    Service = "Service",
    Technical = "Technical"
}

// @public
export enum KnownSessionAddressProvider {
    Microsoft = "Microsoft",
    Peer = "Peer"
}

// @public
export enum KnownSessionStateV4 {
    Active = "Active",
    Connect = "Connect",
    Established = "Established",
    Idle = "Idle",
    None = "None",
    OpenConfirm = "OpenConfirm",
    OpenReceived = "OpenReceived",
    OpenSent = "OpenSent",
    PendingAdd = "PendingAdd",
    PendingRemove = "PendingRemove",
    PendingUpdate = "PendingUpdate"
}

// @public
export enum KnownSessionStateV6 {
    Active = "Active",
    Connect = "Connect",
    Established = "Established",
    Idle = "Idle",
    None = "None",
    OpenConfirm = "OpenConfirm",
    OpenReceived = "OpenReceived",
    OpenSent = "OpenSent",
    PendingAdd = "PendingAdd",
    PendingRemove = "PendingRemove",
    PendingUpdate = "PendingUpdate"
}

// @public
export enum KnownSize {
    Free = "Free",
    Metered = "Metered",
    Unlimited = "Unlimited"
}

// @public
export enum KnownTier {
    Basic = "Basic",
    Premium = "Premium"
}

// @public
export enum KnownValidationState {
    Approved = "Approved",
    Failed = "Failed",
    None = "None",
    Pending = "Pending"
}

// @public
export type LearnedType = string;

// @public
export interface LegacyPeerings {
    list(peeringLocation: string, kind: LegacyPeeringsKind, options?: LegacyPeeringsListOptionalParams): PagedAsyncIterableIterator<Peering>;
}

// @public
export type LegacyPeeringsKind = string;

// @public
export interface LegacyPeeringsListNextOptionalParams extends coreClient.OperationOptions {
    asn?: number;
}

// @public
export type LegacyPeeringsListNextResponse = PeeringListResult;

// @public
export interface LegacyPeeringsListOptionalParams extends coreClient.OperationOptions {
    asn?: number;
}

// @public
export type LegacyPeeringsListResponse = PeeringListResult;

// @public
export interface LogAnalyticsWorkspaceProperties {
    readonly connectedAgents?: string[];
    readonly key?: string;
    readonly workspaceID?: string;
}

// @public
export interface LookingGlass {
    invoke(command: LookingGlassCommand, sourceType: LookingGlassSourceType, sourceLocation: string, destinationIP: string, options?: LookingGlassInvokeOptionalParams): Promise<LookingGlassInvokeResponse>;
}

// @public
export type LookingGlassCommand = string;

// @public
export interface LookingGlassInvokeOptionalParams extends coreClient.OperationOptions {
}

// @public
export type LookingGlassInvokeResponse = LookingGlassOutput;

// @public
export interface LookingGlassOutput {
    command?: Command;
    output?: string;
}

// @public
export type LookingGlassSourceType = string;

// @public
export interface MetricDimension {
    readonly displayName?: string;
    readonly name?: string;
}

// @public
export interface MetricSpecification {
    readonly aggregationType?: string;
    readonly dimensions?: MetricDimension[];
    readonly displayDescription?: string;
    readonly displayName?: string;
    readonly name?: string;
    readonly supportedTimeGrainTypes?: string[];
    readonly unit?: string;
}

// @public
export interface Operation {
    readonly display?: OperationDisplayInfo;
    readonly isDataAction?: boolean;
    readonly name?: string;
    readonly serviceSpecification?: ServiceSpecification;
}

// @public
export interface OperationDisplayInfo {
    readonly description?: string;
    readonly operation?: string;
    readonly provider?: string;
    readonly resource?: string;
}

// @public
export interface OperationListResult {
    nextLink?: string;
    value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListNextResponse = OperationListResult;

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export interface PeerAsn extends Resource {
    readonly errorMessage?: string;
    peerAsn?: number;
    peerContactDetail?: ContactDetail[];
    peerName?: string;
    readonly validationState?: ValidationState;
}

// @public
export interface PeerAsnListResult {
    nextLink?: string;
    value?: PeerAsn[];
}

// @public
export interface PeerAsns {
    createOrUpdate(peerAsnName: string, peerAsn: PeerAsn, options?: PeerAsnsCreateOrUpdateOptionalParams): Promise<PeerAsnsCreateOrUpdateResponse>;
    delete(peerAsnName: string, options?: PeerAsnsDeleteOptionalParams): Promise<void>;
    get(peerAsnName: string, options?: PeerAsnsGetOptionalParams): Promise<PeerAsnsGetResponse>;
    listBySubscription(options?: PeerAsnsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<PeerAsn>;
}

// @public
export interface PeerAsnsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeerAsnsCreateOrUpdateResponse = PeerAsn;

// @public
export interface PeerAsnsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface PeerAsnsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeerAsnsGetResponse = PeerAsn;

// @public
export interface PeerAsnsListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeerAsnsListBySubscriptionNextResponse = PeerAsnListResult;

// @public
export interface PeerAsnsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeerAsnsListBySubscriptionResponse = PeerAsnListResult;

// @public
export interface Peering extends Resource {
    direct?: PeeringPropertiesDirect;
    exchange?: PeeringPropertiesExchange;
    kind: Kind;
    location: string;
    peeringLocation?: string;
    readonly provisioningState?: ProvisioningState;
    sku: PeeringSku;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface PeeringBandwidthOffer {
    offerName?: string;
    valueInMbps?: number;
}

// @public
export interface PeeringListResult {
    nextLink?: string;
    value?: Peering[];
}

// @public
export interface PeeringLocation extends Resource {
    azureRegion?: string;
    country?: string;
    direct?: PeeringLocationPropertiesDirect;
    exchange?: PeeringLocationPropertiesExchange;
    kind?: Kind;
    peeringLocation?: string;
}

// @public
export interface PeeringLocationListResult {
    nextLink?: string;
    value?: PeeringLocation[];
}

// @public
export interface PeeringLocationPropertiesDirect {
    bandwidthOffers?: PeeringBandwidthOffer[];
    peeringFacilities?: DirectPeeringFacility[];
}

// @public
export interface PeeringLocationPropertiesExchange {
    peeringFacilities?: ExchangePeeringFacility[];
}

// @public
export interface PeeringLocations {
    list(kind: PeeringLocationsKind, options?: PeeringLocationsListOptionalParams): PagedAsyncIterableIterator<PeeringLocation>;
}

// @public
export type PeeringLocationsDirectPeeringType = string;

// @public
export type PeeringLocationsKind = string;

// @public
export interface PeeringLocationsListNextOptionalParams extends coreClient.OperationOptions {
    directPeeringType?: PeeringLocationsDirectPeeringType;
}

// @public
export type PeeringLocationsListNextResponse = PeeringLocationListResult;

// @public
export interface PeeringLocationsListOptionalParams extends coreClient.OperationOptions {
    directPeeringType?: PeeringLocationsDirectPeeringType;
}

// @public
export type PeeringLocationsListResponse = PeeringLocationListResult;

// @public (undocumented)
export class PeeringManagementClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: PeeringManagementClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    cdnPeeringPrefixes: CdnPeeringPrefixes;
    checkServiceProviderAvailability(checkServiceProviderAvailabilityInput: CheckServiceProviderAvailabilityInput, options?: CheckServiceProviderAvailabilityOptionalParams): Promise<CheckServiceProviderAvailabilityResponse>;
    // (undocumented)
    connectionMonitorTests: ConnectionMonitorTests;
    // (undocumented)
    legacyPeerings: LegacyPeerings;
    // (undocumented)
    lookingGlass: LookingGlass;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    peerAsns: PeerAsns;
    // (undocumented)
    peeringLocations: PeeringLocations;
    // (undocumented)
    peerings: Peerings;
    // (undocumented)
    peeringServiceCountries: PeeringServiceCountries;
    // (undocumented)
    peeringServiceLocations: PeeringServiceLocations;
    // (undocumented)
    peeringServiceProviders: PeeringServiceProviders;
    // (undocumented)
    peeringServices: PeeringServices;
    // (undocumented)
    prefixes: Prefixes;
    // (undocumented)
    receivedRoutes: ReceivedRoutes;
    // (undocumented)
    registeredAsns: RegisteredAsns;
    // (undocumented)
    registeredPrefixes: RegisteredPrefixes;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface PeeringManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface PeeringPropertiesDirect {
    connections?: DirectConnection[];
    directPeeringType?: DirectPeeringType;
    peerAsn?: SubResource;
    readonly useForPeeringService?: boolean;
}

// @public
export interface PeeringPropertiesExchange {
    connections?: ExchangeConnection[];
    peerAsn?: SubResource;
}

// @public
export interface PeeringReceivedRoute {
    readonly asPath?: string;
    readonly nextHop?: string;
    readonly originAsValidationState?: string;
    readonly prefix?: string;
    readonly receivedTimestamp?: string;
    readonly rpkiValidationState?: string;
    readonly trustAnchor?: string;
}

// @public
export interface PeeringReceivedRouteListResult {
    nextLink?: string;
    value?: PeeringReceivedRoute[];
}

// @public
export interface PeeringRegisteredAsn extends Resource {
    asn?: number;
    readonly peeringServicePrefixKey?: string;
    readonly provisioningState?: ProvisioningState;
}

// @public
export interface PeeringRegisteredAsnListResult {
    nextLink?: string;
    value?: PeeringRegisteredAsn[];
}

// @public
export interface PeeringRegisteredPrefix extends Resource {
    readonly errorMessage?: string;
    readonly peeringServicePrefixKey?: string;
    prefix?: string;
    readonly prefixValidationState?: PrefixValidationState;
    readonly provisioningState?: ProvisioningState;
}

// @public
export interface PeeringRegisteredPrefixListResult {
    nextLink?: string;
    value?: PeeringRegisteredPrefix[];
}

// @public
export interface Peerings {
    createOrUpdate(resourceGroupName: string, peeringName: string, peering: Peering, options?: PeeringsCreateOrUpdateOptionalParams): Promise<PeeringsCreateOrUpdateResponse>;
    delete(resourceGroupName: string, peeringName: string, options?: PeeringsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, peeringName: string, options?: PeeringsGetOptionalParams): Promise<PeeringsGetResponse>;
    listByResourceGroup(resourceGroupName: string, options?: PeeringsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Peering>;
    listBySubscription(options?: PeeringsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<Peering>;
    update(resourceGroupName: string, peeringName: string, tags: ResourceTags, options?: PeeringsUpdateOptionalParams): Promise<PeeringsUpdateResponse>;
}

// @public
export interface PeeringsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringsCreateOrUpdateResponse = Peering;

// @public
export interface PeeringsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface PeeringService extends Resource {
    location: string;
    logAnalyticsWorkspaceProperties?: LogAnalyticsWorkspaceProperties;
    peeringServiceLocation?: string;
    peeringServiceProvider?: string;
    providerBackupPeeringLocation?: string;
    providerPrimaryPeeringLocation?: string;
    readonly provisioningState?: ProvisioningState;
    sku?: PeeringServiceSku;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface PeeringServiceCountries {
    list(options?: PeeringServiceCountriesListOptionalParams): PagedAsyncIterableIterator<PeeringServiceCountry>;
}

// @public
export interface PeeringServiceCountriesListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringServiceCountriesListNextResponse = PeeringServiceCountryListResult;

// @public
export interface PeeringServiceCountriesListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringServiceCountriesListResponse = PeeringServiceCountryListResult;

// @public
export interface PeeringServiceCountry extends Resource {
}

// @public
export interface PeeringServiceCountryListResult {
    nextLink?: string;
    value?: PeeringServiceCountry[];
}

// @public
export interface PeeringServiceListResult {
    nextLink?: string;
    value?: PeeringService[];
}

// @public
export interface PeeringServiceLocation extends Resource {
    azureRegion?: string;
    country?: string;
    state?: string;
}

// @public
export interface PeeringServiceLocationListResult {
    nextLink?: string;
    value?: PeeringServiceLocation[];
}

// @public
export interface PeeringServiceLocations {
    list(options?: PeeringServiceLocationsListOptionalParams): PagedAsyncIterableIterator<PeeringServiceLocation>;
}

// @public
export interface PeeringServiceLocationsListNextOptionalParams extends coreClient.OperationOptions {
    country?: string;
}

// @public
export type PeeringServiceLocationsListNextResponse = PeeringServiceLocationListResult;

// @public
export interface PeeringServiceLocationsListOptionalParams extends coreClient.OperationOptions {
    country?: string;
}

// @public
export type PeeringServiceLocationsListResponse = PeeringServiceLocationListResult;

// @public
export interface PeeringServicePrefix extends Resource {
    readonly errorMessage?: string;
    readonly events?: PeeringServicePrefixEvent[];
    readonly learnedType?: LearnedType;
    peeringServicePrefixKey?: string;
    prefix?: string;
    readonly prefixValidationState?: PrefixValidationState;
    readonly provisioningState?: ProvisioningState;
}

// @public
export interface PeeringServicePrefixEvent {
    readonly eventDescription?: string;
    readonly eventLevel?: string;
    readonly eventSummary?: string;
    readonly eventTimestamp?: Date;
    readonly eventType?: string;
}

// @public
export interface PeeringServicePrefixListResult {
    nextLink?: string;
    value?: PeeringServicePrefix[];
}

// @public
export interface PeeringServiceProvider extends Resource {
    peeringLocations?: string[];
    serviceProviderName?: string;
}

// @public
export interface PeeringServiceProviderListResult {
    nextLink?: string;
    value?: PeeringServiceProvider[];
}

// @public
export interface PeeringServiceProviders {
    list(options?: PeeringServiceProvidersListOptionalParams): PagedAsyncIterableIterator<PeeringServiceProvider>;
}

// @public
export interface PeeringServiceProvidersListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringServiceProvidersListNextResponse = PeeringServiceProviderListResult;

// @public
export interface PeeringServiceProvidersListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringServiceProvidersListResponse = PeeringServiceProviderListResult;

// @public
export interface PeeringServices {
    createOrUpdate(resourceGroupName: string, peeringServiceName: string, peeringService: PeeringService, options?: PeeringServicesCreateOrUpdateOptionalParams): Promise<PeeringServicesCreateOrUpdateResponse>;
    delete(resourceGroupName: string, peeringServiceName: string, options?: PeeringServicesDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, peeringServiceName: string, options?: PeeringServicesGetOptionalParams): Promise<PeeringServicesGetResponse>;
    initializeConnectionMonitor(options?: PeeringServicesInitializeConnectionMonitorOptionalParams): Promise<void>;
    listByResourceGroup(resourceGroupName: string, options?: PeeringServicesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<PeeringService>;
    listBySubscription(options?: PeeringServicesListBySubscriptionOptionalParams): PagedAsyncIterableIterator<PeeringService>;
    update(resourceGroupName: string, peeringServiceName: string, tags: ResourceTags, options?: PeeringServicesUpdateOptionalParams): Promise<PeeringServicesUpdateResponse>;
}

// @public
export interface PeeringServicesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringServicesCreateOrUpdateResponse = PeeringService;

// @public
export interface PeeringServicesDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface PeeringServicesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringServicesGetResponse = PeeringService;

// @public
export interface PeeringServicesInitializeConnectionMonitorOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface PeeringServiceSku {
    name?: string;
}

// @public
export interface PeeringServicesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringServicesListByResourceGroupNextResponse = PeeringServiceListResult;

// @public
export interface PeeringServicesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringServicesListByResourceGroupResponse = PeeringServiceListResult;

// @public
export interface PeeringServicesListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringServicesListBySubscriptionNextResponse = PeeringServiceListResult;

// @public
export interface PeeringServicesListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringServicesListBySubscriptionResponse = PeeringServiceListResult;

// @public
export interface PeeringServicesUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringServicesUpdateResponse = PeeringService;

// @public
export interface PeeringsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringsGetResponse = Peering;

// @public
export interface PeeringSku {
    readonly family?: Family;
    name?: string;
    readonly size?: Size;
    readonly tier?: Tier;
}

// @public
export interface PeeringsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringsListByResourceGroupNextResponse = PeeringListResult;

// @public
export interface PeeringsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringsListByResourceGroupResponse = PeeringListResult;

// @public
export interface PeeringsListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringsListBySubscriptionNextResponse = PeeringListResult;

// @public
export interface PeeringsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringsListBySubscriptionResponse = PeeringListResult;

// @public
export interface PeeringsUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PeeringsUpdateResponse = Peering;

// @public
export interface Prefixes {
    createOrUpdate(resourceGroupName: string, peeringServiceName: string, prefixName: string, peeringServicePrefix: PeeringServicePrefix, options?: PrefixesCreateOrUpdateOptionalParams): Promise<PrefixesCreateOrUpdateResponse>;
    delete(resourceGroupName: string, peeringServiceName: string, prefixName: string, options?: PrefixesDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, peeringServiceName: string, prefixName: string, options?: PrefixesGetOptionalParams): Promise<PrefixesGetResponse>;
    listByPeeringService(resourceGroupName: string, peeringServiceName: string, options?: PrefixesListByPeeringServiceOptionalParams): PagedAsyncIterableIterator<PeeringServicePrefix>;
}

// @public
export interface PrefixesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PrefixesCreateOrUpdateResponse = PeeringServicePrefix;

// @public
export interface PrefixesDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface PrefixesGetOptionalParams extends coreClient.OperationOptions {
    expand?: string;
}

// @public
export type PrefixesGetResponse = PeeringServicePrefix;

// @public
export interface PrefixesListByPeeringServiceNextOptionalParams extends coreClient.OperationOptions {
    expand?: string;
}

// @public
export type PrefixesListByPeeringServiceNextResponse = PeeringServicePrefixListResult;

// @public
export interface PrefixesListByPeeringServiceOptionalParams extends coreClient.OperationOptions {
    expand?: string;
}

// @public
export type PrefixesListByPeeringServiceResponse = PeeringServicePrefixListResult;

// @public
export type PrefixValidationState = string;

// @public
export type ProvisioningState = string;

// @public
export interface ReceivedRoutes {
    listByPeering(resourceGroupName: string, peeringName: string, options?: ReceivedRoutesListByPeeringOptionalParams): PagedAsyncIterableIterator<PeeringReceivedRoute>;
}

// @public
export interface ReceivedRoutesListByPeeringNextOptionalParams extends coreClient.OperationOptions {
    asPath?: string;
    originAsValidationState?: string;
    prefix?: string;
    rpkiValidationState?: string;
    skipToken?: string;
}

// @public
export type ReceivedRoutesListByPeeringNextResponse = PeeringReceivedRouteListResult;

// @public
export interface ReceivedRoutesListByPeeringOptionalParams extends coreClient.OperationOptions {
    asPath?: string;
    originAsValidationState?: string;
    prefix?: string;
    rpkiValidationState?: string;
    skipToken?: string;
}

// @public
export type ReceivedRoutesListByPeeringResponse = PeeringReceivedRouteListResult;

// @public
export interface RegisteredAsns {
    createOrUpdate(resourceGroupName: string, peeringName: string, registeredAsnName: string, registeredAsn: PeeringRegisteredAsn, options?: RegisteredAsnsCreateOrUpdateOptionalParams): Promise<RegisteredAsnsCreateOrUpdateResponse>;
    delete(resourceGroupName: string, peeringName: string, registeredAsnName: string, options?: RegisteredAsnsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, peeringName: string, registeredAsnName: string, options?: RegisteredAsnsGetOptionalParams): Promise<RegisteredAsnsGetResponse>;
    listByPeering(resourceGroupName: string, peeringName: string, options?: RegisteredAsnsListByPeeringOptionalParams): PagedAsyncIterableIterator<PeeringRegisteredAsn>;
}

// @public
export interface RegisteredAsnsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RegisteredAsnsCreateOrUpdateResponse = PeeringRegisteredAsn;

// @public
export interface RegisteredAsnsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface RegisteredAsnsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RegisteredAsnsGetResponse = PeeringRegisteredAsn;

// @public
export interface RegisteredAsnsListByPeeringNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RegisteredAsnsListByPeeringNextResponse = PeeringRegisteredAsnListResult;

// @public
export interface RegisteredAsnsListByPeeringOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RegisteredAsnsListByPeeringResponse = PeeringRegisteredAsnListResult;

// @public
export interface RegisteredPrefixes {
    createOrUpdate(resourceGroupName: string, peeringName: string, registeredPrefixName: string, registeredPrefix: PeeringRegisteredPrefix, options?: RegisteredPrefixesCreateOrUpdateOptionalParams): Promise<RegisteredPrefixesCreateOrUpdateResponse>;
    delete(resourceGroupName: string, peeringName: string, registeredPrefixName: string, options?: RegisteredPrefixesDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, peeringName: string, registeredPrefixName: string, options?: RegisteredPrefixesGetOptionalParams): Promise<RegisteredPrefixesGetResponse>;
    listByPeering(resourceGroupName: string, peeringName: string, options?: RegisteredPrefixesListByPeeringOptionalParams): PagedAsyncIterableIterator<PeeringRegisteredPrefix>;
}

// @public
export interface RegisteredPrefixesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RegisteredPrefixesCreateOrUpdateResponse = PeeringRegisteredPrefix;

// @public
export interface RegisteredPrefixesDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface RegisteredPrefixesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RegisteredPrefixesGetResponse = PeeringRegisteredPrefix;

// @public
export interface RegisteredPrefixesListByPeeringNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RegisteredPrefixesListByPeeringNextResponse = PeeringRegisteredPrefixListResult;

// @public
export interface RegisteredPrefixesListByPeeringOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RegisteredPrefixesListByPeeringResponse = PeeringRegisteredPrefixListResult;

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
}

// @public
export interface ResourceTags {
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export type Role = string;

// @public
export interface ServiceSpecification {
    readonly metricSpecifications?: MetricSpecification[];
}

// @public
export type SessionAddressProvider = string;

// @public
export type SessionStateV4 = string;

// @public
export type SessionStateV6 = string;

// @public
export type Size = string;

// @public
export interface SubResource {
    id?: string;
}

// @public
export type Tier = string;

// @public
export type ValidationState = string;

// (No @packageDocumentation comment for this package)

```