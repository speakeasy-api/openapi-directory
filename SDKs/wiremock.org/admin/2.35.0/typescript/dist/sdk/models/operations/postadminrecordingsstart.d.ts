import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAdminRecordingsStartRequestBodyCaptureHeaders extends SpeakeasyBase {
    caseInsensitive?: boolean;
}
/**
 * Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
 */
export declare class PostAdminRecordingsStartRequestBodyExtractBodyCriteria extends SpeakeasyBase {
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
export declare class PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminRecordingsStartRequestBodyFilters extends SpeakeasyBase {
    /**
     * Pre-emptive basic auth credentials to match against
     */
    basicAuthCredentials?: PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials;
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
export declare enum PostAdminRecordingsStartRequestBodyRequestBodyPattern4MatcherEnum {
    EqualToXml = "equalToXml"
}
/**
 * Always match request bodies using equalToXml
 */
export declare class PostAdminRecordingsStartRequestBodyRequestBodyPattern4 extends SpeakeasyBase {
    matcher?: PostAdminRecordingsStartRequestBodyRequestBodyPattern4MatcherEnum;
}
export declare enum PostAdminRecordingsStartRequestBodyRequestBodyPattern3MatcherEnum {
    EqualToJson = "equalToJson"
}
/**
 * Always match request bodies using equalToJson
 */
export declare class PostAdminRecordingsStartRequestBodyRequestBodyPattern3 extends SpeakeasyBase {
    /**
     * Ignore order of array elements
     */
    ignoreArrayOrder?: boolean;
    /**
     * Ignore extra elements in objects
     */
    ignoreExtraElements?: boolean;
    matcher?: PostAdminRecordingsStartRequestBodyRequestBodyPattern3MatcherEnum;
}
export declare enum PostAdminRecordingsStartRequestBodyRequestBodyPattern2MatcherEnum {
    EqualTo = "equalTo"
}
/**
 * Always match request bodies using equalTo
 */
export declare class PostAdminRecordingsStartRequestBodyRequestBodyPattern2 extends SpeakeasyBase {
    /**
     * Match body using case-insensitive string comparison
     */
    caseInsensitive?: boolean;
    matcher?: PostAdminRecordingsStartRequestBodyRequestBodyPattern2MatcherEnum;
}
export declare enum PostAdminRecordingsStartRequestBodyRequestBodyPattern1MatcherEnum {
    Auto = "auto"
}
/**
 * Automatically determine matcher based on content type (the default)
 */
export declare class PostAdminRecordingsStartRequestBodyRequestBodyPattern1 extends SpeakeasyBase {
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
    matcher?: PostAdminRecordingsStartRequestBodyRequestBodyPattern1MatcherEnum;
}
export declare class PostAdminRecordingsStartRequestBody extends SpeakeasyBase {
    /**
     * Headers from the request to include in the generated stub mappings, mapped to parameter objects. The only parameter available is "caseInsensitive", which defaults to false
     */
    captureHeaders?: Record<string, PostAdminRecordingsStartRequestBodyCaptureHeaders>;
    /**
     * Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
     */
    extractBodyCriteria?: PostAdminRecordingsStartRequestBodyExtractBodyCriteria;
    filters?: PostAdminRecordingsStartRequestBodyFilters;
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
     * Target URL when using the record and playback API
     */
    targetBaseUrl?: string;
    /**
     * List of names of stub mappings transformers to apply to generated stubs
     */
    transformerParameters?: Record<string, any>;
    /**
     * Parameters to pass to stub mapping transformers
     */
    transformers?: string[];
}
export declare class PostAdminRecordingsStartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
