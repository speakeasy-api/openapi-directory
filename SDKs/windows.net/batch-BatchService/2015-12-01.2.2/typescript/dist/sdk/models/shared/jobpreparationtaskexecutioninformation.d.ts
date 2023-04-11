import { SpeakeasyBase } from "../../../internal/utils";
import { TaskSchedulingError } from "./taskschedulingerror";
/**
 * Gets or sets the current running state of the Job Preparation task on the compute node.
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
     * Gets or sets the time at which the Job Preparation task completed. This property is set only if the task is in the Completed state.
     */
    endTime?: Date;
    /**
     * Gets or sets the exit code of the Job Preparation task. This property is set only if the task is in the Completed state.
     */
    exitCode?: number;
    /**
     * Gets or sets the most recent time at which a retry of the Job Preparation task started running. This property is set only if the task was retried (i.e. retryCount is nonzero).
     */
    lastRetryTime?: Date;
    /**
     * Gets or sets the number of times the Job Preparation task has been retried by the Batch service.
     */
    retryCount: number;
    /**
     * Information about an error when scheduling a task.
     */
    schedulingError?: TaskSchedulingError;
    /**
     * Gets or sets the time at which the Job Preparation task started running.
     */
    startTime: Date;
    /**
     * Gets or sets the current running state of the Job Preparation task on the compute node.
     */
    state: JobPreparationTaskExecutionInformationStateEnum;
    /**
     * Gets or sets the root directory of the Job Preparation task on the compute node.
     */
    taskRootDirectory?: string;
    /**
     * Gets or sets the URL to the root directory of the Job Preparation task on the compute node.
     */
    taskRootDirectoryUrl?: string;
}
