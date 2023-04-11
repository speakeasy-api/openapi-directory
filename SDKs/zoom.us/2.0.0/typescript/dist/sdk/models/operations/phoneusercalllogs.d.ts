import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PhoneUserCallLogsSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Enables you to sort call logs by start or end time. Choose the sort time value. Values include `startTime` or `endTime`.
 */
export declare enum PhoneUserCallLogsTimeTypeEnum {
    StartTime = "startTime",
    EndTime = "endTime"
}
export declare enum PhoneUserCallLogsTypeEnum {
    All = "all",
    Missed = "missed"
}
export declare class PhoneUserCallLogsRequest extends SpeakeasyBase {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * Filter API responses to include call logs of only the phone number defined in this field.
     */
    phoneNumber?: string;
    /**
     * Enables you to sort call logs by start or end time. Choose the sort time value. Values include `startTime` or `endTime`.
     */
    timeType?: PhoneUserCallLogsTimeTypeEnum;
    /**
     * End date.
     */
    to: Date;
    type?: PhoneUserCallLogsTypeEnum;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
/**
 * Indicates who accepted the call.
 */
export declare class PhoneUserCallLogs200ApplicationXMLCallLogsAcceptedBy extends SpeakeasyBase {
    extensionNumber?: string;
    location?: string;
    name?: string;
    numberType?: string;
    phoneNumber?: string;
}
/**
 * Indicates where the call was forwarded from.
 */
export declare class PhoneUserCallLogs200ApplicationXMLCallLogsForwardedBy extends SpeakeasyBase {
    extensionNumber?: string;
    location?: string;
    name?: string;
    numberType?: string;
    phoneNumber?: string;
}
/**
 * Indicates who the call was forwarded to.
 */
export declare class PhoneUserCallLogs200ApplicationXMLCallLogsForwardedTo extends SpeakeasyBase {
    extensionNumber?: string;
    location?: string;
    name?: string;
    numberType?: string;
    phoneNumber?: string;
}
export declare class PhoneUserCallLogs200ApplicationXMLCallLogsOutgoingBy extends SpeakeasyBase {
    extensionNumber?: string;
    location?: string;
    name?: string;
    numberType?: string;
    phoneNumber?: string;
}
export declare class PhoneUserCallLogs200ApplicationXMLCallLogsSite extends SpeakeasyBase {
    /**
     * Target [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) in which the phone number was assigned. Sites allow you to organize the phone users in your organization. For example, you sites could be created based on different office locations.
     */
    id?: string;
    /**
     * Name of the site where the phone number is assigned.
     */
    name?: string;
}
export declare class PhoneUserCallLogs200ApplicationXMLCallLogs extends SpeakeasyBase {
    /**
     * Indicates who accepted the call.
     */
    acceptedBy?: PhoneUserCallLogs200ApplicationXMLCallLogsAcceptedBy;
    /**
     * Unique identifier of the phone call.
     */
    callId?: string;
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
     * Billing charge for the call.
     */
    charge?: string;
    /**
     * Client code.
     */
    clientCode?: string;
    /**
     * Start time of the call
     */
    dateTime?: string;
    /**
     * Direction of the call. "inbound" | "outbound"
     */
    direction?: string;
    /**
     * Duration of the call in seconds.
     */
    duration?: number;
    /**
     * Indicates where the call was forwarded from.
     */
    forwardedBy?: PhoneUserCallLogs200ApplicationXMLCallLogsForwardedBy;
    /**
     * Indicates who the call was forwarded to.
     */
    forwardedTo?: PhoneUserCallLogs200ApplicationXMLCallLogsForwardedTo;
    /**
     * Whether the call has a recording or not.
     */
    hasRecording?: boolean;
    /**
     * Whether the call has voicemail or not.
     */
    hasVoicemail?: boolean;
    /**
     * Call Log ID
     */
    id?: string;
    outgoingBy?: PhoneUserCallLogs200ApplicationXMLCallLogsOutgoingBy;
    /**
     * Path of the call log.
     */
    path?: string;
    /**
     * Billing rate for the call.
     */
    rate?: string;
    /**
     * Recording type. <br>
     *
     * @remarks
     * * `1` - On-demand recording.<br>
     * * `2` - Automatic recording.
     */
    recordingType?: string;
    /**
     * Result of the call. "call_connected" | "recorded" | "no_answer"
     */
    result?: string;
    site?: PhoneUserCallLogs200ApplicationXMLCallLogsSite;
    /**
     * User ID or user email.
     */
    userId?: string;
    /**
     * Waiting time for the call, in seconds.
     */
    waitingTime?: number;
}
/**
 * Phone User Call Logs
 */
export declare class PhoneUserCallLogs200ApplicationXML extends SpeakeasyBase {
    /**
     * Call Log
     */
    callLogs?: PhoneUserCallLogs200ApplicationXMLCallLogs[];
    /**
     * Date from which you would like to view the logs.
     */
    from?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Total number of pages
     */
    pageCount?: number;
    /**
     * The number of records returned within a single API call for each page.
     */
    pageSize?: number;
    /**
     * Date up to which you would like to view the phone log.
     */
    to?: string;
    /**
     * The total number of records returned.
     */
    totalRecords?: number;
}
/**
 * Indicates who accepted the call.
 */
export declare class PhoneUserCallLogs200ApplicationJSONCallLogsAcceptedBy extends SpeakeasyBase {
    extensionNumber?: string;
    location?: string;
    name?: string;
    numberType?: string;
    phoneNumber?: string;
}
/**
 * Indicates where the call was forwarded from.
 */
export declare class PhoneUserCallLogs200ApplicationJSONCallLogsForwardedBy extends SpeakeasyBase {
    extensionNumber?: string;
    location?: string;
    name?: string;
    numberType?: string;
    phoneNumber?: string;
}
/**
 * Indicates who the call was forwarded to.
 */
export declare class PhoneUserCallLogs200ApplicationJSONCallLogsForwardedTo extends SpeakeasyBase {
    extensionNumber?: string;
    location?: string;
    name?: string;
    numberType?: string;
    phoneNumber?: string;
}
export declare class PhoneUserCallLogs200ApplicationJSONCallLogsOutgoingBy extends SpeakeasyBase {
    extensionNumber?: string;
    location?: string;
    name?: string;
    numberType?: string;
    phoneNumber?: string;
}
export declare class PhoneUserCallLogs200ApplicationJSONCallLogsSite extends SpeakeasyBase {
    /**
     * Target [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) in which the phone number was assigned. Sites allow you to organize the phone users in your organization. For example, you sites could be created based on different office locations.
     */
    id?: string;
    /**
     * Name of the site where the phone number is assigned.
     */
    name?: string;
}
export declare class PhoneUserCallLogs200ApplicationJSONCallLogs extends SpeakeasyBase {
    /**
     * Indicates who accepted the call.
     */
    acceptedBy?: PhoneUserCallLogs200ApplicationJSONCallLogsAcceptedBy;
    /**
     * Unique identifier of the phone call.
     */
    callId?: string;
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
     * Billing charge for the call.
     */
    charge?: string;
    /**
     * Client code.
     */
    clientCode?: string;
    /**
     * Start time of the call
     */
    dateTime?: string;
    /**
     * Direction of the call. "inbound" | "outbound"
     */
    direction?: string;
    /**
     * Duration of the call in seconds.
     */
    duration?: number;
    /**
     * Indicates where the call was forwarded from.
     */
    forwardedBy?: PhoneUserCallLogs200ApplicationJSONCallLogsForwardedBy;
    /**
     * Indicates who the call was forwarded to.
     */
    forwardedTo?: PhoneUserCallLogs200ApplicationJSONCallLogsForwardedTo;
    /**
     * Whether the call has a recording or not.
     */
    hasRecording?: boolean;
    /**
     * Whether the call has voicemail or not.
     */
    hasVoicemail?: boolean;
    /**
     * Call Log ID
     */
    id?: string;
    outgoingBy?: PhoneUserCallLogs200ApplicationJSONCallLogsOutgoingBy;
    /**
     * Path of the call log.
     */
    path?: string;
    /**
     * Billing rate for the call.
     */
    rate?: string;
    /**
     * Recording type. <br>
     *
     * @remarks
     * * `1` - On-demand recording.<br>
     * * `2` - Automatic recording.
     */
    recordingType?: string;
    /**
     * Result of the call. "call_connected" | "recorded" | "no_answer"
     */
    result?: string;
    site?: PhoneUserCallLogs200ApplicationJSONCallLogsSite;
    /**
     * User ID or user email.
     */
    userId?: string;
    /**
     * Waiting time for the call, in seconds.
     */
    waitingTime?: number;
}
/**
 * Phone User Call Logs
 */
export declare class PhoneUserCallLogs200ApplicationJSON extends SpeakeasyBase {
    /**
     * Call Log
     */
    callLogs?: PhoneUserCallLogs200ApplicationJSONCallLogs[];
    /**
     * Date from which you would like to view the logs.
     */
    from?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Total number of pages
     */
    pageCount?: number;
    /**
     * The number of records returned within a single API call for each page.
     */
    pageSize?: number;
    /**
     * Date up to which you would like to view the phone log.
     */
    to?: string;
    /**
     * The total number of records returned.
     */
    totalRecords?: number;
}
export declare class PhoneUserCallLogsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status code:** `200`
     *
     * @remarks
     * User's call logs returned.
     */
    phoneUserCallLogs200ApplicationJSONObject?: PhoneUserCallLogs200ApplicationJSON;
}
