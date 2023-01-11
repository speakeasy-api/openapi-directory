import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RatePlanCharges {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectGetRatePlanCharge - CRUD: Retrieve a rate plan charge
    **/
    objectGetRatePlanCharge(req: operations.ObjectGetRatePlanChargeRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetRatePlanChargeResponse>;
    /**
     * objectPutRatePlanCharge - CRUD: Update a rate plan charge
    **/
    objectPutRatePlanCharge(req: operations.ObjectPutRatePlanChargeRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutRatePlanChargeResponse>;
}
