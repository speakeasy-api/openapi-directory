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
     * Gets or sets the command line of the task. For multi-instance tasks, the command line is executed on the primary subtask after all the subtasks have finished executing the coordination command line.
     */
    commandLine: string;
    /**
     * Constraints to apply to the Job Manager task.
     */
    constraints?: TaskConstraints;
    /**
     * Specifies any dependencies of a task.  Any task that is explicitly specified or within a dependency range must complete before the dependant task will be scheduled.
     */
    dependsOn?: TaskDependencies;
    /**
     * Gets or sets a display name for the task.
     */
    displayName?: string;
    /**
     * Gets or sets a list of environment variable settings for the task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * Gets or sets a string that uniquely identifies the task within the job. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters.
     */
    id: string;
    /**
     * Information about the settings required for multi-instance task.
     */
    multiInstanceSettings?: MultiInstanceSettings;
    /**
     * Gets or sets a list of files that Batch will download to the compute node before running the command line. For multi-instance tasks, the resource files will only be downloaded to the compute node on which the primary subtask is executed.
     */
    resourceFiles?: ResourceFile[];
    /**
     * Gets or sets whether to run the task in elevated mode.
     */
    runElevated?: boolean;
}
