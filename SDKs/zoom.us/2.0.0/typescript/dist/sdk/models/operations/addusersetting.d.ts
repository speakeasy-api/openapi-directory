import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddUserSettingSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Update the voicemail setting.
 */
export declare class AddUserSettingApplicationJSONVoiceMail extends SpeakeasyBase {
    /**
     * Specify the user ID of a user with whom to share voicemail access permissions.
     */
    accessUserId?: string;
    /**
     * Specifies whether the user has delete permissions. The default is **false**.
     */
    delete?: boolean;
    /**
     * Specifies whether the user has download permissions. The default is **false**.
     */
    download?: boolean;
}
export declare class AddUserSettingApplicationJSON extends SpeakeasyBase {
    /**
     * Update the voicemail setting.
     */
    voiceMail?: AddUserSettingApplicationJSONVoiceMail;
}
export declare class AddUserSettingRequest extends SpeakeasyBase {
    requestBody?: AddUserSettingApplicationJSON;
    /**
     * Corresponds to the setting item you wish to modify. Allowed values: `voice_mail`
     */
    settingType: string;
    /**
     * Unique identifier of the user.
     */
    userId: string;
}
export declare class AddUserSetting201ApplicationXMLVoiceMail extends SpeakeasyBase {
    /**
     * The user that is allowed to access voicemail messages for the extension.
     */
    accessUserId?: string;
    /**
     * Specifies whether the user has delete permissions. The default is **false**.
     */
    delete?: boolean;
    /**
     * Specifies whether the user has download permissions. The default is **false**.
     */
    download?: boolean;
    /**
     * Unique identifier of the voicemail that the user can access.
     */
    sharedId?: string;
}
/**
 * **HTTP Status Code** `201` <br>
 *
 * @remarks
 * Created Successfully.
 */
export declare class AddUserSetting201ApplicationXML extends SpeakeasyBase {
    voiceMail?: AddUserSetting201ApplicationXMLVoiceMail;
}
export declare class AddUserSetting201ApplicationJSONVoiceMail extends SpeakeasyBase {
    /**
     * The user that is allowed to access voicemail messages for the extension.
     */
    accessUserId?: string;
    /**
     * Specifies whether the user has delete permissions. The default is **false**.
     */
    delete?: boolean;
    /**
     * Specifies whether the user has download permissions. The default is **false**.
     */
    download?: boolean;
    /**
     * Unique identifier of the voicemail that the user can access.
     */
    sharedId?: string;
}
/**
 * **HTTP Status Code** `201` <br>
 *
 * @remarks
 * Created Successfully.
 */
export declare class AddUserSetting201ApplicationJSON extends SpeakeasyBase {
    voiceMail?: AddUserSetting201ApplicationJSONVoiceMail;
}
export declare class AddUserSettingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code** `201` <br>
     *
     * @remarks
     * Created Successfully.
     */
    addUserSetting201ApplicationJSONObject?: AddUserSetting201ApplicationJSON;
    /**
     * **HTTP Response Code:** `400`<br>
     *
     * @remarks
     * Voicemail option has been disabled.<br>
     *
     * **Error Code:** `300`<br>
     * Invalid user sub setting type.<br>
     * Voicemail has already been shared to the user.<br>
     */
    addUserSetting400ApplicationJSONAny?: any;
}
