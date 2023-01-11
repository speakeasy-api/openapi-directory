import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRevenueRecRulesPathParams extends SpeakeasyBase {
    chargeKey: string;
}
export declare class GetRevenueRecRulesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRevenueRecRulesRequest extends SpeakeasyBase {
    pathParams: GetRevenueRecRulesPathParams;
    headers: GetRevenueRecRulesHeaders;
}
export declare class GetRevenueRecRulesResponse extends SpeakeasyBase {
    contentType: string;
    getRevenueRecognitionRuleAssociationType?: shared.GetRevenueRecognitionRuleAssociationType;
    headers: Record<string, string[]>;
    statusCode: number;
}
