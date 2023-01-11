import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminNearMissesRequestPatternRequestBody extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials;
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
export declare class PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses extends SpeakeasyBase {
    absoluteUrl?: string;
    body?: string;
    cookies?: Record<string, any>;
    headers?: Record<string, any>;
    method?: string;
    url?: string;
}
export declare class PostAdminNearMissesRequestPattern200ApplicationJson extends SpeakeasyBase {
    nearMisses?: PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses[];
}
export declare class PostAdminNearMissesRequestPatternRequest extends SpeakeasyBase {
    request: PostAdminNearMissesRequestPatternRequestBody;
}
export declare class PostAdminNearMissesRequestPatternResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postAdminNearMissesRequestPattern200ApplicationJSONObject?: PostAdminNearMissesRequestPattern200ApplicationJson;
}
