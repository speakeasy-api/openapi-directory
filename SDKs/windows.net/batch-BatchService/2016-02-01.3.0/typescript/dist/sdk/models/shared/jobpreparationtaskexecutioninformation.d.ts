import { SpeakeasyBase } from "../../../internal/utils";
import { TaskSchedulingError } from "./taskschedulingerror";
/**
 * The current state of the Job Preparation task.
 */
export declare enum JobPreparationTaskExecutionInformationStateEnum {
    Running = "running",
    Completed = "completed"
}
/**
 * Contains information about the execution of a Job Preparation task on a compute node.
 */
export declare class JobPreparationTaskExecutionInformation extends SpeakeasyBase {
    /**
     * The time at which the Job Preparation task completed. This property is set only if the task is in the Completed state.
     */
    endTime?: Date;
    /**
     * The exit code of the Job Preparation task. This property is set only if the task is in the Completed state.
     */
    exitCode?: number;
    /**
     * The most recent time at which a retry of the Job Preparation task started running. This property is set only if the task was retried (i.e. retryCount is nonzero).
     */
    lastRetryTime?: Date;
    /**
     * The number of times the task has been retried by the Batch service. Every time the task exits with a non-zero exit code, it is deemed a task failure. The Batch service will retry the task up to the limit specified by the constraints.
     */
    retryCount: number;
    /**
     * Information about an error when scheduling a task.
     */
    schedulingError?: TaskSchedulingError;
    /**
     * The time at which the task started running. Note that every time the task is restarted, this value is updated.
     */
    startTime: Date;
    /**
     * The current state of the Job Preparation task.
     */
    state: JobPreparationTaskExecutionInformationStateEnum;
    /**
     * The root directory of the Job Preparation task on the compute node. You can use this path to retrieve files created by the task, such as log files.
     */
    taskRootDirectory?: string;
    /**
     * The URL to the root directory of the Job Preparation task on the compute node.
     */
    taskRootDirectoryUrl?: string;
}
