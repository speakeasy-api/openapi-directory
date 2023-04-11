import { SpeakeasyBase } from "../../../internal/utils";
import { RampIntervalChargeMetrics } from "./rampintervalchargemetrics";
export declare class RampIntervalMetrics extends SpeakeasyBase {
    /**
     * The short description of the interval.
     */
    description?: string;
    /**
     * The discount amount for the TCB.
     */
    discountTcb?: number;
    /**
     * The discount amount for the TCV.
     */
    discountTcv?: number;
    /**
     * The end date of the interval.
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
     * Container for the detailed metrics for each rate plan charge in each ramp interval.
     */
    intervalMetrics?: RampIntervalChargeMetrics[];
    /**
     * The name of the interval.
     */
    name?: string;
    /**
     * The net TCB value after discount charges are applied.
     */
    netTcb?: number;
    /**
     * The net TCV value after discount charges are applied.
     */
    netTcv?: number;
    /**
     * The start date of the interval.
     */
    startDate?: Date;
}
