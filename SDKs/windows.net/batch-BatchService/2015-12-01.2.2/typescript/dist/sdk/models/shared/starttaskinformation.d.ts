import { SpeakeasyBase } from "../../../internal/utils";
import { TaskSchedulingError } from "./taskschedulingerror";
/**
 * Gets or sets the state of the start task on the compute node.
 */
export declare enum StartTaskInformationStateEnum {
    Running = "running",
    Completed = "completed"
}
/**
 * Information about a start task running on a compute node.
 */
export declare class StartTaskInformation extends SpeakeasyBase {
    /**
     * Gets or sets the time at which the start task stopped running.
     */
    endTime?: Date;
    /**
     * Gets or sets the exit code of the start task.
     */
    exitCode?: number;
    /**
     * Gets or sets the most recent time at which a retry of the task started running.
     */
    lastRetryTime?: Date;
    /**
     * Gets or sets the number of times the task has been retried by the Batch service.
     */
    retryCount: number;
    /**
     * Information about an error when scheduling a task.
     */
    schedulingError?: TaskSchedulingError;
    /**
     * Gets or sets the time at which the start task started running.
     */
    startTime: Date;
    /**
     * Gets or sets the state of the start task on the compute node.
     */
    state: StartTaskInformationStateEnum;
}
