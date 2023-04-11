import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentSetting } from "./environmentsetting";
import { ResourceFile } from "./resourcefile";
import { TaskConstraints } from "./taskconstraints";
/**
 * A Job Preparation task to run before any tasks of the job on any given compute node.
 */
export declare class JobPreparationTask extends SpeakeasyBase {
    /**
     * Gets or sets the command line of the Job Preparation task.
     */
    commandLine?: string;
    /**
     * Constraints to apply to the Job Manager task.
     */
    constraints?: TaskConstraints;
    /**
     * Gets or sets a list of environment variable settings for the Job Preparation task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * Gets or sets a string that uniquely identifies the job preparation task within the job. The id can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters.
     */
    id?: string;
    /**
     * Gets or sets whether the Batch service should rerun the Job Preparation task after a compute node reboots. The default value is true.
     */
    rerunOnNodeRebootAfterSuccess?: boolean;
    /**
     * Gets or sets a list of files that Batch will download to the compute node before running the command line.
     */
    resourceFiles?: ResourceFile[];
    /**
     * Gets or sets whether to run the Job Preparation task in elevated mode. The default value is false.
     */
    runElevated?: boolean;
    /**
     * Gets or sets whether the Batch Service should wait for the Job Preparation task to complete successfully before scheduling any other tasks of the job on the compute node.
     */
    waitForSuccess?: boolean;
}
