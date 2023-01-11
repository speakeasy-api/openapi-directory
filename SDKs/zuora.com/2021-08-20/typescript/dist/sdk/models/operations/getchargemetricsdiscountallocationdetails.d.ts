import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChargeMetricsDiscountAllocationDetailsQueryParams extends SpeakeasyBase {
    fromTimestamp: Date;
    toTimestamp: Date;
}
export declare class GetChargeMetricsDiscountAllocationDetailsHeaders extends SpeakeasyBase {
    accept?: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetChargeMetricsDiscountAllocationDetailsRequest extends SpeakeasyBase {
    queryParams: GetChargeMetricsDiscountAllocationDetailsQueryParams;
    headers: GetChargeMetricsDiscountAllocationDetailsHeaders;
}
export declare class GetChargeMetricsDiscountAllocationDetailsResponse extends SpeakeasyBase {
    chargeMetricsDiscountAllocationDetailResponse?: shared.ChargeMetricsDiscountAllocationDetailResponse;
    commonReasonsErrorResponse?: shared.CommonReasonsErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
