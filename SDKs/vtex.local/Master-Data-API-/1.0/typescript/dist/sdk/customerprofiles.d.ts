import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomerProfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create new customer profile
     *
     * @remarks
     * Creates new customer profile.
     *
     * > You can use this request to create customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).
     */
    createNewCustomerProfilev2(req: operations.CreateNewCustomerProfilev2Request, config?: AxiosRequestConfig): Promise<operations.CreateNewCustomerProfilev2Response>;
    /**
     * Delete customer profile
     *
     * @remarks
     * Deletes a customer profile.
     */
    deleteCustomerProfile(req: operations.DeleteCustomerProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomerProfileResponse>;
    /**
     * Update customer profile
     *
     * @remarks
     * Partially updates a customer profile.
     *
     * > You can use this request to update customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).
     */
    updateCustomerProfile(req: operations.UpdateCustomerProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomerProfileResponse>;
}
