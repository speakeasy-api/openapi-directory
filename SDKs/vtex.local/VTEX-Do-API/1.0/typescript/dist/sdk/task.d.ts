import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Task {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add Comment on a Task
     *
     * @remarks
     * Adds a comment to a given task, filtering by `taskId`.
     */
    addComment(req: operations.AddCommentRequest, config?: AxiosRequestConfig): Promise<operations.AddCommentResponse>;
    /**
     * Update Task
     *
     * @remarks
     * Updates a given task's status, for example, filtering by `taskId`.
     */
    editTask(req: operations.EditTaskRequest, config?: AxiosRequestConfig): Promise<operations.EditTaskResponse>;
    /**
     * Retrieve Task
     *
     * @remarks
     * Retrieves a given task, filtering by `taskId`.
     */
    getTask(req: operations.GetTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskResponse>;
    /**
     * List tasks
     *
     * @remarks
     * This endpoint allows you to filter tasks. You can choose between the following filtering options:
     *
     * - **Assignees:** using `assignee.email` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?assignee.email={{person@email.com}}&status={{open}}`.
     *
     * - **Targets:** using `targetId` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?target.id={{name}}&status={{open}}`.
     *
     * - **Paged tasks:** using `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?page={{1}}&perPage={{10}}&status=;{{-Closed}}`.
     *
     * - **Context:** using `context`, `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?context={{context}}&page={{1}}&perPage={{10}}&status={{-Closed}}`.
     */
    listtasksbyassignee(req: operations.ListtasksbyassigneeRequest, config?: AxiosRequestConfig): Promise<operations.ListtasksbyassigneeResponse>;
    /**
     * Create Task
     *
     * @remarks
     * Creates a new task in VTEX DO.
     */
    newTask(req: operations.NewTaskRequest, config?: AxiosRequestConfig): Promise<operations.NewTaskResponse>;
}
