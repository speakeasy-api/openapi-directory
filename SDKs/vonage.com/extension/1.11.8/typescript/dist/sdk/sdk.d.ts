import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://api.vonage.com/t/vbc.prod/provisioning"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * extensionCtrlGetAccountExtensionById - Get extension data by account ID and extension number
    **/
    extensionCtrlGetAccountExtensionById(req: operations.ExtensionCtrlGetAccountExtensionByIdRequest, config?: AxiosRequestConfig): Promise<operations.ExtensionCtrlGetAccountExtensionByIdResponse>;
    /**
     * extensionCtrlGetAccountExtensions - Get account extensions data by account ID
    **/
    extensionCtrlGetAccountExtensions(req: operations.ExtensionCtrlGetAccountExtensionsRequest, config?: AxiosRequestConfig): Promise<operations.ExtensionCtrlGetAccountExtensionsResponse>;
}
