import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingPollCreatePathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare enum MeetingPollCreatePollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class MeetingPollCreatePollQuestions extends SpeakeasyBase {
    answers?: string[];
    name?: string;
    type?: MeetingPollCreatePollQuestionsTypeEnum;
}
/**
 * Poll
**/
export declare class MeetingPollCreatePoll extends SpeakeasyBase {
    questions?: MeetingPollCreatePollQuestions[];
    title?: string;
}
export declare class MeetingPollCreateRequests extends SpeakeasyBase {
    poll?: MeetingPollCreatePoll;
    poll1?: MeetingPollCreatePoll;
}
export declare class MeetingPollCreateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum MeetingPollCreatePollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}
/**
 * Poll
**/
export declare class MeetingPollCreatePoll2 extends SpeakeasyBase {
    id?: string;
    questions?: MeetingPollCreatePollQuestions[];
    status?: MeetingPollCreatePollStatusEnum;
    title?: string;
}
export declare class MeetingPollCreateRequest extends SpeakeasyBase {
    pathParams: MeetingPollCreatePathParams;
    request: MeetingPollCreateRequests;
    security: MeetingPollCreateSecurity;
}
export declare class MeetingPollCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    poll?: MeetingPollCreatePoll2;
    statusCode: number;
}
