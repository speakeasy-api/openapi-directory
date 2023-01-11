import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetZrAccountProfileSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetZrAccountProfile200ApplicationJsonBasic extends SpeakeasyBase {
    requiredCodeToExt?: boolean;
    roomPasscode?: string;
    supportEmail?: string;
    supportPhone?: string;
}
export declare class GetZrAccountProfile200ApplicationJson extends SpeakeasyBase {
    basic?: GetZrAccountProfile200ApplicationJsonBasic;
}
export declare class GetZrAccountProfileRequest extends SpeakeasyBase {
    security: GetZrAccountProfileSecurity;
}
export declare class GetZrAccountProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getZRAccountProfile200ApplicationJSONObject?: GetZrAccountProfile200ApplicationJson;
}
