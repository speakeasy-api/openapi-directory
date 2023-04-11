import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationPackageReference } from "./applicationpackagereference";
import { AutoScaleRun } from "./autoscalerun";
import { CertificateReference } from "./certificatereference";
import { CloudServiceConfiguration } from "./cloudserviceconfiguration";
import { MetadataItem } from "./metadataitem";
import { PoolStatistics } from "./poolstatistics";
import { ResizeError } from "./resizeerror";
import { StartTask } from "./starttask";
import { TaskSchedulingPolicy } from "./taskschedulingpolicy";
import { VirtualMachineConfiguration } from "./virtualmachineconfiguration";
/**
 * Whether the pool is resizing.
 */
export declare enum CloudPoolAllocationStateEnum {
    Steady = "steady",
    Resizing = "resizing",
    Stopping = "stopping"
}
/**
 * The current state of the pool.
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
     * Whether the pool is resizing.
     */
    allocationState?: CloudPoolAllocationStateEnum;
    /**
     * The time at which the pool entered its current allocation state.
     */
    allocationStateTransitionTime?: Date;
    /**
     * The list of application packages to be installed on each compute node in the pool.
     */
    applicationPackageReferences?: ApplicationPackageReference[];
    /**
     * A time interval for the desired AutoScale evaluation period in the pool.
     */
    autoScaleEvaluationInterval?: string;
    /**
     * A formula for the desired number of compute nodes in the pool.
     */
    autoScaleFormula?: string;
    /**
     * The results and errors from an execution of a pool autoscale formula.
     */
    autoScaleRun?: AutoScaleRun;
    /**
     * The list of certificates to be installed on each compute node in the pool.
     */
    certificateReferences?: CertificateReference[];
    /**
     * The configuration for nodes in a pool based on the Azure Cloud Services platform.
     */
    cloudServiceConfiguration?: CloudServiceConfiguration;
    /**
     * The creation time of the pool.
     */
    creationTime?: Date;
    /**
     * The number of compute nodes currently in the pool.
     */
    currentDedicated?: number;
    /**
     * The display name for the pool.
     */
    displayName?: string;
    /**
     * The ETag of the pool.
     */
    eTag?: string;
    /**
     * Whether the pool size should automatically adjust over time. If true, the AutoScaleFormula property must be set. If false, the TargetDedicated property must be set.
     */
    enableAutoScale?: boolean;
    /**
     * Whether the pool permits direct communication between nodes.
     */
    enableInterNodeCommunication?: boolean;
    /**
     * A string that uniquely identifies the pool within the account. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters.
     */
    id?: string;
    /**
     * The last modified time of the pool.
     */
    lastModified?: Date;
    /**
     * The maximum number of tasks that can run concurrently on a single compute node in the pool.
     */
    maxTasksPerNode?: number;
    /**
     * A list of name-value pairs associated with the pool as metadata.
     */
    metadata?: MetadataItem[];
    /**
     * An error that occurred when resizing a pool.
     */
    resizeError?: ResizeError;
    /**
     * The timeout for allocation of compute nodes to the pool. In a Get Pool operation, this is the timeout for the most recent resize operation. The default value is 10 minutes.
     */
    resizeTimeout?: string;
    /**
     * A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged.
     */
    startTask?: StartTask;
    /**
     * The current state of the pool.
     */
    state?: CloudPoolStateEnum;
    /**
     * The time at which the pool entered its current state.
     */
    stateTransitionTime?: Date;
    /**
     * Contains utilization and resource usage statistics for the lifetime of a pool.
     */
    stats?: PoolStatistics;
    /**
     * The desired number of compute nodes in the pool. This property must have the default value if EnableAutoScale is true. It is required if EnableAutoScale is false.
     */
    targetDedicated?: number;
    /**
     * Specifies how tasks should be distributed across compute nodes.
     */
    taskSchedulingPolicy?: TaskSchedulingPolicy;
    /**
     * The URL of the pool.
     */
    url?: string;
    /**
     * The configuration for compute nodes in a pool based on the Azure Virtual Machines infrastructure.
     */
    virtualMachineConfiguration?: VirtualMachineConfiguration;
    /**
     * The size of virtual machines in the pool. All virtual machines in a pool are the same size.
     */
    vmSize?: string;
}
