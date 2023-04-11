import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The lifetime resource usage statistics for a job schedule.
 */
export declare class JobScheduleStatistics extends SpeakeasyBase {
    /**
     * Gets or sets the total kernel mode CPU time (summed across all cores and all compute nodes) consumed by all the tasks in all the jobs created under the schedule.
     */
    kernelCPUTime: string;
    /**
     * Gets or sets the time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * Gets or sets the total number of tasks that failed during the given time range in jobs created under the schedule. A task fails if it exhausts its maximum retry count without returning exit code 0.
     */
    numFailedTasks: number;
    /**
     * Gets or sets the total number of tasks successfully completed during the given time range in jobs created under the schedule.  A task completes successfully if it returns exit code 0.
     */
    numSucceededTasks: number;
    /**
     * Gets or sets the total number of retries during the given time range on all the tasks in jobs created under the schedule.
     */
    numTaskRetries: number;
    /**
     * Gets or sets the total amount of data in GiB of I/O read by all the tasks in all the jobs created under the schedule.
     */
    readIOGiB: number;
    /**
     * Gets or sets the total number of I/O read operations performed by all the tasks in all the jobs created under the schedule.
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
     * Gets or sets the total user mode CPU time (summed across all cores and all compute nodes) consumed by all the tasks in all the jobs created under the schedule.
     */
    userCPUTime: string;
    /**
     * Gets or sets the total wait time of all the tasks in jobs created under the schedule.
     */
    waitTime: string;
    /**
     * Gets or sets the total wall clock time of all the tasks in all the jobs created under the schedule.
     */
    wallClockTime: string;
    /**
     * Gets or sets the total amount of data in GiB of I/O written by all the tasks in all the jobs created under the schedule.
     */
    writeIOGiB: number;
    /**
     * Gets or sets the total number of I/O write operations performed by all the tasks in all the jobs created under the schedule.
     */
    writeIOps: number;
}
