import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPastWebinarQaPathParams extends SpeakeasyBase {
    webinarId: string;
}
export declare class ListPastWebinarQaSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ListPastWebinarQa200ApplicationJsonQuestionsQuestionDetails extends SpeakeasyBase {
    answer?: string;
    question?: string;
}
export declare class ListPastWebinarQa200ApplicationJsonQuestions extends SpeakeasyBase {
    email?: string;
    name?: string;
    questionDetails?: ListPastWebinarQa200ApplicationJsonQuestionsQuestionDetails[];
}
export declare class ListPastWebinarQa200ApplicationJson extends SpeakeasyBase {
    id?: number;
    questions?: ListPastWebinarQa200ApplicationJsonQuestions[];
    startTime?: Date;
    uuid?: string;
}
export declare class ListPastWebinarQaRequest extends SpeakeasyBase {
    pathParams: ListPastWebinarQaPathParams;
    security: ListPastWebinarQaSecurity;
}
export declare class ListPastWebinarQaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listPastWebinarQA200ApplicationJSONObject?: ListPastWebinarQa200ApplicationJson;
}
