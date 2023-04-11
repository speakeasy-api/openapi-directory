import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Resource usage statistics for a job schedule.
 */
export declare class JobScheduleStatistics extends SpeakeasyBase {
    /**
     * The total kernel mode CPU time (summed across all cores and all compute nodes) consumed by all tasks in all jobs created under the schedule.
     */
    kernelCPUTime: string;
    /**
     * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * The total number of tasks that failed during the given time range in jobs created under the schedule. A task fails if it exhausts its maximum retry count without returning exit code 0.
     */
    numFailedTasks: number;
    /**
     * The total number of tasks successfully completed during the given time range in jobs created under the schedule. A task completes successfully if it returns exit code 0.
     */
    numSucceededTasks: number;
    /**
     * The total number of retries during the given time range on all tasks in all jobs created under the schedule.
     */
    numTaskRetries: number;
    /**
     * The total gibibytes read from disk by all tasks in all jobs created under the schedule.
     */
    readIOGiB: number;
    /**
     * The total number of disk read operations made by all tasks in all jobs created under the schedule.
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
     * The total user mode CPU time (summed across all cores and all compute nodes) consumed by all tasks in all jobs created under the schedule.
     */
    userCPUTime: string;
    /**
     * The total wait time of all tasks in all jobs created under the schedule. The wait time for a task is defined as the elapsed time between the creation of the task and the start of task execution. (If the task is retried due to failures, the wait time is the time to the most recent task execution.)
     */
    waitTime: string;
    /**
     * The total wall clock time of all the tasks in all the jobs created under the schedule.
     */
    wallClockTime: string;
    /**
     * The total gibibytes written to disk by all tasks in all jobs created under the schedule.
     */
    writeIOGiB: number;
    /**
     * The total number of disk write operations made by all tasks in all jobs created under the schedule.
     */
    writeIOps: number;
}
