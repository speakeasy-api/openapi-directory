import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsagePathParams extends SpeakeasyBase {
    accountKey: string;
}
export declare class GetUsageQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetUsageHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetUsageRequest extends SpeakeasyBase {
    pathParams: GetUsagePathParams;
    queryParams: GetUsageQueryParams;
    headers: GetUsageHeaders;
}
export declare class GetUsageResponse extends SpeakeasyBase {
    contentType: string;
    getUsageWrapper?: shared.GetUsageWrapper;
    headers: Record<string, string[]>;
    statusCode: number;
}
