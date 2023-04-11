import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RatePlanChargeTiers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Retrieve a rate plan charge tier
     */
    objectGETRatePlanChargeTier(req: operations.ObjectGETRatePlanChargeTierRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETRatePlanChargeTierResponse>;
}
