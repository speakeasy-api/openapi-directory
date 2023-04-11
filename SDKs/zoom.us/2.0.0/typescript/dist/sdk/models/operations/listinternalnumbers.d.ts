import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListInternalNumbersRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the account. To list internal numbers of a sub account, provide the account ID of the sub account in the `accountId` path parameter. To list internal numbers of a  master account, provide `me` as the value of the `accountId` path parameter.
     */
    accountId: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
}
/**
 * Specify the language in which this phone number should be displayed. Currently, the only supported languages are `en-GB`, `en-US`, `de-DE`.
 */
export declare enum ListInternalNumbers200ApplicationXMLInternalNumbersLanguagesEnum {
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
export declare enum ListInternalNumbers200ApplicationXMLInternalNumbersTypeEnum {
    Zero = "0",
    One = "1"
}
export declare class ListInternalNumbers200ApplicationXMLInternalNumbers extends SpeakeasyBase {
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
    languages: ListInternalNumbers200ApplicationXMLInternalNumbersLanguagesEnum;
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
    type: ListInternalNumbers200ApplicationXMLInternalNumbersTypeEnum;
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
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * List of internal numbers returned.
 *
 */
export declare class ListInternalNumbers200ApplicationXML extends SpeakeasyBase {
    internalNumbers?: ListInternalNumbers200ApplicationXMLInternalNumbers[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records that you specified to get in the response per page.
     */
    pageSize?: number;
    /**
     * The total number of records returned.
     */
    totalRecords?: number;
}
/**
 * Specify the language in which this phone number should be displayed. Currently, the only supported languages are `en-GB`, `en-US`, `de-DE`.
 */
export declare enum ListInternalNumbers200ApplicationJSONInternalNumbersLanguagesEnum {
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
export declare enum ListInternalNumbers200ApplicationJSONInternalNumbersTypeEnum {
    Zero = "0",
    One = "1"
}
export declare class ListInternalNumbers200ApplicationJSONInternalNumbers extends SpeakeasyBase {
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
    languages: ListInternalNumbers200ApplicationJSONInternalNumbersLanguagesEnum;
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
    type: ListInternalNumbers200ApplicationJSONInternalNumbersTypeEnum;
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
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * List of internal numbers returned.
 *
 */
export declare class ListInternalNumbers200ApplicationJSON extends SpeakeasyBase {
    internalNumbers?: ListInternalNumbers200ApplicationJSONInternalNumbers[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records that you specified to get in the response per page.
     */
    pageSize?: number;
    /**
     * The total number of records returned.
     */
    totalRecords?: number;
}
export declare class ListInternalNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * List of internal numbers returned.
     *
     */
    listInternalNumbers200ApplicationJSONObject?: ListInternalNumbers200ApplicationJSON;
}
