import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RatePlanChargeTiers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectGetRatePlanChargeTier - CRUD: Retrieve a rate plan charge tier
    **/
    objectGetRatePlanChargeTier(req: operations.ObjectGetRatePlanChargeTierRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetRatePlanChargeTierResponse>;
}
