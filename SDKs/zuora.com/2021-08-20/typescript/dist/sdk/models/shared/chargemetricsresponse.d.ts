import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChargeMetricsResponse extends SpeakeasyBase {
    amendmentId?: string;
    amendmentType?: string;
    chargeNumber?: string;
    createdOn?: Date;
    currency?: string;
    deleted?: boolean;
    endDate?: Date;
    id?: string;
    invoiceOwnerAccountNumber?: string;
    mrrDiscountAmount?: number;
    mrrGrossAmount?: number;
    mrrNetAmount?: number;
    productId?: string;
    productRatePlanChargeId?: string;
    productRatePlanId?: string;
    ratePlanChargeId?: string;
    startDate?: Date;
    subscriptionName?: string;
    subscriptionOwnerAccountNumber?: string;
    tcvDiscountAmount?: number;
    tcvGrossAmount?: number;
    tcvNetAmount?: number;
    updatedOn?: Date;
}
