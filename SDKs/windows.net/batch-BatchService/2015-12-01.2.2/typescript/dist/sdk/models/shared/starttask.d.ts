import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentSetting } from "./environmentsetting";
import { ResourceFile } from "./resourcefile";
/**
 * A task defined on a pool and run by compute nodes when they join the pool.
 */
export declare class StartTask extends SpeakeasyBase {
    /**
     * Gets or sets the command line of the start task.
     */
    commandLine?: string;
    /**
     * Gets or sets a list of environment variable settings for the start task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * Gets or sets the maximum number of times the task may be retried.
     */
    maxTaskRetryCount?: number;
    /**
     * Gets or sets a list of files that Batch will download to the compute node before running the command line.
     */
    resourceFiles?: ResourceFile[];
    /**
     * Gets or sets whether to run the start task in elevated mode. The default value is false.
     */
    runElevated?: boolean;
    /**
     * Gets or sets whether the Batch Service should wait for the start task to complete successfully (that is, to exit with exit code 0) before scheduling any tasks on the compute node.
     */
    waitForSuccess?: boolean;
}
