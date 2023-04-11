import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetZRProfileSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetZRProfileRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the Zoom Room. This can be retrieved from the response of [List Zoom Rooms](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms/listzoomrooms) API.
     */
    roomId: string;
}
export declare class GetZRProfile200ApplicationXMLBasic extends SpeakeasyBase {
    /**
     * Activation Code is the code that is used to complete the setup of the Zoom Room.
     */
    activationCode?: string;
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
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Zoom Room profile returned successfully.
 */
export declare class GetZRProfile200ApplicationXML extends SpeakeasyBase {
    basic?: GetZRProfile200ApplicationXMLBasic;
}
export declare class GetZRProfile200ApplicationJSONBasic extends SpeakeasyBase {
    /**
     * Activation Code is the code that is used to complete the setup of the Zoom Room.
     */
    activationCode?: string;
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
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Zoom Room profile returned successfully.
 */
export declare class GetZRProfile200ApplicationJSON extends SpeakeasyBase {
    basic?: GetZRProfile200ApplicationJSONBasic;
}
export declare class GetZRProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Zoom Room profile returned successfully.
     */
    getZRProfile200ApplicationJSONObject?: GetZRProfile200ApplicationJSON;
}
