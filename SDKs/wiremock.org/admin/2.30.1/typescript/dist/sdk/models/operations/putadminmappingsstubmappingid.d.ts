import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutAdminMappingsStubMappingIdPathParams extends SpeakeasyBase {
    stubMappingId: string;
}
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PutAdminMappingsStubMappingIdRequestBodyRequest extends SpeakeasyBase {
    basicAuthCredentials?: PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials;
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
export declare enum PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class PutAdminMappingsStubMappingIdRequestBodyResponse extends SpeakeasyBase {
    additionalProxyRequestHeaders?: Record<string, any>;
    base64Body?: string;
    body?: string;
    bodyFileName?: string;
    fault?: PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum;
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
export declare class PutAdminMappingsStubMappingIdRequestBody extends SpeakeasyBase {
    id?: string;
    metadata?: Record<string, any>;
    name?: string;
    newScenarioState?: string;
    persistent?: boolean;
    postServeActions?: Record<string, any>;
    priority?: number;
    request?: PutAdminMappingsStubMappingIdRequestBodyRequest;
    requiredScenarioState?: string;
    response?: PutAdminMappingsStubMappingIdRequestBodyResponse;
    scenarioName?: string;
    uuid?: string;
}
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PutAdminMappingsStubMappingId200ApplicationJsonRequest extends SpeakeasyBase {
    basicAuthCredentials?: PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials;
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
export declare enum PutAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class PutAdminMappingsStubMappingId200ApplicationJsonResponse extends SpeakeasyBase {
    additionalProxyRequestHeaders?: Record<string, any>;
    base64Body?: string;
    body?: string;
    bodyFileName?: string;
    fault?: PutAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum;
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
export declare class PutAdminMappingsStubMappingId200ApplicationJson extends SpeakeasyBase {
    id?: string;
    metadata?: Record<string, any>;
    name?: string;
    newScenarioState?: string;
    persistent?: boolean;
    postServeActions?: Record<string, any>;
    priority?: number;
    request?: PutAdminMappingsStubMappingId200ApplicationJsonRequest;
    requiredScenarioState?: string;
    response?: PutAdminMappingsStubMappingId200ApplicationJsonResponse;
    scenarioName?: string;
    uuid?: string;
}
export declare class PutAdminMappingsStubMappingIdRequest extends SpeakeasyBase {
    pathParams: PutAdminMappingsStubMappingIdPathParams;
    request?: PutAdminMappingsStubMappingIdRequestBody;
}
export declare class PutAdminMappingsStubMappingIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    putAdminMappingsStubMappingId200ApplicationJSONObject?: PutAdminMappingsStubMappingId200ApplicationJson;
}
