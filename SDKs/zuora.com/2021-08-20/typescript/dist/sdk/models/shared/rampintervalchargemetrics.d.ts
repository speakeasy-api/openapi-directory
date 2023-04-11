import { SpeakeasyBase } from "../../../internal/utils";
export declare class RampIntervalChargeMetricsMrr extends SpeakeasyBase {
    /**
     * The discount amount for the MRR.
     */
    discount?: number;
    /**
     * The end date.
     */
    endDate?: Date;
    /**
     * The gross MRR amount before discounts charges are applied.
     */
    gross?: number;
    /**
     * The net MRR amount after discounts charges are applied.
     */
    net?: number;
    /**
     * The start date.
     */
    startDate?: Date;
}
export declare class RampIntervalChargeMetrics extends SpeakeasyBase {
    /**
     * The number of the charge.
     */
    chargeNumber?: string;
    /**
     * The discount amount for the TCB.
     */
    discountTcb?: number;
    /**
     * The discount amount for the TCV.
     */
    discountTcv?: number;
    /**
     * The end date of the rate plan charge in the current ramp interval.
     */
    endDate?: Date;
    /**
     * The gross TCB value before discount charges are applied.
     */
    grossTcb?: number;
    /**
     * The gross TCV value before discount charges are applied.
     */
    grossTcv?: number;
    /**
     * The MRR changing history of the current rate plan charge in the current ramp interval.
     */
    mrr?: RampIntervalChargeMetricsMrr[];
    /**
     * The net TCB value after discount charges are applied.
     */
    netTcb?: number;
    /**
     * The net TCV value after discount charges are applied.
     */
    netTcv?: number;
    /**
     * The ID of the corresponding product rate plan charge.
     */
    productRatePlanChargeId?: string;
    /**
     * The quantity of the rate plan charge.
     */
    quantity?: number;
    /**
     * The ID of the rate plan charge.
     */
    ratePlanChargeId?: string;
    /**
     * The start date of the rate plan charge in the current ramp interval.
     */
    startDate?: Date;
    /**
     * The number of the subscription that the current rate plan charge belongs to.
     */
    subscriptionNumber?: string;
}
