import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetZrAccountSettingsSettingTypeEnum {
    Meeting = "meeting",
    Alert = "alert"
}
export declare class GetZrAccountSettingsQueryParams extends SpeakeasyBase {
    settingType: GetZrAccountSettingsSettingTypeEnum;
}
export declare class GetZrAccountSettingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetZrAccountSettingsRequest extends SpeakeasyBase {
    queryParams: GetZrAccountSettingsQueryParams;
    security: GetZrAccountSettingsSecurity;
}
export declare class GetZrAccountSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getZRAccountSettings200ApplicationJSONObject?: Record<string, any>;
}
