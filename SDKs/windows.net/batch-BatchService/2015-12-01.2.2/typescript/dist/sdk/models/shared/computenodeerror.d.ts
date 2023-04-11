import { SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
/**
 * An error encountered by a compute node.
 */
export declare class ComputeNodeError extends SpeakeasyBase {
    /**
     * Gets or sets an identifier for the compute node error.  Codes are invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * Gets or sets the list of additional error details related to the compute node error.
     */
    errorDetails?: NameValuePair[];
    /**
     * Gets or sets a message describing the compute node error, intended to be suitable for display in a user interface.
     */
    message?: string;
}
