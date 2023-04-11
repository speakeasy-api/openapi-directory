import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Files {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified task file from the compute node.
     */
    fileDeleteFromComputeNode(req: operations.FileDeleteFromComputeNodeRequest, config?: AxiosRequestConfig): Promise<operations.FileDeleteFromComputeNodeResponse>;
    /**
     * Deletes the specified task file from the compute node where the task ran.
     */
    fileDeleteFromTask(req: operations.FileDeleteFromTaskRequest, config?: AxiosRequestConfig): Promise<operations.FileDeleteFromTaskResponse>;
    /**
     * Returns the content of the specified task file.
     */
    fileGetFromComputeNode(req: operations.FileGetFromComputeNodeRequest, config?: AxiosRequestConfig): Promise<operations.FileGetFromComputeNodeResponse>;
    /**
     * Returns the content of the specified task file.
     */
    fileGetFromTask(req: operations.FileGetFromTaskRequest, config?: AxiosRequestConfig): Promise<operations.FileGetFromTaskResponse>;
    /**
     * Gets the properties of the specified compute node file.
     */
    fileGetNodeFilePropertiesFromComputeNode(req: operations.FileGetNodeFilePropertiesFromComputeNodeRequest, config?: AxiosRequestConfig): Promise<operations.FileGetNodeFilePropertiesFromComputeNodeResponse>;
    /**
     * Gets the properties of the specified task file.
     */
    fileGetNodeFilePropertiesFromTask(req: operations.FileGetNodeFilePropertiesFromTaskRequest, config?: AxiosRequestConfig): Promise<operations.FileGetNodeFilePropertiesFromTaskResponse>;
    /**
     * Lists all of the files in task directories on the specified compute node.
     */
    fileListFromComputeNode(req: operations.FileListFromComputeNodeRequest, config?: AxiosRequestConfig): Promise<operations.FileListFromComputeNodeResponse>;
    /**
     * Lists the files in a task's directory on its compute node.
     */
    fileListFromTask(req: operations.FileListFromTaskRequest, config?: AxiosRequestConfig): Promise<operations.FileListFromTaskResponse>;
}
