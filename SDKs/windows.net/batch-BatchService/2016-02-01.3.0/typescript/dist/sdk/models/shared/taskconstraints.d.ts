import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Constraints to apply to the Job Manager task.
 */
export declare class TaskConstraints extends SpeakeasyBase {
    /**
     * The maximum number of times the task may be retried. The Batch service retries a task if its exit code is nonzero.
     */
    maxTaskRetryCount?: number;
    /**
     * The maximum elapsed time that the task may run, measured from the time the task starts. If the task does not complete within the time limit, the Batch service terminates it.
     */
    maxWallClockTime?: string;
    /**
     * The minimum time to retain the working directory for the task on the compute node where it ran, from the time it completes execution. After this time, the Batch service may delete the working directory and all its contents. The default is infinite.
     */
    retentionTime?: string;
}
