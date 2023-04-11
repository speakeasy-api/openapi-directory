import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PATCHUpdateWorkflowRequestBody extends SpeakeasyBase {
    /**
     * If true, the workflow will run upon an API callout. This field must be `true` for integrating with the Configurable Payment Retry feature or the Collections Window feature in Collect.
     *
     * @remarks
     *
     */
    calloutTrigger?: boolean;
    /**
     * The description of the workflow defintion
     *
     * @remarks
     *
     */
    description?: string;
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
}
export declare class PATCHUpdateWorkflowRequest extends SpeakeasyBase {
    /**
     * `Bearer {token}` for a valid OAuth token.
     *
     * @remarks
     *
     */
    authorization: string;
    requestBody?: PATCHUpdateWorkflowRequestBody;
    /**
     * An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header.
     *
     * @remarks
     *
     */
    zuoraEntityIds?: string;
    /**
     * The unique ID of a workflow. For example, 19080.
     *
     * @remarks
     *
     */
    workflowId: string;
}
export declare class PATCHUpdateWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The workflow for the given id does not exist
     */
    deleteWorkflowError?: shared.DeleteWorkflowError;
    /**
     * OK
     */
    getWorkflowSetupResponse?: shared.GetWorkflowSetupResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request for one of the following reasons:
     *
     * @remarks
     * * The name or description fields are not strings.
     * * The ondemand_trigger, callout_trigger, or scheduled_trigger fields are not booleans.
     * * The timezone does not match one of the valid values in [this spread sheet](https://docs.google.com/spreadsheets/d/1skhepi-q5l9LyaMUPZjU_V9gzTphNMqNyV6ST5mygEo/edit?usp=sharing).
     * * The priority is not one of High, Medium, or Low.
     * * The status is not one of Active or Inactive.
     * * The scheduled_trigger is set to true but a valid timezone and interval were not passed.
     *
     */
    validationErrors?: shared.ValidationErrors;
}
