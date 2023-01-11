import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateBatchPollsPathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare enum CreateBatchPollsApplicationJsonQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class CreateBatchPollsApplicationJsonQuestions extends SpeakeasyBase {
    answers?: string[];
    name?: string;
    type?: CreateBatchPollsApplicationJsonQuestionsTypeEnum;
}
export declare class CreateBatchPollsApplicationJson extends SpeakeasyBase {
    questions?: CreateBatchPollsApplicationJsonQuestions[];
    title?: string;
}
export declare enum CreateBatchPollsMultipartFormDataQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class CreateBatchPollsMultipartFormDataQuestions extends SpeakeasyBase {
    answers?: string[];
    name?: string;
    type?: CreateBatchPollsMultipartFormDataQuestionsTypeEnum;
}
export declare class CreateBatchPollsMultipartFormData1 extends SpeakeasyBase {
    questions?: CreateBatchPollsMultipartFormDataQuestions[];
    title?: string;
}
export declare class CreateBatchPollsRequests extends SpeakeasyBase {
    object?: CreateBatchPollsApplicationJson;
    object1?: CreateBatchPollsMultipartFormData1;
}
export declare enum CreateBatchPolls201ApplicationJsonPollsQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class CreateBatchPolls201ApplicationJsonPollsQuestions extends SpeakeasyBase {
    answers?: string[];
    name?: string;
    type?: CreateBatchPolls201ApplicationJsonPollsQuestionsTypeEnum;
}
export declare enum CreateBatchPolls201ApplicationJsonPollsStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}
export declare class CreateBatchPolls201ApplicationJsonPolls extends SpeakeasyBase {
    id?: string;
    questions?: CreateBatchPolls201ApplicationJsonPollsQuestions[];
    status?: CreateBatchPolls201ApplicationJsonPollsStatusEnum;
    title?: string;
}
export declare class CreateBatchPolls201ApplicationJson extends SpeakeasyBase {
    polls?: CreateBatchPolls201ApplicationJsonPolls[];
}
export declare class CreateBatchPollsRequest extends SpeakeasyBase {
    pathParams: CreateBatchPollsPathParams;
    request?: CreateBatchPollsRequests;
}
export declare class CreateBatchPollsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    createBatchPolls201ApplicationJSONObject?: CreateBatchPolls201ApplicationJson;
}
