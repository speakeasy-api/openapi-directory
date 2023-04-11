import { SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
/**
 * The category of the task scheduling error.
 */
export declare enum TaskSchedulingErrorCategoryEnum {
    Usererror = "usererror",
    Servererror = "servererror",
    Unmapped = "unmapped"
}
/**
 * Information about an error when scheduling a task.
 */
export declare class TaskSchedulingError extends SpeakeasyBase {
    /**
     * The category of the task scheduling error.
     */
    category: TaskSchedulingErrorCategoryEnum;
    /**
     * An identifier for the task scheduling error. Codes are invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * The list of additional error details related to the scheduling error.
     */
    details?: NameValuePair[];
    /**
     * A message describing the task scheduling error, intended to be suitable for display in a user interface.
     */
    message?: string;
}
