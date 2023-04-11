import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateUserSettingSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Update the voicemail setting.
 */
export declare class UpdateUserSettingApplicationJSONVoiceMail extends SpeakeasyBase {
    /**
     * Specify the user ID of the user whose voicemail permissions need to be updated.
     */
    accessUserId?: string;
    /**
     * Specify whether the user has delete permissions. The default is **false**.
     */
    delete?: boolean;
    /**
     * Specify whether the user has download permissions. The default is **false**.
     */
    download?: boolean;
    /**
     *
     * @remarks
     * Specify the ID of the voicemail.
     */
    sharedId?: string;
}
export declare class UpdateUserSettingApplicationJSON extends SpeakeasyBase {
    /**
     * Update the voicemail setting.
     */
    voiceMail?: UpdateUserSettingApplicationJSONVoiceMail;
}
export declare class UpdateUserSettingRequest extends SpeakeasyBase {
    requestBody?: UpdateUserSettingApplicationJSON;
    /**
     * Corresponds to the setting item you wish to modify. Allowed values: `voice_mail`
     */
    settingType: string;
    /**
     * Unique identifier of the user.
     */
    userId: string;
}
export declare class UpdateUserSettingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204`<br>
     *
     * @remarks
     * No Content<br>
     */
    updateUserSetting204ApplicationJSONAny?: any;
    /**
     * **HTTP Response Code:** `400`<br>
     *
     * @remarks
     * Voicemail option has been disabled.<br>
     *
     * **Error Code:** `300`<br>
     * Invalid user setting Type: {settingType}.
     */
    updateUserSetting400ApplicationJSONObject?: Record<string, any>;
}
