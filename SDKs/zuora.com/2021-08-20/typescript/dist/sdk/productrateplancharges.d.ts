import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProductRatePlanCharges {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectDeleteProductRatePlanCharge - CRUD: Delete a product rate plan charge
     *
     * Deletes a product rate plan charge.
     *
    **/
    objectDeleteProductRatePlanCharge(req: operations.ObjectDeleteProductRatePlanChargeRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDeleteProductRatePlanChargeResponse>;
    /**
     * objectGetProductRatePlanCharge - CRUD: Retrieve a product rate plan charge
    **/
    objectGetProductRatePlanCharge(req: operations.ObjectGetProductRatePlanChargeRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetProductRatePlanChargeResponse>;
    /**
     * objectPostProductRatePlanCharge - CRUD: Create a product rate plan charge
     *
     * Creates a product rate plan charge for a specified rate plan charge.
     *
     * Product rate plan charges can be of three types, one-time fees, recurring fees, and usage fees.
     *
    **/
    objectPostProductRatePlanCharge(req: operations.ObjectPostProductRatePlanChargeRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPostProductRatePlanChargeResponse>;
    /**
     * objectPutProductRatePlanCharge - CRUD: Update a product rate plan charge
     *
     * Updates the information about a product rate plan charge.
     *
    **/
    objectPutProductRatePlanCharge(req: operations.ObjectPutProductRatePlanChargeRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutProductRatePlanChargeResponse>;
}
