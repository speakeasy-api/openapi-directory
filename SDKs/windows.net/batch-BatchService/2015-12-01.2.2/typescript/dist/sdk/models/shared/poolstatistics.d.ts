import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatistics } from "./resourcestatistics";
import { UsageStatistics } from "./usagestatistics";
/**
 * Contains utilization and resource usage statistics for the lifetime of a pool.
 */
export declare class PoolStatistics extends SpeakeasyBase {
    /**
     * Gets or sets the time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * Statistics related to resource consumption by compute nodes in a pool.
     */
    resourceStats?: ResourceStatistics;
    /**
     * Gets or sets the start time of the time range covered by the statistics.
     */
    startTime: Date;
    /**
     * Gets or sets the URL for the statistics.
     */
    url: string;
    /**
     * Statistics related to pool usage information.
     */
    usageStats?: UsageStatistics;
}
