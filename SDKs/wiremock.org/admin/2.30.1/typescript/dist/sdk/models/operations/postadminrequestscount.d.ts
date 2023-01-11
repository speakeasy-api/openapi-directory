import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminRequestsCountRequestBodyBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminRequestsCountRequestBody extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminRequestsCountRequestBodyBasicAuthCredentials;
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
export declare class PostAdminRequestsCount200ApplicationJson extends SpeakeasyBase {
    count?: number;
}
export declare class PostAdminRequestsCountRequest extends SpeakeasyBase {
    request: PostAdminRequestsCountRequestBody;
}
export declare class PostAdminRequestsCountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postAdminRequestsCount200ApplicationJSONObject?: PostAdminRequestsCount200ApplicationJson;
}
