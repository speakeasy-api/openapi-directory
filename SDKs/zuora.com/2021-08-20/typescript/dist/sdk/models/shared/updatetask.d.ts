import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the task instance.
 *
 * @remarks
 *
 */
export declare enum UpdateTaskStatusEnum {
    Queued = "Queued",
    Processing = "Processing",
    Pending = "Pending",
    Success = "Success",
    Stopped = "Stopped",
    Error = "Error"
}
/**
 * A task.
 *
 * @remarks
 *
 */
export declare class UpdateTask extends SpeakeasyBase {
    /**
     * The type of task.
     *
     * @remarks
     *
     */
    actionType?: string;
    /**
     * The type of the API used.
     *
     * @remarks
     *
     */
    callType?: string;
    /**
     * The maximum number of this task that can run concurrently.
     *
     * @remarks
     *
     */
    concurrentLimit?: number;
    /**
     * The unique ID of the task.
     *
     * @remarks
     *
     */
    id: number;
    /**
     * The name of the task.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * The selected object for the task.
     *
     * @remarks
     *
     */
    object?: string;
    /**
     * The ID of the selected object of the task.
     *
     * @remarks
     *
     */
    objectId?: string;
    /**
     * The status of the task instance.
     *
     * @remarks
     *
     */
    status?: UpdateTaskStatusEnum;
    /**
     * The array of filter tags.
     *
     * @remarks
     *
     */
    tags?: string[];
    /**
     * The ID of the workflow the task belongs too.
     *
     * @remarks
     *
     */
    workflowId?: number;
}
