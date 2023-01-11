import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Applications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * applicationGet - Gets information about the specified application.
    **/
    applicationGet(req: operations.ApplicationGetRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationGetResponse>;
    /**
     * applicationList - Lists all of the applications available in the specified account.
    **/
    applicationList(req: operations.ApplicationListRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationListResponse>;
}
