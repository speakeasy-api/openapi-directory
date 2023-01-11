import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarPollUpdatePathParams extends SpeakeasyBase {
    pollId: string;
    webinarId: number;
}
export declare enum WebinarPollUpdatePollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class WebinarPollUpdatePollQuestions extends SpeakeasyBase {
    answers?: string[];
    name?: string;
    type?: WebinarPollUpdatePollQuestionsTypeEnum;
}
/**
 * Poll
**/
export declare class WebinarPollUpdatePoll extends SpeakeasyBase {
    questions?: WebinarPollUpdatePollQuestions[];
    title?: string;
}
export declare class WebinarPollUpdateRequests extends SpeakeasyBase {
    poll?: WebinarPollUpdatePoll;
    poll1?: WebinarPollUpdatePoll;
}
export declare class WebinarPollUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class WebinarPollUpdateRequest extends SpeakeasyBase {
    pathParams: WebinarPollUpdatePathParams;
    request: WebinarPollUpdateRequests;
    security: WebinarPollUpdateSecurity;
}
export declare class WebinarPollUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
