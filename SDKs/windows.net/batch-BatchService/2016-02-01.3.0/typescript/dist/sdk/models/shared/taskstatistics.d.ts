import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Resource usage statistics for a task.
 */
export declare class TaskStatistics extends SpeakeasyBase {
    /**
     * The total kernel mode CPU time (summed across all cores and all compute nodes) consumed by the task.
     */
    kernelCPUTime: string;
    /**
     * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * The total gibibytes read from disk by the task.
     */
    readIOGiB: number;
    /**
     * The total number of disk read operations made by the task.
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
     * The total user mode CPU time (summed across all cores and all compute nodes) consumed by the task.
     */
    userCPUTime: string;
    /**
     * The total wait time of the task. The wait time for a task is defined as the elapsed time between the creation of the task and the start of task execution. (If the task is retried due to failures, the wait time is the time to the most recent task execution.)
     */
    waitTime: string;
    /**
     * The total wall clock time of the task.
     */
    wallClockTime: string;
    /**
     * The total gibibytes written to disk by the task.
     */
    writeIOGiB: number;
    /**
     * The total number of disk write operations made by the task.
     */
    writeIOps: number;
}
