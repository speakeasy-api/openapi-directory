import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateZRAccProfileSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdateZRAccProfileApplicationJSONBasic extends SpeakeasyBase {
    /**
     * Require code to exit out of the Zoom Rooms application to switch between other apps.
     *
     * @remarks
     *
     */
    requiredCodeToExt?: boolean;
    /**
     * 1-16 digit number or characters used to secure your Zoom Rooms application. This code must be entered on your Zoom Room Controller to change settings or to sign out.
     */
    roomPasscode?: string;
    /**
     * The email address used for reporting Zoom Room issues.
     */
    supportEmail?: string;
    /**
     * The phone number used for reporting Zoom room issues.
     */
    supportPhone?: string;
}
export declare class UpdateZRAccProfileApplicationJSON extends SpeakeasyBase {
    basic?: UpdateZRAccProfileApplicationJSONBasic;
}
export declare class UpdateZRAccProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Profile updated successfully.
     */
    updateZRAccProfile204ApplicationJSONObject?: Record<string, any>;
}
