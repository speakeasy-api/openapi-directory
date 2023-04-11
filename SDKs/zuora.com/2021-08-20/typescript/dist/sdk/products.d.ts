import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Products {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Delete a product
     */
    objectDELETEProduct(req: operations.ObjectDELETEProductRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETEProductResponse>;
    /**
     * CRUD: Retrieve a product
     */
    objectGETProduct(req: operations.ObjectGETProductRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETProductResponse>;
    /**
     * CRUD: Create a product
     */
    objectPOSTProduct(req: operations.ObjectPOSTProductRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPOSTProductResponse>;
    /**
     * CRUD: Update a product
     */
    objectPUTProduct(req: operations.ObjectPUTProductRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTProductResponse>;
}
