import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the intervals that the ramp is split into in its timeline. Zuora can report metrics for this specific period.
 *
 * @remarks
 *
 */
export declare class RampIntervalRequest extends SpeakeasyBase {
    /**
     * The short description of the interval.
     */
    description?: string;
    /**
     * The end date of the interval.
     */
    endDate: Date;
    /**
     * The name of the interval.
     */
    name?: string;
    /**
     * The start date of the interval.
     */
    startDate: Date;
}
