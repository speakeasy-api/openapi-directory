import { SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
/**
 * The category of the job scheduling error.
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
     * The category of the job scheduling error.
     */
    category: JobSchedulingErrorCategoryEnum;
    /**
     * An identifier for the job scheduling error. Codes are invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * A list of additional error details related to the scheduling error.
     */
    details?: NameValuePair[];
    /**
     * A message describing the job scheduling error, intended to be suitable for display in a user interface.
     */
    message?: string;
}
