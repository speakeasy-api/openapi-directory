import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardMeetingDetailSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The meeting types: <br>`past` - Past meetings.<br>`pastOne` - Past one user meetings.<br>`live` - Live meetings.
 */
export declare enum DashboardMeetingDetailTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class DashboardMeetingDetailRequest extends SpeakeasyBase {
    /**
     * The meeting ID or the meeting UUID.  If a meeting ID is provided in the request instead of a UUID, the response will be for the latest meeting instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
    /**
     * The meeting types: <br>`past` - Past meetings.<br>`pastOne` - Past one user meetings.<br>`live` - Live meetings.
     */
    type?: DashboardMeetingDetailTypeEnum;
}
export declare class DashboardMeetingDetailMeetingMetricsCustomKeys extends SpeakeasyBase {
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
export declare class DashboardMeetingDetailMeetingMetrics extends SpeakeasyBase {
    /**
     * Custom keys and values assigned to the meeting.
     */
    customKeys?: DashboardMeetingDetailMeetingMetricsCustomKeys[];
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
export declare class DashboardMeetingDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Meeting returned.<br>
     * Only available for paid accounts that have enabled the dashboard feature.
     */
    meetingMetrics?: DashboardMeetingDetailMeetingMetrics;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
