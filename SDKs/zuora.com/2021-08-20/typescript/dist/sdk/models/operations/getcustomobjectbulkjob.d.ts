import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomObjectBulkJobPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCustomObjectBulkJobHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class GetCustomObjectBulkJobRequest extends SpeakeasyBase {
    pathParams: GetCustomObjectBulkJobPathParams;
    headers: GetCustomObjectBulkJobHeaders;
}
export declare class GetCustomObjectBulkJobResponse extends SpeakeasyBase {
    commonErrorResponse?: shared.CommonErrorResponse;
    contentType: string;
    customObjectBulkJobResponse?: shared.CustomObjectBulkJobResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
