import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To manage product rate plan charge tiers, use the [Product Rate Plan Charges](https://www.zuora.com/developer/api-reference/#tag/Product-Rate-Plan-Charges) operations instead to update the corresponding product rate plan charge with all the tiers.
 *
 * @remarks
 *
 */
export declare class ProductRatePlanChargeTiers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Retrieve a product rate plan charge tier
     */
    objectGETProductRatePlanChargeTier(req: operations.ObjectGETProductRatePlanChargeTierRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETProductRatePlanChargeTierResponse>;
    /**
     * CRUD: Update a product rate plan charge tier
     *
     * @remarks
     * Updates the price of a product rate plan charge tier.
     *
     * To make other updates to product rate plan charge tiers, use [CRUD: Update a product rate plan charge](https://www.zuora.com/developer/api-reference/#operation/Object_PUTProductRatePlanCharge) and specify `ProductRatePlanChargeTierData` in the request body.
     *
     */
    objectPUTProductRatePlanChargeTier(req: operations.ObjectPUTProductRatePlanChargeTierRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTProductRatePlanChargeTierResponse>;
}
