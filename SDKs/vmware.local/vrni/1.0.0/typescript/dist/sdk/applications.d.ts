import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Applications APIs
 */
export declare class Applications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an application
     *
     * @remarks
     * Application is a group of tiers. A tier is a group of virtual machines based on membership criteria. Tiers are bound to single
     * application. An application name is unique and should not conflict with another application name.
     */
    addApplication(req: shared.ApplicationRequest, security: operations.AddApplicationSecurity, config?: AxiosRequestConfig): Promise<operations.AddApplicationResponse>;
    /**
     * Create tier in application
     *
     * @remarks
     * Create a tier of an application by with specified membership criteria. The membership criteria id defined in terms of
     * virtual machines or ip addresses/subnet. Please refer to API Guide on how to construct membership criteria.
     */
    addTier(req: operations.AddTierRequest, security: operations.AddTierSecurity, config?: AxiosRequestConfig): Promise<operations.AddTierResponse>;
    /**
     * Delete an application
     *
     * @remarks
     * Deleting an application deletes all the tiers of the application along with the application
     */
    deleteApplication(req: operations.DeleteApplicationRequest, security: operations.DeleteApplicationSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * Delete tier
     *
     * @remarks
     * Delete tier of an application
     */
    deleteTier(req: operations.DeleteTierRequest, security: operations.DeleteTierSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteTierResponse>;
    /**
     * Show application details
     *
     * @remarks
     * Show application details
     */
    getApplication(req: operations.GetApplicationRequest, security: operations.GetApplicationSecurity, config?: AxiosRequestConfig): Promise<operations.GetApplicationResponse>;
    /**
     * Show tier details
     *
     * @remarks
     * Show tier details
     */
    getApplicationTier(req: operations.GetApplicationTierRequest, security: operations.GetApplicationTierSecurity, config?: AxiosRequestConfig): Promise<operations.GetApplicationTierResponse>;
    /**
     * Show tier details
     *
     * @remarks
     * Show tier details
     */
    getTier(req: operations.GetTierRequest, security: operations.GetTierSecurity, config?: AxiosRequestConfig): Promise<operations.GetTierResponse>;
    /**
     * List tiers of an application
     *
     * @remarks
     * List tiers of an application
     */
    listApplicationTiers(req: operations.ListApplicationTiersRequest, security: operations.ListApplicationTiersSecurity, config?: AxiosRequestConfig): Promise<operations.ListApplicationTiersResponse>;
    /**
     * List applications
     *
     * @remarks
     * List applications
     */
    listApplications(req: operations.ListApplicationsRequest, security: operations.ListApplicationsSecurity, config?: AxiosRequestConfig): Promise<operations.ListApplicationsResponse>;
}
