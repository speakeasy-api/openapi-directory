import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Pre-emptive basic auth credentials to match against
 */
export declare class PostAdminRequestsRemoveRequestBodyBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminRequestsRemoveRequestBody extends SpeakeasyBase {
    /**
     * Pre-emptive basic auth credentials to match against
     */
    basicAuthCredentials?: PostAdminRequestsRemoveRequestBodyBasicAuthCredentials;
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
export declare class PostAdminRequestsRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
