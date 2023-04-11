import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Notifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Usage notification
     *
     * @remarks
     * Usage notification
     */
    usagenotification(req: operations.UsagenotificationRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UsagenotificationResponse>;
}
