import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserSettingPathParams extends SpeakeasyBase {
    settingType: string;
    userId: string;
}
/**
 * Update the voicemail setting.
**/
export declare class UpdateUserSettingApplicationJsonVoiceMail extends SpeakeasyBase {
    accessUserId?: string;
    delete?: boolean;
    download?: boolean;
    sharedId?: string;
}
export declare class UpdateUserSettingApplicationJson extends SpeakeasyBase {
    voiceMail?: UpdateUserSettingApplicationJsonVoiceMail;
}
/**
 * Update the voicemail setting.
**/
export declare class UpdateUserSettingMultipartFormDataVoiceMail extends SpeakeasyBase {
    accessUserId?: string;
    delete?: boolean;
    download?: boolean;
    sharedId?: string;
}
export declare class UpdateUserSettingMultipartFormData extends SpeakeasyBase {
    voiceMail?: UpdateUserSettingMultipartFormDataVoiceMail;
}
export declare class UpdateUserSettingRequests extends SpeakeasyBase {
    object?: UpdateUserSettingApplicationJson;
    object1?: UpdateUserSettingMultipartFormData;
}
export declare class UpdateUserSettingSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateUserSettingRequest extends SpeakeasyBase {
    pathParams: UpdateUserSettingPathParams;
    request?: UpdateUserSettingRequests;
    security: UpdateUserSettingSecurity;
}
export declare class UpdateUserSettingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateUserSetting204ApplicationJSONAny?: any;
    updateUserSetting400ApplicationJSONObject?: Record<string, any>;
}
