import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PhoneUserVoiceMailsSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Status of the voice mail
 */
export declare enum PhoneUserVoiceMailsStatusEnum {
    All = "all",
    Read = "read",
    Unread = "unread"
}
export declare class PhoneUserVoiceMailsRequest extends SpeakeasyBase {
    /**
     * Start date for the query in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the response includes only one month worth of voicemail data. The month defined should fall within the last six months.
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
     * Status of the voice mail
     */
    status?: PhoneUserVoiceMailsStatusEnum;
    /**
     * End date.
     */
    to: Date;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
/**
 * Status of the voice mail. Can be either 'read' or 'unread'
 */
export declare enum PhoneUserVoiceMails200ApplicationXMLVoiceMailsStatusEnum {
    Read = "read",
    Unread = "unread"
}
export declare class PhoneUserVoiceMails200ApplicationXMLVoiceMails extends SpeakeasyBase {
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
     * Date the voice mail started
     */
    dateTime?: string;
    /**
     * Download url of attachment
     */
    downloadUrl?: string;
    /**
     * Duration of the voice mail, formatted as hh:mm:ss, for example: `06:30` for six minutes and thirty seconds.
     */
    duration?: string;
    /**
     * Id of voice mail
     */
    id?: string;
    /**
     * Status of the voice mail. Can be either 'read' or 'unread'
     */
    status?: PhoneUserVoiceMails200ApplicationXMLVoiceMailsStatusEnum;
}
/**
 * Phone User Voice Mails
 */
export declare class PhoneUserVoiceMails200ApplicationXML extends SpeakeasyBase {
    /**
     * Start date for the query.
     */
    from?: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Total number of page
     */
    pageCount?: number;
    /**
     * Size of each page
     */
    pageSize?: number;
    /**
     * End date.
     */
    to?: Date;
    /**
     * Total number of records
     */
    totalRecords?: number;
    /**
     * Voice Mails
     */
    voiceMails?: PhoneUserVoiceMails200ApplicationXMLVoiceMails[];
}
/**
 * Status of the voice mail. Can be either 'read' or 'unread'
 */
export declare enum PhoneUserVoiceMails200ApplicationJSONVoiceMailsStatusEnum {
    Read = "read",
    Unread = "unread"
}
export declare class PhoneUserVoiceMails200ApplicationJSONVoiceMails extends SpeakeasyBase {
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
     * Date the voice mail started
     */
    dateTime?: string;
    /**
     * Download url of attachment
     */
    downloadUrl?: string;
    /**
     * Duration of the voice mail, formatted as hh:mm:ss, for example: `06:30` for six minutes and thirty seconds.
     */
    duration?: string;
    /**
     * Id of voice mail
     */
    id?: string;
    /**
     * Status of the voice mail. Can be either 'read' or 'unread'
     */
    status?: PhoneUserVoiceMails200ApplicationJSONVoiceMailsStatusEnum;
}
/**
 * Phone User Voice Mails
 */
export declare class PhoneUserVoiceMails200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date for the query.
     */
    from?: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Total number of page
     */
    pageCount?: number;
    /**
     * Size of each page
     */
    pageSize?: number;
    /**
     * End date.
     */
    to?: Date;
    /**
     * Total number of records
     */
    totalRecords?: number;
    /**
     * Voice Mails
     */
    voiceMails?: PhoneUserVoiceMails200ApplicationJSONVoiceMails[];
}
export declare class PhoneUserVoiceMailsResponse extends SpeakeasyBase {
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
    phoneUserVoiceMails200ApplicationJSONObject?: PhoneUserVoiceMails200ApplicationJSON;
}
