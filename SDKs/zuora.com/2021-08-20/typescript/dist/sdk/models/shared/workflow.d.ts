import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the workflow. Currently the only valid value is 'Workflow::Setup'.
 *
 * @remarks
 *
 */
export declare enum WorkflowTypeEnum {
    WorkflowSetup = "Workflow::Setup",
    WorkflowInstance = "Workflow::Instance"
}
/**
 * A workflow.
 *
 * @remarks
 *
 */
export declare class Workflow extends SpeakeasyBase {
    /**
     * Indicates whether the callout trigger is enabled for the retrieved workflow.
     *
     * @remarks
     *
     */
    calloutTrigger?: boolean;
    /**
     * The date and time when the workflow is created, in the `YYYY-MM-DD HH:MM:SS` format.
     *
     * @remarks
     *
     */
    createdAt?: string;
    /**
     * The description of the workflow.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * The unique ID of the workflow.
     *
     * @remarks
     *
     */
    id?: number;
    /**
     * The schedule of the workflow, in a CRON expression. Returns null if the schedued trigger is disabled.
     *
     * @remarks
     *
     */
    interval?: string;
    /**
     * The name of the workflow.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * Indicates whether the ondemand trigger is enabled for the workflow.
     *
     * @remarks
     *
     */
    ondemandTrigger?: boolean;
    /**
     * Indicates whether the scheduled trigger is enabled for the workflow.
     *
     * @remarks
     *
     */
    scheduledTrigger?: boolean;
    /**
     * The timezone that is configured for the scheduler of the workflow. Returns null if the scheduled trigger is disabled.
     *
     * @remarks
     *
     */
    timezone?: string;
    /**
     * The type of the workflow. Currently the only valid value is 'Workflow::Setup'.
     *
     * @remarks
     *
     */
    type?: WorkflowTypeEnum;
    /**
     * The date and time when the workflow is updated the last time, in the `YYYY-MM-DD HH:MM:SS` format.
     *
     * @remarks
     *
     */
    updatedAt?: string;
}
