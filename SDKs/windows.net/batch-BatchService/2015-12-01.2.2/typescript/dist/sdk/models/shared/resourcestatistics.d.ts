import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Statistics related to resource consumption by compute nodes in a pool.
 */
export declare class ResourceStatistics extends SpeakeasyBase {
    /**
     * Gets or sets the average CPU usage across all nodes in the pool (percentage per node).
     */
    avgCPUPercentage: number;
    /**
     * Gets or sets the average used disk space in GiB across all nodes in the pool.
     */
    avgDiskGiB: number;
    /**
     * Gets or sets the average memory usage in GiB across all nodes in the pool.
     */
    avgMemoryGiB: number;
    /**
     * Gets or sets the total amount of data in GiB of disk reads across all nodes in the pool.
     */
    diskReadGiB: number;
    /**
     * Gets or sets the total number of disk read operations across all nodes in the pool.
     */
    diskReadIOps: number;
    /**
     * Gets or sets the total amount of data in GiB of disk writes across all nodes in the pool.
     */
    diskWriteGiB: number;
    /**
     * Gets or sets the total number of disk write operations across all nodes in the pool.
     */
    diskWriteIOps: number;
    /**
     * Gets or sets the time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * Gets or sets the total amount of data in GiB of network reads across all nodes in the pool.
     */
    networkReadGiB: number;
    /**
     * Gets or sets the total amount of data in GiB of network writes across all nodes in the pool.
     */
    networkWriteGiB: number;
    /**
     * Gets or sets the peak used disk space in GiB across all nodes in the pool.
     */
    peakDiskGiB: number;
    /**
     * Gets or sets the peak memory usage in GiB across all nodes in the pool.
     */
    peakMemoryGiB: number;
    /**
     * Gets or sets the start time of the time range covered by the statistics.
     */
    startTime: Date;
}
