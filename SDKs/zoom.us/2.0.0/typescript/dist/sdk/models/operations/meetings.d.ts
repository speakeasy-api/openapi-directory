import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingsSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The meeting types: <br>`scheduled` - This includes all valid past meetings (unexpired), live meetings and upcoming scheduled meetings. It is equivalent to the combined list of "Previous Meetings" and "Upcoming Meetings" displayed in the user's [Meetings page](https://zoom.us/meeting) on the Zoom Web Portal.<br>`live` - All the ongoing meetings.<br>`upcoming` - All upcoming meetings including live meetings.
 */
export declare enum MeetingsTypeEnum {
    Scheduled = "scheduled",
    Live = "live",
    Upcoming = "upcoming"
}
export declare class MeetingsRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The page number of the current page in the returned records.
     */
    pageNumber?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The meeting types: <br>`scheduled` - This includes all valid past meetings (unexpired), live meetings and upcoming scheduled meetings. It is equivalent to the combined list of "Previous Meetings" and "Upcoming Meetings" displayed in the user's [Meetings page](https://zoom.us/meeting) on the Zoom Web Portal.<br>`live` - All the ongoing meetings.<br>`upcoming` - All upcoming meetings including live meetings.
     */
    type?: MeetingsTypeEnum;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
/**
 * Meeting Types:<br>`1` - Instant meeting.<br>`2` - Scheduled meeting.<br>`3` - Recurring meeting with no fixed time.<br>`8` - Recurring meeting with fixed time.
 */
export declare enum MeetingsGroupListMeetingsTypeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Eight = "8"
}
export declare class MeetingsGroupListMeetings extends SpeakeasyBase {
    /**
     * Meeting description. The length of agenda gets truncated to 250 characters when you list all meetings for a user. To view the complete agenda of a meeting, retrieve details for a single meeting [here](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meeting).
     */
    agenda?: string;
    /**
     * Time of creation.
     */
    createdAt?: Date;
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * ID of the user who is set as the host of the meeting.
     */
    hostId?: string;
    /**
     * Meeting ID - also known as the meeting number in long (int64) format.
     */
    id?: number;
    /**
     * URL using which participants can join a meeting.
     */
    joinUrl?: string;
    /**
     * [Personal meeting ID](https://support.zoom.us/hc/en-us/articles/201362843-What-is-Personal-Meeting-ID-PMI-and-Personal-Link-). This field is only returned if PMI was used to schedule the meeting.
     */
    pmi?: string;
    /**
     * Meeting start time.
     */
    startTime?: Date;
    /**
     * Timezone to format the meeting start time.
     */
    timezone?: string;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Meeting Types:<br>`1` - Instant meeting.<br>`2` - Scheduled meeting.<br>`3` - Recurring meeting with no fixed time.<br>`8` - Recurring meeting with fixed time.
     */
    type?: MeetingsGroupListMeetingsTypeEnum;
    /**
     * Unique Meeting ID. Each meeting instance will generate its own Meeting UUID.
     */
    uuid?: string;
}
/**
 * Pagination Object.
 */
export declare class MeetingsGroupList extends SpeakeasyBase {
    /**
     * List of Meeting objects.
     */
    meetings?: MeetingsGroupListMeetings[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
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
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
}
export declare class MeetingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * List of meeting objects returned.
     */
    groupList?: MeetingsGroupList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
