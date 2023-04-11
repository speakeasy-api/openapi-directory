import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardMeetingsSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Set the value of this field to "tracking_fields" if you would like to include tracking fields of each meeting in the response.
 */
export declare enum DashboardMeetingsIncludeFieldsEnum {
    TrackingFields = "tracking_fields"
}
/**
 * Specify a value to get the response for the corresponding meeting type. The value of this field can be one of the following:<br> <br>`past` - Meeting that already occurred in the specified date range.<br>`pastOne` - Past meetings that were attended by only one user. <br>`live` - Live meetings.<br><br>
 *
 * @remarks
 *
 * If you do not provide this field, the default value will be `live` and thus, the API will only query responses for live meetings.
 */
export declare enum DashboardMeetingsTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class DashboardMeetingsRequest extends SpeakeasyBase {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: Date;
    /**
     * Set the value of this field to "tracking_fields" if you would like to include tracking fields of each meeting in the response.
     */
    includeFields?: DashboardMeetingsIncludeFieldsEnum;
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
     * Specify a value to get the response for the corresponding meeting type. The value of this field can be one of the following:<br> <br>`past` - Meeting that already occurred in the specified date range.<br>`pastOne` - Past meetings that were attended by only one user. <br>`live` - Live meetings.<br><br>
     *
     * @remarks
     *
     * If you do not provide this field, the default value will be `live` and thus, the API will only query responses for live meetings.
     */
    type?: DashboardMeetingsTypeEnum;
}
export declare class DashboardMeetings200ApplicationXMLMetricsCustomKeys extends SpeakeasyBase {
    /**
     * Custom key associated with the meeting.
     */
    key?: string;
    /**
     * Value of the custom key associated with the meeting.
     */
    value?: string;
}
export declare class DashboardMeetings200ApplicationXMLMetricsTrackingFields extends SpeakeasyBase {
    /**
     * Label of the tracking field.
     */
    field?: string;
    /**
     * Value of the tracking field.
     */
    value?: string;
}
/**
 * Meeting metric details.
 */
export declare class DashboardMeetings200ApplicationXMLMetrics extends SpeakeasyBase {
    /**
     * Custom keys and values assigned to the meeting.
     */
    customKeys?: DashboardMeetings200ApplicationXMLMetricsCustomKeys[];
    /**
     * Department of the host.
     */
    dept?: string;
    /**
     * Meeting duration. Formatted as hh:mm:ss, for example: `16:08` for 16 minutes and 8 seconds.
     */
    duration?: string;
    /**
     * Email address of the host.
     */
    email?: string;
    /**
     * Meeting end time.
     */
    endTime?: Date;
    /**
     * Indicates whether or not [third party audio](https://support.zoom.us/hc/en-us/articles/202470795-3rd-Party-Audio-Conference) was used in the meeting.
     */
    has3rdPartyAudio?: boolean;
    /**
     * Indicates whether or not the PSTN was used in the meeting.
     */
    hasPstn?: boolean;
    /**
     * Indicates whether or not the recording feature was used in the meeting.
     */
    hasRecording?: boolean;
    /**
     * Indicates whether or not screenshare feature was used in the meeting.
     */
    hasScreenShare?: boolean;
    /**
     * Indicates whether or not someone joined the meeting using SIP.
     */
    hasSip?: boolean;
    /**
     * Indicates whether or not video was used in the meeting.
     */
    hasVideo?: boolean;
    /**
     * Indicates whether or not VoIP was used in the meeting.
     */
    hasVoip?: boolean;
    /**
     * Host display name.
     */
    host?: string;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * The number of Zoom Room participants in the meeting.
     */
    inRoomParticipants?: number;
    /**
     * Meeting participant count.
     */
    participants?: number;
    /**
     * Meeting start time.
     */
    startTime?: Date;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Tracking fields and values assigned to the meeting.
     */
    trackingFields?: DashboardMeetings200ApplicationXMLMetricsTrackingFields[];
    /**
     * License type of the user.
     */
    userType?: string;
    /**
     * Meeting UUID. Please double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it.
     */
    uuid?: string;
}
/**
 * Pagination object.
 */
export declare class DashboardMeetings200ApplicationXML extends SpeakeasyBase {
    /**
     * Start date for this report in 'yyyy-mm-dd' format.
     */
    from?: Date;
    /**
     * Array of meeting objects.
     */
    meetings?: DashboardMeetings200ApplicationXMLMetrics[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End date for this report in 'yyyy-mm-dd' format.
     */
    to?: Date;
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class DashboardMeetings200ApplicationJSONMetricsCustomKeys extends SpeakeasyBase {
    /**
     * Custom key associated with the meeting.
     */
    key?: string;
    /**
     * Value of the custom key associated with the meeting.
     */
    value?: string;
}
export declare class DashboardMeetings200ApplicationJSONMetricsTrackingFields extends SpeakeasyBase {
    /**
     * Label of the tracking field.
     */
    field?: string;
    /**
     * Value of the tracking field.
     */
    value?: string;
}
/**
 * Meeting metric details.
 */
export declare class DashboardMeetings200ApplicationJSONMetrics extends SpeakeasyBase {
    /**
     * Custom keys and values assigned to the meeting.
     */
    customKeys?: DashboardMeetings200ApplicationJSONMetricsCustomKeys[];
    /**
     * Department of the host.
     */
    dept?: string;
    /**
     * Meeting duration. Formatted as hh:mm:ss, for example: `16:08` for 16 minutes and 8 seconds.
     */
    duration?: string;
    /**
     * Email address of the host.
     */
    email?: string;
    /**
     * Meeting end time.
     */
    endTime?: Date;
    /**
     * Indicates whether or not [third party audio](https://support.zoom.us/hc/en-us/articles/202470795-3rd-Party-Audio-Conference) was used in the meeting.
     */
    has3rdPartyAudio?: boolean;
    /**
     * Indicates whether or not the PSTN was used in the meeting.
     */
    hasPstn?: boolean;
    /**
     * Indicates whether or not the recording feature was used in the meeting.
     */
    hasRecording?: boolean;
    /**
     * Indicates whether or not screenshare feature was used in the meeting.
     */
    hasScreenShare?: boolean;
    /**
     * Indicates whether or not someone joined the meeting using SIP.
     */
    hasSip?: boolean;
    /**
     * Indicates whether or not video was used in the meeting.
     */
    hasVideo?: boolean;
    /**
     * Indicates whether or not VoIP was used in the meeting.
     */
    hasVoip?: boolean;
    /**
     * Host display name.
     */
    host?: string;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * The number of Zoom Room participants in the meeting.
     */
    inRoomParticipants?: number;
    /**
     * Meeting participant count.
     */
    participants?: number;
    /**
     * Meeting start time.
     */
    startTime?: Date;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Tracking fields and values assigned to the meeting.
     */
    trackingFields?: DashboardMeetings200ApplicationJSONMetricsTrackingFields[];
    /**
     * License type of the user.
     */
    userType?: string;
    /**
     * Meeting UUID. Please double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it.
     */
    uuid?: string;
}
/**
 * Pagination object.
 */
export declare class DashboardMeetings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date for this report in 'yyyy-mm-dd' format.
     */
    from?: Date;
    /**
     * Array of meeting objects.
     */
    meetings?: DashboardMeetings200ApplicationJSONMetrics[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End date for this report in 'yyyy-mm-dd' format.
     */
    to?: Date;
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class DashboardMeetingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Meetings returned.<br>
     * Only available for paid accounts that have dashboard feature enabled.
     */
    dashboardMeetings200ApplicationJSONObject?: DashboardMeetings200ApplicationJSON;
}
