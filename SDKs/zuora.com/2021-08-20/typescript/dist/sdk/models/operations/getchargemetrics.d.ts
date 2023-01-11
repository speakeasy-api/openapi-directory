import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChargeMetricsQueryParams extends SpeakeasyBase {
    fromTimestamp: Date;
    toTimestamp: Date;
}
export declare class GetChargeMetricsHeaders extends SpeakeasyBase {
    accept?: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetChargeMetricsRequest extends SpeakeasyBase {
    queryParams: GetChargeMetricsQueryParams;
    headers: GetChargeMetricsHeaders;
}
export declare class GetChargeMetricsResponse extends SpeakeasyBase {
    chargeMetricsResponse?: shared.ChargeMetricsResponse;
    commonReasonsErrorResponse?: shared.CommonReasonsErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
