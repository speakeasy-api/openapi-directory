import { SpeakeasyBase } from "../../../internal/utils";
/**
 * When to reimage the compute node and what to do with currently running tasks. The default value is requeue.
 */
export declare enum NodeReimageParameterNodeReimageOptionEnum {
    Requeue = "requeue",
    Terminate = "terminate",
    Taskcompletion = "taskcompletion",
    Retaineddata = "retaineddata"
}
/**
 * Parameters for a ComputeNodeOperations.Reimage request.
 */
export declare class NodeReimageParameter extends SpeakeasyBase {
    /**
     * When to reimage the compute node and what to do with currently running tasks. The default value is requeue.
     */
    nodeReimageOption?: NodeReimageParameterNodeReimageOptionEnum;
}
