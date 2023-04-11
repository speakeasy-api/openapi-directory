import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetZRLocationProfileSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetZRLocationProfileRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the location type. This can be retrieved using the [List Zoom Room Location API](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms-location/listzrlocations) (Id property in the response).
     */
    locationId: string;
}
export declare class GetZRLocationProfile200ApplicationXMLBasic extends SpeakeasyBase {
    /**
     * Address
     */
    address?: string;
    /**
     * Description about the location.
     */
    description?: string;
    /**
     * Name of the location type.
     */
    name?: string;
    /**
     * Require code to exit out of your Zoom Rooms application to switch between other apps.
     *
     * @remarks
     *
     */
    requiredCodeToExt?: boolean;
    /**
     * 1-16 digit number or characters that is used to secure your Zoom Rooms application.
     */
    roomPasscode?: string;
    /**
     * The email address to be used for reporting Zoom Room issues.
     *
     * @remarks
     *
     */
    supportEmail?: string;
    /**
     * The phone number to be used for reporting Zoom Room issues.
     *
     * @remarks
     *
     */
    supportPhone?: string;
    /**
     * Timezone (only returned for location type - city).
     */
    timezone?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Zoom Rooms Location Profile returned successfully.
 */
export declare class GetZRLocationProfile200ApplicationXML extends SpeakeasyBase {
    basic?: GetZRLocationProfile200ApplicationXMLBasic;
}
export declare class GetZRLocationProfile200ApplicationJSONBasic extends SpeakeasyBase {
    /**
     * Address
     */
    address?: string;
    /**
     * Description about the location.
     */
    description?: string;
    /**
     * Name of the location type.
     */
    name?: string;
    /**
     * Require code to exit out of your Zoom Rooms application to switch between other apps.
     *
     * @remarks
     *
     */
    requiredCodeToExt?: boolean;
    /**
     * 1-16 digit number or characters that is used to secure your Zoom Rooms application.
     */
    roomPasscode?: string;
    /**
     * The email address to be used for reporting Zoom Room issues.
     *
     * @remarks
     *
     */
    supportEmail?: string;
    /**
     * The phone number to be used for reporting Zoom Room issues.
     *
     * @remarks
     *
     */
    supportPhone?: string;
    /**
     * Timezone (only returned for location type - city).
     */
    timezone?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Zoom Rooms Location Profile returned successfully.
 */
export declare class GetZRLocationProfile200ApplicationJSON extends SpeakeasyBase {
    basic?: GetZRLocationProfile200ApplicationJSONBasic;
}
export declare class GetZRLocationProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Zoom Rooms Location Profile returned successfully.
     */
    getZRLocationProfile200ApplicationJSONObject?: GetZRLocationProfile200ApplicationJSON;
}
