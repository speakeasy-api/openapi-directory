import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationPackageReference } from "./applicationpackagereference";
import { CertificateReference } from "./certificatereference";
import { MetadataItem } from "./metadataitem";
import { StartTask } from "./starttask";
import { TaskSchedulingPolicy } from "./taskschedulingpolicy";
/**
 * Specification for creating a new pool.
 */
export declare class PoolSpecification extends SpeakeasyBase {
    /**
     * Gets or sets the list of application packages to be installed on each compute node in the pool.
     */
    applicationPackageReferences?: ApplicationPackageReference[];
    /**
     * Gets or sets a time interval for the desired AutoScale evaluation period in the pool.
     */
    autoScaleEvaluationInterval?: string;
    /**
     * Gets or sets the formula for the desired number of compute nodes in the pool.
     */
    autoScaleFormula?: string;
    /**
     * Gets or sets a list of certificates to be installed on each compute node in the pool.
     */
    certificateReferences?: CertificateReference[];
    /**
     * Gets or sets the display name for the pool.
     */
    displayName?: string;
    /**
     * Gets or sets whether the pool size should automatically adjust over time.
     */
    enableAutoScale?: boolean;
    /**
     * Gets or sets whether the pool permits direct communication between nodes.
     */
    enableInterNodeCommunication?: boolean;
    /**
     * Gets or sets the maximum number of tasks that can run concurrently on a single compute node in the pool.
     */
    maxTasksPerNode?: number;
    /**
     * Gets or sets a list of name-value pairs associated with the pool as metadata.
     */
    metadata?: MetadataItem[];
    /**
     * Gets or sets the Azure Guest OS family to be installed on the virtual machines in the pool.
     */
    osFamily?: string;
    /**
     * Gets or sets the timeout for allocation of compute nodes to the pool.
     */
    resizeTimeout?: string;
    /**
     * A task defined on a pool and run by compute nodes when they join the pool.
     */
    startTask?: StartTask;
    /**
     * Gets or sets the desired number of compute nodes in the pool.
     */
    targetDedicated?: number;
    /**
     * Gets or sets the Azure Guest OS version to be installed on the virtual machines in the pool.
     */
    targetOSVersion?: string;
    /**
     * Specifies how tasks should be distributed across compute nodes.
     */
    taskSchedulingPolicy?: TaskSchedulingPolicy;
    /**
     * Gets or sets the size of the virtual machines in the pool. All VMs in a pool are the same size.
     */
    vmSize?: string;
}
