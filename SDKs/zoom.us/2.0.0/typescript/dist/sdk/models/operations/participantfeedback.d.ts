import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Specify a value to get the response for the corresponding meeting type. The value of this field can be one of the following:<br> <br>`past` - Meeting that already occurred in the specified date range.<br>`pastOne` - Past meetings that were attended by only one user. <br>`live` - Live meetings.<br><br>
 *
 * @remarks
 *
 * If you do not provide this field, the default value will be `live` and thus, the API will only query responses for live meetings.
 */
export declare enum ParticipantFeedbackTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class ParticipantFeedbackRequest extends SpeakeasyBase {
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
    /**
     * Specify a value to get the response for the corresponding meeting type. The value of this field can be one of the following:<br> <br>`past` - Meeting that already occurred in the specified date range.<br>`pastOne` - Past meetings that were attended by only one user. <br>`live` - Live meetings.<br><br>
     *
     * @remarks
     *
     * If you do not provide this field, the default value will be `live` and thus, the API will only query responses for live meetings.
     */
    type?: ParticipantFeedbackTypeEnum;
}
/**
 * Feedback submitted by the participant.
 *
 * @remarks
 *
 * * `GOOD`: Thumbs up.
 * * `NOT GOOD`: Thumbs down.
 */
export declare enum ParticipantFeedback200ApplicationXMLParticipantsQualityEnum {
    Good = "GOOD",
    NotGood = "NOT GOOD"
}
export declare class ParticipantFeedback200ApplicationXMLParticipants extends SpeakeasyBase {
    /**
     * Date and time at which the feedback was submitted.
     */
    dateTime?: Date;
    /**
     * Email address of the participant.
     */
    email?: string;
    /**
     * Feedback submitted by the participant.
     *
     * @remarks
     *
     * * `GOOD`: Thumbs up.
     * * `NOT GOOD`: Thumbs down.
     */
    quality?: ParticipantFeedback200ApplicationXMLParticipantsQualityEnum;
    /**
     * User ID of the participant.
     */
    userId?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 *
 *
 */
export declare class ParticipantFeedback200ApplicationXML extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    participants?: ParticipantFeedback200ApplicationXMLParticipants[];
}
/**
 * Feedback submitted by the participant.
 *
 * @remarks
 *
 * * `GOOD`: Thumbs up.
 * * `NOT GOOD`: Thumbs down.
 */
export declare enum ParticipantFeedback200ApplicationJSONParticipantsQualityEnum {
    Good = "GOOD",
    NotGood = "NOT GOOD"
}
export declare class ParticipantFeedback200ApplicationJSONParticipants extends SpeakeasyBase {
    /**
     * Date and time at which the feedback was submitted.
     */
    dateTime?: Date;
    /**
     * Email address of the participant.
     */
    email?: string;
    /**
     * Feedback submitted by the participant.
     *
     * @remarks
     *
     * * `GOOD`: Thumbs up.
     * * `NOT GOOD`: Thumbs down.
     */
    quality?: ParticipantFeedback200ApplicationJSONParticipantsQualityEnum;
    /**
     * User ID of the participant.
     */
    userId?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 *
 *
 */
export declare class ParticipantFeedback200ApplicationJSON extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    participants?: ParticipantFeedback200ApplicationJSONParticipants[];
}
export declare class ParticipantFeedbackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     *
     *
     */
    participantFeedback200ApplicationJSONObject?: ParticipantFeedback200ApplicationJSON;
}
