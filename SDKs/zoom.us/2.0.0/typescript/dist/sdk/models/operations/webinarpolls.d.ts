import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarPollsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class WebinarPollsRequest extends SpeakeasyBase {
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
/**
 * Poll Question & Answer type:<br>`single` - Single choice<br>`mutliple` - Multiple choice
 */
export declare enum WebinarPollsPollListPollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class WebinarPollsPollListPollQuestions extends SpeakeasyBase {
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
    type?: WebinarPollsPollListPollQuestionsTypeEnum;
}
/**
 * Status of Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
 */
export declare enum WebinarPollsPollListPollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}
/**
 * Poll
 */
export declare class WebinarPollsPollListPoll extends SpeakeasyBase {
    /**
     * ID of Poll
     */
    id?: string;
    /**
     * Array of Polls
     */
    questions?: WebinarPollsPollListPollQuestions[];
    /**
     * Status of Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
     */
    status?: WebinarPollsPollListPollStatusEnum;
    /**
     * Title for the poll.
     */
    title?: string;
}
/**
 * Poll List
 */
export declare class WebinarPollsPollList extends SpeakeasyBase {
    /**
     * Array of Polls
     */
    polls?: WebinarPollsPollListPoll[];
    /**
     * The number of all records available across pages
     */
    totalRecords?: number;
}
export declare class WebinarPollsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * List polls of a Webinar  returned
     */
    pollList?: WebinarPollsPollList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
