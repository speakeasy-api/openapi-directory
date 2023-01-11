import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Identity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteConnection - Deletes a connection for this user (i.e. disconnect a tenant)
     *
     * Override the base server url that include version
    **/
    deleteConnection(req: operations.DeleteConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionResponse>;
    /**
     * getConnections - Retrieves the connections for this user
     *
     * Override the base server url that include version
    **/
    getConnections(req: operations.GetConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionsResponse>;
}
