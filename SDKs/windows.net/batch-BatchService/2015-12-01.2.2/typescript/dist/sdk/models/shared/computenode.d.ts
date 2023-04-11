import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateReference } from "./certificatereference";
import { ComputeNodeError } from "./computenodeerror";
import { StartTask } from "./starttask";
import { StartTaskInformation } from "./starttaskinformation";
import { TaskInformation } from "./taskinformation";
/**
 * Gets or sets whether the compute node should be available for task scheduling.
 */
export declare enum ComputeNodeSchedulingStateEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
/**
 * Gets or sets the current state of the compute node.
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
     * Gets or sets an identifier which can be passed in the Add Task API to request that the task be scheduled close to this compute node.
     */
    affinityId?: string;
    /**
     * Gets or sets the time at which this compute node was allocated to the pool.
     */
    allocationTime?: Date;
    /**
     * Gets or sets the list of certificates installed on the compute node.
     */
    certificateReferences?: CertificateReference[];
    /**
     * Gets or sets the list of errors that are currently being encountered by the compute node.
     */
    errors?: ComputeNodeError[];
    /**
     * Gets or sets the id of the compute node.
     */
    id?: string;
    /**
     * Gets or sets the IP address that other compute nodes can use to communicate with this compute node.
     */
    ipAddress?: string;
    /**
     * Gets or sets the time at which the compute node was started.
     */
    lastBootTime?: Date;
    /**
     * Gets or sets the list of tasks that are currently running on the compute node.
     */
    recentTasks?: TaskInformation[];
    /**
     * Gets or sets whether the compute node should be available for task scheduling.
     */
    schedulingState?: ComputeNodeSchedulingStateEnum;
    /**
     * A task defined on a pool and run by compute nodes when they join the pool.
     */
    startTask?: StartTask;
    /**
     * Information about a start task running on a compute node.
     */
    startTaskInfo?: StartTaskInformation;
    /**
     * Gets or sets the current state of the compute node.
     */
    state?: ComputeNodeStateEnum;
    /**
     * Gets or sets the time at which the compute node entered its current state.
     */
    stateTransitionTime?: Date;
    /**
     * Gets or sets the total number of job tasks completed on the compute node. This includes Job Preparation, Job Release and Job Manager tasks, but not the pool start task.
     */
    totalTasksRun?: number;
    /**
     * Gets or sets the URL of the compute node.
     */
    url?: string;
    /**
     * Gets or sets the size of the virtual machine hosting the compute node.
     */
    vmSize?: string;
}
