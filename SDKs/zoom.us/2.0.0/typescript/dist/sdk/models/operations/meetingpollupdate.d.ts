import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingPollUpdateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Poll Question & Answer type:<br>`single` - Single choice<br>`mutliple` - Multiple choice
 */
export declare enum MeetingPollUpdatePollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class MeetingPollUpdatePollQuestions extends SpeakeasyBase {
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
    type?: MeetingPollUpdatePollQuestionsTypeEnum;
}
/**
 * Poll
 */
export declare class MeetingPollUpdatePoll extends SpeakeasyBase {
    /**
     * Array of Polls
     */
    questions?: MeetingPollUpdatePollQuestions[];
    /**
     * Title for the poll.
     */
    title?: string;
}
export declare class MeetingPollUpdateRequest extends SpeakeasyBase {
    /**
     * Meeting Poll
     */
    requestBody: MeetingPollUpdatePoll;
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
export declare class MeetingPollUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
