import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminMappingsRequestBodyRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminMappingsRequestBodyRequest extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminMappingsRequestBodyRequestBasicAuthCredentials;
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
export declare enum PostAdminMappingsRequestBodyResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class PostAdminMappingsRequestBodyResponse extends SpeakeasyBase {
    additionalProxyRequestHeaders?: Record<string, any>;
    base64Body?: string;
    body?: string;
    bodyFileName?: string;
    fault?: PostAdminMappingsRequestBodyResponseFaultEnum;
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
export declare class PostAdminMappingsRequestBody extends SpeakeasyBase {
    id?: string;
    metadata?: Record<string, any>;
    name?: string;
    newScenarioState?: string;
    persistent?: boolean;
    postServeActions?: Record<string, any>;
    priority?: number;
    request?: PostAdminMappingsRequestBodyRequest;
    requiredScenarioState?: string;
    response?: PostAdminMappingsRequestBodyResponse;
    scenarioName?: string;
    uuid?: string;
}
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminMappings201ApplicationJsonRequest extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials;
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
export declare enum PostAdminMappings201ApplicationJsonResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class PostAdminMappings201ApplicationJsonResponse extends SpeakeasyBase {
    additionalProxyRequestHeaders?: Record<string, any>;
    base64Body?: string;
    body?: string;
    bodyFileName?: string;
    fault?: PostAdminMappings201ApplicationJsonResponseFaultEnum;
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
export declare class PostAdminMappings201ApplicationJson extends SpeakeasyBase {
    id?: string;
    metadata?: Record<string, any>;
    name?: string;
    newScenarioState?: string;
    persistent?: boolean;
    postServeActions?: Record<string, any>;
    priority?: number;
    request?: PostAdminMappings201ApplicationJsonRequest;
    requiredScenarioState?: string;
    response?: PostAdminMappings201ApplicationJsonResponse;
    scenarioName?: string;
    uuid?: string;
}
export declare class PostAdminMappingsRequest extends SpeakeasyBase {
    request?: PostAdminMappingsRequestBody;
}
export declare class PostAdminMappingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postAdminMappings201ApplicationJSONObject?: PostAdminMappings201ApplicationJson;
}
