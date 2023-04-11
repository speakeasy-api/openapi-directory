import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Resource usage statistics for a job.
 */
export declare class JobStatistics extends SpeakeasyBase {
    /**
     * Gets or sets the total kernel mode CPU time (summed across all cores and all compute nodes) consumed by all the tasks in the job.
     */
    kernelCPUTime: string;
    /**
     * Gets or sets the time at which the statistics were last updated. All statistics are limited to the range between StartTime and LastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * Gets or sets the total number of tasks in the job that failed during the given time range.
     */
    numFailedTasks: number;
    /**
     * Gets or sets the total number of tasks successfully completed in the job during the given time range.
     */
    numSucceededTasks: number;
    /**
     * Gets or sets the total number of retries on all the tasks in the job during the given time range.
     */
    numTaskRetries: number;
    /**
     * Gets or sets the total amount of data in GiB of I/O read by all the tasks in the job.
     */
    readIOGiB: number;
    /**
     * Gets or sets the total number of I/O read operations performed by all the tasks in the job.
     */
    readIOps: number;
    /**
     * Gets or sets the start time of the time range covered by the statistics.
     */
    startTime: Date;
    /**
     * Gets or sets the URL for the statistics.
     */
    url: string;
    /**
     * Gets or sets the total user mode CPU time (summed across all cores and all compute nodes) consumed by all the tasks in the job.
     */
    userCPUTime: string;
    /**
     * Gets or sets the total wait time of all the tasks in the job.  The wait time for a task is defined as the elapsed time between the creation of the task creation and the start of task execution.  This value is reported only in the account lifetime statistics; it is not included in individual job statistics.
     */
    waitTime: string;
    /**
     * Gets or sets the total wall clock time of all the tasks in the job.
     */
    wallClockTime: string;
    /**
     * Gets or sets the total amount of data in GiB of I/O written by all the tasks in the job.
     */
    writeIOGiB: number;
    /**
     * Gets or sets the total number of I/O write operations performed by all the tasks in the job.
     */
    writeIOps: number;
}
