import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Fulfillment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get address by postal code
     *
     * @remarks
     * Retrieves address information for a given postal code and country.
     *
     * This request can be used to implement auto complete functionality when a customer needs to fill in an address.
     */
    getAddressByPostalCode(req: operations.GetAddressByPostalCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressByPostalCodeResponse>;
    /**
     * List pickup points by location
     *
     * @remarks
     * Retrieves information on pickup points close to a given location determined by geocoordinates or postal code.
     *
     *
  The pickup points returned are not necessarily all active ones. Make sure to validate the information consumed by integrations.
     */
    listPickupPpointsByLocation(req: operations.ListPickupPpointsByLocationRequest, config?: AxiosRequestConfig): Promise<operations.ListPickupPpointsByLocationResponse>;
}
