import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentSetting } from "./environmentsetting";
import { ResourceFile } from "./resourcefile";
import { TaskConstraints } from "./taskconstraints";
/**
 * A Job Preparation task to run before any tasks of the job on any given compute node.
 */
export declare class JobPreparationTask extends SpeakeasyBase {
    /**
     * The command line of the Job Preparation task.
     */
    commandLine?: string;
    /**
     * Constraints to apply to the Job Manager task.
     */
    constraints?: TaskConstraints;
    /**
     * A list of environment variable settings for the Job Preparation task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * A string that uniquely identifies the job preparation task within the job. The id can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters.
     */
    id?: string;
    /**
     * Whether the Batch service should rerun the Job Preparation task after a compute node reboots. Note that the Job Preparation task should still be written to be idempotent because it can be rerun if the compute node is rebooted while Job Preparation task is still running. The default value is true.
     */
    rerunOnNodeRebootAfterSuccess?: boolean;
    /**
     * A list of files that the Batch service will download to the compute node before running the command line.
     */
    resourceFiles?: ResourceFile[];
    /**
     * Whether to run the Job Preparation task in elevated mode. The default value is false.
     */
    runElevated?: boolean;
    /**
     * Whether the Batch service should wait for the Job Preparation task to complete successfully before scheduling any other tasks of the job on the compute node.
     */
    waitForSuccess?: boolean;
}
