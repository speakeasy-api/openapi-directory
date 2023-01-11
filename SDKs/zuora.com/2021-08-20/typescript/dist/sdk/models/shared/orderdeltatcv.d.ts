import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Order Delta Tcv. This is a metric that reflects the change to the TCV on Rate Plan Charge object, or the Total Contracted Value for an Order Line Item as the result of the order
 *
**/
export declare class OrderDeltaTcv extends SpeakeasyBase {
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
