import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Usage metrics for a pool across an aggregation interval.
 */
export declare class PoolUsageMetrics extends SpeakeasyBase {
    /**
     * The cross data center network egress in GiB from the pool during this interval.
     */
    dataEgressGiB: number;
    /**
     * The cross data center network ingress in GiB to the pool during this interval.
     */
    dataIngressGiB: number;
    /**
     * The end time of the aggregation interval.
     */
    endTime: Date;
    /**
     * The id of the pool whose metrics are being aggregated.
     */
    poolId: string;
    /**
     * The start time of the aggregation interval.
     */
    startTime: Date;
    /**
     * The total core hours used in the pool during this aggregation interval.
     */
    totalCoreHours: number;
    /**
     * The size of virtual machines in the pool. All VMs in a pool are the same size.
     */
    vmSize: string;
}
