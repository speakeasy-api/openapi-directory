import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarPollsPathParams extends SpeakeasyBase {
    webinarId: number;
}
export declare class WebinarPollsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum WebinarPollsPollListPollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class WebinarPollsPollListPollQuestions extends SpeakeasyBase {
    answers?: string[];
    name?: string;
    type?: WebinarPollsPollListPollQuestionsTypeEnum;
}
export declare enum WebinarPollsPollListPollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}
/**
 * Poll
**/
export declare class WebinarPollsPollListPoll extends SpeakeasyBase {
    id?: string;
    questions?: WebinarPollsPollListPollQuestions[];
    status?: WebinarPollsPollListPollStatusEnum;
    title?: string;
}
/**
 * Poll List
**/
export declare class WebinarPollsPollList extends SpeakeasyBase {
    polls?: WebinarPollsPollListPoll[];
    totalRecords?: number;
}
export declare class WebinarPollsRequest extends SpeakeasyBase {
    pathParams: WebinarPollsPathParams;
    security: WebinarPollsSecurity;
}
export declare class WebinarPollsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    pollList?: WebinarPollsPollList;
    statusCode: number;
}
