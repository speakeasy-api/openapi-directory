import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Addresses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create new customer address
     *
     * @remarks
     * Creates new customer address.
     *
     * > You can use this request to create customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).
     */
    createNewCustomerAddress(req: operations.CreateNewCustomerAddressRequest, config?: AxiosRequestConfig): Promise<operations.CreateNewCustomerAddressResponse>;
    /**
     * Delete customer address
     *
     * @remarks
     * Deletes a customer address.
     */
    deleteCustomerAddress(req: operations.DeleteCustomerAddressRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomerAddressResponse>;
    /**
     * Update customer address
     *
     * @remarks
     * Partially updates a customer address.
     *
     * > You can use this request to update customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).
     */
    updateCustomerAddress(req: operations.UpdateCustomerAddressRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomerAddressResponse>;
}
