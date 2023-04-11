import { SpeakeasyBase } from "../../../internal/utils";
import { TaskSchedulingError } from "./taskschedulingerror";
/**
 * Information about the execution of a task.
 */
export declare class TaskExecutionInformation extends SpeakeasyBase {
    /**
     * Gets or sets the time at which the task completed. This property is set only if the task is in the Completed state.
     */
    endTime?: Date;
    /**
     * Gets or sets the exit code of the task. This property is set only if the task is in completed state.
     */
    exitCode?: number;
    /**
     * Gets or sets the most recent time at which the task has been requeued by the Batch service as the result of a user request.
     */
    lastRequeueTime?: Date;
    /**
     * Gets or sets the most recent time at which a retry of the task started running.
     */
    lastRetryTime?: Date;
    /**
     * Gets or sets the number of times the task has been requeued by the Batch service as the result of a user request.
     */
    requeueCount: number;
    /**
     * Gets or sets the number of times the task has been retried by the Batch service.
     */
    retryCount: number;
    /**
     * Information about an error when scheduling a task.
     */
    schedulingError?: TaskSchedulingError;
    /**
     * Gets or sets the time at which the task started running. If the task has been restarted or retried, this is the most recent time at which the task started running.
     */
    startTime?: Date;
}
