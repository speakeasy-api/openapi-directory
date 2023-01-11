import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRevenueItemsByRevenueSchedulePathParams extends SpeakeasyBase {
    rsNumber: string;
}
export declare class GetRevenueItemsByRevenueScheduleQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetRevenueItemsByRevenueScheduleHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRevenueItemsByRevenueScheduleRequest extends SpeakeasyBase {
    pathParams: GetRevenueItemsByRevenueSchedulePathParams;
    queryParams: GetRevenueItemsByRevenueScheduleQueryParams;
    headers: GetRevenueItemsByRevenueScheduleHeaders;
}
export declare class GetRevenueItemsByRevenueScheduleResponse extends SpeakeasyBase {
    contentType: string;
    getRsRevenueItemsType?: shared.GetRsRevenueItemsType;
    headers: Record<string, string[]>;
    statusCode: number;
}
