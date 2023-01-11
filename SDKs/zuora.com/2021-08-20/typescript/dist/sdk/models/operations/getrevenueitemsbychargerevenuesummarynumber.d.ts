import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRevenueItemsByChargeRevenueSummaryNumberPathParams extends SpeakeasyBase {
    crsNumber: string;
}
export declare class GetRevenueItemsByChargeRevenueSummaryNumberQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetRevenueItemsByChargeRevenueSummaryNumberHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRevenueItemsByChargeRevenueSummaryNumberRequest extends SpeakeasyBase {
    pathParams: GetRevenueItemsByChargeRevenueSummaryNumberPathParams;
    queryParams: GetRevenueItemsByChargeRevenueSummaryNumberQueryParams;
    headers: GetRevenueItemsByChargeRevenueSummaryNumberHeaders;
}
export declare class GetRevenueItemsByChargeRevenueSummaryNumberResponse extends SpeakeasyBase {
    contentType: string;
    getRevenueItemsType?: shared.GetRevenueItemsType;
    headers: Record<string, string[]>;
    statusCode: number;
}
