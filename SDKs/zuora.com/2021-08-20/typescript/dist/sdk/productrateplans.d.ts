import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProductRatePlans {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getProductRatePlans - List all product rate plans of a product
     *
     * Retrieves information about all product rate plans of a specific product.
     *
     * For a use case of this operation, see [Retrieve the product catalog](https://www.zuora.com/developer/api-guides/#Retrieve-the-product-catalog).
     *
    **/
    getProductRatePlans(req: operations.GetProductRatePlansRequest, config?: AxiosRequestConfig): Promise<operations.GetProductRatePlansResponse>;
    /**
     * objectDeleteProductRatePlan - CRUD: Delete a product rate plan
    **/
    objectDeleteProductRatePlan(req: operations.ObjectDeleteProductRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDeleteProductRatePlanResponse>;
    /**
     * objectGetProductRatePlan - CRUD: Retrieve a product rate plan
    **/
    objectGetProductRatePlan(req: operations.ObjectGetProductRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetProductRatePlanResponse>;
    /**
     * objectPostProductRatePlan - CRUD: Create a product rate plan
    **/
    objectPostProductRatePlan(req: operations.ObjectPostProductRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPostProductRatePlanResponse>;
    /**
     * objectPutProductRatePlan - CRUD: Update a product rate plan
    **/
    objectPutProductRatePlan(req: operations.ObjectPutProductRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutProductRatePlanResponse>;
}
