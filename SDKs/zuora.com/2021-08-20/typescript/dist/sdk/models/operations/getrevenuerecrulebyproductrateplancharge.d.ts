import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRevenueRecRulebyProductRatePlanChargePathParams extends SpeakeasyBase {
    chargeKey: string;
}
export declare class GetRevenueRecRulebyProductRatePlanChargeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRevenueRecRulebyProductRatePlanChargeRequest extends SpeakeasyBase {
    pathParams: GetRevenueRecRulebyProductRatePlanChargePathParams;
    headers: GetRevenueRecRulebyProductRatePlanChargeHeaders;
}
export declare class GetRevenueRecRulebyProductRatePlanChargeResponse extends SpeakeasyBase {
    contentType: string;
    getRevenueRecognitionRuleAssociationType?: shared.GetRevenueRecognitionRuleAssociationType;
    headers: Record<string, string[]>;
    statusCode: number;
}
