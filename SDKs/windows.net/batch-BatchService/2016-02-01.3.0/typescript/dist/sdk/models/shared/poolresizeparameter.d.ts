import { SpeakeasyBase } from "../../../internal/utils";
/**
 * When nodes may be removed from the pool, if the pool size is decreasing.
 */
export declare enum PoolResizeParameterNodeDeallocationOptionEnum {
    Requeue = "requeue",
    Terminate = "terminate",
    Taskcompletion = "taskcompletion",
    Retaineddata = "retaineddata"
}
/**
 * Parameters for a CloudPoolOperations.Resize request.
 */
export declare class PoolResizeParameter extends SpeakeasyBase {
    /**
     * When nodes may be removed from the pool, if the pool size is decreasing.
     */
    nodeDeallocationOption?: PoolResizeParameterNodeDeallocationOptionEnum;
    /**
     * The timeout for allocation of compute nodes to the pool or removal of compute nodes from the pool. The default value is 10 minutes.
     */
    resizeTimeout?: string;
    /**
     * The desired number of compute nodes in the pool.
     */
    targetDedicated: number;
}
