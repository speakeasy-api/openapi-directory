import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters for a CloudPoolOperations.EnableAutoScale request.
 */
export declare class PoolEnableAutoScaleParameter extends SpeakeasyBase {
    /**
     * A time interval for the desired autoscale evaluation period in the pool.
     */
    autoScaleEvaluationInterval?: string;
    /**
     * The formula for the desired number of compute nodes in the pool.
     */
    autoScaleFormula?: string;
}
