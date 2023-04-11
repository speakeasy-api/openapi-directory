import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListPastWebinarPollResultsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListPastWebinarPollResultsRequest extends SpeakeasyBase {
    /**
     * The webinar ID or the webinar UUID.  If a webinar ID is provided in the request instead of a UUID, the response will be for the latest webinar instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    webinarId: string;
}
export declare class ListPastWebinarPollResults200ApplicationXMLQuestionsQuestionDetails extends SpeakeasyBase {
    /**
     * Answer submitted by the user.
     */
    answer?: string;
    /**
     * Date and time at which the answer to the poll was submitted.
     */
    dateTime?: Date;
    /**
     * Unique identifier of the poll.
     */
    pollingId?: string;
    /**
     * Question asked during the poll.
     */
    question?: string;
}
export declare class ListPastWebinarPollResults200ApplicationXMLQuestions extends SpeakeasyBase {
    /**
     * Email address of the user who submitted answers to the poll.
     */
    email?: string;
    /**
     * Name of the user who submitted answers to the poll. If "anonymous" option is enabled for a poll, the participant's polling information will be kept anonymous and the value of `name` field will be "Anonymous Attendee".
     */
    name?: string;
    questionDetails?: ListPastWebinarPollResults200ApplicationXMLQuestionsQuestionDetails[];
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Polls returned successfully.
 */
export declare class ListPastWebinarPollResults200ApplicationXML extends SpeakeasyBase {
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    questions?: ListPastWebinarPollResults200ApplicationXMLQuestions[];
    /**
     * The start time of the Webinar.
     */
    startTime?: Date;
    /**
     * Webinar UUID.
     */
    uuid?: string;
}
export declare class ListPastWebinarPollResults200ApplicationJSONQuestionsQuestionDetails extends SpeakeasyBase {
    /**
     * Answer submitted by the user.
     */
    answer?: string;
    /**
     * Date and time at which the answer to the poll was submitted.
     */
    dateTime?: Date;
    /**
     * Unique identifier of the poll.
     */
    pollingId?: string;
    /**
     * Question asked during the poll.
     */
    question?: string;
}
export declare class ListPastWebinarPollResults200ApplicationJSONQuestions extends SpeakeasyBase {
    /**
     * Email address of the user who submitted answers to the poll.
     */
    email?: string;
    /**
     * Name of the user who submitted answers to the poll. If "anonymous" option is enabled for a poll, the participant's polling information will be kept anonymous and the value of `name` field will be "Anonymous Attendee".
     */
    name?: string;
    questionDetails?: ListPastWebinarPollResults200ApplicationJSONQuestionsQuestionDetails[];
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Polls returned successfully.
 */
export declare class ListPastWebinarPollResults200ApplicationJSON extends SpeakeasyBase {
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    questions?: ListPastWebinarPollResults200ApplicationJSONQuestions[];
    /**
     * The start time of the Webinar.
     */
    startTime?: Date;
    /**
     * Webinar UUID.
     */
    uuid?: string;
}
export declare class ListPastWebinarPollResultsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Polls returned successfully.
     */
    listPastWebinarPollResults200ApplicationJSONObject?: ListPastWebinarPollResults200ApplicationJSON;
}
