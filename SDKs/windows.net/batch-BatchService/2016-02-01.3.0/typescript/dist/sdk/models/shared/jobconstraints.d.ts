import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the execution constraints for jobs created on a schedule.
 */
export declare class JobConstraints extends SpeakeasyBase {
    /**
     * The maximum number of times each task may be retried. The Batch service retries a task if its exit code is nonzero.
     */
    maxTaskRetryCount?: number;
    /**
     * The maximum elapsed time that the job may run, measured from the time the job starts. If the job does not complete within the time limit, the Batch service terminates it and any tasks that are still running.
     */
    maxWallClockTime?: string;
}
