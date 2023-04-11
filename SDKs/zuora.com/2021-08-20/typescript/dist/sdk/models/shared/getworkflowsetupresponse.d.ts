import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class GetWorkflowSetupResponse extends SpeakeasyBase {
    /**
     * If true, the workflow will run upon an API callout. This field must be `true` for integrating with the Configurable Payment Retry feature or the Collections Window feature in Collect.
     *
     * @remarks
     *
     */
    calloutTrigger?: boolean;
    /**
     * The date and time when the workflow was created, in the `YYYY-MM-DD HH:MM:SS` format
     *
     * @remarks
     *
     */
    createdAt?: string;
    /**
     * The description of the workflow definition
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * The unique ID of the workflow definition
     *
     * @remarks
     *
     */
    id?: number;
    /**
     * The cron expression for workflows with scheduled_trigger as `true`
     *
     * @remarks
     *
     */
    interval?: string;
    /**
     * The name of the workflow definition
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * If true, the workflow will run when manually initiated.
     *
     * @remarks
     *
     */
    ondemandTrigger?: boolean;
    /**
     * Can be `High`, `Medium`, or `Low`. Higher-priority workflows take precedence over lower-priority workflows. When a workflow of higher priority is initiated, it will be placed ahead of lower-priority workflows that are running. Depending on the available resources, lower-priority workflows may be paused until resources are released.
     *
     * @remarks
     *
     */
    priority?: string;
    /**
     * If true, the workflow will run based on the configured schedule with the interval field.
     *
     * @remarks
     *
     */
    scheduledTrigger?: boolean;
    /**
     * Can be `Active` or `Inactive`. Active workfow definitions run like normal. Inactive workflow definitions cannot be run.
     *
     * @remarks
     *
     */
    status?: string;
    /**
     * The timezone that corresponds with the cron expression in the interval field. See the [list of accepted timezone values](https://docs.google.com/spreadsheets/d/1skhepi-q5l9LyaMUPZjU_V9gzTphNMqNyV6ST5mygEo/edit?usp=sharing).
     *
     * @remarks
     *
     */
    timezone?: string;
    /**
     * The date and time when the workflow was updated the last time, in the `YYYY-MM-DD HH:MM:SS` format
     *
     * @remarks
     *
     */
    updatedAt?: string;
}
