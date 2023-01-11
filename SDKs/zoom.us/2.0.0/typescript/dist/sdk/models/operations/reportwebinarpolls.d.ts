import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportWebinarPollsPathParams extends SpeakeasyBase {
    webinarId: string;
}
export declare class ReportWebinarPollsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ReportWebinarPolls200ApplicationJsonQuestionsQuestionDetails extends SpeakeasyBase {
    answer?: string;
    dateTime?: Date;
    pollingId?: string;
    question?: string;
}
export declare class ReportWebinarPolls200ApplicationJsonQuestions extends SpeakeasyBase {
    email?: string;
    name?: string;
    questionDetails?: ReportWebinarPolls200ApplicationJsonQuestionsQuestionDetails[];
}
export declare class ReportWebinarPolls200ApplicationJson extends SpeakeasyBase {
    id?: number;
    questions?: ReportWebinarPolls200ApplicationJsonQuestions[];
    startTime?: Date;
    uuid?: string;
}
export declare class ReportWebinarPollsRequest extends SpeakeasyBase {
    pathParams: ReportWebinarPollsPathParams;
    security: ReportWebinarPollsSecurity;
}
export declare class ReportWebinarPollsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    reportWebinarPolls200ApplicationJSONObject?: ReportWebinarPolls200ApplicationJson;
}
