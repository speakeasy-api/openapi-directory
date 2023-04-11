import { SpeakeasyBase } from "../../../internal/utils";
import { TaskExecutionInformation } from "./taskexecutioninformation";
/**
 * Gets or sets the current state of the task.
 */
export declare enum TaskInformationTaskStateEnum {
    Active = "active",
    Preparing = "preparing",
    Running = "running",
    Completed = "completed"
}
/**
 * Information about a task running on a compute node.
 */
export declare class TaskInformation extends SpeakeasyBase {
    /**
     * Information about the execution of a task.
     */
    executionInfo?: TaskExecutionInformation;
    /**
     * Gets or sets the id of the job to which the task belongs.
     */
    jobId?: string;
    /**
     * Gets or sets the id of the subtask if the task is a multi-instance task.
     */
    subtaskId?: number;
    /**
     * Gets or sets the id of the task.
     */
    taskId?: string;
    /**
     * Gets or sets the current state of the task.
     */
    taskState: TaskInformationTaskStateEnum;
    /**
     * Gets or sets the URL of the task.
     */
    taskUrl?: string;
}
