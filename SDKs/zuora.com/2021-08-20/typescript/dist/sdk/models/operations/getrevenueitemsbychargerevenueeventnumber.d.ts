import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRevenueItemsByChargeRevenueEventNumberPathParams extends SpeakeasyBase {
    eventNumber: string;
}
export declare class GetRevenueItemsByChargeRevenueEventNumberQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetRevenueItemsByChargeRevenueEventNumberHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRevenueItemsByChargeRevenueEventNumberRequest extends SpeakeasyBase {
    pathParams: GetRevenueItemsByChargeRevenueEventNumberPathParams;
    queryParams: GetRevenueItemsByChargeRevenueEventNumberQueryParams;
    headers: GetRevenueItemsByChargeRevenueEventNumberHeaders;
}
export declare class GetRevenueItemsByChargeRevenueEventNumberResponse extends SpeakeasyBase {
    contentType: string;
    getRevenueItemsType?: shared.GetRevenueItemsType;
    headers: Record<string, string[]>;
    statusCode: number;
}
