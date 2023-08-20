/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";

/** Acr error response describing why the operation failed */
export interface AcrErrors {
  /** Array of detailed error */
  errors?: AcrErrorInfo[];
}

/** Error information */
export interface AcrErrorInfo {
  /** Error code */
  code?: string;
  /** Error message */
  message?: string;
  /** Error details */
  detail?: Record<string, unknown>;
}

/** List of repositories */
export interface Repositories {
  /** Repository names */
  repositories?: string[];
  link?: string;
}

/** Properties of this repository. */
export interface ContainerRepositoryProperties {
  /**
   * Registry login server name. This is likely to be similar to {registry-name}.azurecr.io.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly registryLoginServer: string;
  /**
   * Image name
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name: string;
  /**
   * Image created time
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdOn: Date;
  /**
   * Image last update time
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastUpdatedOn: Date;
  /**
   * Number of the manifests
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly manifestCount: number;
  /**
   * Number of the tags
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tagCount: number;
  /** Delete enabled */
  canDelete?: boolean;
  /** Write enabled */
  canWrite?: boolean;
  /** List enabled */
  canList?: boolean;
  /** Read enabled */
  canRead?: boolean;
}

/** Changeable attributes for Repository */
export interface RepositoryWriteableProperties {
  /** Delete enabled */
  canDelete?: boolean;
  /** Write enabled */
  canWrite?: boolean;
  /** List enabled */
  canList?: boolean;
  /** Read enabled */
  canRead?: boolean;
}

/** List of tag details */
export interface TagList {
  /** Registry login server name. This is likely to be similar to {registry-name}.azurecr.io. */
  registryLoginServer: string;
  /** Image name */
  repository: string;
  /** List of tag attribute details */
  tagAttributeBases: TagAttributesBase[];
  link?: string;
}

/** Tag attribute details */
export interface TagAttributesBase {
  /**
   * Tag name
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name: string;
  /**
   * Tag digest
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly digest: string;
  /**
   * Tag created time
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdOn: Date;
  /**
   * Tag last update time
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastUpdatedOn: Date;
  /** Delete enabled */
  canDelete?: boolean;
  /** Write enabled */
  canWrite?: boolean;
  /** List enabled */
  canList?: boolean;
  /** Read enabled */
  canRead?: boolean;
}

/** Changeable attributes */
export interface TagWriteableProperties {
  /** Delete enabled */
  canDelete?: boolean;
  /** Write enabled */
  canWrite?: boolean;
  /** List enabled */
  canList?: boolean;
  /** Read enabled */
  canRead?: boolean;
}

/** Tag attributes */
export interface ArtifactTagProperties {
  /**
   * Registry login server name. This is likely to be similar to {registry-name}.azurecr.io.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly registryLoginServer: string;
  /**
   * Image name
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly repositoryName: string;
  /**
   * Tag name
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name: string;
  /**
   * Tag digest
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly digest: string;
  /**
   * Tag created time
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdOn: Date;
  /**
   * Tag last update time
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastUpdatedOn: Date;
  /** Delete enabled */
  canDelete?: boolean;
  /** Write enabled */
  canWrite?: boolean;
  /** List enabled */
  canList?: boolean;
  /** Read enabled */
  canRead?: boolean;
}

/** Manifest attributes */
export interface AcrManifests {
  /** Registry login server name. This is likely to be similar to {registry-name}.azurecr.io. */
  registryLoginServer?: string;
  /** Image name */
  repository?: string;
  /** List of manifests */
  manifests?: ManifestAttributesBase[];
  link?: string;
}

/** Manifest details */
export interface ManifestAttributesBase {
  /**
   * Manifest
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly digest: string;
  /**
   * Image size
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly size?: number;
  /**
   * Created time
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdOn: Date;
  /**
   * Last update time
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastUpdatedOn: Date;
  /**
   * CPU architecture
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly architecture?: ArtifactArchitecture;
  /**
   * Operating system
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operatingSystem?: ArtifactOperatingSystem;
  /**
   * List of artifacts that are referenced by this manifest list, with information about the platform each supports.  This list will be empty if this is a leaf manifest and not a manifest list.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly relatedArtifacts?: ArtifactManifestPlatform[];
  /**
   * List of tags
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tags?: string[];
  /** Delete enabled */
  canDelete?: boolean;
  /** Write enabled */
  canWrite?: boolean;
  /** List enabled */
  canList?: boolean;
  /** Read enabled */
  canRead?: boolean;
}

/** The artifact's platform, consisting of operating system and architecture. */
export interface ArtifactManifestPlatform {
  /**
   * Manifest digest
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly digest: string;
  /**
   * CPU architecture
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly architecture?: ArtifactArchitecture;
  /**
   * Operating system
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operatingSystem?: ArtifactOperatingSystem;
}

/** Changeable attributes */
export interface ManifestWriteableProperties {
  /** Delete enabled */
  canDelete?: boolean;
  /** Write enabled */
  canWrite?: boolean;
  /** List enabled */
  canList?: boolean;
  /** Read enabled */
  canRead?: boolean;
}

/** Manifest attributes details */
export interface ArtifactManifestProperties {
  /**
   * Registry login server name. This is likely to be similar to {registry-name}.azurecr.io.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly registryLoginServer?: string;
  /**
   * Repository name
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly repositoryName?: string;
  /**
   * Manifest
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly digest: string;
  /**
   * Image size
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly size?: number;
  /**
   * Created time
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdOn: Date;
  /**
   * Last update time
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastUpdatedOn: Date;
  /**
   * CPU architecture
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly architecture?: ArtifactArchitecture;
  /**
   * Operating system
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operatingSystem?: ArtifactOperatingSystem;
  /**
   * List of artifacts that are referenced by this manifest list, with information about the platform each supports.  This list will be empty if this is a leaf manifest and not a manifest list.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly relatedArtifacts?: ArtifactManifestPlatform[];
  /**
   * List of tags
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tags?: string[];
  /** Delete enabled */
  canDelete?: boolean;
  /** Write enabled */
  canWrite?: boolean;
  /** List enabled */
  canList?: boolean;
  /** Read enabled */
  canRead?: boolean;
}

export interface AcrRefreshToken {
  /** The refresh token to be used for generating access tokens */
  refreshToken?: string;
}

export interface AcrAccessToken {
  /** The access token for performing authenticated requests */
  accessToken?: string;
}

/** Result of the request to list tags of the image */
export interface RepositoryTags {
  /** Name of the image */
  name?: string;
  /** List of tags */
  tags?: string[];
}

/** Signature of a signed manifest */
export interface ImageSignature {
  /** A JSON web signature */
  header?: Jwk;
  /** A signature for the image manifest, signed by a libtrust private key */
  signature?: string;
  /** The signed protected header */
  protected?: string;
}

/** A JSON web signature */
export interface Jwk {
  /** JSON web key parameter */
  jwk?: JWKHeader;
  /** The algorithm used to sign or encrypt the JWT */
  alg?: string;
}

/** JSON web key parameter */
export interface JWKHeader {
  /** crv value */
  crv?: string;
  /** kid value */
  kid?: string;
  /** kty value */
  kty?: string;
  /** x value */
  x?: string;
  /** y value */
  y?: string;
}

/** A list of unstructured historical data for v1 compatibility */
export interface History {
  /** The raw v1 compatibility information */
  v1Compatibility?: string;
}

/** Deleted repository */
export interface DeleteRepositoryResult {
  /**
   * SHA of the deleted image
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly deletedManifests?: string[];
  /**
   * Tag of the deleted image
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly deletedTags?: string[];
}

/** Image layer information */
export interface FsLayer {
  /** SHA of an image layer */
  blobSum?: string;
}

/** Docker V2 image layer descriptor including config and layers */
export interface Descriptor {
  /** Layer media type */
  mediaType?: string;
  /** Layer size */
  size?: number;
  /** Layer digest */
  digest?: string;
  /** Specifies a list of URIs from which this object may be downloaded. */
  urls?: string[];
  /** Additional information provided through arbitrary metadata. */
  annotations?: Annotations;
}

/** Additional information provided through arbitrary metadata. */
export interface Annotations {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Date and time on which the image was built (string, date-time as defined by https://tools.ietf.org/html/rfc3339#section-5.6) */
  created?: Date;
  /** Contact details of the people or organization responsible for the image. */
  authors?: string;
  /** URL to find more information on the image. */
  url?: string;
  /** URL to get documentation on the image. */
  documentation?: string;
  /** URL to get source code for building the image. */
  source?: string;
  /** Version of the packaged software. The version MAY match a label or tag in the source code repository, may also be Semantic versioning-compatible */
  version?: string;
  /** Source control revision identifier for the packaged software. */
  revision?: string;
  /** Name of the distributing entity, organization or individual. */
  vendor?: string;
  /** License(s) under which contained software is distributed as an SPDX License Expression. */
  licenses?: string;
  /** Name of the reference for a target. */
  name?: string;
  /** Human-readable title of the image */
  title?: string;
  /** Human-readable description of the software packaged in the image */
  description?: string;
}

/** Tag */
export interface TagAttributesTag {
  /** SignatureRecord value */
  signatureRecord?: string;
}

/** List of manifest attributes */
export interface ManifestAttributesManifest {
  /** List of manifest attributes details */
  references?: ArtifactManifestPlatform[];
}

/** Returns the requested manifest file */
export interface Manifest {
  /** Schema version */
  schemaVersion?: number;
}

export interface ManifestListAttributes {
  /** The MIME type of the referenced object. This will generally be application/vnd.docker.image.manifest.v2+json, but it could also be application/vnd.docker.image.manifest.v1+json */
  mediaType?: string;
  /** The size in bytes of the object */
  size?: number;
  /** The digest of the content, as defined by the Registry V2 HTTP API Specification */
  digest?: string;
  /** The platform object describes the platform which the image in the manifest runs on. A full list of valid operating system and architecture values are listed in the Go language documentation for $GOOS and $GOARCH */
  platform?: Platform;
}

/** The platform object describes the platform which the image in the manifest runs on. A full list of valid operating system and architecture values are listed in the Go language documentation for $GOOS and $GOARCH */
export interface Platform {
  /** Specifies the CPU architecture, for example amd64 or ppc64le. */
  architecture?: string;
  /** The os field specifies the operating system, for example linux or windows. */
  os?: string;
  /** The optional os.version field specifies the operating system version, for example 10.0.10586. */
  osVersion?: string;
  /** The optional os.features field specifies an array of strings, each listing a required OS feature (for example on Windows win32k */
  osFeatures?: string[];
  /** The optional variant field specifies a variant of the CPU, for example armv6l to specify a particular CPU variant of the ARM CPU. */
  variant?: string;
  /** The optional features field specifies an array of strings, each listing a required CPU feature (for example sse4 or aes */
  features?: string[];
}

/** Returns the requested OCI Manifest file */
export interface OCIManifest {
  /** V2 image config descriptor */
  config?: Descriptor;
  /** List of V2 image layer information */
  layers?: Descriptor[];
  /** Additional information provided through arbitrary metadata. */
  annotations?: Annotations;
  /** Schema version */
  schemaVersion?: number;
}

export interface Paths108HwamOauth2ExchangePostRequestbodyContentApplicationXWwwFormUrlencodedSchema {
  /** Can take a value of access_token_refresh_token, or access_token, or refresh_token */
  grantType: PostContentSchemaGrantType;
  /** Indicates the name of your Azure container registry. */
  service: string;
  /** AAD tenant associated to the AAD credentials. */
  tenant?: string;
  /** AAD refresh token, mandatory when grant_type is access_token_refresh_token or refresh_token */
  refreshToken?: string;
  /** AAD access token, mandatory when grant_type is access_token_refresh_token or access_token. */
  aadAccessToken?: string;
}

export interface PathsV3R3RxOauth2TokenPostRequestbodyContentApplicationXWwwFormUrlencodedSchema {
  /** Indicates the name of your Azure container registry. */
  service: string;
  /** Which is expected to be a valid scope, and can be specified more than once for multiple scope requests. You obtained this from the Www-Authenticate response header from the challenge. */
  scope: string;
  /** Must be a valid ACR refresh token */
  acrRefreshToken: string;
  /** Grant type is expected to be refresh_token */
  grantType: TokenGrantType;
}

/** Returns the requested manifest file */
export interface ManifestWrapper extends Manifest {
  /** Media type for this Manifest */
  mediaType?: string;
  /** (ManifestList, OCIIndex) List of V2 image layer information */
  manifests?: ManifestListAttributes[];
  /** (V2, OCI) Image config descriptor */
  config?: Descriptor;
  /** (V2, OCI) List of V2 image layer information */
  layers?: Descriptor[];
  /** (OCI, OCIIndex) Additional metadata */
  annotations?: Annotations;
  /** (V1) CPU architecture */
  architecture?: string;
  /** (V1) Image name */
  name?: string;
  /** (V1) Image tag */
  tag?: string;
  /** (V1) List of layer information */
  fsLayers?: FsLayer[];
  /** (V1) Image history */
  history?: History[];
  /** (V1) Image signature */
  signatures?: ImageSignature[];
}

/** Returns the requested Docker multi-arch-manifest file */
export interface ManifestList extends Manifest {
  /** Media type for this Manifest */
  mediaType?: string;
  /** List of V2 image layer information */
  manifests?: ManifestListAttributes[];
}

/** Returns the requested Docker V2 Manifest file */
export interface V2Manifest extends Manifest {
  /** Media type for this Manifest */
  mediaType?: string;
  /** V2 image config descriptor */
  config?: Descriptor;
  /** List of V2 image layer information */
  layers?: Descriptor[];
}

/** Returns the requested OCI index file */
export interface OCIIndex extends Manifest {
  /** List of OCI image layer information */
  manifests?: ManifestListAttributes[];
  /** Additional information provided through arbitrary metadata. */
  annotations?: Annotations;
}

/** Returns the requested V1 manifest file */
export interface V1Manifest extends Manifest {
  /** CPU architecture */
  architecture?: string;
  /** Image name */
  name?: string;
  /** Image tag */
  tag?: string;
  /** List of layer information */
  fsLayers?: FsLayer[];
  /** Image history */
  history?: History[];
  /** Image signature */
  signatures?: ImageSignature[];
}

/** Defines headers for ContainerRegistry_getManifest operation. */
export interface ContainerRegistryGetManifestHeaders {
  /** Identifies the docker upload uuid for the current request. */
  dockerContentDigest?: string;
  /** Content type of the uploaded media */
  mediaType?: string;
}

/** Defines headers for ContainerRegistry_createManifest operation. */
export interface ContainerRegistryCreateManifestHeaders {
  /** Identifies the docker upload uuid for the current request. */
  dockerContentDigest?: string;
  /** The canonical location url of the uploaded manifest. */
  location?: string;
  /** The length of the requested blob content. */
  contentLength?: number;
}

/** Defines headers for ContainerRegistry_getRepositories operation. */
export interface ContainerRegistryGetRepositoriesHeaders {
  /** next paginated result */
  link?: string;
}

/** Defines headers for ContainerRegistry_getTags operation. */
export interface ContainerRegistryGetTagsHeaders {
  /** next paginated result */
  link?: string;
}

/** Defines headers for ContainerRegistry_getManifests operation. */
export interface ContainerRegistryGetManifestsHeaders {
  /** next paginated result */
  link?: string;
}

/** Defines headers for ContainerRegistry_getRepositoriesNext operation. */
export interface ContainerRegistryGetRepositoriesNextHeaders {
  /** next paginated result */
  link?: string;
}

/** Defines headers for ContainerRegistry_getTagsNext operation. */
export interface ContainerRegistryGetTagsNextHeaders {
  /** next paginated result */
  link?: string;
}

/** Defines headers for ContainerRegistry_getManifestsNext operation. */
export interface ContainerRegistryGetManifestsNextHeaders {
  /** next paginated result */
  link?: string;
}

/** Defines headers for ContainerRegistryBlob_getBlob operation. */
export interface ContainerRegistryBlobGetBlobHeaders {
  /** The length of the requested blob content. */
  contentLength?: number;
  /** Digest of the targeted content for the request. */
  dockerContentDigest?: string;
}

/** Defines headers for ContainerRegistryBlob_checkBlobExists operation. */
export interface ContainerRegistryBlobCheckBlobExistsHeaders {
  /** The length of the requested blob content. */
  contentLength?: number;
  /** Digest of the targeted content for the request. */
  dockerContentDigest?: string;
}

/** Defines headers for ContainerRegistryBlob_deleteBlob operation. */
export interface ContainerRegistryBlobDeleteBlobHeaders {
  /** Digest of the targeted content for the request. */
  dockerContentDigest?: string;
}

/** Defines headers for ContainerRegistryBlob_mountBlob operation. */
export interface ContainerRegistryBlobMountBlobHeaders {
  /** Provided location for blob */
  location?: string;
  /** Identifies the docker upload uuid for the current request. */
  dockerUploadUuid?: string;
  /** Digest of the targeted content for the request. */
  dockerContentDigest?: string;
}

/** Defines headers for ContainerRegistryBlob_getUploadStatus operation. */
export interface ContainerRegistryBlobGetUploadStatusHeaders {
  /** Range indicating the current progress of the upload. */
  range?: string;
  /** Identifies the docker upload uuid for the current request. */
  dockerUploadUuid?: string;
}

/** Defines headers for ContainerRegistryBlob_uploadChunk operation. */
export interface ContainerRegistryBlobUploadChunkHeaders {
  /** Provided location for blob */
  location?: string;
  /** Range indicating the current progress of the upload. */
  range?: string;
  /** Identifies the docker upload uuid for the current request. */
  dockerUploadUuid?: string;
}

/** Defines headers for ContainerRegistryBlob_completeUpload operation. */
export interface ContainerRegistryBlobCompleteUploadHeaders {
  /** Provided location for blob */
  location?: string;
  /** Range indicating the current progress of the upload. */
  range?: string;
  /** Digest of the targeted content for the request. */
  dockerContentDigest?: string;
}

/** Defines headers for ContainerRegistryBlob_startUpload operation. */
export interface ContainerRegistryBlobStartUploadHeaders {
  /** Provided location for blob */
  location?: string;
  /** Range indicating the current progress of the upload. */
  range?: string;
  /** Identifies the docker upload uuid for the current request. */
  dockerUploadUuid?: string;
}

/** Defines headers for ContainerRegistryBlob_getChunk operation. */
export interface ContainerRegistryBlobGetChunkHeaders {
  /** The length of the requested blob content. */
  contentLength?: number;
  /** Content range of blob chunk. */
  contentRange?: string;
}

/** Defines headers for ContainerRegistryBlob_checkChunkExists operation. */
export interface ContainerRegistryBlobCheckChunkExistsHeaders {
  /** The length of the requested blob content. */
  contentLength?: number;
  /** Content range of blob chunk. */
  contentRange?: string;
}

/** Known values of {@link ApiVersion20210701} that the service accepts. */
export enum KnownApiVersion20210701 {
  /** Api Version '2021-07-01' */
  TwoThousandTwentyOne0701 = "2021-07-01"
}

/**
 * Defines values for ApiVersion20210701. \
 * {@link KnownApiVersion20210701} can be used interchangeably with ApiVersion20210701,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **2021-07-01**: Api Version '2021-07-01'
 */
export type ApiVersion20210701 = string;

/** Known values of {@link ArtifactArchitecture} that the service accepts. */
export enum KnownArtifactArchitecture {
  /** i386 */
  I386 = "386",
  /** AMD64 */
  Amd64 = "amd64",
  /** ARM */
  Arm = "arm",
  /** ARM64 */
  Arm64 = "arm64",
  /** MIPS */
  Mips = "mips",
  /** MIPSLE */
  MipsLe = "mipsle",
  /** MIPS64 */
  Mips64 = "mips64",
  /** MIPS64LE */
  Mips64Le = "mips64le",
  /** PPC64 */
  Ppc64 = "ppc64",
  /** PPC64LE */
  Ppc64Le = "ppc64le",
  /** RISCv64 */
  RiscV64 = "riscv64",
  /** s390x */
  S390X = "s390x",
  /** Wasm */
  Wasm = "wasm"
}

/**
 * Defines values for ArtifactArchitecture. \
 * {@link KnownArtifactArchitecture} can be used interchangeably with ArtifactArchitecture,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **386**: i386 \
 * **amd64**: AMD64 \
 * **arm**: ARM \
 * **arm64**: ARM64 \
 * **mips**: MIPS \
 * **mipsle**: MIPSLE \
 * **mips64**: MIPS64 \
 * **mips64le**: MIPS64LE \
 * **ppc64**: PPC64 \
 * **ppc64le**: PPC64LE \
 * **riscv64**: RISCv64 \
 * **s390x**: s390x \
 * **wasm**: Wasm
 */
export type ArtifactArchitecture = string;

/** Known values of {@link ArtifactOperatingSystem} that the service accepts. */
export enum KnownArtifactOperatingSystem {
  /** Aix */
  Aix = "aix",
  /** Android */
  Android = "android",
  /** Darwin */
  Darwin = "darwin",
  /** Dragonfly */
  Dragonfly = "dragonfly",
  /** FreeBsd */
  FreeBsd = "freebsd",
  /** Illumos */
  Illumos = "illumos",
  /** IOS */
  IOS = "ios",
  /** JS */
  JS = "js",
  /** Linux */
  Linux = "linux",
  /** NetBsd */
  NetBsd = "netbsd",
  /** OpenBsd */
  OpenBsd = "openbsd",
  /** Plan9 */
  Plan9 = "plan9",
  /** Solaris */
  Solaris = "solaris",
  /** Windows */
  Windows = "windows"
}

/**
 * Defines values for ArtifactOperatingSystem. \
 * {@link KnownArtifactOperatingSystem} can be used interchangeably with ArtifactOperatingSystem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **aix** \
 * **android** \
 * **darwin** \
 * **dragonfly** \
 * **freebsd** \
 * **illumos** \
 * **ios** \
 * **js** \
 * **linux** \
 * **netbsd** \
 * **openbsd** \
 * **plan9** \
 * **solaris** \
 * **windows**
 */
export type ArtifactOperatingSystem = string;

/** Known values of {@link PostContentSchemaGrantType} that the service accepts. */
export enum KnownPostContentSchemaGrantType {
  /** AccessTokenRefreshToken */
  AccessTokenRefreshToken = "access_token_refresh_token",
  /** AccessToken */
  AccessToken = "access_token",
  /** RefreshToken */
  RefreshToken = "refresh_token"
}

/**
 * Defines values for PostContentSchemaGrantType. \
 * {@link KnownPostContentSchemaGrantType} can be used interchangeably with PostContentSchemaGrantType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **access_token_refresh_token** \
 * **access_token** \
 * **refresh_token**
 */
export type PostContentSchemaGrantType = string;
/** Defines values for TokenGrantType. */
export type TokenGrantType = "refresh_token" | "password";
/** Defines values for ArtifactTagOrderBy. */
export type ArtifactTagOrderBy = "none" | "timedesc" | "timeasc";
/** Defines values for ArtifactManifestOrderBy. */
export type ArtifactManifestOrderBy = "none" | "timedesc" | "timeasc";

/** Optional parameters. */
export interface ContainerRegistryCheckDockerV2SupportOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ContainerRegistryGetManifestOptionalParams
  extends coreClient.OperationOptions {
  /** Accept header string delimited by comma. For example, application/vnd.docker.distribution.manifest.v2+json */
  accept?: string;
}

/** Contains response data for the getManifest operation. */
export type ContainerRegistryGetManifestResponse = ContainerRegistryGetManifestHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export interface ContainerRegistryCreateManifestOptionalParams
  extends coreClient.OperationOptions {
  /** The manifest's Content-Type. */
  contentType?: string;
}

/** Contains response data for the createManifest operation. */
export type ContainerRegistryCreateManifestResponse = ContainerRegistryCreateManifestHeaders;

/** Optional parameters. */
export interface ContainerRegistryDeleteManifestOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ContainerRegistryGetRepositoriesOptionalParams
  extends coreClient.OperationOptions {
  /** Query parameter for the last item in previous query. Result set will include values lexically after last. */
  last?: string;
  /** query parameter for max number of items */
  n?: number;
}

/** Contains response data for the getRepositories operation. */
export type ContainerRegistryGetRepositoriesResponse = ContainerRegistryGetRepositoriesHeaders &
  Repositories;

/** Optional parameters. */
export interface ContainerRegistryGetPropertiesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getProperties operation. */
export type ContainerRegistryGetPropertiesResponse = ContainerRepositoryProperties;

/** Optional parameters. */
export interface ContainerRegistryDeleteRepositoryOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ContainerRegistryUpdatePropertiesOptionalParams
  extends coreClient.OperationOptions {
  /** Repository attribute value */
  value?: RepositoryWriteableProperties;
}

/** Contains response data for the updateProperties operation. */
export type ContainerRegistryUpdatePropertiesResponse = ContainerRepositoryProperties;

/** Optional parameters. */
export interface ContainerRegistryGetTagsOptionalParams
  extends coreClient.OperationOptions {
  /** Query parameter for the last item in previous query. Result set will include values lexically after last. */
  last?: string;
  /** query parameter for max number of items */
  n?: number;
  /** orderby query parameter */
  orderby?: string;
  /** filter by digest */
  digest?: string;
}

/** Contains response data for the getTags operation. */
export type ContainerRegistryGetTagsResponse = ContainerRegistryGetTagsHeaders &
  TagList;

/** Optional parameters. */
export interface ContainerRegistryGetTagPropertiesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getTagProperties operation. */
export type ContainerRegistryGetTagPropertiesResponse = ArtifactTagProperties;

/** Optional parameters. */
export interface ContainerRegistryUpdateTagAttributesOptionalParams
  extends coreClient.OperationOptions {
  /** Tag attribute value */
  value?: TagWriteableProperties;
}

/** Contains response data for the updateTagAttributes operation. */
export type ContainerRegistryUpdateTagAttributesResponse = ArtifactTagProperties;

/** Optional parameters. */
export interface ContainerRegistryDeleteTagOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ContainerRegistryGetManifestsOptionalParams
  extends coreClient.OperationOptions {
  /** Query parameter for the last item in previous query. Result set will include values lexically after last. */
  last?: string;
  /** query parameter for max number of items */
  n?: number;
  /** orderby query parameter */
  orderby?: string;
}

/** Contains response data for the getManifests operation. */
export type ContainerRegistryGetManifestsResponse = ContainerRegistryGetManifestsHeaders &
  AcrManifests;

/** Optional parameters. */
export interface ContainerRegistryGetManifestPropertiesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getManifestProperties operation. */
export type ContainerRegistryGetManifestPropertiesResponse = ArtifactManifestProperties;

/** Optional parameters. */
export interface ContainerRegistryUpdateManifestPropertiesOptionalParams
  extends coreClient.OperationOptions {
  /** Manifest attribute value */
  value?: ManifestWriteableProperties;
}

/** Contains response data for the updateManifestProperties operation. */
export type ContainerRegistryUpdateManifestPropertiesResponse = ArtifactManifestProperties;

/** Optional parameters. */
export interface ContainerRegistryGetRepositoriesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getRepositoriesNext operation. */
export type ContainerRegistryGetRepositoriesNextResponse = ContainerRegistryGetRepositoriesNextHeaders &
  Repositories;

/** Optional parameters. */
export interface ContainerRegistryGetTagsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getTagsNext operation. */
export type ContainerRegistryGetTagsNextResponse = ContainerRegistryGetTagsNextHeaders &
  TagList;

/** Optional parameters. */
export interface ContainerRegistryGetManifestsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getManifestsNext operation. */
export type ContainerRegistryGetManifestsNextResponse = ContainerRegistryGetManifestsNextHeaders &
  AcrManifests;

/** Optional parameters. */
export interface ContainerRegistryBlobGetBlobOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getBlob operation. */
export type ContainerRegistryBlobGetBlobResponse = ContainerRegistryBlobGetBlobHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export interface ContainerRegistryBlobCheckBlobExistsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkBlobExists operation. */
export type ContainerRegistryBlobCheckBlobExistsResponse = ContainerRegistryBlobCheckBlobExistsHeaders;

/** Optional parameters. */
export interface ContainerRegistryBlobDeleteBlobOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteBlob operation. */
export type ContainerRegistryBlobDeleteBlobResponse = ContainerRegistryBlobDeleteBlobHeaders;

/** Optional parameters. */
export interface ContainerRegistryBlobMountBlobOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the mountBlob operation. */
export type ContainerRegistryBlobMountBlobResponse = ContainerRegistryBlobMountBlobHeaders;

/** Optional parameters. */
export interface ContainerRegistryBlobGetUploadStatusOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getUploadStatus operation. */
export type ContainerRegistryBlobGetUploadStatusResponse = ContainerRegistryBlobGetUploadStatusHeaders;

/** Optional parameters. */
export interface ContainerRegistryBlobUploadChunkOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the uploadChunk operation. */
export type ContainerRegistryBlobUploadChunkResponse = ContainerRegistryBlobUploadChunkHeaders;

/** Optional parameters. */
export interface ContainerRegistryBlobCompleteUploadOptionalParams
  extends coreClient.OperationOptions {
  /** Optional raw data of blob */
  value?: coreRestPipeline.RequestBodyType;
}

/** Contains response data for the completeUpload operation. */
export type ContainerRegistryBlobCompleteUploadResponse = ContainerRegistryBlobCompleteUploadHeaders;

/** Optional parameters. */
export interface ContainerRegistryBlobCancelUploadOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ContainerRegistryBlobStartUploadOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the startUpload operation. */
export type ContainerRegistryBlobStartUploadResponse = ContainerRegistryBlobStartUploadHeaders;

/** Optional parameters. */
export interface ContainerRegistryBlobGetChunkOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getChunk operation. */
export type ContainerRegistryBlobGetChunkResponse = ContainerRegistryBlobGetChunkHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export interface ContainerRegistryBlobCheckChunkExistsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkChunkExists operation. */
export type ContainerRegistryBlobCheckChunkExistsResponse = ContainerRegistryBlobCheckChunkExistsHeaders;

/** Optional parameters. */
export interface AuthenticationExchangeAadAccessTokenForAcrRefreshTokenOptionalParams
  extends coreClient.OperationOptions {
  /** AAD tenant associated to the AAD credentials. */
  tenant?: string;
  /** AAD refresh token, mandatory when grant_type is access_token_refresh_token or refresh_token */
  refreshToken?: string;
  /** AAD access token, mandatory when grant_type is access_token_refresh_token or access_token. */
  accessToken?: string;
}

/** Contains response data for the exchangeAadAccessTokenForAcrRefreshToken operation. */
export type AuthenticationExchangeAadAccessTokenForAcrRefreshTokenResponse = AcrRefreshToken;

/** Optional parameters. */
export interface AuthenticationExchangeAcrRefreshTokenForAcrAccessTokenOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the exchangeAcrRefreshTokenForAcrAccessToken operation. */
export type AuthenticationExchangeAcrRefreshTokenForAcrAccessTokenResponse = AcrAccessToken;

/** Optional parameters. */
export interface GeneratedClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
