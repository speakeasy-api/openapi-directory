import { SpeakeasyBase } from "../../../internal/utils";
/**
 * When compute nodes may be removed from the pool.
 */
export declare enum NodeRemoveParameterNodeDeallocationOptionEnum {
    Requeue = "requeue",
    Terminate = "terminate",
    Taskcompletion = "taskcompletion",
    Retaineddata = "retaineddata"
}
/**
 * Parameters for a ComputeNodeOperations.Remove request.
 */
export declare class NodeRemoveParameter extends SpeakeasyBase {
    /**
     * When compute nodes may be removed from the pool.
     */
    nodeDeallocationOption?: NodeRemoveParameterNodeDeallocationOptionEnum;
    /**
     * A list containing the id of the compute nodes to be removed from the specified pool.
     */
    nodeList: string[];
    /**
     * The timeout for removal of compute nodes to the pool. The default value is 10 minutes.
     */
    resizeTimeout?: string;
}
