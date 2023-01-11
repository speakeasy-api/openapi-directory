import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetZrSettingsPathParams extends SpeakeasyBase {
    roomId: string;
}
export declare class GetZrSettingsQueryParams extends SpeakeasyBase {
    settingType: string;
}
export declare class GetZrSettingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetZrSettingsRequest extends SpeakeasyBase {
    pathParams: GetZrSettingsPathParams;
    queryParams: GetZrSettingsQueryParams;
    security: GetZrSettingsSecurity;
}
export declare class GetZrSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getZRSettings200ApplicationJSONObject?: Record<string, any>;
}
