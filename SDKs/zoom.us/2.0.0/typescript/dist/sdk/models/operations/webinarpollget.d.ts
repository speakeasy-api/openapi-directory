import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarPollGetPathParams extends SpeakeasyBase {
    pollId: string;
    webinarId: number;
}
export declare class WebinarPollGetSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum WebinarPollGetPollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class WebinarPollGetPollQuestions extends SpeakeasyBase {
    answers?: string[];
    name?: string;
    type?: WebinarPollGetPollQuestionsTypeEnum;
}
export declare enum WebinarPollGetPollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}
/**
 * Poll
**/
export declare class WebinarPollGetPoll extends SpeakeasyBase {
    id?: string;
    questions?: WebinarPollGetPollQuestions[];
    status?: WebinarPollGetPollStatusEnum;
    title?: string;
}
export declare class WebinarPollGetRequest extends SpeakeasyBase {
    pathParams: WebinarPollGetPathParams;
    security: WebinarPollGetSecurity;
}
export declare class WebinarPollGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    poll?: WebinarPollGetPoll;
    statusCode: number;
}
