import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddUserSettingPathParams extends SpeakeasyBase {
    settingType: string;
    userId: string;
}
/**
 * Update the voicemail setting.
**/
export declare class AddUserSettingApplicationJsonVoiceMail extends SpeakeasyBase {
    accessUserId?: string;
    delete?: boolean;
    download?: boolean;
}
export declare class AddUserSettingApplicationJson extends SpeakeasyBase {
    voiceMail?: AddUserSettingApplicationJsonVoiceMail;
}
/**
 * Update the voicemail setting.
**/
export declare class AddUserSettingMultipartFormDataVoiceMail extends SpeakeasyBase {
    accessUserId?: string;
    delete?: boolean;
    download?: boolean;
}
export declare class AddUserSettingMultipartFormData extends SpeakeasyBase {
    voiceMail?: AddUserSettingMultipartFormDataVoiceMail;
}
export declare class AddUserSettingRequests extends SpeakeasyBase {
    object?: AddUserSettingApplicationJson;
    object1?: AddUserSettingMultipartFormData;
}
export declare class AddUserSettingSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class AddUserSetting201ApplicationJsonVoiceMail extends SpeakeasyBase {
    accessUserId?: string;
    delete?: boolean;
    download?: boolean;
    sharedId?: string;
}
export declare class AddUserSetting201ApplicationJson extends SpeakeasyBase {
    voiceMail?: AddUserSetting201ApplicationJsonVoiceMail;
}
export declare class AddUserSettingRequest extends SpeakeasyBase {
    pathParams: AddUserSettingPathParams;
    request?: AddUserSettingRequests;
    security: AddUserSettingSecurity;
}
export declare class AddUserSettingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    addUserSetting201ApplicationJSONObject?: AddUserSetting201ApplicationJson;
    addUserSetting400ApplicationJSONAny?: any;
}
