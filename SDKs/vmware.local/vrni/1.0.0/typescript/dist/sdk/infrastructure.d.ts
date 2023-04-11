import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Infra APIs
 */
export declare class Infrastructure {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show node details
     *
     * @remarks
     * Get details of infrastructure nodes. Only admin users can get this information. The proxy id is
     * required for adding a data source for selecting appropriate proxy node to add the data source.
     */
    getNode(req: operations.GetNodeRequest, security: operations.GetNodeSecurity, config?: AxiosRequestConfig): Promise<operations.GetNodeResponse>;
    /**
     * List nodes
     *
     * @remarks
     * Get list of infrastructure nodes. Only admin users can retrieve this information.
     */
    listNodes(config?: AxiosRequestConfig): Promise<operations.ListNodesResponse>;
}
