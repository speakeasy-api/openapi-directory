import { SpeakeasyBase } from "../../../internal/utils";
import { TaskSchedulingError } from "./taskschedulingerror";
/**
 * Gets or sets the current running state of the Job Release task on the compute node.
 */
export declare enum JobReleaseTaskExecutionInformationStateEnum {
    Running = "running",
    Completed = "completed"
}
/**
 * Contains information about the execution of a Job Release task on a compute node.
 */
export declare class JobReleaseTaskExecutionInformation extends SpeakeasyBase {
    /**
     * Gets or sets the time at which the Job Release task completed. This property is set only if the task is in the Completed state.
     */
    endTime?: Date;
    /**
     * Gets or sets the exit code of the Job Release task. This property is set only if the task is in the Completed state.
     */
    exitCode?: number;
    /**
     * Information about an error when scheduling a task.
     */
    schedulingError?: TaskSchedulingError;
    /**
     * Gets or sets the time at which the Job Release task started running.
     */
    startTime: Date;
    /**
     * Gets or sets the current running state of the Job Release task on the compute node.
     */
    state: JobReleaseTaskExecutionInformationStateEnum;
    /**
     * Gets or sets the root directory of the Job Release task on the compute node.
     */
    taskRootDirectory?: string;
    /**
     * Gets or sets the URL to the root directory of the Job Release task on the compute node.
     */
    taskRootDirectoryUrl?: string;
}
