import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sets when to reboot the compute node and what to do with currently running tasks. The default value is requeue.
 */
export declare enum NodeRebootParameterNodeRebootOptionEnum {
    Requeue = "requeue",
    Terminate = "terminate",
    Taskcompletion = "taskcompletion",
    Retaineddata = "retaineddata"
}
/**
 * Parameters for a ComputeNodeOperations.Reboot request.
 */
export declare class NodeRebootParameter extends SpeakeasyBase {
    /**
     * Sets when to reboot the compute node and what to do with currently running tasks. The default value is requeue.
     */
    nodeRebootOption?: NodeRebootParameterNodeRebootOptionEnum;
}
