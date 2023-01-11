import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingPollsPathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare class MeetingPollsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum MeetingPollsPollListPollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class MeetingPollsPollListPollQuestions extends SpeakeasyBase {
    answers?: string[];
    name?: string;
    type?: MeetingPollsPollListPollQuestionsTypeEnum;
}
export declare enum MeetingPollsPollListPollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}
/**
 * Poll
**/
export declare class MeetingPollsPollListPoll extends SpeakeasyBase {
    id?: string;
    questions?: MeetingPollsPollListPollQuestions[];
    status?: MeetingPollsPollListPollStatusEnum;
    title?: string;
}
/**
 * Poll List
**/
export declare class MeetingPollsPollList extends SpeakeasyBase {
    polls?: MeetingPollsPollListPoll[];
    totalRecords?: number;
}
export declare class MeetingPollsRequest extends SpeakeasyBase {
    pathParams: MeetingPollsPathParams;
    security: MeetingPollsSecurity;
}
export declare class MeetingPollsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    pollList?: MeetingPollsPollList;
    statusCode: number;
}
