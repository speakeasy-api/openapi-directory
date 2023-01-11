import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAdminMappingsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetAdminMappings200ApplicationJsonMappingsRequest extends SpeakeasyBase {
    basicAuthCredentials?: GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials;
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
export declare enum GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class GetAdminMappings200ApplicationJsonMappingsResponse extends SpeakeasyBase {
    additionalProxyRequestHeaders?: Record<string, any>;
    base64Body?: string;
    body?: string;
    bodyFileName?: string;
    fault?: GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum;
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
export declare class GetAdminMappings200ApplicationJsonMappings extends SpeakeasyBase {
    id?: string;
    metadata?: Record<string, any>;
    name?: string;
    newScenarioState?: string;
    persistent?: boolean;
    postServeActions?: Record<string, any>;
    priority?: number;
    request?: GetAdminMappings200ApplicationJsonMappingsRequest;
    requiredScenarioState?: string;
    response?: GetAdminMappings200ApplicationJsonMappingsResponse;
    scenarioName?: string;
    uuid?: string;
}
export declare class GetAdminMappings200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class GetAdminMappings200ApplicationJson extends SpeakeasyBase {
    mappings?: GetAdminMappings200ApplicationJsonMappings[];
    meta?: GetAdminMappings200ApplicationJsonMeta;
}
export declare class GetAdminMappingsRequest extends SpeakeasyBase {
    queryParams: GetAdminMappingsQueryParams;
}
export declare class GetAdminMappingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAdminMappings200ApplicationJSONObject?: GetAdminMappings200ApplicationJson;
}
