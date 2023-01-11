import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Order Delta Tcb. This is a metric that reflects the change to the estimated billing on Rate Plan Charge object, or the estimated billing for an Order Line Item as the result of the order
 *
**/
export declare class OrderDeltaTcb extends SpeakeasyBase {
    chargeNumber?: string;
    currency?: string;
    endDate?: Date;
    grossAmount?: number;
    netAmount?: number;
    orderActionId?: string;
    orderActionSequence?: string;
    orderActionType?: string;
    orderLineItemId?: string;
    productRatePlanChargeId?: string;
    ratePlanChargeId?: string;
    startDate?: Date;
    subscriptionNumber?: string;
}
