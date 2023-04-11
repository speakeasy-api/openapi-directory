import { SpeakeasyBase } from "../../../internal/utils";
import { TaskSchedulingError } from "./taskschedulingerror";
/**
 * The state of the start task on the compute node.
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
     * The time at which the start task stopped running.
     */
    endTime?: Date;
    /**
     * The exit code of the start task.
     */
    exitCode?: number;
    /**
     * The most recent time at which a retry of the task started running.
     */
    lastRetryTime?: Date;
    /**
     * The number of times the task has been retried by the Batch service.
     */
    retryCount: number;
    /**
     * Information about an error when scheduling a task.
     */
    schedulingError?: TaskSchedulingError;
    /**
     * The time at which the start task started running.
     */
    startTime: Date;
    /**
     * The state of the start task on the compute node.
     */
    state: StartTaskInformationStateEnum;
}
