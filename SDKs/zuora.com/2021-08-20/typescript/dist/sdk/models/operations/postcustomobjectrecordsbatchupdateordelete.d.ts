import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCustomObjectRecordsBatchUpdateOrDeletePathParams extends SpeakeasyBase {
    object: string;
}
export declare class PostCustomObjectRecordsBatchUpdateOrDeleteHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class PostCustomObjectRecordsBatchUpdateOrDeleteRequest extends SpeakeasyBase {
    pathParams: PostCustomObjectRecordsBatchUpdateOrDeletePathParams;
    headers: PostCustomObjectRecordsBatchUpdateOrDeleteHeaders;
    request: shared.CustomObjectRecordBatchRequest;
}
export declare class PostCustomObjectRecordsBatchUpdateOrDeleteResponse extends SpeakeasyBase {
    contentType: string;
    customObjectRecordsBatchUpdatePartialSuccessResponse?: shared.CustomObjectRecordsBatchUpdatePartialSuccessResponse;
    customObjectRecordsErrorResponse?: shared.CustomObjectRecordsErrorResponse;
    customObjectRecordsThrottledResponse?: shared.CustomObjectRecordsThrottledResponse;
    errorResponse401Record?: shared.ErrorResponse401Record;
    headers: Record<string, string[]>;
    statusCode: number;
}
