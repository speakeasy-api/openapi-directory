import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PhoneUserRecordingsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class PhoneUserRecordingsRequest extends SpeakeasyBase {
    /**
     * Start date for the query in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the response includes only one month worth of recording data. The month defined should fall within the last six months.
     */
    from?: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End date.
     */
    to: Date;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class PhoneUserRecordings200ApplicationXMLRecordings extends SpeakeasyBase {
    /**
     * Contact name of callee
     */
    calleeName?: string;
    /**
     * Number of callee
     */
    calleeNumber?: string;
    /**
     * Type of callee's number. 1 - internal | 2 - external
     */
    calleeNumberType?: string;
    /**
     * Contact name of caller
     */
    callerName?: string;
    /**
     * Number of caller
     */
    callerNumber?: string;
    /**
     * Type of caller's number. 1 - internal | 2 - external
     */
    callerNumberType?: string;
    /**
     * Date and time at which the record is received
     */
    dateTime?: string;
    /**
     * Direction of the call. "inbound" | "outbound"
     */
    direction?: string;
    /**
     * Download url for the recording. For security purposes, you must provide an OAuth access token in the auth header to download the recording file using this url. <br>
     *
     * @remarks
     *
     * Example request:<br>
     * ```
     * curl --request GET \
     *   --url {download_url} \
     *   --header 'authorization: Bearer {access_token} \
     *   --header 'content-type: application/json'
     * ```
     *
     */
    downloadUrl?: string;
    /**
     * Duration of the call formatted as hh:mm:ss, for example: `05:01` for five minutes and one second.
     */
    duration?: string;
    /**
     * ID of recording
     */
    id?: string;
}
/**
 * Phone User Recordings
 */
export declare class PhoneUserRecordings200ApplicationXML extends SpeakeasyBase {
    /**
     * Start date for the query.
     */
    from?: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Total number of pages.
     */
    pageCount?: number;
    /**
     * The number of records returned within a single API call for each page.
     */
    pageSize?: number;
    /**
     * Recordings
     */
    recordings?: PhoneUserRecordings200ApplicationXMLRecordings[];
    /**
     * End date.
     */
    to?: Date;
    /**
     * The total number of records returned.
     */
    totalRecords?: number;
}
export declare class PhoneUserRecordings200ApplicationJSONRecordings extends SpeakeasyBase {
    /**
     * Contact name of callee
     */
    calleeName?: string;
    /**
     * Number of callee
     */
    calleeNumber?: string;
    /**
     * Type of callee's number. 1 - internal | 2 - external
     */
    calleeNumberType?: string;
    /**
     * Contact name of caller
     */
    callerName?: string;
    /**
     * Number of caller
     */
    callerNumber?: string;
    /**
     * Type of caller's number. 1 - internal | 2 - external
     */
    callerNumberType?: string;
    /**
     * Date and time at which the record is received
     */
    dateTime?: string;
    /**
     * Direction of the call. "inbound" | "outbound"
     */
    direction?: string;
    /**
     * Download url for the recording. For security purposes, you must provide an OAuth access token in the auth header to download the recording file using this url. <br>
     *
     * @remarks
     *
     * Example request:<br>
     * ```
     * curl --request GET \
     *   --url {download_url} \
     *   --header 'authorization: Bearer {access_token} \
     *   --header 'content-type: application/json'
     * ```
     *
     */
    downloadUrl?: string;
    /**
     * Duration of the call formatted as hh:mm:ss, for example: `05:01` for five minutes and one second.
     */
    duration?: string;
    /**
     * ID of recording
     */
    id?: string;
}
/**
 * Phone User Recordings
 */
export declare class PhoneUserRecordings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date for the query.
     */
    from?: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Total number of pages.
     */
    pageCount?: number;
    /**
     * The number of records returned within a single API call for each page.
     */
    pageSize?: number;
    /**
     * Recordings
     */
    recordings?: PhoneUserRecordings200ApplicationJSONRecordings[];
    /**
     * End date.
     */
    to?: Date;
    /**
     * The total number of records returned.
     */
    totalRecords?: number;
}
export declare class PhoneUserRecordingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * User object returned.
     */
    phoneUserRecordings200ApplicationJSONObject?: PhoneUserRecordings200ApplicationJSON;
}
