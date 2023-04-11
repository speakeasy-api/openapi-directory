import { SpeakeasyBase } from "../../../internal/utils";
import { AffinityInformation } from "./affinityinformation";
import { EnvironmentSetting } from "./environmentsetting";
import { MultiInstanceSettings } from "./multiinstancesettings";
import { ResourceFile } from "./resourcefile";
import { TaskConstraints } from "./taskconstraints";
import { TaskDependencies } from "./taskdependencies";
/**
 * An Azure Batch task to add.
 */
export declare class TaskAddParameter extends SpeakeasyBase {
    /**
     * A locality hint that can be used by the Batch service to select a compute node on which to start a task.
     */
    affinityInfo?: AffinityInformation;
    /**
     * The command line of the task. For multi-instance tasks, the command line is executed on the primary subtask after all the subtasks have finished executing the coordination command line.
     */
    commandLine: string;
    /**
     * Constraints to apply to the Job Manager task.
     */
    constraints?: TaskConstraints;
    /**
     * Specifies any dependencies of a task. Any task that is explicitly specified or within a dependency range must complete before the dependant task will be scheduled.
     */
    dependsOn?: TaskDependencies;
    /**
     * A display name for the task.
     */
    displayName?: string;
    /**
     * A list of environment variable settings for the task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * A string that uniquely identifies the task within the job. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters.
     */
    id: string;
    /**
     * Settings which specify how to run a multi-instance task. Multi-instance tasks are commonly used to support MPI tasks.
     */
    multiInstanceSettings?: MultiInstanceSettings;
    /**
     * A list of files that the Batch service will download to the compute node before running the command line. For multi-instance tasks, the resource files will only be downloaded to the compute node on which the primary subtask is executed.
     */
    resourceFiles?: ResourceFile[];
    /**
     * Whether to run the task in elevated mode.
     */
    runElevated?: boolean;
}
