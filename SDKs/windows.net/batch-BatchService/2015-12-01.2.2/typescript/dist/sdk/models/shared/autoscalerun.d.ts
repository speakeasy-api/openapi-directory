import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScaleRunError } from "./autoscalerunerror";
/**
 * The results and errors from an execution of a pool autoscale formula.
 */
export declare class AutoScaleRun extends SpeakeasyBase {
    /**
     * An error that occurred when executing or evaluating a pool autoscale formula.
     */
    error?: AutoScaleRunError;
    /**
     * Gets or sets the final values of all variables used in the evaluation of the autoscale formula.  Each variable value is returned in the form $variable=value, and variables are separated by semicolons.
     */
    results?: string;
    /**
     * Gets or sets the time at which the autoscale formula was last evaluated.
     */
    timestamp: Date;
}
