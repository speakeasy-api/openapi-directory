import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Application {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a new application.
     */
    applicationsCreate(req: operations.ApplicationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsCreateResponse>;
    /**
     * Delete an application.
     */
    applicationsDelete(req: operations.ApplicationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsDeleteResponse>;
    /**
     * Get an application by object ID.
     */
    applicationsGet(req: operations.ApplicationsGetRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsGetResponse>;
    /**
     * Lists applications by filter parameters.
     */
    applicationsList(req: operations.ApplicationsListRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsListResponse>;
    /**
     * Update an existing application.
     */
    applicationsPatch(req: operations.ApplicationsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationsPatchResponse>;
    /**
     * Hard-delete an application.
     */
    deletedApplicationsHardDelete(req: operations.DeletedApplicationsHardDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DeletedApplicationsHardDeleteResponse>;
}
