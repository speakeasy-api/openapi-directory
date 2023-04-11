import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentSetting } from "./environmentsetting";
import { ResourceFile } from "./resourcefile";
import { TaskConstraints } from "./taskconstraints";
/**
 * Specifies details of a Job Manager task.
 */
export declare class JobManagerTask extends SpeakeasyBase {
    /**
     * The command line of the Job Manager task.
     */
    commandLine?: string;
    /**
     * Constraints to apply to the Job Manager task.
     */
    constraints?: TaskConstraints;
    /**
     * The display name of the Job Manager task.
     */
    displayName?: string;
    /**
     * A list of environment variable settings for the Job Manager task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * A string that uniquely identifies the Job Manager task. A GUID is recommended.
     */
    id?: string;
    /**
     * Whether completion of the Job Manager task signifies completion of the entire job.
     */
    killJobOnCompletion?: boolean;
    /**
     * A list of files that the Batch service will download to the compute node before running the command line.
     */
    resourceFiles?: ResourceFile[];
    /**
     * Whether to run the Job Manager task in elevated mode. The default value is false.
     */
    runElevated?: boolean;
    /**
     * Whether the Job Manager task requires exclusive use of the compute node where it runs. If true, no other tasks will run on the same compute node for as long as the Job Manager is running. If false, other tasks can run simultaneously with the Job Manager on a compute node. (The Job Manager task counts normally against the node's concurrent task limit, so this is only relevant if the node allows multiple concurrent tasks.)
     */
    runExclusive?: boolean;
}
