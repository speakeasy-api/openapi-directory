import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingPollsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class MeetingPollsRequest extends SpeakeasyBase {
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
 * Poll Question & Answer type:<br>`single` - Single choice<br>`mutliple` - Multiple choice
 */
export declare enum MeetingPollsPollListPollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class MeetingPollsPollListPollQuestions extends SpeakeasyBase {
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
    type?: MeetingPollsPollListPollQuestionsTypeEnum;
}
/**
 * Status of Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
 */
export declare enum MeetingPollsPollListPollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}
/**
 * Poll
 */
export declare class MeetingPollsPollListPoll extends SpeakeasyBase {
    /**
     * ID of Poll
     */
    id?: string;
    /**
     * Array of Polls
     */
    questions?: MeetingPollsPollListPollQuestions[];
    /**
     * Status of Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
     */
    status?: MeetingPollsPollListPollStatusEnum;
    /**
     * Title for the poll.
     */
    title?: string;
}
/**
 * Poll List
 */
export declare class MeetingPollsPollList extends SpeakeasyBase {
    /**
     * Array of Polls
     */
    polls?: MeetingPollsPollListPoll[];
    /**
     * The number of all records available across pages
     */
    totalRecords?: number;
}
export declare class MeetingPollsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** <br>
     *
     * @remarks
     * List polls of a Meeting  returned
     */
    pollList?: MeetingPollsPollList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
