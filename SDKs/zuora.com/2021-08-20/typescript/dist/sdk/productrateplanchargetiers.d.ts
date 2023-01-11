import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProductRatePlanChargeTiers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectGetProductRatePlanChargeTier - CRUD: Retrieve a product rate plan charge tier
    **/
    objectGetProductRatePlanChargeTier(req: operations.ObjectGetProductRatePlanChargeTierRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetProductRatePlanChargeTierResponse>;
    /**
     * objectPutProductRatePlanChargeTier - CRUD: Update a product rate plan charge tier
     *
     * Updates the price of a product rate plan charge tier.
     *
     * To make other updates to product rate plan charge tiers, use [CRUD: Update a product rate plan charge](https://www.zuora.com/developer/api-reference/#operation/Object_PUTProductRatePlanCharge) and specify `ProductRatePlanChargeTierData` in the request body.
     *
    **/
    objectPutProductRatePlanChargeTier(req: operations.ObjectPutProductRatePlanChargeTierRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutProductRatePlanChargeTierResponse>;
}
