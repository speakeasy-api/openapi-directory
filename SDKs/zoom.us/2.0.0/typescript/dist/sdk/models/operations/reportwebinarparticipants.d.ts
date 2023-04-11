import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportWebinarParticipantsSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Enter 'registrant_id' as the value for this field if you would like to see the registrant ID attribute included in the response of this API call. A registrant ID is a unique identifier of a [webinar registrant](https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinarregistrants).<br>
 *
 * @remarks
 *
 *
 */
export declare enum ReportWebinarParticipantsIncludeFieldsEnum {
    RegistrantId = "registrant_id"
}
export declare class ReportWebinarParticipantsRequest extends SpeakeasyBase {
    /**
     * Enter 'registrant_id' as the value for this field if you would like to see the registrant ID attribute included in the response of this API call. A registrant ID is a unique identifier of a [webinar registrant](https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinarregistrants).<br>
     *
     * @remarks
     *
     *
     */
    includeFields?: ReportWebinarParticipantsIncludeFieldsEnum;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The webinar ID or the webinar UUID.  If a webinar ID is provided in the request instead of a UUID, the response will be for the latest webinar instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    webinarId: string;
}
export declare class ReportWebinarParticipants200ApplicationXMLParticipants extends SpeakeasyBase {
    /**
     * Another identifier for the participant. Can be a number or characters, maximum length of 15 characters.
     */
    customerKey?: string;
    /**
     * Participant duration.
     */
    duration?: number;
    /**
     * Indicates if failover happened during the webinar.
     */
    failover?: boolean;
    /**
     * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank.
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
     * Participant email.
     */
    userEmail?: string;
    /**
     * Participant ID. This is a unique ID assigned to the participant joining the webinar and is valid for that webinar only.
     */
    userId?: string;
}
/**
 * Pagination object.
 */
export declare class ReportWebinarParticipants200ApplicationXML extends SpeakeasyBase {
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
     * Array of webinar participant objects.
     */
    participants?: ReportWebinarParticipants200ApplicationXMLParticipants[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class ReportWebinarParticipants200ApplicationJSONParticipants extends SpeakeasyBase {
    /**
     * Another identifier for the participant. Can be a number or characters, maximum length of 15 characters.
     */
    customerKey?: string;
    /**
     * Participant duration.
     */
    duration?: number;
    /**
     * Indicates if failover happened during the webinar.
     */
    failover?: boolean;
    /**
     * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank.
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
     * Participant email.
     */
    userEmail?: string;
    /**
     * Participant ID. This is a unique ID assigned to the participant joining the webinar and is valid for that webinar only.
     */
    userId?: string;
}
/**
 * Pagination object.
 */
export declare class ReportWebinarParticipants200ApplicationJSON extends SpeakeasyBase {
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
     * Array of webinar participant objects.
     */
    participants?: ReportWebinarParticipants200ApplicationJSONParticipants[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class ReportWebinarParticipantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Meeting participants report returned.<br>
     * This is only available for paid account: {accountId}.
     */
    reportWebinarParticipants200ApplicationJSONObject?: ReportWebinarParticipants200ApplicationJSON;
}
