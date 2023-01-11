import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Files {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * fileDeleteFromComputeNode - Deletes the specified task file from the compute node.
    **/
    fileDeleteFromComputeNode(req: operations.FileDeleteFromComputeNodeRequest, config?: AxiosRequestConfig): Promise<operations.FileDeleteFromComputeNodeResponse>;
    /**
     * fileDeleteFromTask - Deletes the specified task file from the compute node where the task ran.
    **/
    fileDeleteFromTask(req: operations.FileDeleteFromTaskRequest, config?: AxiosRequestConfig): Promise<operations.FileDeleteFromTaskResponse>;
    /**
     * fileGetFromComputeNode - Returns the content of the specified task file.
    **/
    fileGetFromComputeNode(req: operations.FileGetFromComputeNodeRequest, config?: AxiosRequestConfig): Promise<operations.FileGetFromComputeNodeResponse>;
    /**
     * fileGetFromTask - Returns the content of the specified task file.
    **/
    fileGetFromTask(req: operations.FileGetFromTaskRequest, config?: AxiosRequestConfig): Promise<operations.FileGetFromTaskResponse>;
    /**
     * fileGetNodeFilePropertiesFromComputeNode - Gets the properties of the specified compute node file.
    **/
    fileGetNodeFilePropertiesFromComputeNode(req: operations.FileGetNodeFilePropertiesFromComputeNodeRequest, config?: AxiosRequestConfig): Promise<operations.FileGetNodeFilePropertiesFromComputeNodeResponse>;
    /**
     * fileGetNodeFilePropertiesFromTask - Gets the properties of the specified task file.
    **/
    fileGetNodeFilePropertiesFromTask(req: operations.FileGetNodeFilePropertiesFromTaskRequest, config?: AxiosRequestConfig): Promise<operations.FileGetNodeFilePropertiesFromTaskResponse>;
    /**
     * fileListFromComputeNode - Lists all of the files in task directories on the specified compute node.
    **/
    fileListFromComputeNode(req: operations.FileListFromComputeNodeRequest, config?: AxiosRequestConfig): Promise<operations.FileListFromComputeNodeResponse>;
    /**
     * fileListFromTask - Lists the files in a task's directory on its compute node.
    **/
    fileListFromTask(req: operations.FileListFromTaskRequest, config?: AxiosRequestConfig): Promise<operations.FileListFromTaskResponse>;
}
