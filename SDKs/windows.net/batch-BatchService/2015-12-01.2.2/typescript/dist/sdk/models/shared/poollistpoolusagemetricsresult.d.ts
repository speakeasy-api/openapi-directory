import { SpeakeasyBase } from "../../../internal/utils";
import { PoolUsageMetrics } from "./poolusagemetrics";
/**
 * Response to an AccountOperations.ListPoolUsageMetrics request.
 */
export declare class PoolListPoolUsageMetricsResult extends SpeakeasyBase {
    /**
     * Gets or sets the URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * Gets or sets the pool usage metrics data.
     */
    value?: PoolUsageMetrics[];
}
