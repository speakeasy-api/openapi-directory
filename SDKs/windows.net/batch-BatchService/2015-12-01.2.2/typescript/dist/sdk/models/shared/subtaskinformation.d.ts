import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeNodeInformation } from "./computenodeinformation";
import { TaskSchedulingError } from "./taskschedulingerror";
/**
 * Gets or sets the previous state of the subtask. This property is not set if the subtask is in its initial Active state.
 */
export declare enum SubtaskInformationPreviousStateEnum {
    Active = "active",
    Preparing = "preparing",
    Running = "running",
    Completed = "completed"
}
/**
 * Gets or sets the current state of the subtask.
 */
export declare enum SubtaskInformationStateEnum {
    Active = "active",
    Preparing = "preparing",
    Running = "running",
    Completed = "completed"
}
/**
 * Information about an Azure Batch subtask.
 */
export declare class SubtaskInformation extends SpeakeasyBase {
    /**
     * Gets or sets the time at which the subtask completed. This property is set only if the subtask is in the Completed state.
     */
    endTime?: Date;
    /**
     * Gets or sets the exit code of the subtask. This property is set only if the subtask is in the Completed state.
     */
    exitCode?: number;
    /**
     * Gets or sets the id of the subtask.
     */
    id?: number;
    /**
     * Information about the compute node on which a task ran.
     */
    nodeInfo?: ComputeNodeInformation;
    /**
     * Gets or sets the previous state of the subtask. This property is not set if the subtask is in its initial Active state.
     */
    previousState?: SubtaskInformationPreviousStateEnum;
    /**
     * Gets or sets the time at which the subtask entered its previous state. This property is not set if the subtask is in its initial Active state.
     */
    previousStateTransitionTime?: Date;
    /**
     * Information about an error when scheduling a task.
     */
    schedulingError?: TaskSchedulingError;
    /**
     * Gets or sets the time at which the subtask started running. If the subtask has been restarted or retried, this is the most recent time at which the subtask started running.
     */
    startTime?: Date;
    /**
     * Gets or sets the current state of the subtask.
     */
    state?: SubtaskInformationStateEnum;
    /**
     * Gets or sets the time at which the subtask entered its current state.
     */
    stateTransitionTime?: Date;
}
