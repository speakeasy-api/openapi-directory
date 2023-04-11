import { SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
/**
 * An error that occurred when executing or evaluating a pool autoscale formula.
 */
export declare class AutoScaleRunError extends SpeakeasyBase {
    /**
     * Gets or sets an identifier for the autoscale error.  Codes are invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * Gets or sets a message describing the autoscale error, intended to be suitable for display in a user interface.
     */
    message?: string;
    /**
     * Gets or sets a list of additional error details related to the autoscale error.
     */
    values?: NameValuePair[];
}
