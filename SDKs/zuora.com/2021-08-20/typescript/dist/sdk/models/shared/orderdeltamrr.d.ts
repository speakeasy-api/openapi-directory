import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Order Delta Mrr. This is a metric that reflects the change to the TCV on rate plan charge object as the result of the order.
 *
**/
export declare class OrderDeltaMrr extends SpeakeasyBase {
    chargeNumber?: string;
    currency?: string;
    endDate?: Date;
    grossAmount?: number;
    netAmount?: number;
    orderActionId?: string;
    orderActionSequence?: string;
    orderActionType?: string;
    productRatePlanChargeId?: string;
    ratePlanChargeId?: string;
    startDate?: Date;
    subscriptionNumber?: string;
}
