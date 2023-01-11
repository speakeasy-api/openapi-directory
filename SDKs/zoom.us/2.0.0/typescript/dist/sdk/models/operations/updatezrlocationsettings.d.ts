import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateZrLocationSettingsPathParams extends SpeakeasyBase {
    locationId: string;
}
export declare class UpdateZrLocationSettingsQueryParams extends SpeakeasyBase {
    settingType: string;
}
export declare class UpdateZrLocationSettingsRequests extends SpeakeasyBase {
    object?: Record<string, any>;
    object1?: Record<string, any>;
}
export declare class UpdateZrLocationSettingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateZrLocationSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateZrLocationSettingsPathParams;
    queryParams: UpdateZrLocationSettingsQueryParams;
    request?: UpdateZrLocationSettingsRequests;
    security: UpdateZrLocationSettingsSecurity;
}
export declare class UpdateZrLocationSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateZRLocationSettings204ApplicationJSONAny?: any;
}
