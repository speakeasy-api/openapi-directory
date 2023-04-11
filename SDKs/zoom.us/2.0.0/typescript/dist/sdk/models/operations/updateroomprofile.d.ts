import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateRoomProfileSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdateRoomProfileApplicationJSONBasic extends SpeakeasyBase {
    /**
     * Hide this Zoom Room from your Contact List.
     */
    hideRoomInContacts?: boolean;
    /**
     * Name of the Zoom Room.
     */
    name?: string;
    /**
     * Require code to exit out of Zoom Rooms application to switch between other apps.
     *
     * @remarks
     *
     */
    requiredCodeToExt?: boolean;
    /**
     * 1-16 digit number or characters that is used to secure your Zoom Rooms application. This code must be entered on your Zoom Room Controller to change settings or sign out.
     */
    roomPasscode?: string;
    /**
     * The email address to be used for reporting Zoom Room issues.
     */
    supportEmail?: string;
    /**
     * The phone number to be used for reporting Zoom Room issues.
     *
     * @remarks
     *
     */
    supportPhone?: string;
}
export declare class UpdateRoomProfileApplicationJSON extends SpeakeasyBase {
    basic?: UpdateRoomProfileApplicationJSONBasic;
}
export declare class UpdateRoomProfileRequest extends SpeakeasyBase {
    requestBody?: UpdateRoomProfileApplicationJSON;
    /**
     * Unique Identifier of a Zoom Room.
     */
    roomId: string;
}
export declare class UpdateRoomProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Room Profile information updated successfully.
     *
     */
    updateRoomProfile204ApplicationJSONObject?: Record<string, any>;
}
