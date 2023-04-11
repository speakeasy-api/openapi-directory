import { SpeakeasyBase } from "../../../internal/utils";
import { AffinityInformation } from "./affinityinformation";
import { ComputeNodeInformation } from "./computenodeinformation";
import { EnvironmentSetting } from "./environmentsetting";
import { MultiInstanceSettings } from "./multiinstancesettings";
import { ResourceFile } from "./resourcefile";
import { TaskConstraints } from "./taskconstraints";
import { TaskDependencies } from "./taskdependencies";
import { TaskExecutionInformation } from "./taskexecutioninformation";
import { TaskStatistics } from "./taskstatistics";
/**
 * Gets or sets the previous state of the task. This property is not set if the task is in its initial Active state.
 */
export declare enum CloudTaskPreviousStateEnum {
    Active = "active",
    Preparing = "preparing",
    Running = "running",
    Completed = "completed"
}
/**
 * Gets or sets the current state of the task.
 */
export declare enum CloudTaskStateEnum {
    Active = "active",
    Preparing = "preparing",
    Running = "running",
    Completed = "completed"
}
/**
 * An Azure Batch task.
 */
export declare class CloudTask extends SpeakeasyBase {
    /**
     * A locality hint that can be used by the Batch service to select a compute node on which to start a task.
     */
    affinityInfo?: AffinityInformation;
    /**
     * Gets or sets the command line of the task. For multi-instance tasks, the command line is executed on the primary subtask after all the subtasks have finished executing the coordination command line.
     */
    commandLine?: string;
    /**
     * Constraints to apply to the Job Manager task.
     */
    constraints?: TaskConstraints;
    /**
     * Gets or sets the creation time of the task.
     */
    creationTime?: Date;
    /**
     * Specifies any dependencies of a task.  Any task that is explicitly specified or within a dependency range must complete before the dependant task will be scheduled.
     */
    dependsOn?: TaskDependencies;
    /**
     * Gets or sets a display name for the task.
     */
    displayName?: string;
    /**
     * Gets or sets the ETag of the task.
     */
    eTag?: string;
    /**
     * Gets or sets a list of environment variable settings for the task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * Information about the execution of a task.
     */
    executionInfo?: TaskExecutionInformation;
    /**
     * Gets or sets a string that uniquely identifies the task within the job. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters.
     */
    id?: string;
    /**
     * Gets or sets the last modified time of the task.
     */
    lastModified?: Date;
    /**
     * Information about the settings required for multi-instance task.
     */
    multiInstanceSettings?: MultiInstanceSettings;
    /**
     * Information about the compute node on which a task ran.
     */
    nodeInfo?: ComputeNodeInformation;
    /**
     * Gets or sets the previous state of the task. This property is not set if the task is in its initial Active state.
     */
    previousState?: CloudTaskPreviousStateEnum;
    /**
     * Gets or sets the time at which the task entered its previous state. This property is not set if the task is in its initial Active state.
     */
    previousStateTransitionTime?: Date;
    /**
     * Gets or sets a list of files that Batch will download to the compute node before running the command line. For multi-instance tasks, the resource files will only be downloaded to the compute node on which the primary subtask is executed.
     */
    resourceFiles?: ResourceFile[];
    /**
     * Gets or sets whether to run the task in elevated mode.
     */
    runElevated?: boolean;
    /**
     * Gets or sets the current state of the task.
     */
    state?: CloudTaskStateEnum;
    /**
     * Gets or sets the time at which the task entered its current state.
     */
    stateTransitionTime?: Date;
    /**
     * Resource usage statistics for a task.
     */
    stats?: TaskStatistics;
    /**
     * Gets or sets the URL of the task.
     */
    url?: string;
}
