import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters for a CloudJobOperations.EvaluateAutoScale request.
 */
export declare class PoolEvaluateAutoScaleParameter extends SpeakeasyBase {
    /**
     * Sets a formula for the desired number of compute nodes in the pool.
     */
    autoScaleFormula: string;
}
