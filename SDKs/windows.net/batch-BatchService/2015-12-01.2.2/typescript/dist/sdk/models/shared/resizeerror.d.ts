import { SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
/**
 * An error that occurred when resizing a pool.
 */
export declare class ResizeError extends SpeakeasyBase {
    /**
     * Gets or sets an identifier for the pool resize error.  Codes are invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * Gets or sets a message describing the pool resize error, intended to be suitable for display in a user interface.
     */
    message?: string;
    /**
     * Gets or sets a list of additional error details related to the pool resize error.
     */
    values?: NameValuePair[];
}
