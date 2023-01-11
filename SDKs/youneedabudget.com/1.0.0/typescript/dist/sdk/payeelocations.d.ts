import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PayeeLocations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPayeeLocationById - Single payee location
     *
     * Returns a single payee location
    **/
    getPayeeLocationById(req: operations.GetPayeeLocationByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPayeeLocationByIdResponse>;
    /**
     * getPayeeLocations - List payee locations
     *
     * Returns all payee locations
    **/
    getPayeeLocations(req: operations.GetPayeeLocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayeeLocationsResponse>;
    /**
     * getPayeeLocationsByPayee - List locations for a payee
     *
     * Returns all payee locations for a specified payee
    **/
    getPayeeLocationsByPayee(req: operations.GetPayeeLocationsByPayeeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayeeLocationsByPayeeResponse>;
}
