import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountCallLogsSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Enables you to sort call logs by start or end time. Choose the sort time value. Values include `startTime` or `endTime`.
 */
export declare enum AccountCallLogsTimeTypeEnum {
    StartTime = "startTime",
    EndTime = "endTime"
}
export declare class AccountCallLogsRequest extends SpeakeasyBase {
    /**
     * Start date from which you would like to get the call logs. The start date should be within past six months. <br>
     *
     * @remarks
     *
     * The API only returns data pertaining to a month. Thus, the date range(defined using "from" and "to" fields) for which the call logs are to be returned must not exceed a month.
     */
    from?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * Filter the API response by [path](https://support.zoom.us/hc/en-us/articles/360021114452-Viewing-and-identifying-logs#h_646b46c6-0623-4ab1-8b8b-ea5b8bcef679) of the call. The value of this field can be one of the following: `voiceMail`, `message`, `forward`, `extension`, `callQueue`, `ivrMenu`, `companyDirectory`, `autoReceptionist`, `contactCenter`, `disconnected`, `commonAreaPhone`,
     *
     * @remarks
     * `pstn`, `transfer`, `sharedLines`, `sharedLineGroup`, `tollFreeBilling`, `meetingService`, `parkPickup`,
     * `parkTimeout`, `monitor`, `takeover`, `sipGroup`
     */
    path?: string;
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites). Use this query parameter if you have enabled multiple sites and would like to filter the response of this API call by call logs of a specific phone site.
     */
    siteId?: string;
    /**
     * Enables you to sort call logs by start or end time. Choose the sort time value. Values include `startTime` or `endTime`.
     */
    timeType?: AccountCallLogsTimeTypeEnum;
    /**
     * The end date upto which you would like to get the call logs for. The end date should be within past six months.
     */
    to?: string;
    /**
     * The type of the call logs. The value can be either "all" or "missed".
     */
    type?: string;
}
/**
 * The type of call:
 *
 * @remarks
 * *`voip` (Voice over IP)
 * *`pstn` (Public Switched Telephone Network)
 * *`tollfree`
 * *`international`
 * *`contactCenter`
 */
export declare enum AccountCallLogs200ApplicationXMLCallLogsCallTypeEnum {
    Voip = "voip",
    Pstn = "pstn",
    Tollfree = "tollfree",
    International = "international",
    ContactCenter = "contactCenter"
}
/**
 * The owner type:
 *
 * @remarks
 * *`user`
 * *`callQueue`
 * *`autoReceptionist`
 * *`commonAreaPhone`
 * *`sharedLineGroup`
 */
export declare enum AccountCallLogs200ApplicationXMLCallLogsOwnerTypeEnum {
    User = "user",
    CallQueue = "callQueue",
    AutoReceptionist = "autoReceptionist",
    CommonAreaPhone = "commonAreaPhone",
    SharedLineGroup = "sharedLineGroup"
}
export declare class AccountCallLogs200ApplicationXMLCallLogsOwner extends SpeakeasyBase {
    /**
     * The owner's extension number.
     */
    extensionNumber?: number;
    /**
     * The owner ID.
     */
    id?: string;
    /**
     * The owner name.
     */
    name?: string;
    /**
     * The owner type:
     *
     * @remarks
     * *`user`
     * *`callQueue`
     * *`autoReceptionist`
     * *`commonAreaPhone`
     * *`sharedLineGroup`
     */
    type?: AccountCallLogs200ApplicationXMLCallLogsOwnerTypeEnum;
}
/**
 * Type of call recording:<br>
 *
 * @remarks
 * `1` OnDemand<br>
 * `2` Automatic
 */
export declare enum AccountCallLogs200ApplicationXMLCallLogsRecordingTypeEnum {
    One = "1",
    Two = "2"
}
export declare class AccountCallLogs200ApplicationXMLCallLogsSite extends SpeakeasyBase {
    /**
     * Target [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) in which the phone number was assigned. Sites allow you to organize the phone users in your organization. For example, you sites could be created based on different office locations.
     */
    id?: string;
    /**
     * Name of the site where the phone number is assigned.
     */
    name?: string;
}
export declare class AccountCallLogs200ApplicationXMLCallLogs extends SpeakeasyBase {
    /**
     * GMT date and time at which the inbound call was answered. The value of this field is in `yyyy-MM-dd'T'HH:mm:ss'Z'` format.
     *
     * @remarks
     *
     */
    answerStartTime?: Date;
    /**
     * Unique identifier of the phone call.
     */
    callId?: string;
    /**
     * The type of call:
     *
     * @remarks
     * *`voip` (Voice over IP)
     * *`pstn` (Public Switched Telephone Network)
     * *`tollfree`
     * *`international`
     * *`contactCenter`
     */
    callType?: AccountCallLogs200ApplicationXMLCallLogsCallTypeEnum;
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
     * Call Log ID
     */
    id?: string;
    owner?: AccountCallLogs200ApplicationXMLCallLogsOwner;
    /**
     * Path of the call.
     */
    path?: string;
    /**
     * Billing rate for the call.
     */
    rate?: string;
    /**
     * Unique identifier of the call recording.
     */
    recordingId?: string;
    /**
     * Type of call recording:<br>
     *
     * @remarks
     * `1` OnDemand<br>
     * `2` Automatic
     */
    recordingType?: AccountCallLogs200ApplicationXMLCallLogsRecordingTypeEnum;
    /**
     * Result of the call. "call_connected" | "recorded" | "no_answer"
     */
    result?: string;
    site?: AccountCallLogs200ApplicationXMLCallLogsSite;
    /**
     * User ID of the call log owner.
     */
    userId?: string;
    /**
     * Duration that a  **call queue member** takes to answer a call from the time it started ringing. The value of the duration is in seconds.
     *
     * @remarks
     *
     */
    waitingTime?: string;
}
/**
 * Account Call Logs
 */
export declare class AccountCallLogs200ApplicationXML extends SpeakeasyBase {
    /**
     * Call Log
     */
    callLogs?: AccountCallLogs200ApplicationXMLCallLogs[];
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
 * The type of call:
 *
 * @remarks
 * *`voip` (Voice over IP)
 * *`pstn` (Public Switched Telephone Network)
 * *`tollfree`
 * *`international`
 * *`contactCenter`
 */
export declare enum AccountCallLogs200ApplicationJSONCallLogsCallTypeEnum {
    Voip = "voip",
    Pstn = "pstn",
    Tollfree = "tollfree",
    International = "international",
    ContactCenter = "contactCenter"
}
/**
 * The owner type:
 *
 * @remarks
 * *`user`
 * *`callQueue`
 * *`autoReceptionist`
 * *`commonAreaPhone`
 * *`sharedLineGroup`
 */
export declare enum AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnum {
    User = "user",
    CallQueue = "callQueue",
    AutoReceptionist = "autoReceptionist",
    CommonAreaPhone = "commonAreaPhone",
    SharedLineGroup = "sharedLineGroup"
}
export declare class AccountCallLogs200ApplicationJSONCallLogsOwner extends SpeakeasyBase {
    /**
     * The owner's extension number.
     */
    extensionNumber?: number;
    /**
     * The owner ID.
     */
    id?: string;
    /**
     * The owner name.
     */
    name?: string;
    /**
     * The owner type:
     *
     * @remarks
     * *`user`
     * *`callQueue`
     * *`autoReceptionist`
     * *`commonAreaPhone`
     * *`sharedLineGroup`
     */
    type?: AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnum;
}
/**
 * Type of call recording:<br>
 *
 * @remarks
 * `1` OnDemand<br>
 * `2` Automatic
 */
export declare enum AccountCallLogs200ApplicationJSONCallLogsRecordingTypeEnum {
    One = "1",
    Two = "2"
}
export declare class AccountCallLogs200ApplicationJSONCallLogsSite extends SpeakeasyBase {
    /**
     * Target [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) in which the phone number was assigned. Sites allow you to organize the phone users in your organization. For example, you sites could be created based on different office locations.
     */
    id?: string;
    /**
     * Name of the site where the phone number is assigned.
     */
    name?: string;
}
export declare class AccountCallLogs200ApplicationJSONCallLogs extends SpeakeasyBase {
    /**
     * GMT date and time at which the inbound call was answered. The value of this field is in `yyyy-MM-dd'T'HH:mm:ss'Z'` format.
     *
     * @remarks
     *
     */
    answerStartTime?: Date;
    /**
     * Unique identifier of the phone call.
     */
    callId?: string;
    /**
     * The type of call:
     *
     * @remarks
     * *`voip` (Voice over IP)
     * *`pstn` (Public Switched Telephone Network)
     * *`tollfree`
     * *`international`
     * *`contactCenter`
     */
    callType?: AccountCallLogs200ApplicationJSONCallLogsCallTypeEnum;
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
     * Call Log ID
     */
    id?: string;
    owner?: AccountCallLogs200ApplicationJSONCallLogsOwner;
    /**
     * Path of the call.
     */
    path?: string;
    /**
     * Billing rate for the call.
     */
    rate?: string;
    /**
     * Unique identifier of the call recording.
     */
    recordingId?: string;
    /**
     * Type of call recording:<br>
     *
     * @remarks
     * `1` OnDemand<br>
     * `2` Automatic
     */
    recordingType?: AccountCallLogs200ApplicationJSONCallLogsRecordingTypeEnum;
    /**
     * Result of the call. "call_connected" | "recorded" | "no_answer"
     */
    result?: string;
    site?: AccountCallLogs200ApplicationJSONCallLogsSite;
    /**
     * User ID of the call log owner.
     */
    userId?: string;
    /**
     * Duration that a  **call queue member** takes to answer a call from the time it started ringing. The value of the duration is in seconds.
     *
     * @remarks
     *
     */
    waitingTime?: string;
}
/**
 * Account Call Logs
 */
export declare class AccountCallLogs200ApplicationJSON extends SpeakeasyBase {
    /**
     * Call Log
     */
    callLogs?: AccountCallLogs200ApplicationJSONCallLogs[];
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
export declare class AccountCallLogsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Account's call logs returned.
     */
    accountCallLogs200ApplicationJSONObject?: AccountCallLogs200ApplicationJSON;
}
