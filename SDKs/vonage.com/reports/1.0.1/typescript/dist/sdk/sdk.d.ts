import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.vonage.com/t/vbc.prod/reports"];
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
 * The Vonage Business Cloud Reports API enables you to retrieve call logs for your account.
 *
 * @remarks
 *
 * Your application must subscribe to the Reports API suite to use this API.
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
     * Retrieve call logs for your account
     *
     * @remarks
     * Retrieve call logs for your account
     */
    getCallLogs(req: operations.GetCallLogsRequest, security: operations.GetCallLogsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCallLogsResponse>;
}
