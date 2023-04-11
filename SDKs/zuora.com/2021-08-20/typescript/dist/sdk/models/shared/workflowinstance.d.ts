import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the current state of this workflow instance:
 *
 * @remarks
 *   - Queued: The workflow is in queue for being processed.
 *   - Processing: The workflow is in process.
 *
 */
export declare enum WorkflowInstanceStatusEnum {
    Queued = "Queued",
    Processing = "Processing"
}
/**
 * A instance workflow object.
 */
export declare class WorkflowInstance extends SpeakeasyBase {
    /**
     * The date and time when the workflow is created, in the `YYYY-MM-DD HH:MM:SS` format.
     *
     * @remarks
     *
     */
    createdAt?: string;
    /**
     * The unique ID of the workflow.
     *
     * @remarks
     *
     */
    id?: number;
    /**
     * The run number of this workflow instance
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * The identifier of the workflow template that is used to create this instance.
     *
     * @remarks
     *
     */
    originalWorkflowId?: number;
    /**
     * Describes the current state of this workflow instance:
     *
     * @remarks
     *   - Queued: The workflow is in queue for being processed.
     *   - Processing: The workflow is in process.
     *
     */
    status?: WorkflowInstanceStatusEnum;
    /**
     * The date and time the last time when the workflow is updated, in the `YYYY-MM-DD HH:MM:SS` format.
     *
     * @remarks
     *
     */
    updatedAt?: string;
}
