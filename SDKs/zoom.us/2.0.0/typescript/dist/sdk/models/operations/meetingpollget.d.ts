import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingPollGetPathParams extends SpeakeasyBase {
    meetingId: number;
    pollId: string;
}
export declare class MeetingPollGetSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum MeetingPollGetPollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class MeetingPollGetPollQuestions extends SpeakeasyBase {
    answers?: string[];
    name?: string;
    type?: MeetingPollGetPollQuestionsTypeEnum;
}
export declare enum MeetingPollGetPollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}
/**
 * Poll
**/
export declare class MeetingPollGetPoll extends SpeakeasyBase {
    id?: string;
    questions?: MeetingPollGetPollQuestions[];
    status?: MeetingPollGetPollStatusEnum;
    title?: string;
}
export declare class MeetingPollGetRequest extends SpeakeasyBase {
    pathParams: MeetingPollGetPathParams;
    security: MeetingPollGetSecurity;
}
export declare class MeetingPollGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    poll?: MeetingPollGetPoll;
    statusCode: number;
}
