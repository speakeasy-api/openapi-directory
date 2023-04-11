import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeNodeInformation } from "./computenodeinformation";
import { TaskSchedulingError } from "./taskschedulingerror";
/**
 * The previous state of the subtask. This property is not set if the subtask is in its initial Active state.
 */
export declare enum SubtaskInformationPreviousStateEnum {
    Active = "active",
    Preparing = "preparing",
    Running = "running",
    Completed = "completed"
}
/**
 * The current state of the subtask.
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
     * The time at which the subtask completed. This property is set only if the subtask is in the Completed state.
     */
    endTime?: Date;
    /**
     * The exit code of the subtask. This property is set only if the subtask is in the Completed state.
     */
    exitCode?: number;
    /**
     * The id of the subtask.
     */
    id?: number;
    /**
     * Information about the compute node on which a task ran.
     */
    nodeInfo?: ComputeNodeInformation;
    /**
     * The previous state of the subtask. This property is not set if the subtask is in its initial Active state.
     */
    previousState?: SubtaskInformationPreviousStateEnum;
    /**
     * The time at which the subtask entered its previous state. This property is not set if the subtask is in its initial Active state.
     */
    previousStateTransitionTime?: Date;
    /**
     * Information about an error when scheduling a task.
     */
    schedulingError?: TaskSchedulingError;
    /**
     * The time at which the subtask started running. If the subtask has been restarted or retried, this is the most recent time at which the subtask started running.
     */
    startTime?: Date;
    /**
     * The current state of the subtask.
     */
    state?: SubtaskInformationStateEnum;
    /**
     * The time at which the subtask entered its current state.
     */
    stateTransitionTime?: Date;
}
