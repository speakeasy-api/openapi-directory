import { SpeakeasyBase } from "../../../internal/utils";
export declare class RampIntervalChargeDeltaMetricsDeltaMrr extends SpeakeasyBase {
    /**
     * The discount delta amount for the MRR.
     */
    discount?: number;
    /**
     * The end date.
     */
    endDate?: Date;
    /**
     * The MRR delta amount before discounts charges are applied.
     */
    gross?: number;
    /**
     * The MRR delta amount after discounts charges are applied.
     */
    net?: number;
    /**
     * The start date.
     */
    startDate?: Date;
}
export declare class RampIntervalChargeDeltaMetricsDeltaQuantity extends SpeakeasyBase {
    /**
     * The delta amount of the charge quantity.
     */
    amount?: number;
    /**
     * The end date.
     */
    endDate?: Date;
    /**
     * The start date.
     */
    startDate?: Date;
}
export declare class RampIntervalChargeDeltaMetrics extends SpeakeasyBase {
    /**
     * The number of the rate plan charge.
     */
    chargeNumber?: string;
    /**
     * The discount delta amount for the TCB.
     */
    deltaDiscountTcb?: number;
    /**
     * The discount delta amount for the TCV.
     */
    deltaDiscountTcv?: number;
    /**
     * The TCB delta value before discount charges are applied.
     */
    deltaGrossTcb?: number;
    /**
     * The TCV delta value before discount charges are applied.
     */
    deltaGrossTcv?: number;
    /**
     * The MRR changing history of the current rate plan charge in the current ramp interval.
     */
    deltaMrr?: RampIntervalChargeDeltaMetricsDeltaMrr[];
    /**
     * The TCB delta value after discount charges are applied.
     */
    deltaNetTcb?: number;
    /**
     * The TCV delta value after discount charges are applied.
     */
    deltaNetTcv?: number;
    /**
     * The charge quantity changing history of the current rate plan charge in the current ramp interval.
     */
    deltaQuantity?: RampIntervalChargeDeltaMetricsDeltaQuantity[];
    /**
     * The ID of the corresponding product rate plan charge.
     */
    productRatePlanChargeId?: string;
    /**
     * The number of the subscription that the current rate plan charge belongs to.
     */
    subscriptionNumber?: string;
}
