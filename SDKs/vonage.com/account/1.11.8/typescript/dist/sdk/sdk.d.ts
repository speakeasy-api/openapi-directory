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
 * The Vonage Business Cloud Account API enables you to retrieve information about accounts.
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
     * Get account data by ID
     */
    accountCtrlGetAccountServicesByAccountID(req: operations.AccountCtrlGetAccountServicesByAccountIDRequest, security: operations.AccountCtrlGetAccountServicesByAccountIDSecurity, config?: AxiosRequestConfig): Promise<operations.AccountCtrlGetAccountServicesByAccountIDResponse>;
    /**
     * Get location data by account ID and location ID
     */
    accountCtrlGetLocationByID(req: operations.AccountCtrlGetLocationByIDRequest, security: operations.AccountCtrlGetLocationByIDSecurity, config?: AxiosRequestConfig): Promise<operations.AccountCtrlGetLocationByIDResponse>;
    /**
     * Get account locations data by account ID
     */
    accountCtrlGetLocationsByAccountID(req: operations.AccountCtrlGetLocationsByAccountIDRequest, security: operations.AccountCtrlGetLocationsByAccountIDSecurity, config?: AxiosRequestConfig): Promise<operations.AccountCtrlGetLocationsByAccountIDResponse>;
}
