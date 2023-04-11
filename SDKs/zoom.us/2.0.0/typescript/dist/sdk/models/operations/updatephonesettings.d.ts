import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdatePhoneSettingsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdatePhoneSettingsApplicationJSONByoc extends SpeakeasyBase {
    /**
     * Set the value of this field to `true` to allow a sub account to add BYOC numbers from the Zoom web admin portal.
     */
    enable?: boolean;
}
export declare class UpdatePhoneSettingsApplicationJSON extends SpeakeasyBase {
    byoc?: UpdatePhoneSettingsApplicationJSONByoc;
}
export declare class UpdatePhoneSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdatePhoneSettingsApplicationJSON;
    /**
     * Unique identifier of the sub account.
     */
    accountId: string;
}
export declare class UpdatePhoneSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **Response HTTP code**: `204` **No Content.**<br>
     *
     * @remarks
     * Updated successfully.
     *
     *
     */
    updatePhoneSettings204ApplicationJSONAny?: any;
}
