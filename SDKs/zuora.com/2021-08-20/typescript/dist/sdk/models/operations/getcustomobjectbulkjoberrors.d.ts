import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomObjectBulkJobErrorsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCustomObjectBulkJobErrorsHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class GetCustomObjectBulkJobErrorsRequest extends SpeakeasyBase {
    pathParams: GetCustomObjectBulkJobErrorsPathParams;
    headers: GetCustomObjectBulkJobErrorsHeaders;
}
export declare class GetCustomObjectBulkJobErrorsResponse extends SpeakeasyBase {
    commonErrorResponse?: shared.CommonErrorResponse;
    contentType: string;
    customObjectBulkJobErrorResponseCollection?: shared.CustomObjectBulkJobErrorResponseCollection;
    headers: Record<string, string[]>;
    statusCode: number;
}
