import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateZrSettingsPathParams extends SpeakeasyBase {
    roomId: string;
}
export declare class UpdateZrSettingsQueryParams extends SpeakeasyBase {
    settingType?: string;
}
export declare class UpdateZrSettingsRequests extends SpeakeasyBase {
    object?: Record<string, any>;
    object1?: Record<string, any>;
}
export declare class UpdateZrSettingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateZrSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateZrSettingsPathParams;
    queryParams: UpdateZrSettingsQueryParams;
    request?: UpdateZrSettingsRequests;
    security: UpdateZrSettingsSecurity;
}
export declare class UpdateZrSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateZRSettings204ApplicationJSONAny?: any;
}
