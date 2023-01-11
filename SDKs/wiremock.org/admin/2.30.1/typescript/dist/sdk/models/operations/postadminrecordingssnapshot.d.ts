import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAdminRecordingsSnapshotRequestBodyCaptureHeaders extends SpeakeasyBase {
    caseInsensitive?: boolean;
}
/**
 * Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
**/
export declare class PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria extends SpeakeasyBase {
    binarySizeThreshold?: string;
    textSizeThreshold?: string;
}
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * Filter requests for which to create stub mapping
**/
export declare class PostAdminRecordingsSnapshotRequestBodyFilters extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials;
    bodyPatterns?: Record<string, any>[];
    cookies?: Record<string, any>;
    headers?: Record<string, any>;
    ids?: string[];
    method?: string;
    queryParameters?: Record<string, any>;
    url?: string;
    urlPath?: string;
    urlPathPattern?: string;
    urlPattern?: string;
}
export declare class PostAdminRecordingsSnapshotRequestBody extends SpeakeasyBase {
    captureHeaders?: Record<string, PostAdminRecordingsSnapshotRequestBodyCaptureHeaders>;
    extractBodyCriteria?: PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria;
    filters?: PostAdminRecordingsSnapshotRequestBodyFilters;
    persist?: boolean;
    repeatsAsScenarios?: boolean;
    requestBodyPattern?: Record<string, any>;
    transformerParameters?: Record<string, any>;
    transformers?: string[];
}
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials;
    bodyPatterns?: Record<string, any>[];
    cookies?: Record<string, any>;
    headers?: Record<string, any>;
    method?: string;
    queryParameters?: Record<string, any>;
    url?: string;
    urlPath?: string;
    urlPathPattern?: string;
    urlPattern?: string;
}
export declare enum PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse extends SpeakeasyBase {
    additionalProxyRequestHeaders?: Record<string, any>;
    base64Body?: string;
    body?: string;
    bodyFileName?: string;
    fault?: PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponseFaultEnum;
    fixedDelayMilliseconds?: number;
    fromConfiguredStub?: boolean;
    headers?: Record<string, any>;
    jsonBody?: Record<string, any>;
    proxyBaseUrl?: string;
    status?: number;
    statusMessage?: string;
    transformerParameters?: Record<string, any>;
    transformers?: string[];
}
export declare class PostAdminRecordingsSnapshot200ApplicationJsonMappings extends SpeakeasyBase {
    id?: string;
    metadata?: Record<string, any>;
    name?: string;
    newScenarioState?: string;
    persistent?: boolean;
    postServeActions?: Record<string, any>;
    priority?: number;
    request?: PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest;
    requiredScenarioState?: string;
    response?: PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse;
    scenarioName?: string;
    uuid?: string;
}
export declare class PostAdminRecordingsSnapshot200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class PostAdminRecordingsSnapshot200ApplicationJson extends SpeakeasyBase {
    mappings?: PostAdminRecordingsSnapshot200ApplicationJsonMappings[];
    meta?: PostAdminRecordingsSnapshot200ApplicationJsonMeta;
}
export declare class PostAdminRecordingsSnapshotRequest extends SpeakeasyBase {
    request: PostAdminRecordingsSnapshotRequestBody;
}
export declare class PostAdminRecordingsSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postAdminRecordingsSnapshot200ApplicationJSONObject?: PostAdminRecordingsSnapshot200ApplicationJson;
}
