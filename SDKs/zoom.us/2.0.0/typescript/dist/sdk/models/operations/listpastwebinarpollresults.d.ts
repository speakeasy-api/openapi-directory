import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPastWebinarPollResultsPathParams extends SpeakeasyBase {
    webinarId: string;
}
export declare class ListPastWebinarPollResultsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails extends SpeakeasyBase {
    answer?: string;
    dateTime?: Date;
    pollingId?: string;
    question?: string;
}
export declare class ListPastWebinarPollResults200ApplicationJsonQuestions extends SpeakeasyBase {
    email?: string;
    name?: string;
    questionDetails?: ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails[];
}
export declare class ListPastWebinarPollResults200ApplicationJson extends SpeakeasyBase {
    id?: number;
    questions?: ListPastWebinarPollResults200ApplicationJsonQuestions[];
    startTime?: Date;
    uuid?: string;
}
export declare class ListPastWebinarPollResultsRequest extends SpeakeasyBase {
    pathParams: ListPastWebinarPollResultsPathParams;
    security: ListPastWebinarPollResultsSecurity;
}
export declare class ListPastWebinarPollResultsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listPastWebinarPollResults200ApplicationJSONObject?: ListPastWebinarPollResults200ApplicationJson;
}
