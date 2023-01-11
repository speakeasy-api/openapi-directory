import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAdminNearMissesRequestRequestBody extends SpeakeasyBase {
    absoluteUrl?: string;
    body?: string;
    cookies?: Record<string, any>;
    headers?: Record<string, any>;
    method?: string;
    url?: string;
}
export declare class PostAdminNearMissesRequest200ApplicationJsonNearMisses extends SpeakeasyBase {
    absoluteUrl?: string;
    body?: string;
    cookies?: Record<string, any>;
    headers?: Record<string, any>;
    method?: string;
    url?: string;
}
export declare class PostAdminNearMissesRequest200ApplicationJson extends SpeakeasyBase {
    nearMisses?: PostAdminNearMissesRequest200ApplicationJsonNearMisses[];
}
export declare class PostAdminNearMissesRequestRequest extends SpeakeasyBase {
    request: PostAdminNearMissesRequestRequestBody;
}
export declare class PostAdminNearMissesRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postAdminNearMissesRequest200ApplicationJSONObject?: PostAdminNearMissesRequest200ApplicationJson;
}
