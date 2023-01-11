import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateZoomRoomAccSettingsQueryParams extends SpeakeasyBase {
    settingType: string;
}
export declare class UpdateZoomRoomAccSettingsRequests extends SpeakeasyBase {
    object?: Record<string, any>;
    object1?: Record<string, any>;
}
export declare class UpdateZoomRoomAccSettingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateZoomRoomAccSettingsRequest extends SpeakeasyBase {
    queryParams: UpdateZoomRoomAccSettingsQueryParams;
    request?: UpdateZoomRoomAccSettingsRequests;
    security: UpdateZoomRoomAccSettingsSecurity;
}
export declare class UpdateZoomRoomAccSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateZoomRoomAccSettings204ApplicationJSONObject?: Record<string, any>;
}
