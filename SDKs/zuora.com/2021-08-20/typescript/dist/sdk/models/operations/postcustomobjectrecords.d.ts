import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCustomObjectRecordsPathParams extends SpeakeasyBase {
    object: string;
}
export declare class PostCustomObjectRecordsHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class PostCustomObjectRecordsRequest extends SpeakeasyBase {
    pathParams: PostCustomObjectRecordsPathParams;
    headers: PostCustomObjectRecordsHeaders;
    request: shared.PostCustomObjectRecordsRequest;
}
export declare class PostCustomObjectRecordsResponse extends SpeakeasyBase {
    contentType: string;
    customObjectRecordsErrorResponse?: shared.CustomObjectRecordsErrorResponse;
    customObjectRecordsThrottledResponse?: shared.CustomObjectRecordsThrottledResponse;
    errorResponse401Record?: shared.ErrorResponse401Record;
    headers: Record<string, string[]>;
    postCustomObjectRecordsResponse?: shared.PostCustomObjectRecordsResponse;
    statusCode: number;
}
