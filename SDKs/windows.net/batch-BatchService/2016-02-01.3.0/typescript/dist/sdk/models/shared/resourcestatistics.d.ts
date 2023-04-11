import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Statistics related to resource consumption by compute nodes in a pool.
 */
export declare class ResourceStatistics extends SpeakeasyBase {
    /**
     * The average CPU usage across all nodes in the pool (percentage per node).
     */
    avgCPUPercentage: number;
    /**
     * The average used disk space in GiB across all nodes in the pool.
     */
    avgDiskGiB: number;
    /**
     * The average memory usage in GiB across all nodes in the pool.
     */
    avgMemoryGiB: number;
    /**
     * The total amount of data in GiB of disk reads across all nodes in the pool.
     */
    diskReadGiB: number;
    /**
     * The total number of disk read operations across all nodes in the pool.
     */
    diskReadIOps: number;
    /**
     * The total amount of data in GiB of disk writes across all nodes in the pool.
     */
    diskWriteGiB: number;
    /**
     * The total number of disk write operations across all nodes in the pool.
     */
    diskWriteIOps: number;
    /**
     * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * The total amount of data in GiB of network reads across all nodes in the pool.
     */
    networkReadGiB: number;
    /**
     * The total amount of data in GiB of network writes across all nodes in the pool.
     */
    networkWriteGiB: number;
    /**
     * The peak used disk space in GiB across all nodes in the pool.
     */
    peakDiskGiB: number;
    /**
     * The peak memory usage in GiB across all nodes in the pool.
     */
    peakMemoryGiB: number;
    /**
     * The start time of the time range covered by the statistics.
     */
    startTime: Date;
}
