import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarPollCreatePathParams extends SpeakeasyBase {
    webinarId: number;
}
export declare enum WebinarPollCreatePollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class WebinarPollCreatePollQuestions extends SpeakeasyBase {
    answers?: string[];
    name?: string;
    type?: WebinarPollCreatePollQuestionsTypeEnum;
}
/**
 * Poll
**/
export declare class WebinarPollCreatePoll extends SpeakeasyBase {
    questions?: WebinarPollCreatePollQuestions[];
    title?: string;
}
export declare class WebinarPollCreateRequests extends SpeakeasyBase {
    poll?: WebinarPollCreatePoll;
    poll1?: WebinarPollCreatePoll;
}
export declare class WebinarPollCreateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum WebinarPollCreatePollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}
/**
 * Poll
**/
export declare class WebinarPollCreatePoll2 extends SpeakeasyBase {
    id?: string;
    questions?: WebinarPollCreatePollQuestions[];
    status?: WebinarPollCreatePollStatusEnum;
    title?: string;
}
export declare class WebinarPollCreateRequest extends SpeakeasyBase {
    pathParams: WebinarPollCreatePathParams;
    request: WebinarPollCreateRequests;
    security: WebinarPollCreateSecurity;
}
export declare class WebinarPollCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    poll?: WebinarPollCreatePoll2;
    statusCode: number;
}
