import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the compute node on which a task ran.
 */
export declare class ComputeNodeInformation extends SpeakeasyBase {
    /**
     * Gets or sets an identifier for the compute node on which the task ran, which can be passed when adding a task to request that the task be scheduled close to this compute node.
     */
    affinityId?: string;
    /**
     * Gets or sets the id of the node on which the task ran.
     */
    nodeId?: string;
    /**
     * Gets or sets the URL of the node on which the task ran.
     */
    nodeUrl?: string;
    /**
     * Gets or sets the id of the pool on which the task ran.
     */
    poolId?: string;
    /**
     * Gets or sets the root directory of the task on the compute node.
     */
    taskRootDirectory?: string;
    /**
     * Gets or sets the URL to the root directory of the task on the compute node.
     */
    taskRootDirectoryUrl?: string;
}
