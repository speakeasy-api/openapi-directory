import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListPastMeetingPollsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListPastMeetingPollsRequest extends SpeakeasyBase {
    /**
     * The meeting ID or the meeting UUID.  If a meeting ID is provided in the request instead of a UUID, the response will be for the latest meeting instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
}
export declare class ListPastMeetingPolls200ApplicationXMLQuestionsQuestionDetails extends SpeakeasyBase {
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
export declare class ListPastMeetingPolls200ApplicationXMLQuestions extends SpeakeasyBase {
    /**
     * Email address of the user who submitted answers to the poll.
     */
    email?: string;
    /**
     * Name of the user who submitted answers to the poll. If "anonymous" option is enabled for a poll, the participant's polling information will be kept anonymous and the value of `name` field will be "Anonymous Attendee".
     */
    name?: string;
    questionDetails?: ListPastMeetingPolls200ApplicationXMLQuestionsQuestionDetails[];
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Polls returned successfully.
 */
export declare class ListPastMeetingPolls200ApplicationXML extends SpeakeasyBase {
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    questions?: ListPastMeetingPolls200ApplicationXMLQuestions[];
    /**
     * The start time of the meeting.
     */
    startTime?: Date;
    /**
     * Meeting UUID.
     */
    uuid?: string;
}
export declare class ListPastMeetingPolls200ApplicationJSONQuestionsQuestionDetails extends SpeakeasyBase {
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
export declare class ListPastMeetingPolls200ApplicationJSONQuestions extends SpeakeasyBase {
    /**
     * Email address of the user who submitted answers to the poll.
     */
    email?: string;
    /**
     * Name of the user who submitted answers to the poll. If "anonymous" option is enabled for a poll, the participant's polling information will be kept anonymous and the value of `name` field will be "Anonymous Attendee".
     */
    name?: string;
    questionDetails?: ListPastMeetingPolls200ApplicationJSONQuestionsQuestionDetails[];
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Polls returned successfully.
 */
export declare class ListPastMeetingPolls200ApplicationJSON extends SpeakeasyBase {
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    questions?: ListPastMeetingPolls200ApplicationJSONQuestions[];
    /**
     * The start time of the meeting.
     */
    startTime?: Date;
    /**
     * Meeting UUID.
     */
    uuid?: string;
}
export declare class ListPastMeetingPollsResponse extends SpeakeasyBase {
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
    listPastMeetingPolls200ApplicationJSONObject?: ListPastMeetingPolls200ApplicationJSON;
}
