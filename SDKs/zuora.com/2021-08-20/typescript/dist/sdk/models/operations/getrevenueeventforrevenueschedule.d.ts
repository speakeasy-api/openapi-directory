import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRevenueEventForRevenueSchedulePathParams extends SpeakeasyBase {
    rsNumber: string;
}
export declare class GetRevenueEventForRevenueScheduleQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetRevenueEventForRevenueScheduleHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRevenueEventForRevenueScheduleRequest extends SpeakeasyBase {
    pathParams: GetRevenueEventForRevenueSchedulePathParams;
    queryParams: GetRevenueEventForRevenueScheduleQueryParams;
    headers: GetRevenueEventForRevenueScheduleHeaders;
}
export declare class GetRevenueEventForRevenueScheduleResponse extends SpeakeasyBase {
    contentType: string;
    getRevenueEventDetailsType?: shared.GetRevenueEventDetailsType;
    headers: Record<string, string[]>;
    statusCode: number;
}
