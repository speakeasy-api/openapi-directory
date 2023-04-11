import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportWebinarQASecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ReportWebinarQARequest extends SpeakeasyBase {
    /**
     * The webinar ID or the webinar UUID.  If a webinar ID is provided in the request instead of a UUID, the response will be for the latest webinar instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    webinarId: string;
}
export declare class ReportWebinarQa200ApplicationXMLQuestionsQuestionDetails extends SpeakeasyBase {
    /**
     * Given answer.
     */
    answer?: string;
    /**
     * Asked question.
     */
    question?: string;
}
export declare class ReportWebinarQa200ApplicationXMLQuestions extends SpeakeasyBase {
    /**
     * Participant email.
     */
    email?: string;
    /**
     * Participant display name.<br>
     *
     * @remarks
     *
     * If anonymous [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Getting-Started-with-Question-Answer) option is enabled and if a participant submits the Q&A without providing their name, the value of the `name` field will be "Anonymous Attendee".
     */
    name?: string;
    /**
     * Array of questions from user.
     */
    questionDetails?: ReportWebinarQa200ApplicationXMLQuestionsQuestionDetails[];
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Webinar Q&A report returned.<br>
 * This is only available for paid account:{accountId}.<br>
 * A report cannot be generated for this account because this account has not subscribed to a webinar plan.
 */
export declare class ReportWebinarQa200ApplicationXML extends SpeakeasyBase {
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    /**
     * Array of webinar question objects.
     */
    questions?: ReportWebinarQa200ApplicationXMLQuestions[];
    /**
     * Webinar start time.
     */
    startTime?: Date;
    /**
     * Webinar UUID. Each Webinar instance will generate its own UUID(i.e., after a Webinar ends, a new UUID will be generated for the next instance of the Webinar). Please double encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
}
export declare class ReportWebinarQa200ApplicationJSONQuestionsQuestionDetails extends SpeakeasyBase {
    /**
     * Given answer.
     */
    answer?: string;
    /**
     * Asked question.
     */
    question?: string;
}
export declare class ReportWebinarQa200ApplicationJSONQuestions extends SpeakeasyBase {
    /**
     * Participant email.
     */
    email?: string;
    /**
     * Participant display name.<br>
     *
     * @remarks
     *
     * If anonymous [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Getting-Started-with-Question-Answer) option is enabled and if a participant submits the Q&A without providing their name, the value of the `name` field will be "Anonymous Attendee".
     */
    name?: string;
    /**
     * Array of questions from user.
     */
    questionDetails?: ReportWebinarQa200ApplicationJSONQuestionsQuestionDetails[];
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Webinar Q&A report returned.<br>
 * This is only available for paid account:{accountId}.<br>
 * A report cannot be generated for this account because this account has not subscribed to a webinar plan.
 */
export declare class ReportWebinarQa200ApplicationJSON extends SpeakeasyBase {
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    /**
     * Array of webinar question objects.
     */
    questions?: ReportWebinarQa200ApplicationJSONQuestions[];
    /**
     * Webinar start time.
     */
    startTime?: Date;
    /**
     * Webinar UUID. Each Webinar instance will generate its own UUID(i.e., after a Webinar ends, a new UUID will be generated for the next instance of the Webinar). Please double encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
}
export declare class ReportWebinarQAResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Webinar Q&A report returned.<br>
     * This is only available for paid account:{accountId}.<br>
     * A report cannot be generated for this account because this account has not subscribed to a webinar plan.
     */
    reportWebinarQA200ApplicationJSONObject?: ReportWebinarQa200ApplicationJSON;
}
