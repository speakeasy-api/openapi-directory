import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters for a CloudPoolOperations.EnableAutoScale request.
 */
export declare class PoolEnableAutoScaleParameter extends SpeakeasyBase {
    /**
     * Gets or sets a time interval for the desired autoscale evaluation period in the pool.
     */
    autoScaleEvaluationInterval?: string;
    /**
     * Sets the formula for the desired number of compute nodes in the pool.
     */
    autoScaleFormula?: string;
}
