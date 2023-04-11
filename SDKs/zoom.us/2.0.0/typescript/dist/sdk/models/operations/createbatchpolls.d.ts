import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Question type:<br>`single` - Single choice<br>`mutliple` - Multiple choice
 */
export declare enum CreateBatchPollsApplicationJSONQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class CreateBatchPollsApplicationJSONQuestions extends SpeakeasyBase {
    /**
     * Possible answers for the question.
     */
    answers?: string[];
    /**
     * Name of the question.
     */
    name?: string;
    /**
     * Question type:<br>`single` - Single choice<br>`mutliple` - Multiple choice
     */
    type?: CreateBatchPollsApplicationJSONQuestionsTypeEnum;
}
/**
 * Batch Meeting poll object
 */
export declare class CreateBatchPollsApplicationJSON extends SpeakeasyBase {
    questions?: CreateBatchPollsApplicationJSONQuestions[];
    /**
     * Meeting Poll Title.
     */
    title?: string;
}
export declare class CreateBatchPollsRequest extends SpeakeasyBase {
    /**
     * Batch Meeting poll object
     */
    requestBody?: CreateBatchPollsApplicationJSON;
    meetingId: string;
}
/**
 * Poll question and answer type.
 */
export declare enum CreateBatchPolls201ApplicationXMLPollsQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class CreateBatchPolls201ApplicationXMLPollsQuestions extends SpeakeasyBase {
    /**
     * Answers to questons
     */
    answers?: string[];
    /**
     * Name of question.
     */
    name?: string;
    /**
     * Poll question and answer type.
     */
    type?: CreateBatchPolls201ApplicationXMLPollsQuestionsTypeEnum;
}
/**
 * Status of the Meeting Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
 */
export declare enum CreateBatchPolls201ApplicationXMLPollsStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}
export declare class CreateBatchPolls201ApplicationXMLPolls extends SpeakeasyBase {
    /**
     * Meeting Poll ID
     */
    id?: string;
    questions?: CreateBatchPolls201ApplicationXMLPollsQuestions[];
    /**
     * Status of the Meeting Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
     */
    status?: CreateBatchPolls201ApplicationXMLPollsStatusEnum;
    /**
     * Title for the Poll
     */
    title?: string;
}
/**
 * **HTTP Status Code:** `201` <br>
 *
 * @remarks
 * Meeting Poll Created
 */
export declare class CreateBatchPolls201ApplicationXML extends SpeakeasyBase {
    polls?: CreateBatchPolls201ApplicationXMLPolls[];
}
/**
 * Poll question and answer type.
 */
export declare enum CreateBatchPolls201ApplicationJSONPollsQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class CreateBatchPolls201ApplicationJSONPollsQuestions extends SpeakeasyBase {
    /**
     * Answers to questons
     */
    answers?: string[];
    /**
     * Name of question.
     */
    name?: string;
    /**
     * Poll question and answer type.
     */
    type?: CreateBatchPolls201ApplicationJSONPollsQuestionsTypeEnum;
}
/**
 * Status of the Meeting Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
 */
export declare enum CreateBatchPolls201ApplicationJSONPollsStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}
export declare class CreateBatchPolls201ApplicationJSONPolls extends SpeakeasyBase {
    /**
     * Meeting Poll ID
     */
    id?: string;
    questions?: CreateBatchPolls201ApplicationJSONPollsQuestions[];
    /**
     * Status of the Meeting Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
     */
    status?: CreateBatchPolls201ApplicationJSONPollsStatusEnum;
    /**
     * Title for the Poll
     */
    title?: string;
}
/**
 * **HTTP Status Code:** `201` <br>
 *
 * @remarks
 * Meeting Poll Created
 */
export declare class CreateBatchPolls201ApplicationJSON extends SpeakeasyBase {
    polls?: CreateBatchPolls201ApplicationJSONPolls[];
}
export declare class CreateBatchPollsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201` <br>
     *
     * @remarks
     * Meeting Poll Created
     */
    createBatchPolls201ApplicationJSONObject?: CreateBatchPolls201ApplicationJSON;
}
