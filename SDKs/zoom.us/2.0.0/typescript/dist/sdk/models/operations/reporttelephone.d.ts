import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportTelephoneSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Audio types:<br>`1` - Toll-free Call-in & Call-out.<br>`2` - Toll <br>
 *
 * @remarks
 * `3` - SIP Connected Audio
 */
export declare enum ReportTelephoneTypeEnum {
    One = "1",
    Three = "3"
}
export declare class ReportTelephoneRequest extends SpeakeasyBase {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     *
     * @remarks
     * **Deprecated** - This field has been deprecated and we will stop supporting it completely in a future release. Please use "next_page_token" for pagination instead of this field.
     *
     * The page number of the current page in the returned records.
     */
    pageNumber?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End date.
     */
    to: Date;
    /**
     * Audio types:<br>`1` - Toll-free Call-in & Call-out.<br>`2` - Toll <br>
     *
     * @remarks
     * `3` - SIP Connected Audio
     */
    type?: ReportTelephoneTypeEnum;
}
/**
 * Call type.
 */
export declare enum ReportTelephone200ApplicationXMLTelephonyUsageTypeEnum {
    TollFree = "toll-free",
    CallOut = "call-out",
    CallIn = "call-in",
    USTollNumber = "US toll-number",
    GlobalTollNumber = "global toll-number",
    Premium = "premium",
    PremiumCallIn = "premium call-in"
}
export declare class ReportTelephone200ApplicationXMLTelephonyUsage extends SpeakeasyBase {
    /**
     * Caller's call-in number.
     */
    callInNumber?: string;
    /**
     * Country name.
     */
    countryName?: string;
    /**
     * User department.
     */
    dept?: string;
    /**
     * Call leg duration
     */
    duration?: number;
    /**
     * Call leg end time
     */
    endTime?: Date;
    /**
     * User email.
     */
    hostEmail?: string;
    /**
     * The user ID of the meeting host.
     */
    hostId?: string;
    /**
     * User display name.
     */
    hostName?: string;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    meetingId?: number;
    /**
     * Meeting type.
     */
    meetingType?: string;
    /**
     * Toll-free telephone number.
     */
    phoneNumber?: string;
    /**
     * Calling rate for the telephone call.
     */
    rate?: number;
    /**
     * The number that is signaled to Zoom.
     */
    signaledNumber?: string;
    /**
     * Call leg start time
     */
    startTime?: Date;
    /**
     * Total cost (USD) for Call Out. Calculated as plan rate by duration.
     */
    total?: number;
    /**
     * Call type.
     */
    type?: ReportTelephone200ApplicationXMLTelephonyUsageTypeEnum;
    /**
     * Meeting UUID.
     */
    uuid?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Telephone report returned.<br>
 * This is only available for paid account:{accountId}.<br>
 * The requested report cannot be generated for this account because this account has not subscribed to toll-free audio conference plan.<br>
 * Toll Report feature must be enabled to perform this action. Contact the Zoom Support team for help.
 */
export declare class ReportTelephone200ApplicationXML extends SpeakeasyBase {
    /**
     * Start date for this report.
     */
    from?: Date;
    /**
     * The page number of the current results.
     */
    nextPageToken?: number;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * Array of telephony objects.
     */
    telephonyUsage?: ReportTelephone200ApplicationXMLTelephonyUsage[];
    /**
     * End date for this report.
     */
    to?: Date;
    /**
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
}
/**
 * Call type.
 */
export declare enum ReportTelephone200ApplicationJSONTelephonyUsageTypeEnum {
    TollFree = "toll-free",
    CallOut = "call-out",
    CallIn = "call-in",
    USTollNumber = "US toll-number",
    GlobalTollNumber = "global toll-number",
    Premium = "premium",
    PremiumCallIn = "premium call-in"
}
export declare class ReportTelephone200ApplicationJSONTelephonyUsage extends SpeakeasyBase {
    /**
     * Caller's call-in number.
     */
    callInNumber?: string;
    /**
     * Country name.
     */
    countryName?: string;
    /**
     * User department.
     */
    dept?: string;
    /**
     * Call leg duration
     */
    duration?: number;
    /**
     * Call leg end time
     */
    endTime?: Date;
    /**
     * User email.
     */
    hostEmail?: string;
    /**
     * The user ID of the meeting host.
     */
    hostId?: string;
    /**
     * User display name.
     */
    hostName?: string;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    meetingId?: number;
    /**
     * Meeting type.
     */
    meetingType?: string;
    /**
     * Toll-free telephone number.
     */
    phoneNumber?: string;
    /**
     * Calling rate for the telephone call.
     */
    rate?: number;
    /**
     * The number that is signaled to Zoom.
     */
    signaledNumber?: string;
    /**
     * Call leg start time
     */
    startTime?: Date;
    /**
     * Total cost (USD) for Call Out. Calculated as plan rate by duration.
     */
    total?: number;
    /**
     * Call type.
     */
    type?: ReportTelephone200ApplicationJSONTelephonyUsageTypeEnum;
    /**
     * Meeting UUID.
     */
    uuid?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Telephone report returned.<br>
 * This is only available for paid account:{accountId}.<br>
 * The requested report cannot be generated for this account because this account has not subscribed to toll-free audio conference plan.<br>
 * Toll Report feature must be enabled to perform this action. Contact the Zoom Support team for help.
 */
export declare class ReportTelephone200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date for this report.
     */
    from?: Date;
    /**
     * The page number of the current results.
     */
    nextPageToken?: number;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * Array of telephony objects.
     */
    telephonyUsage?: ReportTelephone200ApplicationJSONTelephonyUsage[];
    /**
     * End date for this report.
     */
    to?: Date;
    /**
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
}
export declare class ReportTelephoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Telephone report returned.<br>
     * This is only available for paid account:{accountId}.<br>
     * The requested report cannot be generated for this account because this account has not subscribed to toll-free audio conference plan.<br>
     * Toll Report feature must be enabled to perform this action. Contact the Zoom Support team for help.
     */
    reportTelephone200ApplicationJSONObject?: ReportTelephone200ApplicationJSON;
}
