import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://api.vonage.com/t/vbc.prod/reports"];
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
     * getCallLogs - Retrieve call logs for your account
     *
     * Retrieve call logs for your account
    **/
    getCallLogs(req: operations.GetCallLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetCallLogsResponse>;
}
