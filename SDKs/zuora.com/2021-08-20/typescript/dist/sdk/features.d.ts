import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Features {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Delete a feature
     */
    objectDELETEFeature(req: operations.ObjectDELETEFeatureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETEFeatureResponse>;
    /**
     * CRUD: Retrieve a feature
     */
    objectGETFeature(req: operations.ObjectGETFeatureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETFeatureResponse>;
    /**
     * CRUD: Create a feature
     */
    objectPOSTFeature(req: operations.ObjectPOSTFeatureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPOSTFeatureResponse>;
    /**
     * CRUD: Update a feature
     */
    objectPUTFeature(req: operations.ObjectPUTFeatureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTFeatureResponse>;
}
