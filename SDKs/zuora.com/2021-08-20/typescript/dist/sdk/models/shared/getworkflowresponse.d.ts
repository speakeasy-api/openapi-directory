import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the workflow:
 *
 * @remarks
 *   - Queued: The workflow is in queue for being processed.
 *   - Processing: The workflow is in process.
 *   - Stopping: The workflow is being stopped through Zuora UI.
 *   - Stopped: The workflow is stopped through Zuora UI.
 *   - Finished: The workflow is finished. When a workflow is finished, it might have tasks pending for retry or delay. Pending tasks do not block the onfinish branch of the workflow, but they block the oncomplete branch of the iterate.
 *
 */
export declare enum GetWorkflowResponseStatusEnum {
    Queued = "Queued",
    Processing = "Processing",
    Stopping = "Stopping",
    Stopped = "Stopped",
    Finished = "Finished"
}
/**
 * An object containing task counts.
 *
 * @remarks
 *
 */
export declare class GetWorkflowResponseTasks extends SpeakeasyBase {
    /**
     * The number of tasks in **Error** state.
     *
     * @remarks
     *
     */
    error?: number;
    /**
     * The number of tasks in **Pending** state.
     *
     * @remarks
     *
     */
    pending?: number;
    /**
     * The number of tasks in **Processing** state.
     *
     * @remarks
     *
     */
    processing?: number;
    /**
     * The number of tasks in **Queued** state.
     *
     * @remarks
     *
     */
    queued?: number;
    /**
     * The number of tasks in **Stopped** state.
     *
     * @remarks
     *
     */
    stopped?: number;
    /**
     * The number of tasks in **Success** state.
     *
     * @remarks
     *
     */
    success?: number;
    /**
     * The total number of tasks.
     *
     * @remarks
     *
     */
    total?: number;
}
export declare class GetWorkflowResponse extends SpeakeasyBase {
    /**
     * The overall CPU time for the execution of the workflow.
     *
     * @remarks
     *
     */
    cpuTime?: string;
    /**
     * The date and time when the workflow is created, in the `YYYY-MM-DD HH:MM:SS` format..
     *
     * @remarks
     *
     */
    createdAt?: string;
    /**
     * The date and time when the execution of the workflow completes, in the `YYYY-MM-DD HH:MM:SS` format.
     *
     * @remarks
     *
     */
    finishedAt?: string;
    /**
     * The unique ID of the workflow.
     *
     * @remarks
     *
     */
    id?: number;
    /**
     * Messages from tasks.
     *
     * @remarks
     *
     */
    messages?: Record<string, any>;
    /**
     * The unique run number of the workflow.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * The ID of the workflow setup.
     *
     * @remarks
     *
     */
    originalWorkflowId?: string;
    /**
     * The execution time of the workflow including the waiting time, in seconds.
     *
     * @remarks
     *
     */
    runTime?: number;
    /**
     * The status of the workflow:
     *
     * @remarks
     *   - Queued: The workflow is in queue for being processed.
     *   - Processing: The workflow is in process.
     *   - Stopping: The workflow is being stopped through Zuora UI.
     *   - Stopped: The workflow is stopped through Zuora UI.
     *   - Finished: The workflow is finished. When a workflow is finished, it might have tasks pending for retry or delay. Pending tasks do not block the onfinish branch of the workflow, but they block the oncomplete branch of the iterate.
     *
     */
    status?: GetWorkflowResponseStatusEnum;
    /**
     * An object containing task counts.
     *
     * @remarks
     *
     */
    tasks?: GetWorkflowResponseTasks;
    /**
     * The type of the current workflow.
     *
     * @remarks
     * Possible values:
     *     - `Workflow::Setup`: The workflow is a setup and is used for creating workflow instances.
     *     - `Workflow::Instance`: The workflow is an execution that has data.
     *
     */
    type?: string;
    /**
     * The date and time when the workflow is updated the last time, in the `YYYY-MM-DD HH:MM:SS` format.
     *
     * @remarks
     *
     */
    updatedAt?: string;
}
