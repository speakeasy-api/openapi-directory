import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the intervals that the ramp is split into in its timeline. Zuora can report metrics for this specific period.
 *
**/
export declare class RampIntervalRequest extends SpeakeasyBase {
    description?: string;
    endDate: Date;
    name?: string;
    startDate: Date;
}
