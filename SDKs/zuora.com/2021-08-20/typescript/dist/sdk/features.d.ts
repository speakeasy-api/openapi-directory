import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Features {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectDeleteFeature - CRUD: Delete a feature
    **/
    objectDeleteFeature(req: operations.ObjectDeleteFeatureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDeleteFeatureResponse>;
    /**
     * objectGetFeature - CRUD: Retrieve a feature
    **/
    objectGetFeature(req: operations.ObjectGetFeatureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetFeatureResponse>;
    /**
     * objectPostFeature - CRUD: Create a feature
    **/
    objectPostFeature(req: operations.ObjectPostFeatureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPostFeatureResponse>;
    /**
     * objectPutFeature - CRUD: Update a feature
    **/
    objectPutFeature(req: operations.ObjectPutFeatureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutFeatureResponse>;
}
