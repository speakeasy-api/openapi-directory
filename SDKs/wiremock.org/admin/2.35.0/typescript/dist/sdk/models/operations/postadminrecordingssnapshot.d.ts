import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAdminRecordingsSnapshotRequestBodyCaptureHeaders extends SpeakeasyBase {
    caseInsensitive?: boolean;
}
/**
 * Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
 */
export declare class PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria extends SpeakeasyBase {
    /**
     * Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes.
     */
    binarySizeThreshold?: string;
    /**
     * Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes.
     */
    textSizeThreshold?: string;
}
/**
 * Pre-emptive basic auth credentials to match against
 */
export declare class PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * Filter requests for which to create stub mapping
 */
export declare class PostAdminRecordingsSnapshotRequestBodyFilters extends SpeakeasyBase {
    /**
     * Pre-emptive basic auth credentials to match against
     */
    basicAuthCredentials?: PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials;
    /**
     * Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form
     */
    bodyPatterns?: Record<string, any>[];
    /**
     * Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form
     */
    cookies?: Record<string, any>;
    /**
     * Header patterns to match against in the <key>: { "<predicate>": "<value>" } form
     */
    headers?: Record<string, any>;
    ids?: string[];
    /**
     * The HTTP request method e.g. GET
     */
    method?: string;
    /**
     * Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form
     */
    queryParameters?: Record<string, any>;
    /**
     * The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.
     */
    url?: string;
    /**
     * The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.
     */
    urlPath?: string;
    /**
     * The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.
     */
    urlPathPattern?: string;
    /**
     * The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.
     */
    urlPattern?: string;
}
export declare enum PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern4MatcherEnum {
    EqualToXml = "equalToXml"
}
/**
 * Always match request bodies using equalToXml
 */
export declare class PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern4 extends SpeakeasyBase {
    matcher?: PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern4MatcherEnum;
}
export declare enum PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern3MatcherEnum {
    EqualToJson = "equalToJson"
}
/**
 * Always match request bodies using equalToJson
 */
export declare class PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern3 extends SpeakeasyBase {
    /**
     * Ignore order of array elements
     */
    ignoreArrayOrder?: boolean;
    /**
     * Ignore extra elements in objects
     */
    ignoreExtraElements?: boolean;
    matcher?: PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern3MatcherEnum;
}
export declare enum PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern2MatcherEnum {
    EqualTo = "equalTo"
}
/**
 * Always match request bodies using equalTo
 */
export declare class PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern2 extends SpeakeasyBase {
    /**
     * Match body using case-insensitive string comparison
     */
    caseInsensitive?: boolean;
    matcher?: PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern2MatcherEnum;
}
export declare enum PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern1MatcherEnum {
    Auto = "auto"
}
/**
 * Automatically determine matcher based on content type (the default)
 */
export declare class PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern1 extends SpeakeasyBase {
    /**
     * If equalTo is used, match body use case-insensitive string comparison
     */
    caseInsensitive?: boolean;
    /**
     * If equalToJson is used, ignore order of array elements
     */
    ignoreArrayOrder?: boolean;
    /**
     * If equalToJson is used, matcher ignores extra elements in objects
     */
    ignoreExtraElements?: boolean;
    matcher?: PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern1MatcherEnum;
}
export declare class PostAdminRecordingsSnapshotRequestBody extends SpeakeasyBase {
    /**
     * Headers from the request to include in the generated stub mappings, mapped to parameter objects. The only parameter available is "caseInsensitive", which defaults to false
     */
    captureHeaders?: Record<string, PostAdminRecordingsSnapshotRequestBodyCaptureHeaders>;
    /**
     * Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
     */
    extractBodyCriteria?: PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria;
    filters?: PostAdminRecordingsSnapshotRequestBodyFilters;
    /**
     * Whether to save stub mappings to the file system or just return them
     */
    persist?: boolean;
    /**
     * When true, duplicate requests will be added to a Scenario. When false, duplicates are discarded
     */
    repeatsAsScenarios?: boolean;
    /**
     * Control the request body matcher used in generated stub mappings
     */
    requestBodyPattern?: any;
    /**
     * List of names of stub mappings transformers to apply to generated stubs
     */
    transformerParameters?: Record<string, any>;
    /**
     * Parameters to pass to stub mapping transformers
     */
    transformers?: string[];
}
/**
 * Pre-emptive basic auth credentials to match against
 */
export declare class PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequest extends SpeakeasyBase {
    /**
     * Pre-emptive basic auth credentials to match against
     */
    basicAuthCredentials?: PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequestBasicAuthCredentials;
    /**
     * Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form
     */
    bodyPatterns?: Record<string, any>[];
    /**
     * Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form
     */
    cookies?: Record<string, any>;
    /**
     * Header patterns to match against in the <key>: { "<predicate>": "<value>" } form
     */
    headers?: Record<string, any>;
    /**
     * The HTTP request method e.g. GET
     */
    method?: string;
    /**
     * Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form
     */
    queryParameters?: Record<string, any>;
    /**
     * The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.
     */
    url?: string;
    /**
     * The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.
     */
    urlPath?: string;
    /**
     * The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.
     */
    urlPathPattern?: string;
    /**
     * The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified.
     */
    urlPattern?: string;
}
export declare enum PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseDelayDistributionUniformTypeEnum {
    Uniform = "uniform"
}
/**
 * Uniformly distributed random response delay.
 */
export declare class PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseDelayDistributionUniform extends SpeakeasyBase {
    lower?: number;
    type?: PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseDelayDistributionUniformTypeEnum;
    upper?: number;
}
export declare enum PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseDelayDistributionLogNormalTypeEnum {
    Lognormal = "lognormal"
}
/**
 * Log normal randomly distributed response delay.
 */
export declare class PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseDelayDistributionLogNormal extends SpeakeasyBase {
    median?: number;
    sigma?: number;
    type?: PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseDelayDistributionLogNormalTypeEnum;
}
/**
 * The fault to apply (instead of a full, valid response).
 */
export declare enum PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponse extends SpeakeasyBase {
    /**
     * Extra request headers to send when proxying to another host.
     */
    additionalProxyRequestHeaders?: Record<string, any>;
    /**
     * The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified.
     */
    base64Body?: string;
    /**
     * The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified.
     */
    body?: string;
    /**
     * The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified.
     */
    bodyFileName?: string;
    /**
     * The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.
     */
    delayDistribution?: any;
    /**
     * The fault to apply (instead of a full, valid response).
     */
    fault?: PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum;
    /**
     * Number of milliseconds to delay be before sending the response.
     */
    fixedDelayMilliseconds?: number;
    /**
     * Read-only flag indicating false if this was the default, unmatched response. Not present otherwise.
     */
    fromConfiguredStub?: boolean;
    /**
     * Map of response headers to send
     */
    headers?: Record<string, any>;
    /**
     * The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified.
     */
    jsonBody?: Record<string, any>;
    /**
     * The base URL of the target to proxy matching requests to.
     */
    proxyBaseUrl?: string;
    /**
     * The HTTP status code to be returned
     */
    status?: number;
    /**
     * The HTTP status message to be returned
     */
    statusMessage?: string;
    /**
     * Parameters to apply to response transformers.
     */
    transformerParameters?: Record<string, any>;
    /**
     * List of names of transformers to apply to this response.
     */
    transformers?: string[];
}
export declare class PostAdminRecordingsSnapshot200ApplicationJSONMappings extends SpeakeasyBase {
    /**
     * This stub mapping's unique identifier
     */
    id?: string;
    /**
     * Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.
     */
    metadata?: Record<string, any>;
    /**
     * The stub mapping's name
     */
    name?: string;
    /**
     * The new state for the scenario to be updated to after this stub is served.
     */
    newScenarioState?: string;
    /**
     * Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.
     */
    persistent?: boolean;
    /**
     * A map of the names of post serve action extensions to trigger and their parameters.
     */
    postServeActions?: Record<string, any>;
    /**
     * This stub mapping's priority relative to others. 1 is highest.
     */
    priority?: number;
    request?: PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequest;
    /**
     * The required state of the scenario in order for this stub to be matched.
     */
    requiredScenarioState?: string;
    response?: PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponse;
    /**
     * The name of the scenario that this stub mapping is part of
     */
    scenarioName?: string;
    /**
     * Alias for the id
     */
    uuid?: string;
}
export declare class PostAdminRecordingsSnapshot200ApplicationJSONMeta extends SpeakeasyBase {
    total: number;
}
/**
 * Successfully took a snapshot recording
 */
export declare class PostAdminRecordingsSnapshot200ApplicationJSON extends SpeakeasyBase {
    mappings?: PostAdminRecordingsSnapshot200ApplicationJSONMappings[];
    meta?: PostAdminRecordingsSnapshot200ApplicationJSONMeta;
}
export declare class PostAdminRecordingsSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully took a snapshot recording
     */
    postAdminRecordingsSnapshot200ApplicationJSONObject?: PostAdminRecordingsSnapshot200ApplicationJSON;
}
