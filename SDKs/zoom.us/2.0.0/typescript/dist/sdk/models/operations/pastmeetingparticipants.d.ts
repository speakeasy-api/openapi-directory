import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PastMeetingParticipantsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class PastMeetingParticipantsRequest extends SpeakeasyBase {
    /**
     * The meeting UUID. Each meeting instance will generate its own Meeting UUID (i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). Please double encode your UUID when using it for other API calls if the UUID begins with a '/'or contains '//' in it.
     */
    meetingUUID: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
}
export declare class PastMeetingParticipants200ApplicationXMLParticipants extends SpeakeasyBase {
    /**
     * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank.
     */
    id?: string;
    /**
     * Participant display name.
     */
    name?: string;
    /**
     * Email address of the user. This field will be returned if the user logged into Zoom to join the meeting.
     */
    userEmail?: string;
}
/**
 * Pagination object.
 */
export declare class PastMeetingParticipants200ApplicationXML extends SpeakeasyBase {
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
     * Array of meeting participant objects.
     */
    participants?: PastMeetingParticipants200ApplicationXMLParticipants[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class PastMeetingParticipants200ApplicationJSONParticipants extends SpeakeasyBase {
    /**
     * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank.
     */
    id?: string;
    /**
     * Participant display name.
     */
    name?: string;
    /**
     * Email address of the user. This field will be returned if the user logged into Zoom to join the meeting.
     */
    userEmail?: string;
}
/**
 * Pagination object.
 */
export declare class PastMeetingParticipants200ApplicationJSON extends SpeakeasyBase {
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
     * Array of meeting participant objects.
     */
    participants?: PastMeetingParticipants200ApplicationJSONParticipants[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class PastMeetingParticipantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Meeting participants' report returned.
     */
    pastMeetingParticipants200ApplicationJSONObject?: PastMeetingParticipants200ApplicationJSON;
}
