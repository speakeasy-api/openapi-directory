import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetZrLocationSettingsPathParams extends SpeakeasyBase {
    locationId: string;
}
export declare class GetZrLocationSettingsQueryParams extends SpeakeasyBase {
    settingType: string;
}
export declare class GetZrLocationSettingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetZrLocationSettingsRequest extends SpeakeasyBase {
    pathParams: GetZrLocationSettingsPathParams;
    queryParams: GetZrLocationSettingsQueryParams;
    security: GetZrLocationSettingsSecurity;
}
export declare class GetZrLocationSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getZRLocationSettings200ApplicationJSONObject?: Record<string, any>;
}
