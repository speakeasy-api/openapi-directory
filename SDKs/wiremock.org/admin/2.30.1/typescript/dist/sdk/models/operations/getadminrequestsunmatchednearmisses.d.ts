import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses extends SpeakeasyBase {
    absoluteUrl?: string;
    body?: string;
    cookies?: Record<string, any>;
    headers?: Record<string, any>;
    method?: string;
    url?: string;
}
export declare class GetAdminRequestsUnmatchedNearMisses200ApplicationJson extends SpeakeasyBase {
    nearMisses?: GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses[];
}
export declare class GetAdminRequestsUnmatchedNearMissesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAdminRequestsUnmatchedNearMisses200ApplicationJSONObject?: GetAdminRequestsUnmatchedNearMisses200ApplicationJson;
}
