import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRSbyProductChargeAndBillingAccountPathParams extends SpeakeasyBase {
    accountKey: string;
    chargeKey: string;
}
export declare class GetRSbyProductChargeAndBillingAccountQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetRSbyProductChargeAndBillingAccountHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRSbyProductChargeAndBillingAccountRequest extends SpeakeasyBase {
    pathParams: GetRSbyProductChargeAndBillingAccountPathParams;
    queryParams: GetRSbyProductChargeAndBillingAccountQueryParams;
    headers: GetRSbyProductChargeAndBillingAccountHeaders;
}
export declare class GetRSbyProductChargeAndBillingAccountResponse extends SpeakeasyBase {
    contentType: string;
    getrsDetailsByProductChargeType?: shared.GetrsDetailsByProductChargeType;
    headers: Record<string, string[]>;
    statusCode: number;
}
