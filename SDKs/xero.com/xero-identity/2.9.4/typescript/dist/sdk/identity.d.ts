import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Identity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a connection for this user (i.e. disconnect a tenant)
     *
     * @remarks
     * Override the base server url that include version
     */
    deleteConnection(req: operations.DeleteConnectionRequest, security: operations.DeleteConnectionSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionResponse>;
    /**
     * Retrieves the connections for this user
     *
     * @remarks
     * Override the base server url that include version
     */
    getConnections(req: operations.GetConnectionsRequest, security: operations.GetConnectionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetConnectionsResponse>;
}
