import { SpeakeasyBase } from "../../../internal/utils";
import { BatchError } from "./batcherror";
/**
 * The status of the add task request.
 */
export declare enum TaskAddResultStatusEnum {
    Success = "success",
    Clienterror = "clienterror",
    Servererror = "servererror",
    Unmapped = "unmapped"
}
/**
 * Result for a single task added as part of an add task collection operation.
 */
export declare class TaskAddResult extends SpeakeasyBase {
    /**
     * The ETag of the task, if the task was successfully added.
     */
    eTag?: string;
    /**
     * An error response received from the Azure Batch service.
     */
    error?: BatchError;
    /**
     * The last modified time of the task.
     */
    lastModified?: Date;
    /**
     * The URL of the task, if the task was successfully added.
     */
    location?: string;
    /**
     * The status of the add task request.
     */
    status: TaskAddResultStatusEnum;
    /**
     * The id of the task for which this is the result.
     */
    taskId: string;
}
