import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Workflows {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a workflow
     *
     * @remarks
     * Deletes a specific workflow by its ID.
     *
     */
    deleteWorkflow(req: operations.DELETEWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.DELETEWorkflowResponse>;
    /**
     * Retrieve a workflow
     *
     * @remarks
     * Retrieves information about a specific workflow by its ID.
     *
     */
    getWorkflow(req: operations.GETWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.GETWorkflowResponse>;
    /**
     * Export a workflow
     *
     * @remarks
     * Export a Workflow in a JSON document. This document can be used to create a copy of this workflow.
     */
    getWorkflowExport(req: operations.GETWorkflowExportRequest, config?: AxiosRequestConfig): Promise<operations.GETWorkflowExportResponse>;
    /**
     * List workflows
     *
     * @remarks
     * Retrieves a list of workflows available in your Zuora tenant.
     *
     */
    getWorkflows(req: operations.GETWorkflowsRequest, config?: AxiosRequestConfig): Promise<operations.GETWorkflowsResponse>;
    /**
     * Retrieve a workflow task
     *
     * @remarks
     * Retrieves a specific workflow task by its ID.
     *
     */
    getWorkflowsTask(req: operations.GETWorkflowsTaskRequest, config?: AxiosRequestConfig): Promise<operations.GETWorkflowsTaskResponse>;
    /**
     * List workflow tasks
     *
     * @remarks
     * Retrieves a list of workflow tasks available in your Zuora tenant.
     *
     */
    getWorkflowsTasks(req: operations.GETWorkflowsTasksRequest, config?: AxiosRequestConfig): Promise<operations.GETWorkflowsTasksResponse>;
    /**
     * Retrieve workflow task usage
     *
     * @remarks
     * Gets workflow task usage sorted by day within a specified time frame.
     *
     */
    getWorkflowsUsages(req: operations.GETWorkflowsUsagesRequest, config?: AxiosRequestConfig): Promise<operations.GETWorkflowsUsagesResponse>;
    /**
     * Update a workflow definition
     *
     * @remarks
     * Updates the definition of a specific workflow by its ID, which allows you to [configure the settings of a workflow](https://knowledgecenter.zuora.com/CE_Workflow/Using_Workflow/B_Configure_a_Workflow) via API.
     *
     */
    patchUpdateWorkflow(req: operations.PATCHUpdateWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.PATCHUpdateWorkflowResponse>;
    /**
     * Run a workflow
     *
     * @remarks
     * Run a specified workflow. In the request body, you can include parameters that you want to pass to the workflow. For the parameters to be recognized and picked up by tasks in the workflow, you need to define the parameters first.
     *
     * To learn about how to define parameters, see [Configure the settings of a workflow](https://knowledgecenter.zuora.com/CE_Workflow/Using_Workflow/B_Configure_a_Workflow).
     *
     */
    postRunWorkflow(req: operations.POSTRunWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.POSTRunWorkflowResponse>;
    /**
     * Import a workflow
     *
     * @remarks
     * Creates a copy of a workflow using the exported JSON document of the original workflow.
     */
    postWorkflowImport(req: operations.POSTWorkflowImportRequest, config?: AxiosRequestConfig): Promise<operations.POSTWorkflowImportResponse>;
    /**
     * Rerun a workflow task
     *
     * @remarks
     * Reruns a specific workflow task by its ID.
     *
     */
    postWorkflowsTaskRerun(req: operations.POSTWorkflowsTaskRerunRequest, config?: AxiosRequestConfig): Promise<operations.POSTWorkflowsTaskRerunResponse>;
    /**
     * Update workflow tasks
     *
     * @remarks
     * Updates a group of workflow tasks.
     *
     */
    putWorkflowsTasksUpdate(req: operations.PUTWorkflowsTasksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PUTWorkflowsTasksUpdateResponse>;
}
