import { SpeakeasyBase } from "../../../internal/utils";
import { TaskExecutionInformation } from "./taskexecutioninformation";
/**
 * The current state of the task.
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
     * The id of the job to which the task belongs.
     */
    jobId?: string;
    /**
     * The id of the subtask if the task is a multi-instance task.
     */
    subtaskId?: number;
    /**
     * The id of the task.
     */
    taskId?: string;
    /**
     * The current state of the task.
     */
    taskState: TaskInformationTaskStateEnum;
    /**
     * The URL of the task.
     */
    taskUrl?: string;
}
