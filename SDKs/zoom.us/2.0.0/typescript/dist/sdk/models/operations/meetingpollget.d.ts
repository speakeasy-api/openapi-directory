import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingPollGetSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class MeetingPollGetRequest extends SpeakeasyBase {
    /**
     * The meeting ID in **long** format. The data type of this field is "long"(represented as int64 in JSON).
     *
     * @remarks
     *
     * While storing it in your database, store it as a **long** data type and **not as an integer**, as the Meeting IDs can be longer than 10 digits.
     */
    meetingId: number;
    /**
     * The poll ID
     */
    pollId: string;
}
/**
 * Poll Question & Answer type:<br>`single` - Single choice<br>`mutliple` - Multiple choice
 */
export declare enum MeetingPollGetPollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class MeetingPollGetPollQuestions extends SpeakeasyBase {
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
    type?: MeetingPollGetPollQuestionsTypeEnum;
}
/**
 * Status of the Meeting Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
 */
export declare enum MeetingPollGetPollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}
/**
 * Poll
 */
export declare class MeetingPollGetPoll extends SpeakeasyBase {
    /**
     * Meeting Poll ID
     */
    id?: string;
    /**
     * Array of Polls
     */
    questions?: MeetingPollGetPollQuestions[];
    /**
     * Status of the Meeting Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
     */
    status?: MeetingPollGetPollStatusEnum;
    /**
     * Title for the poll.
     */
    title?: string;
}
export declare class MeetingPollGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200` <br>
     *
     * @remarks
     * Meeting Poll object returned
     */
    poll?: MeetingPollGetPoll;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
