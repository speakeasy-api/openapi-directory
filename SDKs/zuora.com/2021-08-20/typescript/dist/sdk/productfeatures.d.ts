import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProductFeatures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Delete a product feature
     */
    objectDELETEProductFeature(req: operations.ObjectDELETEProductFeatureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETEProductFeatureResponse>;
    /**
     * CRUD: Retrieve a product feature
     */
    objectGETProductFeature(req: operations.ObjectGETProductFeatureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETProductFeatureResponse>;
}
