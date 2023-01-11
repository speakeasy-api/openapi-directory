import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Workflows {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteWorkflow - Delete a workflow
     *
     * Deletes a specific workflow by its ID.
     *
    **/
    deleteWorkflow(req: operations.DeleteWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkflowResponse>;
    /**
     * getWorkflow - Retrieve a workflow
     *
     * Retrieves information about a specific workflow by its ID.
     *
    **/
    getWorkflow(req: operations.GetWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowResponse>;
    /**
     * getWorkflowExport - Export a workflow
     *
     * Export a Workflow in a JSON document. This document can be used to create a copy of this workflow.
    **/
    getWorkflowExport(req: operations.GetWorkflowExportRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowExportResponse>;
    /**
     * getWorkflows - List workflows
     *
     * Retrieves a list of workflows available in your Zuora tenant.
     *
    **/
    getWorkflows(req: operations.GetWorkflowsRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowsResponse>;
    /**
     * getWorkflowsTask - Retrieve a workflow task
     *
     * Retrieves a specific workflow task by its ID.
     *
    **/
    getWorkflowsTask(req: operations.GetWorkflowsTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowsTaskResponse>;
    /**
     * getWorkflowsTasks - List workflow tasks
     *
     * Retrieves a list of workflow tasks available in your Zuora tenant.
     *
    **/
    getWorkflowsTasks(req: operations.GetWorkflowsTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowsTasksResponse>;
    /**
     * getWorkflowsUsages - Retrieve workflow task usage
     *
     * Gets workflow task usage sorted by day within a specified time frame.
     *
    **/
    getWorkflowsUsages(req: operations.GetWorkflowsUsagesRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowsUsagesResponse>;
    /**
     * patchUpdateWorkflow - Update a workflow definition
     *
     * Updates the definition of a specific workflow by its ID, which allows you to [configure the settings of a workflow](https://knowledgecenter.zuora.com/CE_Workflow/Using_Workflow/B_Configure_a_Workflow) via API.
     *
    **/
    patchUpdateWorkflow(req: operations.PatchUpdateWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.PatchUpdateWorkflowResponse>;
    /**
     * postRunWorkflow - Run a workflow
     *
     * Run a specified workflow. In the request body, you can include parameters that you want to pass to the workflow. For the parameters to be recognized and picked up by tasks in the workflow, you need to define the parameters first.
     *
     * To learn about how to define parameters, see [Configure the settings of a workflow](https://knowledgecenter.zuora.com/CE_Workflow/Using_Workflow/B_Configure_a_Workflow).
     *
    **/
    postRunWorkflow(req: operations.PostRunWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.PostRunWorkflowResponse>;
    /**
     * postWorkflowImport - Import a workflow
     *
     * Creates a copy of a workflow using the exported JSON document of the original workflow.
    **/
    postWorkflowImport(req: operations.PostWorkflowImportRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkflowImportResponse>;
    /**
     * postWorkflowsTaskRerun - Rerun a workflow task
     *
     * Reruns a specific workflow task by its ID.
     *
    **/
    postWorkflowsTaskRerun(req: operations.PostWorkflowsTaskRerunRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkflowsTaskRerunResponse>;
    /**
     * putWorkflowsTasksUpdate - Update workflow tasks
     *
     * Updates a group of workflow tasks.
     *
    **/
    putWorkflowsTasksUpdate(req: operations.PutWorkflowsTasksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PutWorkflowsTasksUpdateResponse>;
}
