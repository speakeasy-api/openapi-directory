import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Products {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectDeleteProduct - CRUD: Delete a product
    **/
    objectDeleteProduct(req: operations.ObjectDeleteProductRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDeleteProductResponse>;
    /**
     * objectGetProduct - CRUD: Retrieve a product
    **/
    objectGetProduct(req: operations.ObjectGetProductRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetProductResponse>;
    /**
     * objectPostProduct - CRUD: Create a product
    **/
    objectPostProduct(req: operations.ObjectPostProductRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPostProductResponse>;
    /**
     * objectPutProduct - CRUD: Update a product
    **/
    objectPutProduct(req: operations.ObjectPutProductRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutProductResponse>;
}
