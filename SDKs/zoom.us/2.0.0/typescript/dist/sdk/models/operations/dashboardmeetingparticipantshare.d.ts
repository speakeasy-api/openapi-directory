import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardMeetingParticipantShareSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The meeting types: <br>`past` - Past meetings.<br>`live` - Live Meetings.
 */
export declare enum DashboardMeetingParticipantShareTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class DashboardMeetingParticipantShareRequest extends SpeakeasyBase {
    /**
     * The meeting ID or the meeting UUID.  If a meeting ID is provided in the request instead of a UUID, the response will be for the latest meeting instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The meeting types: <br>`past` - Past meetings.<br>`live` - Live Meetings.
     */
    type?: DashboardMeetingParticipantShareTypeEnum;
}
export declare class DashboardMeetingParticipantShare200ApplicationXMLParticipantsDetails extends SpeakeasyBase {
    /**
     * Type of content shared.
     */
    content?: string;
    /**
     * End time of sharing.
     */
    endTime?: string;
    /**
     * Start time of sharing.
     */
    startTime?: string;
}
export declare class DashboardMeetingParticipantShare200ApplicationXMLParticipants extends SpeakeasyBase {
    /**
     * Array of sharing and recording details.
     */
    details?: DashboardMeetingParticipantShare200ApplicationXMLParticipantsDetails[];
    /**
     * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank.
     */
    id?: string;
    /**
     * Participant ID. This is a unique ID assigned to the participant joining a meeting and is valid for that meeting only.
     */
    userId?: string;
    /**
     * Participant display name.
     */
    userName?: string;
}
/**
 * Pagination object.
 */
export declare class DashboardMeetingParticipantShare200ApplicationXML extends SpeakeasyBase {
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
     * Array of participants.
     */
    participants?: DashboardMeetingParticipantShare200ApplicationXMLParticipants[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class DashboardMeetingParticipantShare200ApplicationJSONParticipantsDetails extends SpeakeasyBase {
    /**
     * Type of content shared.
     */
    content?: string;
    /**
     * End time of sharing.
     */
    endTime?: string;
    /**
     * Start time of sharing.
     */
    startTime?: string;
}
export declare class DashboardMeetingParticipantShare200ApplicationJSONParticipants extends SpeakeasyBase {
    /**
     * Array of sharing and recording details.
     */
    details?: DashboardMeetingParticipantShare200ApplicationJSONParticipantsDetails[];
    /**
     * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank.
     */
    id?: string;
    /**
     * Participant ID. This is a unique ID assigned to the participant joining a meeting and is valid for that meeting only.
     */
    userId?: string;
    /**
     * Participant display name.
     */
    userName?: string;
}
/**
 * Pagination object.
 */
export declare class DashboardMeetingParticipantShare200ApplicationJSON extends SpeakeasyBase {
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
     * Array of participants.
     */
    participants?: DashboardMeetingParticipantShare200ApplicationJSONParticipants[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class DashboardMeetingParticipantShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Meeting participants returned.
     */
    dashboardMeetingParticipantShare200ApplicationJSONObject?: DashboardMeetingParticipantShare200ApplicationJSON;
}
