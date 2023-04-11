import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarPollUpdateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Poll Question & Answer type:<br>`single` - Single choice<br>`mutliple` - Multiple choice
 */
export declare enum WebinarPollUpdatePollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class WebinarPollUpdatePollQuestions extends SpeakeasyBase {
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
    type?: WebinarPollUpdatePollQuestionsTypeEnum;
}
/**
 * Poll
 */
export declare class WebinarPollUpdatePoll extends SpeakeasyBase {
    /**
     * Array of Polls
     */
    questions?: WebinarPollUpdatePollQuestions[];
    /**
     * Title for the poll.
     */
    title?: string;
}
export declare class WebinarPollUpdateRequest extends SpeakeasyBase {
    /**
     * Webinar Poll
     */
    requestBody: WebinarPollUpdatePoll;
    /**
     * The poll ID
     */
    pollId: string;
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
export declare class WebinarPollUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
