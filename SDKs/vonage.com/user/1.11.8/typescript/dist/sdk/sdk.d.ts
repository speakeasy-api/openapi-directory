import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.vonage.com/t/vbc.prod/provisioning"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The Vonage Business Cloud User API enables you to retrieve information about users.
 *
 * @remarks
 *
 * Your application must subscribe to the Provisioning API suite to use this API.
 *
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Get user data by account ID and user ID
     */
    userCtrlGetUserByID(req: operations.UserCtrlGetUserByIDRequest, security: operations.UserCtrlGetUserByIDSecurity, config?: AxiosRequestConfig): Promise<operations.UserCtrlGetUserByIDResponse>;
    /**
     * Get account users data by account ID
     */
    userCtrlGetUsers(req: operations.UserCtrlGetUsersRequest, security: operations.UserCtrlGetUsersSecurity, config?: AxiosRequestConfig): Promise<operations.UserCtrlGetUsersResponse>;
}
