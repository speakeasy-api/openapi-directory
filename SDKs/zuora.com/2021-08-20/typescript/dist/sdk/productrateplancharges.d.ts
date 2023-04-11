import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProductRatePlanCharges {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Delete a product rate plan charge
     *
     * @remarks
     * Deletes a product rate plan charge.
     *
     */
    objectDELETEProductRatePlanCharge(req: operations.ObjectDELETEProductRatePlanChargeRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETEProductRatePlanChargeResponse>;
    /**
     * CRUD: Retrieve a product rate plan charge
     */
    objectGETProductRatePlanCharge(req: operations.ObjectGETProductRatePlanChargeRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETProductRatePlanChargeResponse>;
    /**
     * CRUD: Create a product rate plan charge
     *
     * @remarks
     * Creates a product rate plan charge for a specified rate plan charge.
     *
     * Product rate plan charges can be of three types, one-time fees, recurring fees, and usage fees.
     *
     */
    objectPOSTProductRatePlanCharge(req: operations.ObjectPOSTProductRatePlanChargeRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPOSTProductRatePlanChargeResponse>;
    /**
     * CRUD: Update a product rate plan charge
     *
     * @remarks
     * Updates the information about a product rate plan charge.
     *
     */
    objectPUTProductRatePlanCharge(req: operations.ObjectPUTProductRatePlanChargeRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTProductRatePlanChargeResponse>;
}
