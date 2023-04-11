import { SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
/**
 * An error encountered by a compute node.
 */
export declare class ComputeNodeError extends SpeakeasyBase {
    /**
     * An identifier for the compute node error. Codes are invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * The list of additional error details related to the compute node error.
     */
    errorDetails?: NameValuePair[];
    /**
     * A message describing the compute node error, intended to be suitable for display in a user interface.
     */
    message?: string;
}
