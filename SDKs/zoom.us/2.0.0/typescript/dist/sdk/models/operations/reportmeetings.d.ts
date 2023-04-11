import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The meeting types: <br>`past` - Past meetings.<br>`pastOne` - Past one user meetings.
 */
export declare enum ReportMeetingsTypeEnum {
    Past = "past",
    PastOne = "pastOne"
}
export declare class ReportMeetingsRequest extends SpeakeasyBase {
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
     * End date.
     */
    to: Date;
    /**
     * The meeting types: <br>`past` - Past meetings.<br>`pastOne` - Past one user meetings.
     */
    type?: ReportMeetingsTypeEnum;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class ReportMeetings200ApplicationXMLMeetingsCustomKeys extends SpeakeasyBase {
    /**
     * Custom key associated with the user.
     */
    key?: string;
    /**
     * Value of the custom key associated with the user.
     */
    value?: string;
}
export declare class ReportMeetings200ApplicationXMLMeetings extends SpeakeasyBase {
    /**
     * Custom keys and values assigned to the meeting.
     */
    customKeys?: ReportMeetings200ApplicationXMLMeetingsCustomKeys[];
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * Meeting end time.
     */
    endTime?: Date;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-):            Unique identifier of the meeting in "**long**" format(represented as int64
     *
     * @remarks
     * data type in JSON), also known as the meeting number.
     *
     */
    id?: number;
    /**
     * Number of meeting participants.
     */
    participantsCount?: number;
    /**
     * Indicates whether the meeting was created directly through Zoom or through an API request.
     */
    source?: string;
    /**
     * Meeting start time.
     */
    startTime?: Date;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Sum of meeting minutes from all participants in the meeting.
     */
    totalMinutes?: number;
    /**
     *
     * @remarks
     * Meeting Type:<br> `1` - Instant Meeting<br> `2` - Scheduled Meeting<br> `3` - Recurring Meeting with no fixed time.<br>
     * `4` - This value is returned if the meeting was started using a Personal Meeting ID. <br>
     * `8` - Recurring Meeting with a fixed time.
     */
    type?: number;
    /**
     * User email.
     */
    userEmail?: string;
    /**
     * User display name.
     */
    userName?: string;
    /**
     * Meeting UUID. Each meeting instance will generate its own UUID(i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). Please double encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
}
/**
 * Pagination Object.
 */
export declare class ReportMeetings200ApplicationXML extends SpeakeasyBase {
    /**
     * Start date for this report.
     */
    from?: Date;
    /**
     * Array of meeting objects.
     */
    meetings?: ReportMeetings200ApplicationXMLMeetings[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * **Deprecated**: This field has been deprecated. Please use the "next_page_token" field for pagination instead of this field.
     *
     * @remarks
     *
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
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
}
export declare class ReportMeetings200ApplicationJSONMeetingsCustomKeys extends SpeakeasyBase {
    /**
     * Custom key associated with the user.
     */
    key?: string;
    /**
     * Value of the custom key associated with the user.
     */
    value?: string;
}
export declare class ReportMeetings200ApplicationJSONMeetings extends SpeakeasyBase {
    /**
     * Custom keys and values assigned to the meeting.
     */
    customKeys?: ReportMeetings200ApplicationJSONMeetingsCustomKeys[];
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * Meeting end time.
     */
    endTime?: Date;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-):            Unique identifier of the meeting in "**long**" format(represented as int64
     *
     * @remarks
     * data type in JSON), also known as the meeting number.
     *
     */
    id?: number;
    /**
     * Number of meeting participants.
     */
    participantsCount?: number;
    /**
     * Indicates whether the meeting was created directly through Zoom or through an API request.
     */
    source?: string;
    /**
     * Meeting start time.
     */
    startTime?: Date;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Sum of meeting minutes from all participants in the meeting.
     */
    totalMinutes?: number;
    /**
     *
     * @remarks
     * Meeting Type:<br> `1` - Instant Meeting<br> `2` - Scheduled Meeting<br> `3` - Recurring Meeting with no fixed time.<br>
     * `4` - This value is returned if the meeting was started using a Personal Meeting ID. <br>
     * `8` - Recurring Meeting with a fixed time.
     */
    type?: number;
    /**
     * User email.
     */
    userEmail?: string;
    /**
     * User display name.
     */
    userName?: string;
    /**
     * Meeting UUID. Each meeting instance will generate its own UUID(i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). Please double encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
}
/**
 * Pagination Object.
 */
export declare class ReportMeetings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date for this report.
     */
    from?: Date;
    /**
     * Array of meeting objects.
     */
    meetings?: ReportMeetings200ApplicationJSONMeetings[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * **Deprecated**: This field has been deprecated. Please use the "next_page_token" field for pagination instead of this field.
     *
     * @remarks
     *
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
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
}
export declare class ReportMeetingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Active or inactive hosts report returned.<br>
     *
     */
    reportMeetings200ApplicationJSONObject?: ReportMeetings200ApplicationJSON;
}
