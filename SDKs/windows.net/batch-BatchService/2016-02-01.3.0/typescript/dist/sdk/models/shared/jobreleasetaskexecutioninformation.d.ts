import { SpeakeasyBase } from "../../../internal/utils";
import { TaskSchedulingError } from "./taskschedulingerror";
/**
 * The current state of the Job Release task.
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
     * The time at which the Job Release task completed. This property is set only if the task is in the Completed state.
     */
    endTime?: Date;
    /**
     * The exit code of the Job Release task. This property is set only if the task is in the Completed state.
     */
    exitCode?: number;
    /**
     * Information about an error when scheduling a task.
     */
    schedulingError?: TaskSchedulingError;
    /**
     * The time at which the task started running. Note that every time the task is restarted, this value is updated.
     */
    startTime: Date;
    /**
     * The current state of the Job Release task.
     */
    state: JobReleaseTaskExecutionInformationStateEnum;
    /**
     * The root directory of the Job Release task on the compute node. You can use this path to retrieve files created by the task, such as log files.
     */
    taskRootDirectory?: string;
    /**
     * The URL to the root directory of the Job Release task on the compute node.
     */
    taskRootDirectoryUrl?: string;
}
