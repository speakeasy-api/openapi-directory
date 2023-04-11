import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Statistics related to pool usage information.
 */
export declare class UsageStatistics extends SpeakeasyBase {
    /**
     * The aggregated wall-clock time of the dedicated compute node cores being part of the pool.
     */
    dedicatedCoreTime: string;
    /**
     * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * The start time of the time range covered by the statistics.
     */
    startTime: Date;
}
