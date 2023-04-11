import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Resource usage statistics for a job.
 */
export declare class JobStatistics extends SpeakeasyBase {
    /**
     * The total kernel mode CPU time (summed across all cores and all compute nodes) consumed by all tasks in the job.
     */
    kernelCPUTime: string;
    /**
     * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * The total number of tasks in the job that failed during the given time range.
     */
    numFailedTasks: number;
    /**
     * The total number of tasks successfully completed in the job during the given time range.
     */
    numSucceededTasks: number;
    /**
     * The total number of retries on all the tasks in the job during the given time range.
     */
    numTaskRetries: number;
    /**
     * The total gibibytes read from disk by all tasks in the job.
     */
    readIOGiB: number;
    /**
     * The total number of disk read operations made by all tasks in the job.
     */
    readIOps: number;
    /**
     * The start time of the time range covered by the statistics.
     */
    startTime: Date;
    /**
     * The URL of the statistics.
     */
    url: string;
    /**
     * The total user mode CPU time (summed across all cores and all compute nodes) consumed by all tasks in the job.
     */
    userCPUTime: string;
    /**
     * The total wait time of all tasks in the job. The wait time for a task is defined as the elapsed time between the creation of the task and the start of task execution. (If the task is retried due to failures, the wait time is the time to the most recent task execution.)
     */
    waitTime: string;
    /**
     * The total wall clock time of all tasks in the job.
     */
    wallClockTime: string;
    /**
     * The total gibibytes written to disk by all tasks in the job.
     */
    writeIOGiB: number;
    /**
     * The total number of disk write operations made by all tasks in the job.
     */
    writeIOps: number;
}
