import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Resource usage statistics for a task.
 */
export declare class TaskStatistics extends SpeakeasyBase {
    /**
     * Gets or sets the total kernel mode CPU time (summed across all cores and all compute nodes) consumed by the task.
     */
    kernelCPUTime: string;
    /**
     * Gets or sets the time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * Gets or sets the total amount of data in GiB of I/O read by the task.
     */
    readIOGiB: number;
    /**
     * Gets or sets the total number of I/O read operations performed by the task.
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
     * Gets or sets the total user mode CPU time (summed across all cores and all compute nodes) consumed by the task.
     */
    userCPUTime: string;
    /**
     * Gets or sets the elapsed time between the creation of the task and the start of task execution.
     */
    waitTime: string;
    /**
     * Gets or sets the total wall clock time of the task.
     */
    wallClockTime: string;
    /**
     * Gets or sets the total amount of data in GiB of I/O written by the task.
     */
    writeIOGiB: number;
    /**
     * Gets or sets the total number of I/O write operations performed by the task.
     */
    writeIOps: number;
}
