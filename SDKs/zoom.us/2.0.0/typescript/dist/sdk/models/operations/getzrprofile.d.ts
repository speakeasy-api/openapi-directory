import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetZrProfilePathParams extends SpeakeasyBase {
    roomId: string;
}
export declare class GetZrProfileSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetZrProfile200ApplicationJsonBasic extends SpeakeasyBase {
    activationCode?: string;
    hideRoomInContacts?: boolean;
    name?: string;
    requiredCodeToExt?: boolean;
    roomPasscode?: string;
    supportEmail?: string;
    supportPhone?: string;
}
export declare class GetZrProfile200ApplicationJson extends SpeakeasyBase {
    basic?: GetZrProfile200ApplicationJsonBasic;
}
export declare class GetZrProfileRequest extends SpeakeasyBase {
    pathParams: GetZrProfilePathParams;
    security: GetZrProfileSecurity;
}
export declare class GetZrProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getZRProfile200ApplicationJSONObject?: GetZrProfile200ApplicationJson;
}
