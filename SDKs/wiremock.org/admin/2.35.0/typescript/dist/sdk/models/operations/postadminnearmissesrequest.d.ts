import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAdminNearMissesRequestRequestBody extends SpeakeasyBase {
    /**
     * The full URL to match against
     */
    absoluteUrl?: string;
    /**
     * Body string to match against
     */
    body?: string;
    /**
     * Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form
     */
    cookies?: Record<string, any>;
    /**
     * Header patterns to match against in the <key>: { "<predicate>": "<value>" } form
     */
    headers?: Record<string, any>;
    /**
     * The HTTP request method
     */
    method?: string;
    /**
     * The path and query to match exactly against
     */
    url?: string;
}
export declare class PostAdminNearMissesRequest200ApplicationJSONNearMisses extends SpeakeasyBase {
    /**
     * The full URL to match against
     */
    absoluteUrl?: string;
    /**
     * Body string to match against
     */
    body?: string;
    /**
     * Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form
     */
    cookies?: Record<string, any>;
    /**
     * Header patterns to match against in the <key>: { "<predicate>": "<value>" } form
     */
    headers?: Record<string, any>;
    /**
     * The HTTP request method
     */
    method?: string;
    /**
     * The path and query to match exactly against
     */
    url?: string;
}
/**
 * Near misses matching criteria
 */
export declare class PostAdminNearMissesRequest200ApplicationJSON extends SpeakeasyBase {
    nearMisses?: PostAdminNearMissesRequest200ApplicationJSONNearMisses[];
}
export declare class PostAdminNearMissesRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Near misses matching criteria
     */
    postAdminNearMissesRequest200ApplicationJSONObject?: PostAdminNearMissesRequest200ApplicationJSON;
}
