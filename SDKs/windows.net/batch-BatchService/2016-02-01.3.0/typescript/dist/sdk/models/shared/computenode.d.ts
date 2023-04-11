import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateReference } from "./certificatereference";
import { ComputeNodeError } from "./computenodeerror";
import { StartTask } from "./starttask";
import { StartTaskInformation } from "./starttaskinformation";
import { TaskInformation } from "./taskinformation";
/**
 * Whether the compute node should be available for task scheduling.
 */
export declare enum ComputeNodeSchedulingStateEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
/**
 * The current state of the compute node.
 */
export declare enum ComputeNodeStateEnum {
    Idle = "idle",
    Rebooting = "rebooting",
    Reimaging = "reimaging",
    Running = "running",
    Unusable = "unusable",
    Creating = "creating",
    Starting = "starting",
    Waitingforstarttask = "waitingforstarttask",
    Starttaskfailed = "starttaskfailed",
    Unknown = "unknown",
    Leavingpool = "leavingpool",
    Offline = "offline"
}
/**
 * A compute node in the Batch service.
 */
export declare class ComputeNode extends SpeakeasyBase {
    /**
     * An identifier which can be passed in the Add Task API to request that the task be scheduled close to this compute node.
     */
    affinityId?: string;
    /**
     * The time at which this compute node was allocated to the pool.
     */
    allocationTime?: Date;
    /**
     * The list of certificates installed on the compute node.
     */
    certificateReferences?: CertificateReference[];
    /**
     * The list of errors that are currently being encountered by the compute node.
     */
    errors?: ComputeNodeError[];
    /**
     * The id of the compute node.
     */
    id?: string;
    /**
     * The IP address that other compute nodes can use to communicate with this compute node.
     */
    ipAddress?: string;
    /**
     * The time at which the compute node was started.
     */
    lastBootTime?: Date;
    /**
     * The list of tasks that are currently running on the compute node.
     */
    recentTasks?: TaskInformation[];
    /**
     * The total number of currently running job tasks on the compute node. This includes Job Preparation, Job Release, and Job Manager tasks, but not the pool start task.
     */
    runningTasksCount?: number;
    /**
     * Whether the compute node should be available for task scheduling.
     */
    schedulingState?: ComputeNodeSchedulingStateEnum;
    /**
     * A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged.
     */
    startTask?: StartTask;
    /**
     * Information about a start task running on a compute node.
     */
    startTaskInfo?: StartTaskInformation;
    /**
     * The current state of the compute node.
     */
    state?: ComputeNodeStateEnum;
    /**
     * The time at which the compute node entered its current state.
     */
    stateTransitionTime?: Date;
    /**
     * The total number of job tasks completed on the compute node. This includes Job Preparation, Job Release and Job Manager tasks, but not the pool start task.
     */
    totalTasksRun?: number;
    /**
     * The total number of job tasks which completed successfully (with exitCode 0) on the compute node. This includes Job Preparation, Job Release, and Job Manager tasks, but not the pool start task.
     */
    totalTasksSucceeded?: number;
    /**
     * The URL of the compute node.
     */
    url?: string;
    /**
     * The size of the virtual machine hosting the compute node.
     */
    vmSize?: string;
}
