import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarPollGetSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class WebinarPollGetRequest extends SpeakeasyBase {
    /**
     * The poll ID
     */
    pollId: string;
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
/**
 * Poll Question & Answer type:<br>`single` - Single choice<br>`mutliple` - Multiple choice
 */
export declare enum WebinarPollGetPollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class WebinarPollGetPollQuestions extends SpeakeasyBase {
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
    type?: WebinarPollGetPollQuestionsTypeEnum;
}
/**
 * Status of the Webinar Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
 */
export declare enum WebinarPollGetPollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}
/**
 * Poll
 */
export declare class WebinarPollGetPoll extends SpeakeasyBase {
    /**
     * Webinar Poll ID
     */
    id?: string;
    /**
     * Array of Polls
     */
    questions?: WebinarPollGetPollQuestions[];
    /**
     * Status of the Webinar Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
     */
    status?: WebinarPollGetPollStatusEnum;
    /**
     * Title for the poll.
     */
    title?: string;
}
export declare class WebinarPollGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Webinar Poll object returned
     */
    poll?: WebinarPollGetPoll;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
