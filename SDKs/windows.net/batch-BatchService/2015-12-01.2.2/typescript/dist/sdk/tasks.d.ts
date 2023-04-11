import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tasks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds a task to the specified job.
     */
    taskAdd(req: operations.TaskAddRequest, config?: AxiosRequestConfig): Promise<operations.TaskAddResponse>;
    /**
     * Deletes a task from the specified job.
     */
    taskDelete(req: operations.TaskDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TaskDeleteResponse>;
    /**
     * Gets information about the specified task.
     */
    taskGet(req: operations.TaskGetRequest, config?: AxiosRequestConfig): Promise<operations.TaskGetResponse>;
    /**
     * Lists all of the tasks that are associated with the specified job.
     */
    taskList(req: operations.TaskListRequest, config?: AxiosRequestConfig): Promise<operations.TaskListResponse>;
    /**
     * Lists all of the subtasks that are associated with the specified multi-instance task.
     */
    taskListSubtasks(req: operations.TaskListSubtasksRequest, config?: AxiosRequestConfig): Promise<operations.TaskListSubtasksResponse>;
    /**
     * Terminates the specified task.
     */
    taskTerminate(req: operations.TaskTerminateRequest, config?: AxiosRequestConfig): Promise<operations.TaskTerminateResponse>;
    /**
     * Updates the properties of the specified task.
     */
    taskUpdate(req: operations.TaskUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TaskUpdateResponse>;
}
