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
 * The previous state of the task. This property is not set if the task is in its initial Active state.
 */
export declare enum CloudTaskPreviousStateEnum {
    Active = "active",
    Preparing = "preparing",
    Running = "running",
    Completed = "completed"
}
/**
 * The current state of the task.
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
     * The command line of the task. For multi-instance tasks, the command line is executed on the primary subtask after all the subtasks have finished executing the coordination command line.
     */
    commandLine?: string;
    /**
     * Constraints to apply to the Job Manager task.
     */
    constraints?: TaskConstraints;
    /**
     * The creation time of the task.
     */
    creationTime?: Date;
    /**
     * Specifies any dependencies of a task. Any task that is explicitly specified or within a dependency range must complete before the dependant task will be scheduled.
     */
    dependsOn?: TaskDependencies;
    /**
     * A display name for the task.
     */
    displayName?: string;
    /**
     * The ETag of the task.
     */
    eTag?: string;
    /**
     * A list of environment variable settings for the task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * Information about the execution of a task.
     */
    executionInfo?: TaskExecutionInformation;
    /**
     * A string that uniquely identifies the task within the job. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters.
     */
    id?: string;
    /**
     * The last modified time of the task.
     */
    lastModified?: Date;
    /**
     * Settings which specify how to run a multi-instance task. Multi-instance tasks are commonly used to support MPI tasks.
     */
    multiInstanceSettings?: MultiInstanceSettings;
    /**
     * Information about the compute node on which a task ran.
     */
    nodeInfo?: ComputeNodeInformation;
    /**
     * The previous state of the task. This property is not set if the task is in its initial Active state.
     */
    previousState?: CloudTaskPreviousStateEnum;
    /**
     * The time at which the task entered its previous state. This property is not set if the task is in its initial Active state.
     */
    previousStateTransitionTime?: Date;
    /**
     * A list of files that the Batch service will download to the compute node before running the command line. For multi-instance tasks, the resource files will only be downloaded to the compute node on which the primary subtask is executed.
     */
    resourceFiles?: ResourceFile[];
    /**
     * Whether to run the task in elevated mode.
     */
    runElevated?: boolean;
    /**
     * The current state of the task.
     */
    state?: CloudTaskStateEnum;
    /**
     * The time at which the task entered its current state.
     */
    stateTransitionTime?: Date;
    /**
     * Resource usage statistics for a task.
     */
    stats?: TaskStatistics;
    /**
     * The URL of the task.
     */
    url?: string;
}
