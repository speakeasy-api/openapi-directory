import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationPackageReference } from "./applicationpackagereference";
import { AutoScaleRun } from "./autoscalerun";
import { CertificateReference } from "./certificatereference";
import { MetadataItem } from "./metadataitem";
import { PoolStatistics } from "./poolstatistics";
import { ResizeError } from "./resizeerror";
import { StartTask } from "./starttask";
import { TaskSchedulingPolicy } from "./taskschedulingpolicy";
/**
 * Gets or sets whether the pool is resizing.
 */
export declare enum CloudPoolAllocationStateEnum {
    Steady = "steady",
    Resizing = "resizing",
    Stopping = "stopping"
}
/**
 * Gets or sets the current state of the pool.
 */
export declare enum CloudPoolStateEnum {
    Active = "active",
    Deleting = "deleting",
    Upgrading = "upgrading"
}
/**
 * A pool in the Azure Batch service.
 */
export declare class CloudPool extends SpeakeasyBase {
    /**
     * Gets or sets whether the pool is resizing.
     */
    allocationState?: CloudPoolAllocationStateEnum;
    /**
     * Gets or sets the time at which the pool entered its current allocation state.
     */
    allocationStateTransitionTime?: Date;
    /**
     * Gets or sets the list of application packages to be installed on each compute node in the pool.
     */
    applicationPackageReferences?: ApplicationPackageReference[];
    /**
     * Gets or sets a time interval for the desired AutoScale evaluation period in the pool.
     */
    autoScaleEvaluationInterval?: string;
    /**
     * Gets or sets a formula for the desired number of compute nodes in the pool.
     */
    autoScaleFormula?: string;
    /**
     * The results and errors from an execution of a pool autoscale formula.
     */
    autoScaleRun?: AutoScaleRun;
    /**
     * Gets or sets the list of certificates to be installed on each compute node in the pool.
     */
    certificateReferences?: CertificateReference[];
    /**
     * Gets or sets the creation time of the pool.
     */
    creationTime?: Date;
    /**
     * Gets or sets the number of compute nodes currently in the pool.
     */
    currentDedicated?: number;
    /**
     * Gets or sets the Azure Guest OS Version currently installed on the virtual machines in the pool. This may differ from TargetOSVersion if the pool state is Upgrading.
     */
    currentOSVersion?: string;
    /**
     * Gets or sets the display name for the pool.
     */
    displayName?: string;
    /**
     * Gets or sets the ETag of the pool.
     */
    eTag?: string;
    /**
     * Gets or sets whether the pool size should automatically adjust over time. If true, the AutoScaleFormula property must be set. If false, the TargetDedicated property must be set.
     */
    enableAutoScale?: boolean;
    /**
     * Gets or sets whether the pool permits direct communication between nodes.
     */
    enableInterNodeCommunication?: boolean;
    /**
     * Gets or sets a string that uniquely identifies the pool within the account. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters.
     */
    id?: string;
    /**
     * Gets or sets the last modified time of the pool.
     */
    lastModified?: Date;
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
     * An error that occurred when resizing a pool.
     */
    resizeError?: ResizeError;
    /**
     * Gets or sets the timeout for allocation of compute nodes to the pool. In a Get Pool operation, this is the timeout for the most recent resize operation. The default value is 10 minutes.
     */
    resizeTimeout?: string;
    /**
     * A task defined on a pool and run by compute nodes when they join the pool.
     */
    startTask?: StartTask;
    /**
     * Gets or sets the current state of the pool.
     */
    state?: CloudPoolStateEnum;
    /**
     * Gets or sets the time at which the pool entered its current state.
     */
    stateTransitionTime?: Date;
    /**
     * Contains utilization and resource usage statistics for the lifetime of a pool.
     */
    stats?: PoolStatistics;
    /**
     * Gets or sets the desired number of compute nodes in the pool. This property must have the default value if EnableAutoScale is true. It is required if EnableAutoScale is false.
     */
    targetDedicated?: number;
    /**
     * Gets or sets the Azure Guest OS version to be installed on the virtual machines in the pool. The default value is * which specifies the latest operating system version for the specified family.
     */
    targetOSVersion?: string;
    /**
     * Specifies how tasks should be distributed across compute nodes.
     */
    taskSchedulingPolicy?: TaskSchedulingPolicy;
    /**
     * Gets or sets the URL of the pool.
     */
    url?: string;
    /**
     * Gets or sets the size of virtual machines in the pool.  All VMs in a pool are the same size.
     */
    vmSize?: string;
}
