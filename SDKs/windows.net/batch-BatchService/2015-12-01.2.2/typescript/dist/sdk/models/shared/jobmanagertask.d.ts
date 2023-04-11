import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentSetting } from "./environmentsetting";
import { ResourceFile } from "./resourcefile";
import { TaskConstraints } from "./taskconstraints";
/**
 * Specifies details of a Job Manager task.
 */
export declare class JobManagerTask extends SpeakeasyBase {
    /**
     * Gets or sets the command line of the Job Manager task.
     */
    commandLine?: string;
    /**
     * Constraints to apply to the Job Manager task.
     */
    constraints?: TaskConstraints;
    /**
     * Gets or sets the display name of the Job Manager task.
     */
    displayName?: string;
    /**
     * Gets or sets a list of environment variable settings for the Job Manager task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * Gets or sets a string that uniquely identifies the Job Manager task. A GUID is recommended.
     */
    id?: string;
    /**
     * Gets or sets whether completion of the Job Manager task signifies completion of the entire job.
     */
    killJobOnCompletion?: boolean;
    /**
     * Gets or sets a list of files that Batch will download to the compute node before running the command line.
     */
    resourceFiles?: ResourceFile[];
    /**
     * Gets or sets whether to run the Job Manager task in elevated mode. The default value is false.
     */
    runElevated?: boolean;
    /**
     * Gets or sets whether the Job Manager task requires exclusive use of the compute node where it runs.
     */
    runExclusive?: boolean;
}
