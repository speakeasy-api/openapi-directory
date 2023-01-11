import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ComputeNodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * computeNodeAddUser - Adds a user account to the specified compute node.
    **/
    computeNodeAddUser(req: operations.ComputeNodeAddUserRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeAddUserResponse>;
    /**
     * computeNodeDeleteUser - Deletes a user account from the specified compute node.
    **/
    computeNodeDeleteUser(req: operations.ComputeNodeDeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeDeleteUserResponse>;
    /**
     * computeNodeDisableScheduling - Disable task scheduling of the specified compute node.
    **/
    computeNodeDisableScheduling(req: operations.ComputeNodeDisableSchedulingRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeDisableSchedulingResponse>;
    /**
     * computeNodeEnableScheduling - Enable task scheduling of the specified compute node.
    **/
    computeNodeEnableScheduling(req: operations.ComputeNodeEnableSchedulingRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeEnableSchedulingResponse>;
    /**
     * computeNodeGet - Gets information about the specified compute node.
    **/
    computeNodeGet(req: operations.ComputeNodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGetResponse>;
    /**
     * computeNodeGetRemoteDesktop - Gets the Remote Desktop Protocol file for the specified compute node.
    **/
    computeNodeGetRemoteDesktop(req: operations.ComputeNodeGetRemoteDesktopRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGetRemoteDesktopResponse>;
    /**
     * computeNodeList - Lists the compute nodes in the specified pool.
    **/
    computeNodeList(req: operations.ComputeNodeListRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeListResponse>;
    /**
     * computeNodeReboot - Restarts the specified compute node.
    **/
    computeNodeReboot(req: operations.ComputeNodeRebootRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeRebootResponse>;
    /**
     * computeNodeReimage - Reinstalls the operating system on the specified compute node.
    **/
    computeNodeReimage(req: operations.ComputeNodeReimageRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeReimageResponse>;
    /**
     * computeNodeUpdateUser - Updates the password or expiration time of a user account on the specified compute node.
    **/
    computeNodeUpdateUser(req: operations.ComputeNodeUpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeUpdateUserResponse>;
    /**
     * poolRemoveNodes - Removes compute nodes from the specified pool.
    **/
    poolRemoveNodes(req: operations.PoolRemoveNodesRequest, config?: AxiosRequestConfig): Promise<operations.PoolRemoveNodesResponse>;
}
