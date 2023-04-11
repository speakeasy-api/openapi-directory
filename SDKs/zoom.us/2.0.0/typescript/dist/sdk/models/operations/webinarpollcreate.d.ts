import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarPollCreateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Poll Question & Answer type:<br>`single` - Single choice<br>`mutliple` - Multiple choice
 */
export declare enum WebinarPollCreatePollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class WebinarPollCreatePollQuestions extends SpeakeasyBase {
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
    type?: WebinarPollCreatePollQuestionsTypeEnum;
}
/**
 * Poll
 */
export declare class WebinarPollCreatePoll extends SpeakeasyBase {
    /**
     * Array of Polls
     */
    questions?: WebinarPollCreatePollQuestions[];
    /**
     * Title for the poll.
     */
    title?: string;
}
export declare class WebinarPollCreateRequest extends SpeakeasyBase {
    /**
     * Webinar poll object
     */
    requestBody: WebinarPollCreatePoll;
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
/**
 * Status of the Webinar Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
 */
export declare enum WebinarPollCreatePollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}
/**
 * Poll
 */
export declare class WebinarPollCreatePoll2 extends SpeakeasyBase {
    /**
     * Webinar Poll ID
     */
    id?: string;
    /**
     * Array of Polls
     */
    questions?: WebinarPollCreatePollQuestions[];
    /**
     * Status of the Webinar Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
     */
    status?: WebinarPollCreatePollStatusEnum;
    /**
     * Title for the poll.
     */
    title?: string;
}
export declare class WebinarPollCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * **HTTP Status Code:** `201`<br>
     *
     * @remarks
     * Webinar Poll Created
     */
    poll?: WebinarPollCreatePoll2;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
