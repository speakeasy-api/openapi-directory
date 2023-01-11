import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProductFeatures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectDeleteProductFeature - CRUD: Delete a product feature
    **/
    objectDeleteProductFeature(req: operations.ObjectDeleteProductFeatureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDeleteProductFeatureResponse>;
    /**
     * objectGetProductFeature - CRUD: Retrieve a product feature
    **/
    objectGetProductFeature(req: operations.ObjectGetProductFeatureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetProductFeatureResponse>;
}
