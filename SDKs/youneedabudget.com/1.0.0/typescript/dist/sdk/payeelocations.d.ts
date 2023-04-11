import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * When you enter a transaction and specify a payee on the YNAB mobile apps, the GPS coordinates for that location are stored, with your permission, so that the next time you are in the same place (like the Grocery store) we can pre-populate nearby payees for you!  It’s handy and saves you time.  This resource makes these locations available.  Locations will not be available for all payees.
 */
export declare class PayeeLocations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Single payee location
     *
     * @remarks
     * Returns a single payee location
     */
    getPayeeLocationById(req: operations.GetPayeeLocationByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPayeeLocationByIdResponse>;
    /**
     * List payee locations
     *
     * @remarks
     * Returns all payee locations
     */
    getPayeeLocations(req: operations.GetPayeeLocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayeeLocationsResponse>;
    /**
     * List locations for a payee
     *
     * @remarks
     * Returns all payee locations for a specified payee
     */
    getPayeeLocationsByPayee(req: operations.GetPayeeLocationsByPayeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayeeLocationsByPayeeResponse>;
}
