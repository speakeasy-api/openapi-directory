import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProductRatePlans {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all product rate plans of a product
     *
     * @remarks
     * Retrieves information about all product rate plans of a specific product.
     *
     * For a use case of this operation, see [Retrieve the product catalog](https://www.zuora.com/developer/api-guides/#Retrieve-the-product-catalog).
     *
     */
    getProductRatePlans(req: operations.GETProductRatePlansRequest, config?: AxiosRequestConfig): Promise<operations.GETProductRatePlansResponse>;
    /**
     * CRUD: Delete a product rate plan
     */
    objectDELETEProductRatePlan(req: operations.ObjectDELETEProductRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETEProductRatePlanResponse>;
    /**
     * CRUD: Retrieve a product rate plan
     */
    objectGETProductRatePlan(req: operations.ObjectGETProductRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETProductRatePlanResponse>;
    /**
     * CRUD: Create a product rate plan
     */
    objectPOSTProductRatePlan(req: operations.ObjectPOSTProductRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPOSTProductRatePlanResponse>;
    /**
     * CRUD: Update a product rate plan
     */
    objectPUTProductRatePlan(req: operations.ObjectPUTProductRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTProductRatePlanResponse>;
}
