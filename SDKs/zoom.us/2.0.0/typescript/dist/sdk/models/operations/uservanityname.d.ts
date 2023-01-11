import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserVanityNameQueryParams extends SpeakeasyBase {
    vanityName: string;
}
export declare class UserVanityName200ApplicationJson extends SpeakeasyBase {
    existed?: boolean;
}
export declare class UserVanityNameRequest extends SpeakeasyBase {
    queryParams: UserVanityNameQueryParams;
}
export declare class UserVanityNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userVanityName200ApplicationJSONObject?: UserVanityName200ApplicationJson;
}
