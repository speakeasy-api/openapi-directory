import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDataQueryJobsQueryParams extends SpeakeasyBase {
    pageSize?: number;
    queryStatus?: shared.GlobalHeaderZuoraTrackIdEnum;
}
export declare class GetDataQueryJobsHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetDataQueryJobsRequest extends SpeakeasyBase {
    queryParams: GetDataQueryJobsQueryParams;
    headers: GetDataQueryJobsHeaders;
}
export declare class GetDataQueryJobsResponse extends SpeakeasyBase {
    contentType: string;
    getDataQueryJobsResponse?: shared.GetDataQueryJobsResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
