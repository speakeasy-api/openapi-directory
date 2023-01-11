import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RatePlans {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectGetRatePlan - CRUD: Retrieve a rate plan
    **/
    objectGetRatePlan(req: operations.ObjectGetRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetRatePlanResponse>;
}
