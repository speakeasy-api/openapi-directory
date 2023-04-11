import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Specify the language in which this phone number should be displayed. Currently, the only supported languages are `en-GB`, `en-US`, `de-DE`.
 */
export declare enum AddInternalNumbersApplicationJSONInternalNumbersLanguagesEnum {
    EnGB = "en-GB",
    EnUS = "en-US",
    DEDE = "de-DE"
}
/**
 * Type of phone number. <br>
 *
 * @remarks
 * The value can be one of the following:<br>
 * * `0` : toll <br>
 * * `1` : tollfree
 */
export declare enum AddInternalNumbersApplicationJSONInternalNumbersTypeEnum {
    Zero = "0",
    One = "1"
}
export declare class AddInternalNumbersApplicationJSONInternalNumbers extends SpeakeasyBase {
    /**
     * Control whether the number can be used to attend 3rd party meetings.
     */
    allowForExternalMeetings?: boolean;
    /**
     * Specify whether this number can be used by users to join a meeting or not. <br>
     *
     * @remarks
     * * `true` : This number can be used to join a meeting. <br>
     * *  `false`: This number can not be used to join a meeting.
     *
     * Note that if the value of `visible` field is set to `true`, the value of this field will always be `true`.
     */
    allowJoin?: boolean;
    /**
     * Two letter country code of the country.
     */
    country: string;
    /**
     * Phone number with display format. For instance, if the value in the number field is `+1888888000`, the value of this field could be `+1 888 888 000`.
     */
    displayNumber: string;
    /**
     * A short description for the phone number.
     */
    labels: string;
    /**
     * Specify the language in which this phone number should be displayed. Currently, the only supported languages are `en-GB`, `en-US`, `de-DE`.
     */
    languages: AddInternalNumbersApplicationJSONInternalNumbersLanguagesEnum;
    /**
     * Phone number in E164 format.
     */
    number: string;
    /**
     * Type of phone number. <br>
     *
     * @remarks
     * The value can be one of the following:<br>
     * * `0` : toll <br>
     * * `1` : tollfree
     */
    type: AddInternalNumbersApplicationJSONInternalNumbersTypeEnum;
    /**
     * Specify whether you want this number to be visible (in Zoom Client and Zoom Portal) to the account users or not. The value could be one of the following:<br>
     *
     * @remarks
     * * `true`: Make the number visible. <br>
     * * `false`: Hide the number.
     */
    visible?: boolean;
}
export declare class AddInternalNumbersApplicationJSON extends SpeakeasyBase {
    internalNumbers?: AddInternalNumbersApplicationJSONInternalNumbers[];
}
export declare class AddInternalNumbersRequest extends SpeakeasyBase {
    requestBody?: AddInternalNumbersApplicationJSON;
    /**
     * Unique identifier of the account.<br>To add internal numbers to a sub account, provide the account ID of the sub account in the `accountId` path parameter. To add internal numbers to a master account, provide `me` as the value of the `accountId` path parameter.
     */
    accountId: string;
}
/**
 * Specify the language in which this phone number should be displayed. Currently, the only supported languages are `en-GB`, `en-US`, `de-DE`.
 */
export declare enum AddInternalNumbers201ApplicationXMLInternalNumbersLanguagesEnum {
    EnGB = "en-GB",
    EnUS = "en-US",
    DEDE = "de-DE"
}
/**
 * Type of phone number. <br>
 *
 * @remarks
 * The value can be one of the following:<br>
 * * `0` : toll <br>
 * * `1` : tollfree
 */
export declare enum AddInternalNumbers201ApplicationXMLInternalNumbersTypeEnum {
    Zero = "0",
    One = "1"
}
export declare class AddInternalNumbers201ApplicationXMLInternalNumbers extends SpeakeasyBase {
    /**
     * Control whether the number can be used to attend 3rd party meetings.
     */
    allowForExternalMeetings?: boolean;
    /**
     * Specify whether this number can be used by users to join a meeting or not. <br>
     *
     * @remarks
     * * `true` : This number can be used to join a meeting. <br>
     * *  `false`: This number can not be used to join a meeting.
     *
     * Note that if the value of `visible` field is set to `true`, the value of this field will always be `true`.
     */
    allowJoin?: boolean;
    /**
     * Two letter country code of the country.
     */
    country: string;
    /**
     * Phone number with display format. For instance, if the value in the number field is `+1888888000`, the value of this field could be `+1 888 888 000`.
     */
    displayNumber: string;
    /**
     * Unique identifier of the internal number.
     */
    id?: string;
    /**
     * A short description for the phone number.
     */
    labels: string;
    /**
     * Specify the language in which this phone number should be displayed. Currently, the only supported languages are `en-GB`, `en-US`, `de-DE`.
     */
    languages: AddInternalNumbers201ApplicationXMLInternalNumbersLanguagesEnum;
    /**
     * Phone number in E164 format.
     */
    number: string;
    /**
     * Type of phone number. <br>
     *
     * @remarks
     * The value can be one of the following:<br>
     * * `0` : toll <br>
     * * `1` : tollfree
     */
    type: AddInternalNumbers201ApplicationXMLInternalNumbersTypeEnum;
    /**
     * Specify whether you want this number to be visible (in Zoom Client and Zoom Portal) to the account users or not. The value could be one of the following:<br>
     *
     * @remarks
     * * `true`: Make the number visible. <br>
     * * `false`: Hide the number.
     */
    visible?: boolean;
}
/**
 * **HTTP Status Code:** `201` **Created** <br>
 *
 * @remarks
 * Internal numbers added successfully.
 *
 */
export declare class AddInternalNumbers201ApplicationXML extends SpeakeasyBase {
    internalNumbers?: AddInternalNumbers201ApplicationXMLInternalNumbers[];
}
/**
 * Specify the language in which this phone number should be displayed. Currently, the only supported languages are `en-GB`, `en-US`, `de-DE`.
 */
export declare enum AddInternalNumbers201ApplicationJSONInternalNumbersLanguagesEnum {
    EnGB = "en-GB",
    EnUS = "en-US",
    DEDE = "de-DE"
}
/**
 * Type of phone number. <br>
 *
 * @remarks
 * The value can be one of the following:<br>
 * * `0` : toll <br>
 * * `1` : tollfree
 */
export declare enum AddInternalNumbers201ApplicationJSONInternalNumbersTypeEnum {
    Zero = "0",
    One = "1"
}
export declare class AddInternalNumbers201ApplicationJSONInternalNumbers extends SpeakeasyBase {
    /**
     * Control whether the number can be used to attend 3rd party meetings.
     */
    allowForExternalMeetings?: boolean;
    /**
     * Specify whether this number can be used by users to join a meeting or not. <br>
     *
     * @remarks
     * * `true` : This number can be used to join a meeting. <br>
     * *  `false`: This number can not be used to join a meeting.
     *
     * Note that if the value of `visible` field is set to `true`, the value of this field will always be `true`.
     */
    allowJoin?: boolean;
    /**
     * Two letter country code of the country.
     */
    country: string;
    /**
     * Phone number with display format. For instance, if the value in the number field is `+1888888000`, the value of this field could be `+1 888 888 000`.
     */
    displayNumber: string;
    /**
     * Unique identifier of the internal number.
     */
    id?: string;
    /**
     * A short description for the phone number.
     */
    labels: string;
    /**
     * Specify the language in which this phone number should be displayed. Currently, the only supported languages are `en-GB`, `en-US`, `de-DE`.
     */
    languages: AddInternalNumbers201ApplicationJSONInternalNumbersLanguagesEnum;
    /**
     * Phone number in E164 format.
     */
    number: string;
    /**
     * Type of phone number. <br>
     *
     * @remarks
     * The value can be one of the following:<br>
     * * `0` : toll <br>
     * * `1` : tollfree
     */
    type: AddInternalNumbers201ApplicationJSONInternalNumbersTypeEnum;
    /**
     * Specify whether you want this number to be visible (in Zoom Client and Zoom Portal) to the account users or not. The value could be one of the following:<br>
     *
     * @remarks
     * * `true`: Make the number visible. <br>
     * * `false`: Hide the number.
     */
    visible?: boolean;
}
/**
 * **HTTP Status Code:** `201` **Created** <br>
 *
 * @remarks
 * Internal numbers added successfully.
 *
 */
export declare class AddInternalNumbers201ApplicationJSON extends SpeakeasyBase {
    internalNumbers?: AddInternalNumbers201ApplicationJSONInternalNumbers[];
}
export declare class AddInternalNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201` **Created** <br>
     *
     * @remarks
     * Internal numbers added successfully.
     *
     */
    addInternalNumbers201ApplicationJSONObject?: AddInternalNumbers201ApplicationJSON;
}
