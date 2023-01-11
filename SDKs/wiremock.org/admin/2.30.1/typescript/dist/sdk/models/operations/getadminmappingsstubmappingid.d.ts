import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAdminMappingsStubMappingIdPathParams extends SpeakeasyBase {
    stubMappingId: string;
}
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetAdminMappingsStubMappingId200ApplicationJsonRequest extends SpeakeasyBase {
    basicAuthCredentials?: GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials;
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
export declare enum GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class GetAdminMappingsStubMappingId200ApplicationJsonResponse extends SpeakeasyBase {
    additionalProxyRequestHeaders?: Record<string, any>;
    base64Body?: string;
    body?: string;
    bodyFileName?: string;
    fault?: GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum;
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
export declare class GetAdminMappingsStubMappingId200ApplicationJson extends SpeakeasyBase {
    id?: string;
    metadata?: Record<string, any>;
    name?: string;
    newScenarioState?: string;
    persistent?: boolean;
    postServeActions?: Record<string, any>;
    priority?: number;
    request?: GetAdminMappingsStubMappingId200ApplicationJsonRequest;
    requiredScenarioState?: string;
    response?: GetAdminMappingsStubMappingId200ApplicationJsonResponse;
    scenarioName?: string;
    uuid?: string;
}
export declare class GetAdminMappingsStubMappingIdRequest extends SpeakeasyBase {
    pathParams: GetAdminMappingsStubMappingIdPathParams;
}
export declare class GetAdminMappingsStubMappingIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAdminMappingsStubMappingId200ApplicationJSONObject?: GetAdminMappingsStubMappingId200ApplicationJson;
}
