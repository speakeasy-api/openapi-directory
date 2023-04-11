import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Pre-emptive basic auth credentials to match against
 */
export declare class PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PutAdminMappingsStubMappingIdRequestBodyRequest extends SpeakeasyBase {
    /**
     * Pre-emptive basic auth credentials to match against
     */
    basicAuthCredentials?: PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials;
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
export declare enum PutAdminMappingsStubMappingIdRequestBodyResponseDelayDistributionUniformTypeEnum {
    Uniform = "uniform"
}
/**
 * Uniformly distributed random response delay.
 */
export declare class PutAdminMappingsStubMappingIdRequestBodyResponseDelayDistributionUniform extends SpeakeasyBase {
    lower?: number;
    type?: PutAdminMappingsStubMappingIdRequestBodyResponseDelayDistributionUniformTypeEnum;
    upper?: number;
}
export declare enum PutAdminMappingsStubMappingIdRequestBodyResponseDelayDistributionLogNormalTypeEnum {
    Lognormal = "lognormal"
}
/**
 * Log normal randomly distributed response delay.
 */
export declare class PutAdminMappingsStubMappingIdRequestBodyResponseDelayDistributionLogNormal extends SpeakeasyBase {
    median?: number;
    sigma?: number;
    type?: PutAdminMappingsStubMappingIdRequestBodyResponseDelayDistributionLogNormalTypeEnum;
}
/**
 * The fault to apply (instead of a full, valid response).
 */
export declare enum PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class PutAdminMappingsStubMappingIdRequestBodyResponse extends SpeakeasyBase {
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
    fault?: PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum;
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
export declare class PutAdminMappingsStubMappingIdRequestBody extends SpeakeasyBase {
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
    request?: PutAdminMappingsStubMappingIdRequestBodyRequest;
    /**
     * The required state of the scenario in order for this stub to be matched.
     */
    requiredScenarioState?: string;
    response?: PutAdminMappingsStubMappingIdRequestBodyResponse;
    /**
     * The name of the scenario that this stub mapping is part of
     */
    scenarioName?: string;
    /**
     * Alias for the id
     */
    uuid?: string;
}
export declare class PutAdminMappingsStubMappingIdRequest extends SpeakeasyBase {
    requestBody?: PutAdminMappingsStubMappingIdRequestBody;
    /**
     * The UUID of stub mapping
     */
    stubMappingId: string;
}
/**
 * Pre-emptive basic auth credentials to match against
 */
export declare class PutAdminMappingsStubMappingId200ApplicationJSONRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PutAdminMappingsStubMappingId200ApplicationJSONRequest extends SpeakeasyBase {
    /**
     * Pre-emptive basic auth credentials to match against
     */
    basicAuthCredentials?: PutAdminMappingsStubMappingId200ApplicationJSONRequestBasicAuthCredentials;
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
export declare enum PutAdminMappingsStubMappingId200ApplicationJSONResponseDelayDistributionUniformTypeEnum {
    Uniform = "uniform"
}
/**
 * Uniformly distributed random response delay.
 */
export declare class PutAdminMappingsStubMappingId200ApplicationJSONResponseDelayDistributionUniform extends SpeakeasyBase {
    lower?: number;
    type?: PutAdminMappingsStubMappingId200ApplicationJSONResponseDelayDistributionUniformTypeEnum;
    upper?: number;
}
export declare enum PutAdminMappingsStubMappingId200ApplicationJSONResponseDelayDistributionLogNormalTypeEnum {
    Lognormal = "lognormal"
}
/**
 * Log normal randomly distributed response delay.
 */
export declare class PutAdminMappingsStubMappingId200ApplicationJSONResponseDelayDistributionLogNormal extends SpeakeasyBase {
    median?: number;
    sigma?: number;
    type?: PutAdminMappingsStubMappingId200ApplicationJSONResponseDelayDistributionLogNormalTypeEnum;
}
/**
 * The fault to apply (instead of a full, valid response).
 */
export declare enum PutAdminMappingsStubMappingId200ApplicationJSONResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class PutAdminMappingsStubMappingId200ApplicationJSONResponse extends SpeakeasyBase {
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
    fault?: PutAdminMappingsStubMappingId200ApplicationJSONResponseFaultEnum;
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
/**
 * The stub mapping
 */
export declare class PutAdminMappingsStubMappingId200ApplicationJSON extends SpeakeasyBase {
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
    request?: PutAdminMappingsStubMappingId200ApplicationJSONRequest;
    /**
     * The required state of the scenario in order for this stub to be matched.
     */
    requiredScenarioState?: string;
    response?: PutAdminMappingsStubMappingId200ApplicationJSONResponse;
    /**
     * The name of the scenario that this stub mapping is part of
     */
    scenarioName?: string;
    /**
     * Alias for the id
     */
    uuid?: string;
}
export declare class PutAdminMappingsStubMappingIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The stub mapping
     */
    putAdminMappingsStubMappingId200ApplicationJSONObject?: PutAdminMappingsStubMappingId200ApplicationJSON;
}
