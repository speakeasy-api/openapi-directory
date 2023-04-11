import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationPackageReference } from "./applicationpackagereference";
import { CertificateReference } from "./certificatereference";
import { CloudServiceConfiguration } from "./cloudserviceconfiguration";
import { MetadataItem } from "./metadataitem";
import { StartTask } from "./starttask";
import { TaskSchedulingPolicy } from "./taskschedulingpolicy";
import { VirtualMachineConfiguration } from "./virtualmachineconfiguration";
/**
 * A pool in the Azure Batch service to add.
 */
export declare class PoolAddParameter extends SpeakeasyBase {
    /**
     * The list of application packages to be installed on each compute node in the pool.
     */
    applicationPackageReferences?: ApplicationPackageReference[];
    /**
     * A time interval for the desired autoscale evaluation period in the pool.
     */
    autoScaleEvaluationInterval?: string;
    /**
     * A formula for the desired number of compute nodes in the pool.
     */
    autoScaleFormula?: string;
    /**
     * The list of certificates to be installed on each compute node in the pool.
     */
    certificateReferences?: CertificateReference[];
    /**
     * The configuration for nodes in a pool based on the Azure Cloud Services platform.
     */
    cloudServiceConfiguration?: CloudServiceConfiguration;
    /**
     * The display name for the pool.
     */
    displayName?: string;
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
    id: string;
    /**
     * The maximum number of tasks that can run concurrently on a single compute node in the pool.
     */
    maxTasksPerNode?: number;
    /**
     * A list of name-value pairs associated with the pool as metadata.
     */
    metadata?: MetadataItem[];
    /**
     * The timeout for allocation of compute nodes to the pool. In a Get Pool operation, this is the timeout for the most recent resize operation. The default value is 10 minutes.
     */
    resizeTimeout?: string;
    /**
     * A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged.
     */
    startTask?: StartTask;
    /**
     * The desired number of compute nodes in the pool. This property must have the default value if EnableAutoScale is true. It is required if EnableAutoScale is false.
     */
    targetDedicated?: number;
    /**
     * Specifies how tasks should be distributed across compute nodes.
     */
    taskSchedulingPolicy?: TaskSchedulingPolicy;
    /**
     * The configuration for compute nodes in a pool based on the Azure Virtual Machines infrastructure.
     */
    virtualMachineConfiguration?: VirtualMachineConfiguration;
    /**
     * The size of virtual machines in the pool. All virtual machines in a pool are the same size.
     */
    vmSize: string;
}
