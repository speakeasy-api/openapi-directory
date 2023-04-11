import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportUsersSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Active or inactive hosts.<br>`active` - Active hosts. <br>`inactive` - Inactive hosts.
 */
export declare enum ReportUsersTypeEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class ReportUsersRequest extends SpeakeasyBase {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
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
     * Active or inactive hosts.<br>`active` - Active hosts. <br>`inactive` - Inactive hosts.
     */
    type?: ReportUsersTypeEnum;
}
/**
 * Custom attribute(s) that have been assigned to the user.
 */
export declare class ReportUsers200ApplicationXMLUsersCustomAttributes extends SpeakeasyBase {
    /**
     * Identifier for the custom attribute.
     */
    key?: string;
    /**
     * Name of the custom attribute.
     */
    name?: string;
    /**
     * Value of the custom attribute.
     */
    value?: string;
}
export declare class ReportUsers200ApplicationXMLUsers extends SpeakeasyBase {
    /**
     * Custom attribute(s) that have been assigned to the user.
     */
    customAttributes?: ReportUsers200ApplicationXMLUsersCustomAttributes;
    /**
     * User department.
     */
    dept?: string;
    /**
     * User email.
     */
    email?: string;
    /**
     * User ID.
     */
    id?: string;
    /**
     * Number of meeting minutes for user.
     */
    meetingMinutes?: number;
    /**
     * Number of meetings for user.
     */
    meetings?: number;
    /**
     * Number of participants in meetings for user.
     */
    participants?: number;
    /**
     * User type.
     */
    type?: number;
    /**
     * User display name.
     */
    userName?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Active or inactive hosts report returned.<br>
 * This is only available for paid account: {accountId}.
 */
export declare class ReportUsers200ApplicationXML extends SpeakeasyBase {
    /**
     * Start date for this report.
     */
    from?: Date;
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The page number of the current results.
     */
    pageNumber?: number;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * End date for this report.
     */
    to?: Date;
    /**
     * Number of meeting minutes for this range.
     */
    totalMeetingMinutes?: number;
    /**
     * Number of meetings for this range.
     */
    totalMeetings?: number;
    /**
     * Number of participants for this range.
     */
    totalParticipants?: number;
    /**
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
    /**
     * Array of user objects.
     */
    users?: ReportUsers200ApplicationXMLUsers[];
}
/**
 * Custom attribute(s) that have been assigned to the user.
 */
export declare class ReportUsers200ApplicationJSONUsersCustomAttributes extends SpeakeasyBase {
    /**
     * Identifier for the custom attribute.
     */
    key?: string;
    /**
     * Name of the custom attribute.
     */
    name?: string;
    /**
     * Value of the custom attribute.
     */
    value?: string;
}
export declare class ReportUsers200ApplicationJSONUsers extends SpeakeasyBase {
    /**
     * Custom attribute(s) that have been assigned to the user.
     */
    customAttributes?: ReportUsers200ApplicationJSONUsersCustomAttributes;
    /**
     * User department.
     */
    dept?: string;
    /**
     * User email.
     */
    email?: string;
    /**
     * User ID.
     */
    id?: string;
    /**
     * Number of meeting minutes for user.
     */
    meetingMinutes?: number;
    /**
     * Number of meetings for user.
     */
    meetings?: number;
    /**
     * Number of participants in meetings for user.
     */
    participants?: number;
    /**
     * User type.
     */
    type?: number;
    /**
     * User display name.
     */
    userName?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Active or inactive hosts report returned.<br>
 * This is only available for paid account: {accountId}.
 */
export declare class ReportUsers200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date for this report.
     */
    from?: Date;
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The page number of the current results.
     */
    pageNumber?: number;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * End date for this report.
     */
    to?: Date;
    /**
     * Number of meeting minutes for this range.
     */
    totalMeetingMinutes?: number;
    /**
     * Number of meetings for this range.
     */
    totalMeetings?: number;
    /**
     * Number of participants for this range.
     */
    totalParticipants?: number;
    /**
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
    /**
     * Array of user objects.
     */
    users?: ReportUsers200ApplicationJSONUsers[];
}
export declare class ReportUsersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Active or inactive hosts report returned.<br>
     * This is only available for paid account: {accountId}.
     */
    reportUsers200ApplicationJSONObject?: ReportUsers200ApplicationJSON;
}
