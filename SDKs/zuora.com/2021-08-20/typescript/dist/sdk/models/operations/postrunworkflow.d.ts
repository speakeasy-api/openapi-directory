import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class POSTRunWorkflowRequest extends SpeakeasyBase {
    /**
     * `Bearer {token}` for a valid OAuth token.
     *
     * @remarks
     *
     */
    authorization: string;
    /**
     * Include parameters you want to pass to the workflow.
     */
    requestBody?: Record<string, any>;
    /**
     * An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header.
     *
     * @remarks
     *
     */
    zuoraEntityIds?: string;
    /**
     * A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
     *
     * @remarks
     *
     * The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`"`), and quote (`'`).
     *
     */
    zuoraTrackId?: string;
    /**
     * The ID of the workflow you want to run.
     */
    workflowId: number;
}
/**
 * The provided workflow_id references a workflow instance
 */
export declare class POSTRunWorkflow409ApplicationJSON extends SpeakeasyBase {
    /**
     * The list of errors returned from the workflow
     */
    errors?: shared.WorkflowError[];
}
/**
 * The provided body is missing one or more required parameters
 */
export declare class POSTRunWorkflow406ApplicationJSON extends SpeakeasyBase {
    /**
     * The list of errors returned from the workflow
     */
    errors?: shared.WorkflowError[];
    /**
     * The request body that was originally provided to the run API.
     */
    parameters?: any;
}
/**
 * Callout not enabled for the workflow
 */
export declare class POSTRunWorkflow400ApplicationJSON extends SpeakeasyBase {
    /**
     * The list of errors returned from the workflow
     */
    errors?: shared.WorkflowError[];
}
export declare class POSTRunWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Callout not enabled for the workflow
     */
    postRunWorkflow400ApplicationJSONObject?: POSTRunWorkflow400ApplicationJSON;
    /**
     * The provided body is missing one or more required parameters
     */
    postRunWorkflow406ApplicationJSONObject?: POSTRunWorkflow406ApplicationJSON;
    /**
     * The provided workflow_id references a workflow instance
     */
    postRunWorkflow409ApplicationJSONObject?: POSTRunWorkflow409ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    workflowInstance?: shared.WorkflowInstance;
}
