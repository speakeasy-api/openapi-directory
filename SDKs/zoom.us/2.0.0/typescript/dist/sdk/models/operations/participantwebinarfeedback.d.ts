import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Specify a value to get the response for the corresponding meeting type. The value of this field can be one of the following:<br> <br>`past` - Meeting that already occurred in the specified date range.<br>`pastOne` - Past meetings that were attended by only one user. <br>`live` - Live meetings.<br><br>
 *
 * @remarks
 *
 * If you do not provide this field, the default value will be `live` and thus, the API will only query responses for live meetings.
 */
export declare enum ParticipantWebinarFeedbackTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class ParticipantWebinarFeedbackRequest extends SpeakeasyBase {
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
    type?: ParticipantWebinarFeedbackTypeEnum;
    /**
     * The webinar ID or the webinar UUID.  If a webinar ID is provided in the request instead of a UUID, the response will be for the latest webinar instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    webinarId: string;
}
/**
 * Feedback submitted by the participant.
 *
 * @remarks
 *
 * * `GOOD`: Thumbs up.
 * * `NOT GOOD`: Thumbs down.
 */
export declare enum ParticipantWebinarFeedback200ApplicationXMLParticipantsQualityEnum {
    Good = "GOOD",
    NotGood = "NOT GOOD"
}
export declare class ParticipantWebinarFeedback200ApplicationXMLParticipants extends SpeakeasyBase {
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
    quality?: ParticipantWebinarFeedback200ApplicationXMLParticipantsQualityEnum;
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
export declare class ParticipantWebinarFeedback200ApplicationXML extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    participants?: ParticipantWebinarFeedback200ApplicationXMLParticipants[];
}
/**
 * Feedback submitted by the participant.
 *
 * @remarks
 *
 * * `GOOD`: Thumbs up.
 * * `NOT GOOD`: Thumbs down.
 */
export declare enum ParticipantWebinarFeedback200ApplicationJSONParticipantsQualityEnum {
    Good = "GOOD",
    NotGood = "NOT GOOD"
}
export declare class ParticipantWebinarFeedback200ApplicationJSONParticipants extends SpeakeasyBase {
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
    quality?: ParticipantWebinarFeedback200ApplicationJSONParticipantsQualityEnum;
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
export declare class ParticipantWebinarFeedback200ApplicationJSON extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    participants?: ParticipantWebinarFeedback200ApplicationJSONParticipants[];
}
export declare class ParticipantWebinarFeedbackResponse extends SpeakeasyBase {
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
    participantWebinarFeedback200ApplicationJSONObject?: ParticipantWebinarFeedback200ApplicationJSON;
}
