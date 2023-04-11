import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RatePlanCharges {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Retrieve a rate plan charge
     */
    objectGETRatePlanCharge(req: operations.ObjectGETRatePlanChargeRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETRatePlanChargeResponse>;
    /**
     * CRUD: Update a rate plan charge
     */
    objectPUTRatePlanCharge(req: operations.ObjectPUTRatePlanChargeRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTRatePlanChargeResponse>;
}
