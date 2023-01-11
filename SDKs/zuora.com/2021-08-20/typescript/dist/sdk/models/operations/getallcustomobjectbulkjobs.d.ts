import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllCustomObjectBulkJobsQueryParams extends SpeakeasyBase {
    cursor?: string;
    pageSize?: number;
}
export declare class GetAllCustomObjectBulkJobsHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class GetAllCustomObjectBulkJobsRequest extends SpeakeasyBase {
    queryParams: GetAllCustomObjectBulkJobsQueryParams;
    headers: GetAllCustomObjectBulkJobsHeaders;
}
export declare class GetAllCustomObjectBulkJobsResponse extends SpeakeasyBase {
    contentType: string;
    customObjectBulkJobResponseCollection?: shared.CustomObjectBulkJobResponseCollection;
    headers: Record<string, string[]>;
    statusCode: number;
}
