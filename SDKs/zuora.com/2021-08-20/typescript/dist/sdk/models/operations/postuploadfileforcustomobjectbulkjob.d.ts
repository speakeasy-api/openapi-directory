import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUploadFileForCustomObjectBulkJobPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostUploadFileForCustomObjectBulkJobHeaders extends SpeakeasyBase {
    authorization: string;
    contentType: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class PostUploadFileForCustomObjectBulkJobRequest extends SpeakeasyBase {
    pathParams: PostUploadFileForCustomObjectBulkJobPathParams;
    headers: PostUploadFileForCustomObjectBulkJobHeaders;
    request: string;
}
export declare class PostUploadFileForCustomObjectBulkJobResponse extends SpeakeasyBase {
    commonErrorResponse?: shared.CommonErrorResponse;
    contentType: string;
    customObjectBulkJobResponse?: shared.CustomObjectBulkJobResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
