import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUserSettingSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DeleteUserSettingRequest extends SpeakeasyBase {
    /**
     * Corresponds to the setting item you wish to remove. Allowed values: `voice_mail`
     */
    settingType: string;
    /**
     * Required only for voicemail setting type.
     */
    sharedId: string;
    /**
     * Unique identifier of the user.
     */
    userId: string;
}
export declare class DeleteUserSettingResponse extends SpeakeasyBase {
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
    deleteUserSetting204ApplicationJSONAny?: any;
}
