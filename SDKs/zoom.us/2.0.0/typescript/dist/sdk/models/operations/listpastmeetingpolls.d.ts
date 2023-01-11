import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPastMeetingPollsPathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare class ListPastMeetingPollsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails extends SpeakeasyBase {
    answer?: string;
    dateTime?: Date;
    pollingId?: string;
    question?: string;
}
export declare class ListPastMeetingPolls200ApplicationJsonQuestions extends SpeakeasyBase {
    email?: string;
    name?: string;
    questionDetails?: ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails[];
}
export declare class ListPastMeetingPolls200ApplicationJson extends SpeakeasyBase {
    id?: number;
    questions?: ListPastMeetingPolls200ApplicationJsonQuestions[];
    startTime?: Date;
    uuid?: string;
}
export declare class ListPastMeetingPollsRequest extends SpeakeasyBase {
    pathParams: ListPastMeetingPollsPathParams;
    security: ListPastMeetingPollsSecurity;
}
export declare class ListPastMeetingPollsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listPastMeetingPolls200ApplicationJSONObject?: ListPastMeetingPolls200ApplicationJson;
}
