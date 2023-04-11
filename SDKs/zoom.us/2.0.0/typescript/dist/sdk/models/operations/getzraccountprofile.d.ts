import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetZRAccountProfile200ApplicationXMLBasic extends SpeakeasyBase {
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
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Zoom Room Account Profile returned successfully.
 */
export declare class GetZRAccountProfile200ApplicationXML extends SpeakeasyBase {
    basic?: GetZRAccountProfile200ApplicationXMLBasic;
}
export declare class GetZRAccountProfile200ApplicationJSONBasic extends SpeakeasyBase {
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
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Zoom Room Account Profile returned successfully.
 */
export declare class GetZRAccountProfile200ApplicationJSON extends SpeakeasyBase {
    basic?: GetZRAccountProfile200ApplicationJSONBasic;
}
export declare class GetZRAccountProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Zoom Room Account Profile returned successfully.
     */
    getZRAccountProfile200ApplicationJSONObject?: GetZRAccountProfile200ApplicationJSON;
}
