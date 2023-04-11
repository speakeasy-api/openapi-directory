import { SpeakeasyBase } from "../../../internal/utils";
import { PoolUsageMetrics } from "./poolusagemetrics";
/**
 * Response to an AccountOperation.ListPoolUsageMetrics request.
 */
export declare class PoolListPoolUsageMetricsResult extends SpeakeasyBase {
    /**
     * The URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * The pool usage metrics data.
     */
    value?: PoolUsageMetrics[];
}
