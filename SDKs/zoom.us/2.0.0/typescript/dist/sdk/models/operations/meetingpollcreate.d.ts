import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingPollCreateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Poll Question & Answer type:<br>`single` - Single choice<br>`mutliple` - Multiple choice
 */
export declare enum MeetingPollCreatePollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class MeetingPollCreatePollQuestions extends SpeakeasyBase {
    /**
     * Answers to the questions
     */
    answers?: string[];
    /**
     * Question to be asked to the attendees.
     */
    name?: string;
    /**
     * Poll Question & Answer type:<br>`single` - Single choice<br>`mutliple` - Multiple choice
     */
    type?: MeetingPollCreatePollQuestionsTypeEnum;
}
/**
 * Poll
 */
export declare class MeetingPollCreatePoll extends SpeakeasyBase {
    /**
     * Array of Polls
     */
    questions?: MeetingPollCreatePollQuestions[];
    /**
     * Title for the poll.
     */
    title?: string;
}
export declare class MeetingPollCreateRequest extends SpeakeasyBase {
    /**
     * Meeting poll object
     */
    requestBody: MeetingPollCreatePoll;
    /**
     * The meeting ID in **long** format. The data type of this field is "long"(represented as int64 in JSON).
     *
     * @remarks
     *
     * While storing it in your database, store it as a **long** data type and **not as an integer**, as the Meeting IDs can be longer than 10 digits.
     */
    meetingId: number;
}
/**
 * Status of the Meeting Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
 */
export declare enum MeetingPollCreatePollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}
/**
 * Poll
 */
export declare class MeetingPollCreatePoll2 extends SpeakeasyBase {
    /**
     * Meeting Poll ID
     */
    id?: string;
    /**
     * Array of Polls
     */
    questions?: MeetingPollCreatePollQuestions[];
    /**
     * Status of the Meeting Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
     */
    status?: MeetingPollCreatePollStatusEnum;
    /**
     * Title for the poll.
     */
    title?: string;
}
export declare class MeetingPollCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * **HTTP Status Code:** `201` <br>
     *
     * @remarks
     * Meeting Poll Created
     */
    poll?: MeetingPollCreatePoll2;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
