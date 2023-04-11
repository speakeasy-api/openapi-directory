import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardWebinarParticipantShareSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The webinar type.
 */
export declare enum DashboardWebinarParticipantShareTypeEnum {
    Past = "past",
    Live = "live"
}
export declare class DashboardWebinarParticipantShareRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The webinar type.
     */
    type?: DashboardWebinarParticipantShareTypeEnum;
    /**
     * The webinar ID or the webinar UUID.  If a webinar ID is provided in the request instead of a UUID, the response will be for the latest webinar instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    webinarId: string;
}
export declare class DashboardWebinarParticipantShare200ApplicationXMLParticipantsDetails extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantShare200ApplicationXMLParticipants extends SpeakeasyBase {
    /**
     * Array of sharing and recording details.
     */
    details?: DashboardWebinarParticipantShare200ApplicationXMLParticipantsDetails[];
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
export declare class DashboardWebinarParticipantShare200ApplicationXML extends SpeakeasyBase {
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
    participants?: DashboardWebinarParticipantShare200ApplicationXMLParticipants[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class DashboardWebinarParticipantShare200ApplicationJSONParticipantsDetails extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantShare200ApplicationJSONParticipants extends SpeakeasyBase {
    /**
     * Array of sharing and recording details.
     */
    details?: DashboardWebinarParticipantShare200ApplicationJSONParticipantsDetails[];
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
export declare class DashboardWebinarParticipantShare200ApplicationJSON extends SpeakeasyBase {
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
    participants?: DashboardWebinarParticipantShare200ApplicationJSONParticipants[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class DashboardWebinarParticipantShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Webinar participants returned.<br>
     * Only available for paid accounts that have enabled the Dashboard feature.
     */
    dashboardWebinarParticipantShare200ApplicationJSONObject?: DashboardWebinarParticipantShare200ApplicationJSON;
}
