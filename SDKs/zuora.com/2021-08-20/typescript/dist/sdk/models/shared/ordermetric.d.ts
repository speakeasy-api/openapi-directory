import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSlicedElpNetMetrics } from "./timeslicedelpnetmetrics";
import { TimeSlicedMetrics } from "./timeslicedmetrics";
import { TimeSlicedNetMetrics } from "./timeslicednetmetrics";
import { TimeSlicedTcbNetMetrics } from "./timeslicedtcbnetmetrics";
/**
 * The set of order metrics for an order action.
 */
export declare class OrderMetric extends SpeakeasyBase {
    chargeNumber?: string;
    /**
     * The extended list price which is calculated by the original product catalog list price multiplied by the delta quantity.
     *
     * @remarks
     *
     * The `elp` nested field is only available to existing Orders customers who already have access to the field.
     *
     * **Note:** The following Order Metrics have been deprecated. Any new customers who onboard on [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) or [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization) will not get these metrics.
     * * The Order ELP and Order Item objects
     * * The "Generated Reason" and "Order Item ID" fields in the Order MRR, Order TCB, Order TCV, and Order Quantity objects
     *
     * Existing Orders customers who have these metrics will continue to be supported.
     *
     */
    elp?: TimeSlicedElpNetMetrics[];
    mrr?: TimeSlicedNetMetrics[];
    originRatePlanId?: string;
    productRatePlanChargeId?: string;
    productRatePlanId?: string;
    quantity?: TimeSlicedMetrics[];
    /**
     * Total contracted billing which is the forecast value for the total invoice amount.
     */
    tcb?: TimeSlicedTcbNetMetrics[];
    /**
     * Total contracted value.
     */
    tcv?: TimeSlicedNetMetrics[];
}
