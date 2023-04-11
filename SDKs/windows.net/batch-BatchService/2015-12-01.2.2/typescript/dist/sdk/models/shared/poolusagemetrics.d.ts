import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Usage metrics for a pool across an aggregation interval.
 */
export declare class PoolUsageMetrics extends SpeakeasyBase {
    /**
     * Gets or sets the cross data center network egress in GiB from the pool during this interval.
     */
    dataEgressGiB: number;
    /**
     * Gets or sets the cross data center network ingress in GiB to the pool during this interval.
     */
    dataIngressGiB: number;
    /**
     * Gets or sets the end time of the aggregation interval.
     */
    endTime: Date;
    /**
     * Gets or sets the id of the pool whose metrics are being aggregated.
     */
    poolId: string;
    /**
     * Gets or sets the start time of the aggregation interval.
     */
    startTime: Date;
    /**
     * Gets or sets the total core hours used in the pool during this aggregation interval.
     */
    totalCoreHours: number;
    /**
     * Gets or sets the size of virtual machines in the pool.  All VMs in a pool are the same size.
     */
    vmSize: string;
}
