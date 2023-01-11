import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ResourcesApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * resourcesApiGetList - Gets a number of resource sets for a specific culture.
    **/
    resourcesApiGetList(req: operations.ResourcesApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.ResourcesApiGetListResponse>;
}
