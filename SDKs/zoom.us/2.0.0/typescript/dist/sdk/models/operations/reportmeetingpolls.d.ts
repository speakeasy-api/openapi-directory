import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportMeetingPollsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ReportMeetingPollsRequest extends SpeakeasyBase {
    /**
     * The meeting ID or the meeting UUID.  If a meeting ID is provided in the request instead of a UUID, the response will be for the latest meeting instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
}
export declare class ReportMeetingPolls200ApplicationXMLQuestionsQuestionDetails extends SpeakeasyBase {
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
export declare class ReportMeetingPolls200ApplicationXMLQuestions extends SpeakeasyBase {
    /**
     * Participant email.
     */
    email?: string;
    /**
     * Participant display name.<br> If "anonymous" option is enabled for a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meet), the participant's polling information will be kept anonymous and the value of `name` field will be "Anonymous Attendee".
     */
    name?: string;
    /**
     * Array of questions from user.
     */
    questionDetails?: ReportMeetingPolls200ApplicationXMLQuestionsQuestionDetails[];
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Meeting polls report returned.<br>
 * This is only available for paid account:{accountId}.
 */
export declare class ReportMeetingPolls200ApplicationXML extends SpeakeasyBase {
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * Array of meeting question objects.
     */
    questions?: ReportMeetingPolls200ApplicationXMLQuestions[];
    /**
     * Meeting start time.
     */
    startTime?: Date;
    /**
     * Meeting UUID. Each meeting instance will generate its own UUID(i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). Please double encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
}
export declare class ReportMeetingPolls200ApplicationJSONQuestionsQuestionDetails extends SpeakeasyBase {
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
export declare class ReportMeetingPolls200ApplicationJSONQuestions extends SpeakeasyBase {
    /**
     * Participant email.
     */
    email?: string;
    /**
     * Participant display name.<br> If "anonymous" option is enabled for a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meet), the participant's polling information will be kept anonymous and the value of `name` field will be "Anonymous Attendee".
     */
    name?: string;
    /**
     * Array of questions from user.
     */
    questionDetails?: ReportMeetingPolls200ApplicationJSONQuestionsQuestionDetails[];
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Meeting polls report returned.<br>
 * This is only available for paid account:{accountId}.
 */
export declare class ReportMeetingPolls200ApplicationJSON extends SpeakeasyBase {
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * Array of meeting question objects.
     */
    questions?: ReportMeetingPolls200ApplicationJSONQuestions[];
    /**
     * Meeting start time.
     */
    startTime?: Date;
    /**
     * Meeting UUID. Each meeting instance will generate its own UUID(i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). Please double encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
}
export declare class ReportMeetingPollsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Meeting polls report returned.<br>
     * This is only available for paid account:{accountId}.
     */
    reportMeetingPolls200ApplicationJSONObject?: ReportMeetingPolls200ApplicationJSON;
}
