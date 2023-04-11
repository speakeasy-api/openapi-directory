import { SpeakeasyBase } from "../../../internal/utils";
/**
 * What to do with currently running tasks when disable task scheduling on the compute node. The default value is requeue.
 */
export declare enum NodeDisableSchedulingParameterNodeDisableSchedulingOptionEnum {
    Requeue = "requeue",
    Terminate = "terminate",
    Taskcompletion = "taskcompletion"
}
/**
 * Parameters for a ComputeNodeOperations.DisableScheduling request.
 */
export declare class NodeDisableSchedulingParameter extends SpeakeasyBase {
    /**
     * What to do with currently running tasks when disable task scheduling on the compute node. The default value is requeue.
     */
    nodeDisableSchedulingOption?: NodeDisableSchedulingParameterNodeDisableSchedulingOptionEnum;
}
