import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingPollUpdatePathParams extends SpeakeasyBase {
    meetingId: number;
    pollId: string;
}
export declare enum MeetingPollUpdatePollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class MeetingPollUpdatePollQuestions extends SpeakeasyBase {
    answers?: string[];
    name?: string;
    type?: MeetingPollUpdatePollQuestionsTypeEnum;
}
/**
 * Poll
**/
export declare class MeetingPollUpdatePoll extends SpeakeasyBase {
    questions?: MeetingPollUpdatePollQuestions[];
    title?: string;
}
export declare class MeetingPollUpdateRequests extends SpeakeasyBase {
    poll?: MeetingPollUpdatePoll;
    poll1?: MeetingPollUpdatePoll;
}
export declare class MeetingPollUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class MeetingPollUpdateRequest extends SpeakeasyBase {
    pathParams: MeetingPollUpdatePathParams;
    request: MeetingPollUpdateRequests;
    security: MeetingPollUpdateSecurity;
}
export declare class MeetingPollUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
