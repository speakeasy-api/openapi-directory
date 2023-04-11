import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportMeetingParticipantsSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Provide `registrant_id` as the value for this field if you would like to see the registrant ID attribute in the response of this API call. A registrant ID is a unique identifier of a [meeting registrant](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingregistrants).<br>
 *
 * @remarks
 *
 *
 */
export declare enum ReportMeetingParticipantsIncludeFieldsEnum {
    RegistrantId = "registrant_id"
}
export declare class ReportMeetingParticipantsRequest extends SpeakeasyBase {
    /**
     * Provide `registrant_id` as the value for this field if you would like to see the registrant ID attribute in the response of this API call. A registrant ID is a unique identifier of a [meeting registrant](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingregistrants).<br>
     *
     * @remarks
     *
     *
     */
    includeFields?: ReportMeetingParticipantsIncludeFieldsEnum;
    /**
     * The meeting ID or the meeting UUID.  If a meeting ID is provided in the request instead of a UUID, the response will be for the latest meeting instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
}
export declare class ReportMeetingParticipants200ApplicationXMLParticipants extends SpeakeasyBase {
    /**
     * Another identifier for the participant. Can be a number or characters, maximum length of 15 characters.
     */
    customerKey?: string;
    /**
     * Participant duration.
     */
    duration?: number;
    /**
     * Indicates if failover happened during the meeting.
     */
    failover?: boolean;
    /**
     * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank..
     */
    id?: string;
    /**
     * Participant join time.
     */
    joinTime?: Date;
    /**
     * Participant leave time.
     */
    leaveTime?: Date;
    /**
     * Participant display name.
     */
    name?: string;
    /**
     * Unique identifier of the registrant. This field is only returned if you entered "registrant_id" as the value of `include_fields` query parameter.
     */
    registrantId?: string;
    /**
     * Participant email.
     */
    userEmail?: string;
    /**
     * Participant ID. This is a unique ID assigned to the participant joining a meeting and is valid for that meeting only.
     */
    userId?: string;
}
/**
 * Pagination object.
 */
export declare class ReportMeetingParticipants200ApplicationXML extends SpeakeasyBase {
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
    participants?: ReportMeetingParticipants200ApplicationXMLParticipants[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class ReportMeetingParticipants200ApplicationJSONParticipants extends SpeakeasyBase {
    /**
     * Another identifier for the participant. Can be a number or characters, maximum length of 15 characters.
     */
    customerKey?: string;
    /**
     * Participant duration.
     */
    duration?: number;
    /**
     * Indicates if failover happened during the meeting.
     */
    failover?: boolean;
    /**
     * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank..
     */
    id?: string;
    /**
     * Participant join time.
     */
    joinTime?: Date;
    /**
     * Participant leave time.
     */
    leaveTime?: Date;
    /**
     * Participant display name.
     */
    name?: string;
    /**
     * Unique identifier of the registrant. This field is only returned if you entered "registrant_id" as the value of `include_fields` query parameter.
     */
    registrantId?: string;
    /**
     * Participant email.
     */
    userEmail?: string;
    /**
     * Participant ID. This is a unique ID assigned to the participant joining a meeting and is valid for that meeting only.
     */
    userId?: string;
}
/**
 * Pagination object.
 */
export declare class ReportMeetingParticipants200ApplicationJSON extends SpeakeasyBase {
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
    participants?: ReportMeetingParticipants200ApplicationJSONParticipants[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class ReportMeetingParticipantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Meeting participants report returned.<br>
     * This is only available for paid account.
     */
    reportMeetingParticipants200ApplicationJSONObject?: ReportMeetingParticipants200ApplicationJSON;
}
