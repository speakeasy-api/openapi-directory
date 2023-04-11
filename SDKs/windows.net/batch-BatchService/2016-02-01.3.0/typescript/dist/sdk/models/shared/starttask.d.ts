import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentSetting } from "./environmentsetting";
import { ResourceFile } from "./resourcefile";
/**
 * A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged.
 */
export declare class StartTask extends SpeakeasyBase {
    /**
     * The command line of the start task.
     */
    commandLine?: string;
    /**
     * A list of environment variable settings for the start task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * The maximum number of times the task may be retried.
     */
    maxTaskRetryCount?: number;
    /**
     * A list of files that the Batch service will download to the compute node before running the command line.
     */
    resourceFiles?: ResourceFile[];
    /**
     * Whether to run the start task in elevated mode. The default value is false.
     */
    runElevated?: boolean;
    /**
     * Whether the Batch service should wait for the start task to complete successfully (that is, to exit with exit code 0) before scheduling any tasks on the compute node.
     */
    waitForSuccess?: boolean;
}
