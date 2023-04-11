import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportWebinarPollsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ReportWebinarPollsRequest extends SpeakeasyBase {
    /**
     * The webinar ID or the webinar UUID.  If a webinar ID is provided in the request instead of a UUID, the response will be for the latest webinar instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    webinarId: string;
}
export declare class ReportWebinarPolls200ApplicationXMLQuestionsQuestionDetails extends SpeakeasyBase {
    /**
     * Given answer.
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
     * Asked question.
     */
    question?: string;
}
export declare class ReportWebinarPolls200ApplicationXMLQuestions extends SpeakeasyBase {
    /**
     * Participant email.
     */
    email?: string;
    /**
     * Participant display name.<br><br> If the poll was created as an anonymous poll, participant's information will remain anonymous and the value of the `name` field will be "Anonymous Attendee".
     */
    name?: string;
    /**
     * Array of questions from user.
     */
    questionDetails?: ReportWebinarPolls200ApplicationXMLQuestionsQuestionDetails[];
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Webinar polls report returned.<br>
 * Missing webinar subscription plan.<br>
 * This is only available for paid account:{accountId}.
 */
export declare class ReportWebinarPolls200ApplicationXML extends SpeakeasyBase {
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    /**
     * Array of webinar question objects.
     */
    questions?: ReportWebinarPolls200ApplicationXMLQuestions[];
    /**
     * Webinar start time.
     */
    startTime?: Date;
    /**
     * Webinar UUID. Each webinar instance will generate its own UUID(i.e., after a Webinar ends, a new UUID will be generated for the next instance of the Webinar). Please double encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
}
export declare class ReportWebinarPolls200ApplicationJSONQuestionsQuestionDetails extends SpeakeasyBase {
    /**
     * Given answer.
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
     * Asked question.
     */
    question?: string;
}
export declare class ReportWebinarPolls200ApplicationJSONQuestions extends SpeakeasyBase {
    /**
     * Participant email.
     */
    email?: string;
    /**
     * Participant display name.<br><br> If the poll was created as an anonymous poll, participant's information will remain anonymous and the value of the `name` field will be "Anonymous Attendee".
     */
    name?: string;
    /**
     * Array of questions from user.
     */
    questionDetails?: ReportWebinarPolls200ApplicationJSONQuestionsQuestionDetails[];
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Webinar polls report returned.<br>
 * Missing webinar subscription plan.<br>
 * This is only available for paid account:{accountId}.
 */
export declare class ReportWebinarPolls200ApplicationJSON extends SpeakeasyBase {
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    /**
     * Array of webinar question objects.
     */
    questions?: ReportWebinarPolls200ApplicationJSONQuestions[];
    /**
     * Webinar start time.
     */
    startTime?: Date;
    /**
     * Webinar UUID. Each webinar instance will generate its own UUID(i.e., after a Webinar ends, a new UUID will be generated for the next instance of the Webinar). Please double encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
}
export declare class ReportWebinarPollsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Webinar polls report returned.<br>
     * Missing webinar subscription plan.<br>
     * This is only available for paid account:{accountId}.
     */
    reportWebinarPolls200ApplicationJSONObject?: ReportWebinarPolls200ApplicationJSON;
}
