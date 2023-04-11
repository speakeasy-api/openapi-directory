import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatistics } from "./resourcestatistics";
import { UsageStatistics } from "./usagestatistics";
/**
 * Contains utilization and resource usage statistics for the lifetime of a pool.
 */
export declare class PoolStatistics extends SpeakeasyBase {
    /**
     * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * Statistics related to resource consumption by compute nodes in a pool.
     */
    resourceStats?: ResourceStatistics;
    /**
     * The start time of the time range covered by the statistics.
     */
    startTime: Date;
    /**
     * The URL for the statistics.
     */
    url: string;
    /**
     * Statistics related to pool usage information.
     */
    usageStats?: UsageStatistics;
}
