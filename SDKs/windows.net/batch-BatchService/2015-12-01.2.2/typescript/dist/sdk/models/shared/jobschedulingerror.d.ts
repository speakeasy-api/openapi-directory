import { SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
/**
 * Gets or sets the category of the job scheduling error.
 */
export declare enum JobSchedulingErrorCategoryEnum {
    Usererror = "usererror",
    Servererror = "servererror",
    Unmapped = "unmapped"
}
/**
 * An error encountered by the Batch service when scheduling a job.
 */
export declare class JobSchedulingError extends SpeakeasyBase {
    /**
     * Gets or sets the category of the job scheduling error.
     */
    category: JobSchedulingErrorCategoryEnum;
    /**
     * Gets or sets an identifier for the job scheduling error.  Codes are invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * Gets or sets a list of additional error details related to the scheduling error.
     */
    details?: NameValuePair[];
    /**
     * Gets or sets a message describing the job scheduling error, intended to be suitable for display in a user interface.
     */
    message?: string;
}
