import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardZoomRoomSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DashboardZoomRoomRequest extends SpeakeasyBase {
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
     * The Zoom room ID.
     */
    zoomroomId: string;
}
export declare class DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys extends SpeakeasyBase {
    /**
     * Custom key associated with the meetinh.
     */
    key?: string;
    /**
     * Value of the custom key associated with the meeting.
     */
    value?: string;
}
/**
 * Meeting metric details.
 */
export declare class DashboardZoomRoomZoomRoomMeetingMetrics extends SpeakeasyBase {
    /**
     * Custom keys and values assigned to the meeting.
     */
    customKeys?: DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys[];
    /**
     * Department of the host.
     */
    dept?: string;
    /**
     * Meeting duration.
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
     * License type of the user.
     */
    userType?: string;
    /**
     * Meeting UUID. Please double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it.
     */
    uuid?: string;
}
export declare class DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys extends SpeakeasyBase {
    /**
     * Custom key associated with the meetinh.
     */
    key?: string;
    /**
     * Value of the custom key associated with the meeting.
     */
    value?: string;
}
/**
 * Meeting metric details.
 */
export declare class DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics extends SpeakeasyBase {
    /**
     * Custom keys and values assigned to the meeting.
     */
    customKeys?: DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys[];
    /**
     * Department of the host.
     */
    dept?: string;
    /**
     * Meeting duration.
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
export declare class DashboardZoomRoomZoomRoomPastMeetings extends SpeakeasyBase {
    /**
     * Start date for this report in 'yyyy-mm-dd' format.
     */
    from?: Date;
    /**
     * Array of meeting objects.
     */
    meetings?: DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics[];
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
/**
 * Zoom room.
 */
export declare class DashboardZoomRoomZoomRoom extends SpeakeasyBase {
    /**
     * Zoom room email type.
     */
    accountType?: string;
    /**
     * Zoom calendar name.
     */
    calenderName?: string;
    /**
     * Zoom room camera.
     */
    camera?: string;
    /**
     * Zoom room device IP.
     */
    deviceIp?: string;
    /**
     * Zoom room email.
     */
    email?: string;
    /**
     * Health of the Zoom Room.
     */
    health?: string;
    /**
     * Zoom room ID.
     */
    id?: string;
    /**
     * Issues encountered by the Zoom Room.
     */
    issues?: string[];
    /**
     * Zoom room last start time.
     */
    lastStartTime?: string;
    /**
     * Meeting metric details.
     */
    liveMeeting?: DashboardZoomRoomZoomRoomMeetingMetrics;
    /**
     * Zoom room location.
     */
    location?: string;
    /**
     * Zoom room microphone.
     */
    microphone?: string;
    pastMeetings?: DashboardZoomRoomZoomRoomPastMeetings;
    /**
     * Zoom room name.
     */
    roomName?: string;
    /**
     * Zoom room speaker.
     */
    speaker?: string;
    /**
     * Zoom room status.
     */
    status?: string;
}
export declare class DashboardZoomRoomResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Zoom room returned.<br>
     * Only available for paid accounts that have enabled the Dashboard feature.
     */
    zoomRoom?: DashboardZoomRoomZoomRoom;
}
