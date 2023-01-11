import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCustomObjectBulkJobHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class PostCustomObjectBulkJobRequest extends SpeakeasyBase {
    headers: PostCustomObjectBulkJobHeaders;
    request: shared.CustomObjectBulkJobRequest;
}
export declare class PostCustomObjectBulkJobResponse extends SpeakeasyBase {
    commonErrorResponse?: shared.CommonErrorResponse;
    contentType: string;
    customObjectBulkJobResponse?: shared.CustomObjectBulkJobResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
