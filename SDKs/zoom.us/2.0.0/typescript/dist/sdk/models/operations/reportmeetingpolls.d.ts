import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportMeetingPollsPathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare class ReportMeetingPollsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails extends SpeakeasyBase {
    answer?: string;
    dateTime?: Date;
    pollingId?: string;
    question?: string;
}
export declare class ReportMeetingPolls200ApplicationJsonQuestions extends SpeakeasyBase {
    email?: string;
    name?: string;
    questionDetails?: ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails[];
}
export declare class ReportMeetingPolls200ApplicationJson extends SpeakeasyBase {
    id?: number;
    questions?: ReportMeetingPolls200ApplicationJsonQuestions[];
    startTime?: Date;
    uuid?: string;
}
export declare class ReportMeetingPollsRequest extends SpeakeasyBase {
    pathParams: ReportMeetingPollsPathParams;
    security: ReportMeetingPollsSecurity;
}
export declare class ReportMeetingPollsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    reportMeetingPolls200ApplicationJSONObject?: ReportMeetingPolls200ApplicationJson;
}
