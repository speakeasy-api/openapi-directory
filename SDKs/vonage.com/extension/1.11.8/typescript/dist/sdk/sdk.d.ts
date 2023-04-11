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
 * The Vonage Business Cloud Extension API enables you to retrieve information about extensions.
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
     * Get extension data by account ID and extension number
     */
    extensionCtrlGetAccountExtensionByID(req: operations.ExtensionCtrlGetAccountExtensionByIDRequest, security: operations.ExtensionCtrlGetAccountExtensionByIDSecurity, config?: AxiosRequestConfig): Promise<operations.ExtensionCtrlGetAccountExtensionByIDResponse>;
    /**
     * Get account extensions data by account ID
     */
    extensionCtrlGetAccountExtensions(req: operations.ExtensionCtrlGetAccountExtensionsRequest, security: operations.ExtensionCtrlGetAccountExtensionsSecurity, config?: AxiosRequestConfig): Promise<operations.ExtensionCtrlGetAccountExtensionsResponse>;
}
