import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetZrLocationProfilePathParams extends SpeakeasyBase {
    locationId: string;
}
export declare class GetZrLocationProfileSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetZrLocationProfile200ApplicationJsonBasic extends SpeakeasyBase {
    address?: string;
    description?: string;
    name?: string;
    requiredCodeToExt?: boolean;
    roomPasscode?: string;
    supportEmail?: string;
    supportPhone?: string;
    timezone?: string;
}
export declare class GetZrLocationProfile200ApplicationJson extends SpeakeasyBase {
    basic?: GetZrLocationProfile200ApplicationJsonBasic;
}
export declare class GetZrLocationProfileRequest extends SpeakeasyBase {
    pathParams: GetZrLocationProfilePathParams;
    security: GetZrLocationProfileSecurity;
}
export declare class GetZrLocationProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getZRLocationProfile200ApplicationJSONObject?: GetZrLocationProfile200ApplicationJson;
}
