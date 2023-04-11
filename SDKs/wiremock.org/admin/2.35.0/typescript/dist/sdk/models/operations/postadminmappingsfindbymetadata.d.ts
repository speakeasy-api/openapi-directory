import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAdminMappingsFindByMetadataRequestBodyXPathMatch extends SpeakeasyBase {
    matchesXpath: string;
    namespaces?: Record<string, any>;
    valuePattern?: Record<string, any>;
}
export declare class PostAdminMappingsFindByMetadataRequestBodyXMLEquality extends SpeakeasyBase {
    equalToXml: string;
}
export declare class PostAdminMappingsFindByMetadataRequestBodyJSONPathMatch extends SpeakeasyBase {
    ignoreArrayOrder?: boolean;
    ignoreExtraElements?: boolean;
    matchesJsonPath: string;
}
export declare class PostAdminMappingsFindByMetadataRequestBodyJSONEquals extends SpeakeasyBase {
    equalToJson: string;
}
export declare class PostAdminMappingsFindByMetadataRequestBodyNegativeRegularExpressionMatch extends SpeakeasyBase {
    doesNotMatch: string;
}
export declare class PostAdminMappingsFindByMetadataRequestBodyRegularExpressionMatch extends SpeakeasyBase {
    matches: string;
}
export declare class PostAdminMappingsFindByMetadataRequestBodyStringContains extends SpeakeasyBase {
    contains: string;
}
export declare class PostAdminMappingsFindByMetadataRequestBodyStringEquals extends SpeakeasyBase {
    caseInsensitive?: boolean;
    equalTo: boolean;
}
/**
 * Pre-emptive basic auth credentials to match against
 */
export declare class PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequest extends SpeakeasyBase {
    /**
     * Pre-emptive basic auth credentials to match against
     */
    basicAuthCredentials?: PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequestBasicAuthCredentials;
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
export declare enum PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseDelayDistributionUniformTypeEnum {
    Uniform = "uniform"
}
/**
 * Uniformly distributed random response delay.
 */
export declare class PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseDelayDistributionUniform extends SpeakeasyBase {
    lower?: number;
    type?: PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseDelayDistributionUniformTypeEnum;
    upper?: number;
}
export declare enum PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseDelayDistributionLogNormalTypeEnum {
    Lognormal = "lognormal"
}
/**
 * Log normal randomly distributed response delay.
 */
export declare class PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseDelayDistributionLogNormal extends SpeakeasyBase {
    median?: number;
    sigma?: number;
    type?: PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseDelayDistributionLogNormalTypeEnum;
}
/**
 * The fault to apply (instead of a full, valid response).
 */
export declare enum PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponse extends SpeakeasyBase {
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
    fault?: PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum;
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
export declare class PostAdminMappingsFindByMetadata200ApplicationJSONMappings extends SpeakeasyBase {
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
    request?: PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequest;
    /**
     * The required state of the scenario in order for this stub to be matched.
     */
    requiredScenarioState?: string;
    response?: PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponse;
    /**
     * The name of the scenario that this stub mapping is part of
     */
    scenarioName?: string;
    /**
     * Alias for the id
     */
    uuid?: string;
}
export declare class PostAdminMappingsFindByMetadata200ApplicationJSONMeta extends SpeakeasyBase {
    total: number;
}
/**
 * Matched stub mappings
 */
export declare class PostAdminMappingsFindByMetadata200ApplicationJSON extends SpeakeasyBase {
    mappings?: PostAdminMappingsFindByMetadata200ApplicationJSONMappings[];
    meta?: PostAdminMappingsFindByMetadata200ApplicationJSONMeta;
}
export declare class PostAdminMappingsFindByMetadataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Matched stub mappings
     */
    postAdminMappingsFindByMetadata200ApplicationJSONObject?: PostAdminMappingsFindByMetadata200ApplicationJSON;
}
