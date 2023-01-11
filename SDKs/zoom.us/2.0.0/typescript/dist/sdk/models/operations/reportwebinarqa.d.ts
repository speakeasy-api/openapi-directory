import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportWebinarQaPathParams extends SpeakeasyBase {
    webinarId: string;
}
export declare class ReportWebinarQaSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails extends SpeakeasyBase {
    answer?: string;
    question?: string;
}
export declare class ReportWebinarQa200ApplicationJsonQuestions extends SpeakeasyBase {
    email?: string;
    name?: string;
    questionDetails?: ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails[];
}
export declare class ReportWebinarQa200ApplicationJson extends SpeakeasyBase {
    id?: number;
    questions?: ReportWebinarQa200ApplicationJsonQuestions[];
    startTime?: Date;
    uuid?: string;
}
export declare class ReportWebinarQaRequest extends SpeakeasyBase {
    pathParams: ReportWebinarQaPathParams;
    security: ReportWebinarQaSecurity;
}
export declare class ReportWebinarQaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    reportWebinarQA200ApplicationJSONObject?: ReportWebinarQa200ApplicationJson;
}
