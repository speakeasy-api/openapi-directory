import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FeedV2Deprecated {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get feed order status
     *
     * @remarks
     * Get feed order status (deprecated)
     */
    getfeedorderstatus(req: operations.GetfeedorderstatusRequest, config?: AxiosRequestConfig): Promise<operations.GetfeedorderstatusResponse>;
}
